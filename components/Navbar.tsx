import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Stack" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
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
        <Button asChild size="sm">
          <a href={site.bookingUrl}>Book a Consultation</a>
        </Button>
      </nav>
    </header>
  );
}
