#!/bin/bash

# Install exiftool
echo "Installing exiftool..."
sudo apt-get update
sudo apt-get install -y libimage-exiftool-perl

# Verify installation
if command -v exiftool >/dev/null 2>&1; then
    echo "exiftool installed successfully"
else
    echo "Error: exiftool installation failed"
    exit 1
fi