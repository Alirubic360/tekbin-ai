# Tekbin AI

Marketing site for Tekbin AI, an AI automation agency. Built with Next.js 16 (App Router), Tailwind CSS, Framer Motion and Lucide icons. Dark mode only. English site at `/` and Persian (RTL) site at `/fa`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
```

Requires Node.js 20.9 or newer (set `NODE_VERSION=20` or higher on the host).

## Configuration

Site-wide values live in `lib/site.ts`. Set these environment variables (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used for metadata, sitemap and robots |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Free public key from web3forms.com. With it, the on-site `/brief` form delivers briefs straight to your email. Without it, the form opens the visitor's email app with the brief pre-filled |
| `NEXT_PUBLIC_BRIEF_URL` | Optional: send the English CTA to an external form instead of the on-site `/brief` page |
| `NEXT_PUBLIC_BOOKING_URL` | Optional: send the Persian CTA to an external booking link (e.g. Cal.com) instead of the on-site `/fa/brief` form |

The contact email is set in `lib/site.ts`.

## Project structure

```
app/
  (en)/                 English site: layout, home page, /brief, /privacy, /terms, 404
  (fa)/fa/              Persian site (RTL): layout, home page, /fa/brief, /fa/privacy, /fa/terms
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

- Done: environment variables set, contact email set, both forms tested end to end (Web3Forms), SPF/DMARC added, AI-crawler policy configured in Cloudflare.
- Done: the claims in `lib/content.ts` (team of specialists, five years of hands-on experience, human review before handover, the four Team areas) were confirmed by the owner. Re-confirm them whenever the team or process changes.
- Drafted: Terms and Privacy were rewritten as a business-to-business, provider-favourable but enforceable draft (`lib/legal-content.ts`, English is authoritative). Still open: have them reviewed by a qualified lawyer, including governing law/seat of arbitration (currently set through the project agreement), crypto/USDT, tax and sanctions rules in the jurisdictions involved.
- Keep in sync: the Founding Client offer in `lib/content.ts` is limited to the first three projects; remove or update it once those are taken. Starting prices live in `lib/content.ts`.
- Add only real results, testimonials and logos you have permission to use.

## Deployment (Cloudflare Pages)

The site is a static export (`output: "export"` in `next.config.mjs`); the build output is the `out/` folder.
Security and cache headers are defined in `public/_headers`.

1. In Cloudflare, go to Workers & Pages, create a Pages project and connect this GitHub repository.
2. Build settings: framework preset **Next.js (Static HTML Export)**, build command `npm run build`, output directory `out`.
3. Add the environment variables `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_BOOKING_URL` (and, if needed, `NODE_VERSION=20`).
4. Under the project's Custom domains, add the domain and create the DNS records Cloudflare shows.

Every push to `main` redeploys automatically. Review Cloudflare's current terms and plan limits before relying on it commercially.
