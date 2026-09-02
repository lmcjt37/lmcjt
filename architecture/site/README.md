# Site Migration Notes

## Scope

Assessment of what it would take to migrate the current static portfolio into a Next.js app while preserving current routes, visuals, and interactions.

## Entry Points

- Home: `index.html` + `script.js`
- Shared styling: `styles.css`
- Shared detail-page behavior: `detail.js`
- Content routes:
  - `projects/*.html`
  - `notes/index.html`
  - `notes/the-ai-story-so-far.html`
  - `shelf/index.html`
  - `shelf/*.html`

## Screen Map

- Home page: mostly static markup plus JS-rendered work, notes, and shelf cards.
- Notes archive: static archive list with one linked essay.
- Shelf archive: static archive list with linked shelf entries.
- Detail pages: repeated template with page-specific copy.

## Flow Map

- Initial render:
  - static HTML loads shared CSS
  - home loads `script.js`; detail/archive pages load `detail.js`
- Home content hydration:
  - `renderWork()` populates `#work-list`
  - `renderItems()` populates `#note-list` and `#shelf-list`
- Navigation transition:
  - click on `[data-transition-link]`
  - script captures element position and label
  - state is saved in `sessionStorage`
  - transition classes are applied
  - browser navigates after `620ms`
  - destination page reads transition state and closes the cover animation

## Architecture Pattern

- Static multi-page site with one shared stylesheet.
- Home page uses imperative DOM rendering instead of server-rendered content.
- Detail pages are template-like but duplicated as standalone HTML files.
- Browser-only enhancements are layered on top of mostly static markup.

## Core Components To Introduce In Next.js

- `app/layout.tsx` for global HTML shell.
- Route segments:
  - `app/page.tsx`
  - `app/notes/page.tsx`
  - `app/notes/[slug]/page.tsx`
  - `app/shelf/page.tsx`
  - `app/shelf/[slug]/page.tsx`
  - `app/projects/[slug]/page.tsx`
- Shared UI components:
  - site header
  - footer
  - page transition overlay
  - hero section
  - work card
  - archive list item
  - detail page shell
- Client hooks/components for:
  - home canvas animation
  - intersection observer reveals
  - transition-state capture/playback
  - command dialog
  - copy email button

## Migration Work Breakdown

### 1. Route conversion

- Convert each current HTML path into a matching Next.js route.
- Preserve current URL structure to avoid broken links.
- Replace relative `href="../index.html#work"` style links with Next `Link` paths.

### 2. Layout extraction

- Move repeated header/footer/transition markup out of every HTML file into shared components.
- Split common detail-page shell from page-specific body copy.
- Keep `styles.css` initially, then optionally modularize later.

### 3. Content modeling

- Move `work`, `notes`, and `shelf` card metadata out of `script.js` into data files.
- Decide whether long-form pages remain JSX files or move to MDX.
- Add slugs and metadata in one place so archives and detail routes stay in sync.

### 4. Browser behavior port

- Rewrite `script.js` and `detail.js` as client-side React components/hooks.
- Guard browser-only APIs like `window`, `document`, `navigator.clipboard`, `sessionStorage`, `canvas`, and `dialog`.
- Ensure event listeners are attached and cleaned up through React lifecycle.

### 5. Styling and assets

- Reuse `styles.css` as a global stylesheet first for the fastest migration.
- Keep `favicon.svg` and `assets/hero-workspace.png` under Next static assets.
- Verify CSS selectors that assume direct document structure still match after componentization.

### 6. Build/runtime decisions

- If the site remains purely static, use Next.js App Router with static generation.
- If desired, export a static build with `output: "export"` to keep simple hosting.
- If future CMS or MDX support is wanted, the migration creates a clean path for that.

## Coupling And Change-Risk Hotspots

- `script.js` mixes content data and behavior in one file, so migration should split them immediately.
- Transition behavior is duplicated conceptually across `script.js` and `detail.js`.
- CSS is global and selector-heavy, so layout extraction can accidentally change styling if DOM structure shifts too far.
- Archive pages and detail pages are manually linked, which risks drift until content is normalized.

## Estimated Effort

- Straight port preserving the current design and routes: about 1-2 days.
- Cleaner migration with shared content model, MDX for long-form pages, and properly componentized client behavior: about 2-4 days.
- Extra time would come from redesign, test coverage, animation refactors, or deployment/platform changes.

## Recommended Migration Order

1. Scaffold Next.js with App Router and static export support.
2. Port `styles.css` and global shell.
3. Convert home page and extract shared components.
4. Move card metadata into typed data files.
5. Convert archive and detail pages into slug-based routes.
6. Port transition and reveal behavior into client hooks.
7. Optionally move long-form content into MDX.

## Open Questions

- Should the current exact URL endings like `.html` be preserved, or can routes become clean paths such as `/projects/coffee-dev`?
- Do you want long-form content managed as code, MDX, or an eventual CMS/content collection?
- Is the goal simply “run this in Next.js,” or “set it up to scale with more writing/projects over time”?
