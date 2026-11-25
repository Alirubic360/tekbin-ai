// Central site config. Replace placeholders before launch.
export type Lang = "en" | "fa";

const email = "hello@tekbin.ir";
const mailBrief = `mailto:${email}?subject=Project%20brief`;

export const site = {
  name: "Tekbin AI",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tekbin.ir",
  description:
    "Tekbin AI designs, builds and manages AI agents and n8n workflow automation for growing businesses.",
  email,
  // English site: written project brief (form link such as Tally/Google Forms, or mailto:).
  briefUrl: process.env.NEXT_PUBLIC_BRIEF_URL || mailBrief,
  // Persian site: consultation call booking (e.g. a Cal.com link).
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || mailBrief,
};

export function ctaHref(lang: Lang) {
  return lang === "fa" ? site.bookingUrl : site.briefUrl;
}
