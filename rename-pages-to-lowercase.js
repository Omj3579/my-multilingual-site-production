const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

function toLowerCaseRecursive(dir) {
  fs.readdirSync(dir).forEach((item) => {
    const oldPath = path.join(dir, item);
    const stat = fs.statSync(oldPath);

    // Recursively process directories first
    if (stat.isDirectory()) {
      toLowerCaseRecursive(oldPath);
      const lowerDir = path.join(dir, item.toLowerCase());
      if (oldPath !== lowerDir) {
        fs.renameSync(oldPath, lowerDir);
      }
    } else {
      const ext = path.extname(item);
      if (['.tsx', '.ts'].includes(ext)) {
        const lowerFile = path.join(dir, item.toLowerCase());
        if (oldPath !== lowerFile) {
          fs.renameSync(oldPath, lowerFile);
        }
      }
    }
  });
}

toLowerCaseRecursive(pagesDir);
console.log('Renaming complete.');