import { site } from "@/lib/site";
import { en, type Dict } from "@/lib/content";

export default function Footer({ t = en }: { t?: Dict }) {
  const base = t.lang === "fa" ? "/fa#" : "/#";
  return (
    <footer id="contact" className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 text-sm text-white/50 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} {site.name}. {t.footer.rights}</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={`${base}services`} className="hover:text-white">{t.footer.services}</a>
          <a href={`${base}pricing`} className="hover:text-white">{t.footer.pricing}</a>
          <a href={t.footer.caseHref} className="hover:text-white">{t.footer.caseLabel}</a>
          <a href={t.footer.payHref} className="hover:text-white">{t.footer.payLabel}</a>
          <a href={t.footer.privacyHref} className="hover:text-white">{t.footer.privacy}</a>
          <a href={t.footer.termsHref} className="hover:text-white">{t.footer.terms}</a>
          <a href={`mailto:${site.email}`} className="hover:text-white">{t.footer.contact}</a>
        </nav>
      </div>
    </footer>
  );
}
