# PowerShell script to convert PNG images to WebP format with 90% quality
# This script converts all PNG images in the imd_iml-creatives folder to WebP

param(
    [string]$InputFolder = "public\images\imd_iml-creatives",
    [string]$OutputFolder = "public\images\imd_iml-creatives\webp",
    [int]$Quality = 90
)

# Get the script directory and construct absolute paths
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir
$InputPath = Join-Path $ProjectRoot $InputFolder
$OutputPath = Join-Path $ProjectRoot $OutputFolder

Write-Host "Converting images from: $InputPath" -ForegroundColor Green
Write-Host "Output directory: $OutputPath" -ForegroundColor Green
Write-Host "Quality setting: $Quality%" -ForegroundColor Green
Write-Host ""

# Check if input directory exists
if (-not (Test-Path $InputPath)) {
    Write-Error "Input directory does not exist: $InputPath"
    exit 1
}

# Create output directory if it doesn't exist
if (-not (Test-Path $OutputPath)) {
    New-Item -ItemType Directory -Path $OutputPath -Force
    Write-Host "Created output directory: $OutputPath" -ForegroundColor Yellow
}

# Check if cwebp is available
try {
    $cwebpVersion = & cwebp -version 2>&1
    Write-Host "Found cwebp: $($cwebpVersion[0])" -ForegroundColor Green
} catch {
    Write-Error "cwebp not found. Please install WebP tools:"
    Write-Host "Option 1: Download from https://developers.google.com/speed/webp/download" -ForegroundColor Yellow
    Write-Host "Option 2: Install via Chocolatey: choco install webp" -ForegroundColor Yellow
    Write-Host "Option 3: Install via winget: winget install Google.WebP" -ForegroundColor Yellow
    exit 1
}

# Get all PNG images in the input directory
$images = Get-ChildItem -Path $InputPath -Filter "*.png" -File

if ($images.Count -eq 0) {
    Write-Warning "No PNG images found in $InputPath"
    exit 0
}

Write-Host "Found $($images.Count) PNG images to convert:" -ForegroundColor Cyan
$images | ForEach-Object { Write-Host "  - $($_.Name)" -ForegroundColor Gray }
Write-Host ""

# Convert each image
$successCount = 0
$failCount = 0

foreach ($image in $images) {
    $inputFile = $image.FullName
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($image.Name)
    $outputFile = Join-Path $OutputPath "$baseName.webp"
    
    Write-Host "Converting: $($image.Name) -> $baseName.webp" -ForegroundColor Cyan
    
    try {
        # Run cwebp conversion
        $result = & cwebp -q $Quality "$inputFile" -o "$outputFile" 2>&1
        
        if ($LASTEXITCODE -eq 0) {
            # Get file sizes for comparison
            $originalSize = (Get-Item $inputFile).Length
            $webpSize = (Get-Item $outputFile).Length
            $compressionRatio = [math]::Round((1 - ($webpSize / $originalSize)) * 100, 1)
            
            Write-Host "  ✓ Success! Size reduction: $compressionRatio% ($(Format-FileSize $originalSize) -> $(Format-FileSize $webpSize))" -ForegroundColor Green
            $successCount++
        } else {
            Write-Host "  ✗ Failed: $result" -ForegroundColor Red
            $failCount++
        }
    } catch {
        Write-Host "  ✗ Error: $($_.Exception.Message)" -ForegroundColor Red
        $failCount++
    }
}

Write-Host ""
Write-Host "Conversion Summary:" -ForegroundColor White
Write-Host "  Successful: $successCount" -ForegroundColor Green
Write-Host "  Failed: $failCount" -ForegroundColor Red
Write-Host "  Total: $($images.Count)" -ForegroundColor Cyan

if ($successCount -gt 0) {
    Write-Host ""
    Write-Host "WebP images saved to: $OutputPath" -ForegroundColor Green
}

# Helper function to format file sizes
function Format-FileSize {
    param([long]$Size)
    
    if ($Size -gt 1MB) {
        return "{0:N1} MB" -f ($Size / 1MB)
    } elseif ($Size -gt 1KB) {
        return "{0:N1} KB" -f ($Size / 1KB)
    } else {
        return "$Size bytes"
    }
}
