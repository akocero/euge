# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start local dev server (localhost:3000)
npm run build        # Next.js production build
npm run lint         # ESLint via next lint
npm run preview      # Build for Cloudflare Workers and preview locally
npm run deploy       # Build and deploy to Cloudflare Workers
```

No test suite is configured.

## Environment Variables

Required in `.env`:
- `CONTENTFUL_SPACE_ID` — Contentful space (also set in `wrangler.jsonc` as a var)
- `CONTENTFUL_ACCESS_TOKEN` — Contentful delivery API token
- `MAIL_EMAIL` / `MAIL_PASSWORD` — Gmail credentials for the contact form

## Architecture

This is a **Next.js 15 personal portfolio site** deployed to **Cloudflare Workers** via `@opennextjs/cloudflare`.

### Data Flow

All content (projects, experiences) comes from **Contentful CMS** via `getStaticProps` in [pages/index.js](pages/index.js). The page fetches two content types: `project` (ordered by `fields.rank`) and `experiences` (ordered by `fields.rank`). Images from Contentful are served from `images.ctfassets.net`.

### Page Structure

Single-page app — `pages/index.js` renders all sections in sequence:
`IntroSection → FeaturedSection → ProjectSection → ExperieceSection → AboutSection → ContactSection`

The `Layout` component (wrapping in `pages/_app.js`) provides `Navbar` and `Footer`.

### Animation Pattern

Scroll-triggered animations use a consistent pattern across sections:
- `useScrollReveal` hook (`src/hooks/`) combines `react-intersection-observer` with `framer-motion`'s `useAnimation`
- Reusable animation variants are in `src/utils/` (e.g. `slideUp`, `springLTR`, `sectionVariants`)
- Sections use `motion.section` with `variants={sectionVariants}` and `animate={animation}` from the hook

### Styling

SCSS with a 7-1-like structure under `styles/`:
- `abstracts/` — variables, mixins, utils
- `base/` — reset, typography
- `components/` — per-component partials
- `layouts/` — navbar, footer
- `pages/` — page-level styles

### API

Single API route `pages/api/contact.js` — sends contact form submissions via Gmail through Nodemailer.

### Cloudflare Deployment

`open-next.config.ts` and `wrangler.jsonc` configure the Cloudflare Workers deployment. The worker name is `euge`. Node.js 22 is required (`engines.node: "22.x"`).
