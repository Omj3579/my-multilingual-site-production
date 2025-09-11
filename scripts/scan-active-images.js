const fs = require('fs');
const path = require('path');

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findSourceFiles(filePath, fileList);
    } else if (file.match(/\.(tsx?|jsx?|js|ts)$/)) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to extract image references from file content
function extractImageReferences(content, filePath) {
  const images = new Set();
  
  // Match import statements for images
  const importMatches = content.matchAll(/import\s+.*?from\s+['"`]([^'"`]*\.(png|jpg|jpeg|gif|svg|webp))[^'"`]*['"`]/gi);
  for (const match of importMatches) {
    images.add(match[1]);
  }
  
  // Match require statements for images
  const requireMatches = content.matchAll(/require\s*\(\s*['"`]([^'"`]*\.(png|jpg|jpeg|gif|svg|webp))[^'"`]*['"`]\s*\)/gi);
  for (const match of requireMatches) {
    images.add(match[1]);
  }
  
  // Match direct src references (for Next.js Image component and img tags)
  const srcMatches = content.matchAll(/src\s*=\s*['"`]([^'"`]*\.(png|jpg|jpeg|gif|svg|webp))[^'"`]*['"`]/gi);
  for (const match of srcMatches) {
    images.add(match[1]);
  }
  
  // Match Image component src prop
  const imageSrcMatches = content.matchAll(/<Image[^>]*src\s*=\s*['"`]([^'"`]*\.(png|jpg|jpeg|gif|svg|webp))[^'"`]*['"`]/gi);
  for (const match of imageSrcMatches) {
    images.add(match[1]);
  }
  
  // Match background-image in CSS/styled-components
  const bgImageMatches = content.matchAll(/background-image\s*:\s*url\s*\(\s*['"`]?([^'"`\)]*\.(png|jpg|jpeg|gif|svg|webp))[^'"`\)]*['"`]?\s*\)/gi);
  for (const match of bgImageMatches) {
    images.add(match[1]);
  }
  
  // Match object references to images (for dynamic imports)
  const objectMatches = content.matchAll(/['"`]([^'"`]*\.(png|jpg|jpeg|gif|svg|webp))[^'"`]*['"`]/gi);
  for (const match of objectMatches) {
    // Only add if it looks like a real path (starts with / or ./ or ../)
    if (match[1].startsWith('/') || match[1].startsWith('./') || match[1].startsWith('../')) {
      images.add(match[1]);
    }
  }
  
  return Array.from(images);
}

// Function to resolve image path to actual file system path
function resolveImagePath(imagePath, projectRoot) {
  // Remove leading slash for public folder references
  if (imagePath.startsWith('/')) {
    return path.join(projectRoot, 'public', imagePath.slice(1));
  }
  
  // Handle relative paths
  if (imagePath.startsWith('./') || imagePath.startsWith('../')) {
    return path.resolve(projectRoot, imagePath);
  }
  
  // Try different common locations
  const possiblePaths = [
    path.join(projectRoot, 'public', imagePath),
    path.join(projectRoot, 'src', imagePath),
    path.join(projectRoot, imagePath)
  ];
  
  for (const possiblePath of possiblePaths) {
    if (fs.existsSync(possiblePath)) {
      return possiblePath;
    }
  }
  
  return null;
}

// Function to copy file to destination
function copyImageToActiveCreatives(sourcePath, imagePath, projectRoot) {
  const activeCreativesDir = path.join(projectRoot, 'public', 'active creatives');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(activeCreativesDir)) {
    fs.mkdirSync(activeCreativesDir, { recursive: true });
  }
  
  // Create a clean filename (replace slashes with underscores)
  const cleanFileName = imagePath.replace(/[\/\\]/g, '_').replace(/^_+/, '');
  const destPath = path.join(activeCreativesDir, cleanFileName);
  
  try {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✓ Copied: ${imagePath} -> ${cleanFileName}`);
    return true;
  } catch (error) {
    console.log(`✗ Failed to copy: ${imagePath} - ${error.message}`);
    return false;
  }
}

// Main function
function scanActiveImages() {
  const projectRoot = process.cwd();
  const sourceFiles = findSourceFiles(path.join(projectRoot, 'src'));
  const allImageReferences = new Set();
  const imageUsageMap = new Map(); // Track which files use which images
  
  console.log(`Found ${sourceFiles.length} source files to scan...`);
  
  // Scan all source files for image references
  sourceFiles.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const images = extractImageReferences(content, filePath);
    
    if (images.length > 0) {
      console.log(`\n📁 ${path.relative(projectRoot, filePath)}:`);
      images.forEach(img => {
        console.log(`  📷 ${img}`);
        allImageReferences.add(img);
        
        if (!imageUsageMap.has(img)) {
          imageUsageMap.set(img, []);
        }
        imageUsageMap.get(img).push(path.relative(projectRoot, filePath));
      });
    }
  });
  
  console.log(`\n🔍 Found ${allImageReferences.size} unique image references in active code`);
  console.log('\n📋 Processing images...\n');
  
  let copiedCount = 0;
  let notFoundCount = 0;
  
  // Process each unique image reference
  allImageReferences.forEach(imagePath => {
    const resolvedPath = resolveImagePath(imagePath, projectRoot);
    
    if (resolvedPath && fs.existsSync(resolvedPath)) {
      const success = copyImageToActiveCreatives(resolvedPath, imagePath, projectRoot);
      if (success) {
        copiedCount++;
        const usedBy = imageUsageMap.get(imagePath);
        console.log(`  Used by: ${usedBy.join(', ')}`);
      }
    } else {
      console.log(`✗ Not found: ${imagePath}`);
      notFoundCount++;
    }
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`  ✓ Successfully copied: ${copiedCount} images`);
  console.log(`  ✗ Not found: ${notFoundCount} images`);
  console.log(`  📂 Images saved to: public/active creatives/`);
  
  if (notFoundCount > 0) {
    console.log('\n⚠️  Some image references were not found. This could be due to:');
    console.log('  - Dynamic image paths that can\'t be statically analyzed');
    console.log('  - Images that have been moved or deleted');
    console.log('  - External image URLs (not local files)');
  }
}

// Run the scan
scanActiveImages();
