#!/bin/bash

# Create favicon directory if it doesn't exist
mkdir -p assets/favicon

# Generate different sizes from logo_star.png
magick assets/images/logo_star.png -resize 16x16 assets/favicon/favicon-16x16.png
magick assets/images/logo_star.png -resize 32x32 assets/favicon/favicon-32x32.png
magick assets/images/logo_star.png -resize 180x180 assets/favicon/apple-touch-icon.png
magick assets/images/logo_star.png -resize 192x192 assets/favicon/android-chrome-192x192.png
magick assets/images/logo_star.png -resize 512x512 assets/favicon/android-chrome-512x512.png

# Generate ICO file (contains multiple sizes)
magick assets/images/logo_star.png -define icon:auto-resize=16,32,48,64 assets/favicon/favicon.ico 

# To generate the favicon.ico file, you can use the following command in the terminal:
# `````./generate_favicons.sh