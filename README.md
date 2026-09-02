# lmcjt.dev

Luke Taylor's personal site and portfolio.

This branch replaces the previous Gatsby site with a dependency-free static build: one landing page, linked project pages, a notes archive, and a shelf for books and links worth sharing.

## Stack

- HTML
- CSS
- Vanilla JavaScript
- SVG favicon

No build step is required.

## Structure

- `index.html` - home page
- `styles.css` - shared visual system, layout, colour palette, and motion
- `script.js` - home page content data and interactive behaviour
- `detail.js` - shared subpage behaviour and transitions
- `projects/` - project detail pages
- `notes/` - notes archive and articles
- `shelf/` - shelf archive and individual book/link pages
- `assets/` - supporting visual assets
- `favicon.svg` - animated palette-driven favicon

## Local preview

Open `index.html` directly in the browser, or run a local server:

```sh
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Publishing

This repo is set up to work as a simple static site. For GitHub Pages, publish the repository root so `index.html` is served directly.

## Content notes

Current content includes:

- three featured project cards on home, with deeper project pages
- a notes archive with the first essay, `The AI story so far...`
- a shelf archive with curated books and links

Content and card metadata live in `script.js`, while long-form copy lives in the individual HTML pages under `projects/`, `notes/`, and `shelf/`.
