# spotifyx

A minimal theme for Spotify inspired by shadcn/ui design

![Spotify Interface Screenshot](https://github.com/yafyx/spotifyx/blob/main/assets/images/image.png)

## Installation

### Prerequisites

1. First, you need to install Spicetify CLI. Here's how:

   #### Windows (Using PowerShell)

   ```powershell
   # Download the installer
   Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/spicetify/spicetify-cli/master/install/install.ps1" | Invoke-Expression
   ```

   #### macOS/Linux

   ```bash
   curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-cli/master/install/install.sh | sh
   ```

2. Install the Spicetify Marketplace:
   ```bash
   spicetify config extensions marketplace.js
   ```

### Installing the Theme

1. Clone this repository:

   ```bash
   git clone https://github.com/yafyx/spotifyx.git
   ```

2. Copy the theme files to Spicetify's themes directory:

   ```bash
   # Windows
   xcopy /E /I spotifyx "%APPDATA%\spicetify\Themes\spotifyx"

   # macOS/Linux
   cp -r spotifyx ~/.config/spicetify/Themes/
   ```

3. Apply the theme:
   ```bash
   spicetify config current_theme spotifyx
   spicetify apply
   ```

## Usage

- To apply the theme: `spicetify apply`
- To watch for changes: `spicetify watch`
- To restore default theme: `spicetify restore`

## Troubleshooting

If you encounter any issues:

1. Make sure Spotify is closed before applying the theme
2. Try running `spicetify restore` first, then apply the theme again
3. Check if Spicetify is properly installed by running `spicetify --version`

## Support

If you encounter any issues or have questions, please open an issue in the GitHub repository.
