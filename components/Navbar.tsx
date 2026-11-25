import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ctaHref } from "@/lib/site";
import { site } from "@/lib/site";
import { en, type Dict } from "@/lib/content";

export default function Navbar({ t = en }: { t?: Dict }) {
  const base = t.lang === "fa" ? "/fa" : "";
  const links = [
    { href: `${base}/#services`.replace("//", "/"), label: t.nav.services },
    { href: `${base}/#stack`.replace("//", "/"), label: t.nav.stack },
    { href: `${base}/#pricing`.replace("//", "/"), label: t.nav.pricing },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-6">
        <Link href={t.home} className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-accent text-xs font-bold">T</span>
          {site.name}
        </Link>
        <ul className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Link href={t.switchHref} hrefLang={t.lang === "fa" ? "en" : "fa"} className="text-sm text-white/60 transition-colors hover:text-white">
            {t.switchLabel}
          </Link>
          <Button asChild size="sm">
            <a href={ctaHref(t.lang)}>{t.nav.cta}</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
