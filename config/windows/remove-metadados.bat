@echo off
setlocal

REM Verifica se o exiftool está instalado
where exiftool >nul 2>&1
if %errorlevel% neq 0 (
    echo exiftool não encontrado. Por favor, instale-o e adicione ao PATH.
    pause
    exit /b 1
)

REM Define o diretório do projeto

set "PROJECT_DIR=%~dp0..\..\assets"

REM Remove metadados de todos os arquivos no diretório
for /r "%PROJECT_DIR%" %%f in (*) do (
    echo Removendo metadados de: %%f
    exiftool -all= -overwrite_original "%%f"
    if %errorlevel% neq 0 (
        echo Erro ao remover metadados de: %%f
        pause
        exit /b 1
    )
)

echo Metadados removidos com sucesso!
exiftool -all "%PROJECT_DIR%" | find "ExifTool Version" >nul
if %errorlevel% equ 0 (
    echo AVISO: Alguns metadados podem ainda estar presentes!
) else (
    echo Verificacao concluida: Todos os metadados foram removidos com sucesso!
)
pause