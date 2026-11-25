# Tekbin AI

Marketing site for Tekbin AI, an AI automation agency. Built with Next.js 14 (App Router), Tailwind CSS, Framer Motion and Lucide icons. Dark mode only. English site at `/` and Persian (RTL) site at `/fa`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
```

Requires Node.js 18.17 or newer.

## Configuration

Site-wide values live in `lib/site.ts`. Set these environment variables (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used for metadata, sitemap and robots |
| `NEXT_PUBLIC_BRIEF_URL` | English site: where "Send Your Project Brief" points (a Tally/Google Form link, or a `mailto:` link) |
| `NEXT_PUBLIC_BOOKING_URL` | Persian site: where "رزرو مشاوره" points (e.g. a Cal.com link) |

The contact email is set in `lib/site.ts`.

## Project structure

```
app/
  (en)/                 English site: layout, home page, /privacy, /terms, 404
  (fa)/fa/              Persian site (RTL): layout and home page
  opengraph-image.tsx   Generated Open Graph image (1200x630)
  robots.ts, sitemap.ts
components/
  Navbar, Hero, TechTicker, Services, Pricing, Footer, Reveal
  ui/button.tsx         shadcn-style button
lib/
  site.ts               Site config and CTA links
  content.ts            All page copy, English and Persian
  utils.ts              cn() helper
```

## Before launch

- Set the environment variables above and replace the placeholder email in `lib/site.ts`.
- Confirm the pricing and plan features in `components/Pricing.tsx` (starting prices; the Founding Client offer in `lib/content.ts` is limited to the first three projects and must be removed or updated once those are taken).
- Persian pages link to the English Privacy and Terms; add Persian versions if needed, and have all legal text reviewed.
- Add only real results, testimonials and logos you have permission to use.

## Deployment (Cloudflare Pages)

The site is a static export (`output: "export"` in `next.config.mjs`); the build output is the `out/` folder.
Security and cache headers are defined in `public/_headers`.

1. In Cloudflare, go to Workers & Pages, create a Pages project and connect this GitHub repository.
2. Build settings: framework preset **Next.js (Static HTML Export)**, build command `npm run build`, output directory `out`.
3. Add the environment variables `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_BOOKING_URL` (and, if needed, `NODE_VERSION=20`).
4. Under the project's Custom domains, add the domain and create the DNS records Cloudflare shows.

Every push to `main` redeploys automatically. Review Cloudflare's current terms and plan limits before relying on it commercially.
