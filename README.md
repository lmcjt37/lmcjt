# [lmcjt.dev](https://lmcjt.dev)

Luke Taylor's personal site and portfolio.

A portal for sharing side projects, scribbles, thoughts, and opinions.

Mostly my own, with my agent friends.

## Stack

- Next.js App Router
- React
- TypeScript
- MDX
- CSS

The app exports to static files for GitHub Pages.

## Structure

- `app/` - Next.js App Router routes, components, data, and MDX content
- `app/content/` - MDX content modules for projects, notes, and shelf entries
- `app/data/` - typed metadata used by home cards, archives, and slug routes
- `public/` - static assets served by Next.js
- `styles.css` - shared visual system, layout, colour palette, and motion
- `next.config.mjs` - static export and MDX configuration
- `.github/workflows/deploy.yml` - GitHub Pages deployment workflow

## Local preview

Install dependencies:

```sh
npm install
```

Run the Next.js dev server:

```sh
npm run dev
```

Then visit `http://localhost:3000`.

Check types:

```sh
npm run typecheck
```

Build the static export:

```sh
npm run build
```

The static site is written to `out/`.

## Publishing

GitHub Pages deployment is handled by `.github/workflows/deploy.yml`.

In the repository settings, configure Pages to use GitHub Actions as the source. Pushing to `main` runs `npm ci`, `npm run build`, uploads `out/`, and deploys it.

## Content notes

Current content includes:

- Projects, a collection of various side hustles.
- Notes, an archive of scribbles and thoughts.
- Shelf, a list of books, links and other references.

Content metadata lives in `app/data/content.ts`. Long-form project, notes, and shelf copy lives in MDX files under `app/content/`.
