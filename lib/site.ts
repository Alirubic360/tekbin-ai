// Central site config. Replace placeholders before launch.
export type Lang = "en" | "fa";

const email = "hello@tekbin.ir";

export const site = {
  name: "Tekbin AI",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://tekbin.ir").trim().replace(/\/+$/, ""),
  description:
    "Tekbin AI builds custom AI agents and n8n workflow automation for growing businesses, then monitors and manages them. Fixed scope and written proposals.",
  email,
  // English site: the on-site project brief form. Override with an external form URL if needed.
  briefUrl: (process.env.NEXT_PUBLIC_BRIEF_URL ?? "").trim() || "/brief",
  // Web3Forms public access key (free). Without it, the brief form falls back to the visitor's email app.
  web3formsKey: (process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "").trim(),
  // Persian site: the on-site consultation request form. Override with a booking link (e.g. Cal.com) if needed.
  bookingUrl: (process.env.NEXT_PUBLIC_BOOKING_URL ?? "").trim() || "/fa/brief",
};

export function ctaHref(lang: Lang) {
  return lang === "fa" ? site.bookingUrl : site.briefUrl;
}
