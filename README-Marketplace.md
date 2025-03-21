<div align="center">
  <h1>spotifyx</h1>
  A Minimal Spotify theme inspired by Shadcn/ui Design

  <hr>

**Consider starring us !**

## Join the Community!

- **GitHub Issues:** [https://github.com/yafyx/spotifyx/issues](https://github.com/yafyx/spotifyx/issues)

</div>

## Dependencies

- Latest version of [Spicetify](https://github.com/spicetify/spicetify-cli).
- Latest version of [Spotify](https://www.spotify.com/download).
- [Geist](https://fonts.google.com/specimen/Geist) font family, from Google Fonts.

## Troubleshooting

### Issues when installing from Spicetify Marketplace

```sh
spicetify config current_theme marketplace color_scheme marketplace
spicetify config inject_css 1 replace_colors 1 overwrite_assets 1 inject_theme_js 1
spicetify apply
```

### There isn't any blur at all

Open Spotify settings and turn on `Enable hardware acceleration`.

### Some custom app on the left navbar has a wrong icon

Please report about that via the repository's issues page.

## License

[MIT License](LICENSE)
