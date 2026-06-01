# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic website for Dongyan Lin, deployed at `dongyanl1n.github.io` via GitHub Pages. It is a single-page React application built with Vite. (It was migrated from an old HTML5-UP "Astral" static template, which has since been removed.)

## Tech Stack

- **React 18** + **Vite 5** (`@vitejs/plugin-react`)
- **Mantine 7** (`@mantine/core`, `@mantine/hooks`) for UI components
- **framer-motion** for animations
- **react-icons** for icons

## File Structure

- `index.html` — Vite entry HTML (mounts the React app)
- `src/`
  - `main.jsx` — app bootstrap (React + Mantine provider)
  - `App.jsx` — top-level layout / section composition
  - `index.css` — global styles
  - `components/` — UI sections: `Nav`, `Home`, `News`, `Publications`, `Contact`, `Footer`, `FadeInSection`
  - `data/site.js` — site content/config (profile, links, news, etc.)
  - `data/publications.json` — publication list data
- `public/` — static assets copied as-is to the build root (`cv.pdf`, `photo.jpg`, `socimg.png`, `fav.svg`)
- `uploads/` — the user's personal documents and images (CV, posters, photos)
- `.github/workflows/deploy.yml` — GitHub Actions build & deploy to Pages

## Development

```bash
npm install     # install dependencies
npm run dev     # start Vite dev server with HMR
npm run build   # production build → dist/
npm run preview # preview the production build locally
```

## Deployment

Pushes to `main`/`master` trigger `.github/workflows/deploy.yml`, which runs `npm ci`, `npm run build`, and publishes `dist/` to GitHub Pages. Requires repo Settings → Pages → Source = "GitHub Actions". `dist/` is not committed (see `.gitignore`).

## Content Updates

- Most editable content (profile info, links, news items) lives in `src/data/site.js`.
- Publications are in `src/data/publications.json`.
- Add downloadable/static files to `public/` (referenced by root-relative paths) or `uploads/`.
