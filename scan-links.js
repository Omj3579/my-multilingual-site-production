// Use CommonJS require instead of import
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

(async () => {
    const chalk = (await import('chalk')).default;

    // Directory to scan (adjust if needed)
    const baseDir = path.join(__dirname, 'src');

    // Find all .tsx files
    const files = glob.sync(`${baseDir}/**/*.tsx`);

    let staticCount = 0, dynamicCount = 0, invalidCount = 0;
    const invalidLinks = []; // Collect invalid/missing hrefs

    console.log(chalk.blue(`\n🔍 Scanning ${files.length} files for <Link> components...\n`));

    files.forEach((file) => {
        let code;
        try {
            code = fs.readFileSync(file, 'utf8');
        } catch (err) {
            console.error(chalk.red(`Failed to read file: ${file}`));
            return;
        }

        let ast;
        try {
            ast = parser.parse(code, {
                sourceType: 'module',
                plugins: ['typescript', 'jsx'],
                errorRecovery: true,
                ranges: true,
                locations: true, // Add this line
            });
        } catch (err) {
            console.error(chalk.red(`Failed to parse file: ${file}`));
            return;
        }

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
                            staticCount++;
                        } else if (t.isJSXExpressionContainer(hrefAttr.value)) {
                            hrefVal = code.substring(hrefAttr.value.start, hrefAttr.value.end);
                            status = chalk.yellow('⚠️ Dynamic');
                            dynamicCount++;
                        }
                    } else {
                        invalidCount++;
                    }

                    const line = pathNode.node.loc?.start.line ?? '?';
                    console.log(`${chalk.magenta(file)}:${line} — ${status}`);
                    console.log(`  ↳ <Link href=${hrefVal} />\n`);

                    // Collect invalid/missing for summary
                    if (status.includes('❌')) {
                        invalidLinks.push({
                            file,
                            line,
                            code: `<Link href=${hrefVal} />`
                        });
                    }
                }
            },
        });
    });

    console.log(chalk.blue('\nSummary:'));
    console.log(chalk.green(`  Static hrefs: ${staticCount}`));
    console.log(chalk.yellow(`  Dynamic hrefs: ${dynamicCount}`));
    console.log(chalk.red(`  Invalid/missing hrefs: ${invalidCount}`));

    // Print all invalid/missing at the end
    if (invalidLinks.length > 0) {
        console.log(chalk.red('\nFiles with invalid or missing hrefs:'));
        invalidLinks.forEach(link => {
            console.log(`${chalk.magenta(link.file)}:${link.line} — ${link.code}`);
        });
    }
})();
