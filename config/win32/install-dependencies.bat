@echo off
setlocal

:: Download ExifTool
echo Downloading ExifTool...
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://exiftool.org/exiftool-12.60.zip', 'exiftool.zip')"

:: Create directory for ExifTool
if not exist "C:\exiftool" mkdir "C:\exiftool"

:: Extract ExifTool
echo Extracting ExifTool...
powershell -Command "Expand-Archive -Path 'exiftool.zip' -DestinationPath 'C:\exiftool' -Force"

:: Rename extracted folder
cd /d C:\exiftool
for /d %%i in (*) do ren "%%i" "exiftool"

:: Add to PATH
setx PATH "%PATH%;C:\exiftool\exiftool"

:: Clean up
del /f /q exiftool.zip

echo ExifTool installation completed.
echo Please restart your command prompt to use ExifTool.

endlocal