import type { Metadata, Viewport } from "next";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import "../../globals.css";
import { site } from "@/lib/site";

const title = `ساخت ایجنت هوش مصنوعی و اتوماسیون n8n | ${site.name}`;
const description = "Tekbin AI برای کسب‌وکارهای در حال رشد ایجنت هوش مصنوعی و گردش‌کار n8n می‌سازد و بعد از تحویل، پایش و مدیریتشان را هم بر عهده می‌گیرد. محدوده و قیمت ثابت و مکتوب.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/fa", languages: { en: "/", fa: "/fa", "x-default": "/" } },
  openGraph: { title, description, url: "/fa", siteName: site.name, type: "website", locale: "fa_IR" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#050505", colorScheme: "dark" };

export default function FaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className="min-h-screen bg-background text-white antialiased"
        style={{ fontFamily: "Vazirmatn, system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
