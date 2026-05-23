@echo off
title Portfolio Dev Server
cd /d "%~dp0"
echo.
echo  Starting your glassmorphism portfolio...
echo  Browser will open at http://localhost:5173
echo.
echo  Keep this window open while you preview the site.
echo  Press Ctrl+C to stop the server.
echo.
start "" "http://localhost:5173/"
npm run dev
