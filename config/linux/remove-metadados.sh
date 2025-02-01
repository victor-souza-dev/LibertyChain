#!/bin/bash

# Verifica se o exiftool está instalado
if ! command -v exiftool &> /dev/null; then
    echo "exiftool não encontrado. Por favor, instale-o."
    exit 1
fi

# Define o diretório do projeto e da pasta de logs
PROJECT_DIR="$(dirname "$0")/../../assets"
LOGS_DIR="$(dirname "$0")/../../logs"

# Verifica se a pasta logs existe; se não, cria-a
if [ ! -d "$LOGS_DIR" ]; then
    mkdir -p "$LOGS_DIR"
    if [ $? -ne 0 ]; then
        echo "Falha ao criar a pasta de logs: $LOGS_DIR"
        exit 1
    fi
fi

# Gera um hash aleatório para o nome do arquivo de log
RANDOM_HASH=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 12 | head -n 1)
LOG_FILENAME="log-$RANDOM_HASH.txt"

# Verifica se o diretório do projeto existe
if [ ! -d "$PROJECT_DIR" ]; then
    echo "Diretório não encontrado: $PROJECT_DIR"
    exit 1
fi

echo "Iniciando limpeza de metadados no diretório: $PROJECT_DIR"
echo "Log sendo gravado em: $LOGS_DIR/$LOG_FILENAME"

# Remove metadados de todos os arquivos no diretório
find "$PROJECT_DIR" -type f | while read -r file; do
    echo "Removendo metadados de: $file" >> "$LOGS_DIR/$LOG_FILENAME"
    exiftool -all= -overwrite_original "$file" >> "$LOGS_DIR/$LOG_FILENAME" 2>&1
    if [ $? -ne 0 ]; then
        echo "Erro ao remover metadados de: $file" >> "$LOGS_DIR/$LOG_FILENAME"
        echo "Processo interrompido devido a erro."
        exit 1
    fi
done

echo "Metadados removidos com sucesso!" >> "$LOGS_DIR/$LOG_FILENAME"

# Verifica se ainda há metadados presentes
if exiftool -all "$PROJECT_DIR" | grep -q "ExifTool Version"; then
    echo "AVISO: Alguns metadados podem ainda estar presentes!" >> "$LOGS_DIR/$LOG_FILENAME"
else
    echo "Verificação concluída: Todos os metadados foram removidos com sucesso!" >> "$LOGS_DIR/$LOG_FILENAME"
fi

echo "Processo concluído."
exit 0