# Task Plan

## Task

- Reference: Direct Next.js migration for current portfolio site
- Goal: Port the existing static HTML/CSS/JavaScript site to Next.js while preserving the current design and interactions, then clean up the content architecture with slug-based routes, typed models, and MDX-backed long-form content.

## Context

- The current site is a dependency-free static site with `index.html`, `styles.css`, `script.js`, `detail.js`, `projects/`, `notes/`, `shelf/`, `assets/`, and `favicon.svg`.
- The visual system is centralized in `styles.css` and should be preserved during the direct port.
- Home page card content currently lives in `script.js` as arrays for work, notes, and shelf items.
- Long-form project, note, and shelf content currently lives inside individual HTML files.
- Most subpages duplicate the same shell: header, transition overlay, footer, detail hero layout, and `detail.js`.
- Existing architecture notes are in `architecture/overview.md` and `architecture/site/README.md`.
- Old `.html` routes do not need to survive the migration.
- All writing/detail subpages should use MDX where the page is content-led.
- The migrated app will deploy through GitHub Pages.

## Assumptions

- The migration should use the Next.js App Router.
- The first pass should prioritize visual parity over redesign.
- Clean URLs such as `/projects/coffee-dev`, `/notes/the-ai-story-so-far`, and `/shelf/dune-saga` should replace the old `.html` paths.
- The app should remain statically generated for GitHub Pages unless a future CMS or dynamic integration is introduced.
- MDX is desired for content-led project, notes, and shelf subpages, while short metadata should live in typed data modules.

## Plan

- [x] 1. Scaffold the Next.js app without changing the visual design.
  - Add `package.json`, Next.js, React, TypeScript, App Router files, and baseline config.
  - Move global metadata and document-level structure into `app/layout.tsx`.
  - Import the existing `styles.css` as the global stylesheet with minimal selector changes.

- [x] 2. Port static assets and global shell.
  - Move `favicon.svg` and `assets/` into the appropriate Next static locations.
  - Extract shared header, footer, page transition overlay, skip link, grain, and progress elements into components.
  - Preserve existing class names so the current CSS continues to carry the design.

- [x] 3. Port the home page and browser interactions.
  - Convert `index.html` into `app/page.tsx`.
  - Replace imperative card rendering from `script.js` with React-rendered components.
  - Move hero canvas, command dialog, copy email, card tilt, reveal-on-scroll, scroll progress, chaos mode, and navigation transition behavior into client components/hooks.
  - Keep the existing animation timings and visual states unless a browser/API mismatch forces adjustment.

- [ ] 4. Introduce cleaner content models.
  - Create typed data modules for project, note, and shelf metadata.
  - Define shared fields such as `slug`, `title`, `description`, `type`, `date`, `tags`, `href`, `nextSlug`, and archive visibility.
  - Make home cards, archive pages, and detail routes read from the same source of truth.

- [ ] 5. Build slug-based routes and archives.
  - Add `app/projects/[slug]/page.tsx`, `app/notes/[slug]/page.tsx`, and `app/shelf/[slug]/page.tsx`.
  - Add archive routes at `app/notes/page.tsx` and `app/shelf/page.tsx`.
  - Use static params for every known slug.
  - Replace relative `.html` links with route helpers or `next/link`.

- [ ] 6. Move long-form content to MDX.
  - Add MDX support and a content folder structure for content-led project pages, notes, and shelf entries.
  - Move article/detail body content out of hand-authored HTML into MDX files with frontmatter.
  - Render MDX through the existing detail-page design components.
  - Keep metadata validation strict enough that archive pages cannot drift from detail pages.

- [ ] 7. Configure GitHub Pages deployment and remove old route assumptions.
  - Configure static export for GitHub Pages.
  - Remove old `.html` routes after migrated clean routes are verified.
  - Update `README.md` with Next.js development, build, preview, and GitHub Pages publishing instructions.

- [ ] 8. Verify parity and clean up legacy files.
  - Compare home, project, notes, and shelf pages against the current static site.
  - Check desktop and mobile layouts, reduced-motion behavior, canvas rendering, dialog behavior, copy email, reveal animation, page transitions, and internal navigation.
  - Remove obsolete root HTML and vanilla JS files only after the Next.js routes match behavior.

## Verification

- [x] Run `npm run typecheck` as the current equivalent static check.
- [x] Run `npm run build` and confirm every static route generates successfully.
- [ ] Run the Next.js dev server and manually verify home, project detail, notes archive, note detail, shelf archive, and shelf detail routes.
- [ ] Verify no internal links still target old `.html` files.
- [ ] Verify exported output works for GitHub Pages.
- [ ] Check responsive layouts at mobile and desktop widths.

## Decisions

- DR-001: Use Next.js App Router with static generation
- DR-002: Preserve current visual design during the direct port
- DR-003: Use typed metadata plus MDX for long-form content
- DR-004: Prefer slug-based routes with an explicit legacy URL strategy
- DR-005: Deploy with GitHub Pages static export
