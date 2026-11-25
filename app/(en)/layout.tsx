import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "../globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — AI Agents & Automation`, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/", languages: { en: "/", fa: "/fa", "x-default": "/" } },
  openGraph: {
    title: `${site.name} — AI Agents & Automation`,
    description: site.description,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
};

export const viewport: Viewport = { themeColor: "#050505", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="min-h-screen bg-background font-sans text-white antialiased">{children}</body>
    </html>
  );
}
