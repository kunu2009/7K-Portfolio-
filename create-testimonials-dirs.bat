@echo off
echo Creating testimonials directory structure...

mkdir "src\app\testimonials" 2>nul
mkdir "src\app\testimonials\submit" 2>nul
mkdir "src\app\admin\testimonials" 2>nul

echo.
echo ✅ Directories created!
echo.
echo Next steps:
echo 1. Run this batch file
echo 2. Copy the page files from TESTIMONIALS-FILES folder
echo 3. Setup Firebase (see TESTIMONIALS-SYSTEM-GUIDE.md)
echo.
pause
