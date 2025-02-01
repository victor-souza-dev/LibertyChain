@echo off
setlocal

REM Verifica se o exiftool está instalado
where exiftool >nul 2>&1
if %errorlevel% neq 0 (
    echo exiftool não encontrado. Por favor, instale-o e adicione ao PATH.
    exit /b 1
)

REM Define o diretório do projeto e da pasta de logs
set "PROJECT_DIR=%~dp0..\..\assets"
set "LOGS_DIR=%~dp0..\..\logs"

REM Verifica se a pasta logs existe; se não, cria-a
if not exist "%LOGS_DIR%" (
    mkdir "%LOGS_DIR%"
    if %errorlevel% neq 0 (
        echo Falha ao criar a pasta de logs: %LOGS_DIR%
        exit /b 1
    )
)

REM Gera um hash aleatório para o nome do arquivo de log
set "RANDOM_HASH=%RANDOM%%RANDOM%%RANDOM%"
set "LOG_FILENAME=log-%RANDOM_HASH%.txt"

REM Verifica se o diretório do projeto existe
if not exist "%PROJECT_DIR%" (
    echo Diretorio nao encontrado: %PROJECT_DIR%
    exit /b 1
)

echo Iniciando limpeza de metadados no diretorio: %PROJECT_DIR%
echo Log sendo gravado em: %LOGS_DIR%\%LOG_FILENAME%

REM Remove metadados de todos os arquivos no diretório
for /r "%PROJECT_DIR%" %%f in (*) do (
    echo Removendo metadados de: %%f >> "%LOGS_DIR%\%LOG_FILENAME%"
    exiftool -all= -overwrite_original "%%f" >> "%LOGS_DIR%\%LOG_FILENAME%" 2>&1
    if %errorlevel% neq 0 (
        echo Erro ao remover metadados de: %%f >> "%LOGS_DIR%\%LOG_FILENAME%"
        exit /b 1
    )
)

echo Metadados removidos com sucesso! >> "%LOGS_DIR%\%LOG_FILENAME%"

REM Verifica se ainda há metadados presentes
exiftool -all "%PROJECT_DIR%" | find "ExifTool Version" >nul
if %errorlevel% equ 0 (
    echo AVISO: Alguns metadados podem ainda estar presentes! >> "%LOGS_DIR%\%LOG_FILENAME%"
) else (
    echo Verificacao concluida: Todos os metadados foram removidos com sucesso! >> "%LOGS_DIR%\%LOG_FILENAME%"
)

echo Processo concluido.
exit /b 0