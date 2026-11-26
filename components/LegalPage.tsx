import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { en, type Dict } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

export default function LegalPage({
  title,
  updated,
  t = en,
  switchHref,
  crumb,
  related,
  children,
}: {
  title: string;
  updated: string;
  t?: Dict;
  switchHref?: string;
  crumb?: { name: string; path: string };
  related?: { label: string; href: string }[];
  children: React.ReactNode;
}) {
  return (
    <>
      {crumb && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: t.lang === "fa" ? "خانه" : "Home", item: t.lang === "fa" ? `${site.url}/fa` : site.url },
              { "@type": "ListItem", position: 2, name: crumb.name, item: `${site.url}${crumb.path}` },
            ],
          }}
        />
      )}
      <Navbar t={t} switchHref={switchHref} />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-white/50">{t.lastUpdated}: {updated}</p>
        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-white/70 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:ps-5 [&_a]:text-[#4da3ff] [&_a]:underline [&_a]:underline-offset-2">
          {children}
        </div>
        {related && related.length > 0 && (
          <nav aria-label={t.lang === "fa" ? "صفحه‌های مرتبط" : "Related pages"} className="mt-12 border-t border-white/10 pt-6 text-sm">
            <p className="mb-2 text-white/50">{t.lang === "fa" ? "صفحه‌های مرتبط" : "Related pages"}</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {related.map((r) => (
                <li key={r.href}><a href={r.href} className="text-[#4da3ff] underline underline-offset-2">{r.label}</a></li>
              ))}
            </ul>
          </nav>
        )}
      </main>
      <Footer t={t} />
    </>
  );
}
