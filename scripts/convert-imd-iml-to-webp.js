#!/usr/bin/env node
/**
 * Node.js script to convert PNG images to WebP format with 90% quality
 * Uses Sharp library for image processing
 */

const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const INPUT_FOLDER = 'public/images/imd_iml-creatives';
const OUTPUT_FOLDER = 'public/images/imd_iml-creatives/webp';
const QUALITY = 90;

async function ensureDirectoryExists(dirPath) {
    try {
        await fs.access(dirPath);
    } catch {
        await fs.mkdir(dirPath, { recursive: true });
        console.log(`✓ Created output directory: ${dirPath}`);
    }
}

async function formatFileSize(filePath) {
    const stats = await fs.stat(filePath);
    const bytes = stats.size;
    
    if (bytes > 1024 * 1024) {
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    } else if (bytes > 1024) {
        return `${(bytes / 1024).toFixed(1)} KB`;
    } else {
        return `${bytes} bytes`;
    }
}

async function convertImage(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .webp({ quality: QUALITY })
            .toFile(outputPath);
        
        const originalSize = await formatFileSize(inputPath);
        const webpSize = await formatFileSize(outputPath);
        
        // Calculate compression ratio
        const originalStats = await fs.stat(inputPath);
        const webpStats = await fs.stat(outputPath);
        const compressionRatio = ((1 - (webpStats.size / originalStats.size)) * 100).toFixed(1);
        
        console.log(`  ✓ Success! Size reduction: ${compressionRatio}% (${originalSize} -> ${webpSize})`);
        return true;
    } catch (error) {
        console.log(`  ✗ Error: ${error.message}`);
        return false;
    }
}

async function main() {
    console.log('🖼️  IMD/IML Images to WebP Converter');
    console.log('=====================================');
    console.log(`Input folder: ${INPUT_FOLDER}`);
    console.log(`Output folder: ${OUTPUT_FOLDER}`);
    console.log(`Quality: ${QUALITY}%`);
    console.log('');

    try {
        // Check if Sharp is available
        console.log('Checking dependencies...');
        const sharpVersion = sharp.versions;
        console.log(`✓ Sharp v${sharpVersion.sharp} (libvips ${sharpVersion.vips})`);
        console.log('');

        // Ensure output directory exists
        await ensureDirectoryExists(OUTPUT_FOLDER);

        // Get all PNG files
        const files = await fs.readdir(INPUT_FOLDER);
        const pngFiles = files.filter(file => file.toLowerCase().endsWith('.png'));

        if (pngFiles.length === 0) {
            console.log('⚠️  No PNG images found in the input folder.');
            return;
        }

        console.log(`Found ${pngFiles.length} PNG images to convert:`);
        pngFiles.forEach(file => console.log(`  - ${file}`));
        console.log('');

        // Convert images
        let successCount = 0;
        let failCount = 0;

        for (const file of pngFiles) {
            const inputPath = path.join(INPUT_FOLDER, file);
            const baseName = path.basename(file, '.png');
            const outputPath = path.join(OUTPUT_FOLDER, `${baseName}.webp`);

            console.log(`Converting: ${file} -> ${baseName}.webp`);
            
            const success = await convertImage(inputPath, outputPath);
            if (success) {
                successCount++;
            } else {
                failCount++;
            }
        }

        // Summary
        console.log('');
        console.log('📊 Conversion Summary:');
        console.log(`  ✅ Successful: ${successCount}`);
        console.log(`  ❌ Failed: ${failCount}`);
        console.log(`  📝 Total: ${pngFiles.length}`);

        if (successCount > 0) {
            console.log('');
            console.log(`🎉 WebP images saved to: ${OUTPUT_FOLDER}`);
        }

    } catch (error) {
        console.error('❌ Error:', error.message);
        
        if (error.message.includes('sharp')) {
            console.log('');
            console.log('📦 To install Sharp, run:');
            console.log('   npm install sharp');
            console.log('   or');
            console.log('   yarn add sharp');
        }
        
        process.exit(1);
    }
}

// Run the script
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { convertImage, ensureDirectoryExists };
