@echo off
echo Converting IMD/IML images to WebP format...
echo.

cd /d "%~dp0.."

echo Checking for Node.js script...
if exist "scripts\convert-imd-iml-to-webp.js" (
    echo Running Node.js conversion script...
    node scripts\convert-imd-iml-to-webp.js
) else if exist "scripts\convert-imd-iml-to-webp.ps1" (
    echo Running PowerShell conversion script...
    powershell -ExecutionPolicy Bypass -File "scripts\convert-imd-iml-to-webp.ps1"
) else (
    echo No conversion scripts found!
    echo Please ensure the scripts are in the scripts folder.
)

echo.
echo Press any key to exit...
pause > nul
