import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { en, type Dict } from "@/lib/content";

export default function LegalPage({
  title,
  updated,
  t = en,
  switchHref,
  status,
  children,
}: {
  title: string;
  updated: string;
  t?: Dict;
  switchHref?: string;
  status?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar t={t} switchHref={switchHref} />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-white/50">{t.lastUpdated}: {updated}</p>
        {status && (
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs text-amber-200">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden="true" />
            {status}
          </p>
        )}
        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-white/70 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:ps-5 [&_a]:text-[#4da3ff] [&_a]:underline [&_a]:underline-offset-2">
          {children}
        </div>
      </main>
      <Footer t={t} />
    </>
  );
}
