// Use CommonJS require instead of import
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const chalk = require('chalk');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

// Directory to scan (adjust if needed)
const baseDir = path.join(__dirname, 'src');

// Find all .tsx files
const files = glob.sync(`${baseDir}/**/*.tsx`);

console.log(chalk.blue(`\n🔍 Scanning ${files.length} files for <Link> components...\n`));

files.forEach((file) => {
    const code = fs.readFileSync(file, 'utf8');
    const ast = parser.parse(code, {
        sourceType: 'module',
        plugins: ['typescript', 'jsx'],
    });

    traverse(ast, {
        JSXOpeningElement(pathNode) {
            const openingElement = pathNode.node;

            if (t.isJSXIdentifier(openingElement.name, { name: 'Link' })) {
                const hrefAttr = openingElement.attributes.find(
                    (attr) =>
                        t.isJSXAttribute(attr) && attr.name.name === 'href'
                );

                let hrefVal = 'undefined';
                let status = chalk.red('❌ Invalid or missing');

                if (hrefAttr && hrefAttr.value) {
                    if (t.isStringLiteral(hrefAttr.value)) {
                        hrefVal = hrefAttr.value.value;
                        status = chalk.green('✅ Static');
                    } else if (t.isJSXExpressionContainer(hrefAttr.value)) {
                        hrefVal = code.substring(hrefAttr.value.start, hrefAttr.value.end);
                        status = chalk.yellow('⚠️ Dynamic');
                    }
                }

                console.log(`${chalk.magenta(file)} — ${status}`);
                console.log(`  ↳ <Link href=${hrefVal} />\n`);
            }
        },
    });
});
