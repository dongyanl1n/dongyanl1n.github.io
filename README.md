# dongyanl1n.github.io

Personal academic website for **Dongyan Lin** — a React + Vite single-page site,
designed as a close clone of [catherinesyeh.github.io](https://catherinesyeh.github.io).

## Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 (SPA, single page with in-page anchor nav) |
| Build tool | Vite 5 |
| UI | Mantine 7 (`MantineProvider`) + custom CSS for the signature look |
| Icons | react-icons (Font Awesome + Simple Icons) |
| Animation | framer-motion (fade-in on scroll) |
| Fonts | Google Fonts — Noto Sans (headings) + monospace nav |
| Hosting | GitHub Pages (user site, served from `/`) |

Sections: **About** (`#home`), **News** (`#news`), **Publications** (`#publications`), **Contact** (`#contact`).

## Develop

```bash
npm install      # first time only
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build into ./dist
npm run preview  # preview the production build
```

## Project layout

```
index.html              Vite entry (head: fonts, favicon, OG tags)
vite.config.js          base: '/', outDir: dist
src/
  main.jsx              React + MantineProvider bootstrap
  App.jsx               page composition
  index.css             design tokens (palette, gradients, h2 tab, hover lifts)
  components/           Nav, Home (About), News, Publications, Contact, Footer
  data/
    site.js             profile, links, news (EDIT CONTENT HERE)
    publications.json   publications (copied from .content/)
public/
  photo.jpg             headshot
  fav.svg               favicon (brain icon)
  cv.pdf                CV
  socimg.png            social/OG image (placeholder — see below)
```

## Deploy

Deployment is automated via **GitHub Actions** (`.github/workflows/deploy.yml`):
every push to `main`/`master` builds the site and publishes `dist/` to Pages.

One-time setup: in the repo on GitHub, go to **Settings → Pages → Build and
deployment** and set **Source = "GitHub Actions"**. After that, pushing to the
default branch deploys automatically to `https://dongyanl1n.github.io`.

> Alternative (no Actions): run `npm run build`, set Vite `outDir` to `docs`,
> commit `docs/`, and set Pages source to "Deploy from a branch → /docs".

## Editing content

- **Bio / role / interests / links / news** → `src/data/site.js`
  (the bio prose with inline links lives as JSX in `src/components/Home.jsx`).
- **Publications** → `src/data/publications.json`.

## Placeholders / things to review

- **News** items are auto-suggested from recent papers — confirm/edit dates and wording in `src/data/site.js`.
- **Twitter/X** link is a confirmed handle (`twitter.com/dongyanl1n`) in `src/data/site.js` (currently not shown in UI).
- **socimg.png** (social share card) is just the headshot as a placeholder — replace with a proper 1200×630 OG image when available.
- **Profile photo** uses the current site's headshot; swap `public/photo.jpg` for a fresher one if desired.

## Notes

- `.design_reference/` and `.content/` are helper folders (design reverse-engineering
  notes and gathered content). They are not part of the build and can be removed later.
- The previous site used the "Astral by HTML5 UP" template; its old files
  (`assets/`, `uploads/`, etc.) remain in the repo but are no longer used by the build.
