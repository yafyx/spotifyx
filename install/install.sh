#!/bin/sh

set -e

# Download URL
theme_url="https://raw.githubusercontent.com/yafyx/spotifyx/main/src/"

# Setup directories to download to
spice_dir="$(dirname "$(spicetify -c)")"
theme_dir="${spice_dir}/Themes"

# Make directories if needed
mkdir -p "${theme_dir}/spotifyx"

# Download latest tagged files into correct director
echo "Downloading spotifyx..."
curl --silent --output "${theme_dir}/spotifyx/color.ini" "${theme_url}/color.ini"
curl --silent --output "${theme_dir}/spotifyx/user.css" "${theme_url}/user.css"
curl --silent --output "${theme_dir}/spotifyx/theme.js" "${theme_url}/theme.js"
echo "Done"

# Apply theme
echo "Applying theme"
spicetify config current_theme spotifyx color_scheme base
spicetify config inject_css 1 replace_colors 1 overwrite_assets 1 inject_theme_js 1
spicetify apply

echo "All done!"