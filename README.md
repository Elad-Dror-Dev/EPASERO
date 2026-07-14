# Epasero Contracting — Website

Marketing site for [Epasero Contracting](https://www.epaserocontracting.com), a Dubai-based
architecture, interior design, and fit-out studio.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Motion | Framer Motion, Lottie |
| Carousels | Swiper |
| Output | Static export (`output: 'export'` → `out/`) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build → static export in `out/` |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Project layout

```
app/                    Routes (App Router)
  page.tsx              Home
  portfolio/            Portfolio index + [slug] detail pages
  sitemap.ts robots.ts  SEO
components/             One folder per section/feature
data/data.ts            All portfolio project content (single source of truth)
lib/                    Shared helpers
public/                 Site assets — .webp images and .svg icons only
```

### Content

Portfolio projects live in [`data/data.ts`](data/data.ts). Each entry defines its slug, images,
category, and property details. Adding a project there automatically generates its detail page
and adds it to the sitemap — no route changes needed.

### Assets

`public/` contains **only** the optimized `.webp` and `.svg` files the site actually references.

The original PNG/JPG sources and old upscaling experiments (~442 MB) are kept locally in
`_asset-archive/`, which is git-ignored and intentionally not pushed. If you need to re-export an
image at a different size, the source is there. Keep `public/` lean — it ships to every visitor.

## Deployment

The site builds to a fully static export, so it can be hosted on any static host
(Vercel, Netlify, Cloudflare Pages, S3, nginx).

```bash
npm run build   # outputs to out/
```

## Contact channel

The primary CTA is WhatsApp. The number and prefilled message are configured in
[`components/header/config.tsx`](components/header/config.tsx).
