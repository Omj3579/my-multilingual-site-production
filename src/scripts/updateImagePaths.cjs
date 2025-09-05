const fs   = require('fs');
const path = require('path');

const transformedDir = path.resolve(
  __dirname,
  '../public/Products/Categories/Jsonfiles/Transformed'
);

// 1) read all .json files in that folder
fs.readdirSync(transformedDir)
  .filter(f => f.endsWith('.json'))
  .forEach(file => {
    const filePath = path.join(transformedDir, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    let data = JSON.parse(raw);

    // 2) locate the array of items
    const items = Array.isArray(data) ? data : data.products || [];

    // 3) update each images[] entry
    items.forEach(item => {
      if (Array.isArray(item.images)) {
        item.images = item.images.map(imgPath => {
          const name = path.basename(imgPath);
          return `/Products/Product creatives/images/${name}`;
        });
      }
    });

    // 4) write back
    const output = Array.isArray(data) ? items : { products: items };
    fs.writeFileSync(filePath, JSON.stringify(output, null, 2), 'utf8');
    console.log(`✔️ Updated ${file}`);
  });