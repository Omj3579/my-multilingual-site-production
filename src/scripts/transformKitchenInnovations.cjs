const fs   = require('fs');
const path = require('path');

const inputPath  = path.resolve(__dirname,
  '../public/Products/Categories/Jsonfiles/kitchen_innovations.json');
const outputDir  = path.resolve(__dirname,
  '../public/Products/Categories/Jsonfiles/Transformed');
const outputPath = path.join(outputDir, 'kitchen_innovations_transformed.json');

// 1) read & parse original
const raw = fs.readFileSync(inputPath, 'utf8');
const { products } = JSON.parse(raw);

// 2) transform each entry
const transformed = products.map(item => {
  const id = item.id || item.image.replace(/\.[^/.]+$/, '');
  return {
    id,
    category: 'kitchen',
    name:    item.name        || {},
    desc:    item.description || {},
    images:  [`images/${item.image}`],
    badges:  [],
    specs: {
      volume:   item.tonnage || null,
      size:     item.size    || null,
      material: item.material|| null,
      pallet:   item.pallet  || null
    }
  };
});

// 3) ensure output folder exists & write
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(transformed, null, 2), 'utf8');
console.log('✅ kitchen_innovations_transformed.json created');