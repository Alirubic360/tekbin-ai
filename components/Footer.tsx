import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 text-sm text-white/50 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <nav className="flex gap-6">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href={`mailto:${site.email}`} className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
