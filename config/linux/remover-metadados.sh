#!/bin/bash

# Verifica se o exiftool está instalado
if ! command -v exiftool &> /dev/null; then
    echo "exiftool não encontrado. Por favor, instale-o."
    exit 1
fi

# Define o diretório do projeto
PROJECT_DIR="$(dirname "$0")/../../assets"

# Remove metadados de todos os arquivos no diretório
find "$PROJECT_DIR" -type f -exec exiftool -all= -overwrite_original {} \;

if [ $? -eq 0 ]; then
    echo "Metadados removidos com sucesso!"
else
    echo "Erro ao remover metadados."
    exit 1
fi

# Verifica se ainda há metadados
if exiftool -all "$PROJECT_DIR" | grep -q "ExifTool Version"; then
    echo "AVISO: Alguns metadados podem ainda estar presentes!"
else
    echo "Verificação concluída: Todos os metadados foram removidos com sucesso!"
fi
