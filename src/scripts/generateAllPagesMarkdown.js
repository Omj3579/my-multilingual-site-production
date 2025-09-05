// @ts-check
const fs = require("fs");
const path = require("path");
const recast = require("recast");

// List your page paths here (relative to project root)
const PAGE_PATHS = [
  "src/pages/capabilities/assembly/index.tsx",
  "src/pages/capabilities/contract-manufacturing/index.tsx",
  "src/pages/capabilities/in-mould-decoration.tsx",
  "src/pages/capabilities/in-mould-labelling.tsx",
  "src/pages/capabilities/index.tsx",
  "src/pages/capabilities/injection-blow.tsx",
  "src/pages/capabilities/material-selection.tsx",
  "src/pages/capabilities/plastic-injection.tsx",
  "src/pages/capabilities/precision-quality.tsx",
  "src/pages/capabilities/surface-finishing.tsx",
  "src/pages/capabilities/tooling-management.tsx",
  "src/pages/company/history.tsx",
  "src/pages/company/management.tsx",
  "src/pages/sustainability/clean-sweep.tsx",
  "src/pages/sustainability/green-strategy.tsx",
  "src/pages/sustainability/index.tsx",
];

const OUTPUT_DIR = path.resolve(__dirname, "../Project structure");

function parseFile(filePath) {
  const code = fs.readFileSync(filePath, "utf-8");
  // Use recast with explicit Babel parser
  return recast.parse(code, {
    parser: require("recast/parsers/babel"),
  });
}

function findImports(ast) {
  const imports = {};
  recast.types.visit(ast, {
    visitImportDeclaration(path) {
      const source = path.node.source.value;
      if (Array.isArray(path.node.specifiers)) {
        path.node.specifiers.forEach((spec) => {
          if (
            spec &&
            typeof spec === "object" &&
            spec.local &&
            typeof spec.local.name === "string" &&
            typeof source === "string"
          ) {
            imports[spec.local.name] = source;
          }
        });
      }
      this.traverse(path);
    },
  });
  return imports;
}

function extractStaticData(ast) {
  const data = {};
  recast.types.visit(ast, {
    visitVariableDeclaration(path) {
      path.node.declarations.forEach((decl) => {
        if (
          decl &&
          decl.type === "VariableDeclarator" &&
          decl.init &&
          (decl.init.type === "ArrayExpression" ||
            decl.init.type === "ObjectExpression") &&
          decl.id &&
          decl.id.type === "Identifier" &&
          typeof decl.id.name === "string"
        ) {
          data[decl.id.name] = recast.print(decl.init).code;
        }
      });
      this.traverse(path);
    },
  });
  return data;
}

function resolveImportPath(importPath, fromFile) {
  if (importPath.startsWith(".")) {
    let resolved = path.resolve(path.dirname(fromFile), importPath);
    if (fs.existsSync(resolved + ".tsx")) return resolved + ".tsx";
    if (fs.existsSync(resolved + ".ts")) return resolved + ".ts";
    if (fs.existsSync(resolved + ".js")) return resolved + ".js";
    if (fs.existsSync(resolved + "/index.tsx")) return resolved + "/index.tsx";
    if (fs.existsSync(resolved + "/index.ts")) return resolved + "/index.ts";
    return null;
  }
  return null;
}

function formatDataForMarkdown(data, title) {
  let md = `## ${title}\n\n`;
  for (const [key, value] of Object.entries(data)) {
    md += `- **${key}:**\n\n`;
    md += "```js\n" + value + "\n```\n\n";
  }
  return md;
}

function walkComponentTree(filePath, visited = new Set()) {
  if (visited.has(filePath)) return "";
  visited.add(filePath);

  const ast = parseFile(filePath);
  const imports = findImports(ast);
  const data = extractStaticData(ast);

  let md = formatDataForMarkdown(data, path.basename(filePath));
  for (const [comp, importPath] of Object.entries(imports)) {
    const resolved = resolveImportPath(importPath, filePath);
    if (resolved && resolved.includes("components")) {
      md += walkComponentTree(resolved, visited);
    }
  }
  return md;
}

function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  PAGE_PATHS.forEach((pagePath) => {
    const absPagePath = path.resolve(pagePath);
    if (!fs.existsSync(absPagePath)) {
      console.warn("Page not found:", absPagePath);
      return;
    }
    const md =
      `# ${path.basename(pagePath)} Page\n\n` + walkComponentTree(absPagePath);
    const outPath = path.join(
      OUTPUT_DIR,
      `${path.basename(pagePath, path.extname(pagePath))}.md`
    );
    fs.writeFileSync(outPath, md, "utf-8");
    console.log("Markdown generated at:", outPath);
  });
}

main();