# Image Conversion Scripts

This folder contains scripts to convert the PNG images in `public/images/imd_iml-creatives/` to WebP format with 90% quality.

## Available Scripts

### 1. Node.js Script (Recommended)
**File:** `convert-imd-iml-to-webp.js`

**Requirements:**
- Node.js installed
- Sharp package (`npm install sharp`)

**Usage:**
```bash
# From project root
node scripts/convert-imd-iml-to-webp.js
```

**Features:**
- Fast conversion using Sharp library
- Detailed file size comparison
- Cross-platform compatibility
- Progress indicators

### 2. PowerShell Script
**File:** `convert-imd-iml-to-webp.ps1`

**Requirements:**
- Windows PowerShell
- WebP tools (cwebp) installed

**Installation of WebP tools:**
```powershell
# Option 1: Chocolatey
choco install webp

# Option 2: winget
winget install Google.WebP

# Option 3: Manual download
# Download from https://developers.google.com/speed/webp/download
```

**Usage:**
```powershell
# From project root
.\scripts\convert-imd-iml-to-webp.ps1
```

### 3. Batch File (Windows)
**File:** `convert-images.bat`

**Usage:**
- Double-click the file
- It will automatically detect and run the appropriate script

## Output

All converted WebP images will be saved to:
`public/images/imd_iml-creatives/webp/`

## Script Features

- **Quality Control:** All images converted at 90% quality
- **Size Reporting:** Shows original vs. compressed file sizes
- **Error Handling:** Detailed error messages for troubleshooting
- **Progress Tracking:** Real-time conversion progress
- **Safe Operation:** Creates separate output directory, preserves originals

## Input Images

The scripts will convert these PNG files:
- 15.png
- IMD1 (2).png
- IMD1.png
- IMD13.png
- IMD2.png
- IMD3.png
- IMD4.png
- IMD5.png
- IMD57.png
- IMD6 (2).png
- IMD6.png
- IMD7.png
- IMD8.png
- IML2.png
- IML3.png
- IML4.png
- IML5.png

## Notes

- Original PNG files are preserved
- WebP files are typically 25-35% smaller than PNG
- Quality setting of 90% provides excellent quality with good compression
- The scripts handle file names with spaces and special characters
