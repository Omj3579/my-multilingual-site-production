# PowerShell script to convert PNG images in company folder to WebP with 100% quality
# Requires magick (ImageMagick) to be installed

$sourceFolder = "public/images/company"
$outputFolder = "public/images/company"

# Check if ImageMagick is installed
try {
    magick -version | Out-Null
    Write-Host "ImageMagick found, proceeding with conversion..." -ForegroundColor Green
} catch {
    Write-Host "Error: ImageMagick (magick command) not found. Please install ImageMagick first." -ForegroundColor Red
    Write-Host "Download from: https://imagemagick.org/script/download.php#windows" -ForegroundColor Yellow
    exit 1
}

# Get all PNG files in the company folder
$pngFiles = Get-ChildItem -Path $sourceFolder -Filter "*.png" | Where-Object { 
    # Skip files that already have WebP versions
    $webpVersion = $_.Name -replace '\.png$', '.webp'
    $webpPath = Join-Path $outputFolder $webpVersion
    -not (Test-Path $webpPath)
}

if ($pngFiles.Count -eq 0) {
    Write-Host "No PNG files found to convert (or all already have WebP versions)" -ForegroundColor Yellow
    exit 0
}

Write-Host "Found $($pngFiles.Count) PNG files to convert..." -ForegroundColor Cyan

foreach ($file in $pngFiles) {
    $inputPath = $file.FullName
    $outputFileName = $file.Name -replace '\.png$', '.webp'
    $outputPath = Join-Path $outputFolder $outputFileName
    
    Write-Host "Converting: $($file.Name) -> $outputFileName" -ForegroundColor White
    
    try {
        # Convert with 100% quality (lossless)
        magick "$inputPath" -quality 100 "$outputPath"
        
        if (Test-Path $outputPath) {
            $originalSize = [math]::Round((Get-Item $inputPath).Length / 1KB, 2)
            $webpSize = [math]::Round((Get-Item $outputPath).Length / 1KB, 2)
            $savings = [math]::Round((1 - ($webpSize / $originalSize)) * 100, 1)
            
            Write-Host "  ✓ Success: $originalSize KB -> $webpSize KB (${savings}% smaller)" -ForegroundColor Green
        } else {
            Write-Host "  ✗ Failed to create WebP file" -ForegroundColor Red
        }
    } catch {
        Write-Host "  ✗ Error converting $($file.Name): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`nConversion complete!" -ForegroundColor Green
Write-Host "Total files processed: $($pngFiles.Count)" -ForegroundColor Cyan
