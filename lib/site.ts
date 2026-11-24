// Central site config. Replace placeholders before launch.
export const site = {
  name: "Tekbin AI",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  description:
    "Tekbin AI designs and builds custom AI automation workflows for growing businesses.",
  // Point this at your booking page (e.g. Cal.com) or a mailto: link.
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "#contact",
  email: "hello@example.com",
};
