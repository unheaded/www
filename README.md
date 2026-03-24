# unheaded.org

The official website of the Unheaded Kingdom.

Dark, atmospheric static site with rain effects, CRT aesthetics, and scroll-reveal animations. Explores the Kingdom hierarchy, the Pattern, the Royal Court, and the Arcane Hollows.

## Pages

- **index.html** — Landing page with sigil and entry points
- **kingdom.html** — The sacred hierarchy of divine architecture
- **court.html** — Nine who serve the throne
- **hollows.html** — Nine chambers of hidden knowledge
- **pattern.html** — The Pattern that connects everything
- **map-medieval.html** — Medieval-style architectural map
- **map-rings.html** — Ring topology visualization

## Local Development

Pure static HTML/CSS/JS — no build tools, no framework, no bundler.

```bash
# Clone and serve
git clone git@github.com:unheaded/www.git
cd www

# Any static server works
python3 -m http.server 8000
# or
npx serve .
```

Open `http://localhost:8000` in your browser.

## Project Structure

```
www/
├── index.html          # Landing page
├── kingdom.html        # Hierarchy page
├── court.html          # Royal Court page
├── hollows.html        # Arcane Hollows page
├── pattern.html        # The Pattern page
├── map-medieval.html   # Medieval map visualization
├── map-rings.html      # Ring topology visualization
├── css/                # Stylesheets (CRT effects, rain, animations)
├── js/                 # Scroll-reveal, rain, interactive elements
├── assets/             # Images and media
├── sm-logo-L.png       # Left sigil
├── sm-logo-R.png       # Right sigil
└── LICENSE             # GPL-3.0-or-later
```

## Design

Vanilla HTML/CSS/JS. No frameworks. Dark theme with CRT scanline overlays, ambient rain particle effects, scroll-triggered reveal animations, and frosted glass panels. Responsive layout.

## Links

- [bellis.tech](https://www.bellis.tech/) — Personal site
- [GitHub](https://github.com/unheaded) — Source code
- [Unheaded Protocol](https://github.com/unheaded/unheaded) — Main project

## License

GPL-3.0-or-later

## Author

Stevie Bellis / [unheaded](https://github.com/unheaded)
