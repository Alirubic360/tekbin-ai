# Tekbin AI

Marketing site for Tekbin AI, an AI automation agency. Built with Next.js 14 (App Router), Tailwind CSS, Framer Motion and Lucide icons. Dark mode only, English.

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
| `NEXT_PUBLIC_BOOKING_URL` | Where the "Book a Consultation" buttons point (e.g. a Cal.com link) |

The contact email is set in `lib/site.ts`.

## Project structure

```
app/
  layout.tsx            Root layout, fonts, metadata
  page.tsx              Home page
  opengraph-image.tsx   Generated Open Graph image (1200x630)
  robots.ts, sitemap.ts
components/
  Navbar, Hero, TechTicker, Services, Pricing, Footer, Reveal
  ui/button.tsx         shadcn-style button
lib/
  site.ts               Site config
  utils.ts              cn() helper
```

## Before launch

- Set the environment variables above and replace the placeholder email in `lib/site.ts`.
- Confirm the pricing and plan features in `components/Pricing.tsx` (they are placeholders).
- Add Privacy and Terms pages.
- Add only real results, testimonials and logos you have permission to use.

## Deployment

Deploy on any Next.js-capable host. On Vercel, import the repository and add the environment variables. Note that Vercel's free Hobby plan is for non-commercial use; a commercial agency site needs a paid plan or another host.
