@echo off
echo ========================================
echo    PrimeCut Website - Netlify Deploy
echo ========================================
echo.
echo This will help you deploy to Netlify!
echo.
echo Steps:
echo 1. Go to https://netlify.com
echo 2. Sign up/Login to your account
echo 3. Drag this entire folder to the deployment area
echo 4. Your site will be live instantly!
echo.
echo Alternative: Use Netlify CLI
echo (run: npm install -g netlify-cli)
echo (then: netlify deploy --prod --dir=.)
echo.
echo Press any key to open Netlify in your browser...
pause >nul
start https://netlify.com
echo.
echo Folder ready for deployment!
echo Your website files are in: %cd%
echo.