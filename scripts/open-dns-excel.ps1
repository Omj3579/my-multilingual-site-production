# PowerShell script to open DNS records in Excel
Write-Host "🔍 Opening DNS records in Excel..." -ForegroundColor Green

$csvPath = ".\dns-records.csv"

if (Test-Path $csvPath) {
    # Try to open with Excel
    try {
        Start-Process excel $csvPath
        Write-Host "✅ Opened dns-records.csv in Excel" -ForegroundColor Green
    }
    catch {
        # Fallback to default CSV handler
        Write-Host "⚠️  Excel not found, opening with default application..." -ForegroundColor Yellow
        Start-Process $csvPath
    }
}
else {
    Write-Host "❌ dns-records.csv not found. Run create-dns-excel.js first." -ForegroundColor Red
}

Write-Host ""
Write-Host "📊 The file contains:" -ForegroundColor Cyan
Write-Host "   • 20 existing DNS records from your current setup"
Write-Host "   • 3 proposed Vercel subdomain records (en, hu, de)"
Write-Host "   • Categorized by service type"
Write-Host "   • Status column showing EXISTING vs TO ADD"
Write-Host ""
Write-Host "💡 In Excel you can:"
Write-Host "   • Filter by Category or Status"
Write-Host "   • Sort by Type or TTL"  
Write-Host "   • Add notes and modify as needed"
Write-Host "   • Export back to CSV for documentation"