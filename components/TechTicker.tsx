import type { Dict } from "@/lib/content";

const tools = ["n8n", "LangChain", "OpenAI", "Anthropic", "Zapier", "Supabase", "Next.js", "Python"];

export default function TechTicker({ t }: { t: Dict }) {
  const row = [...tools, ...tools];
  return (
    <section id="stack" aria-label={t.ticker} className="scroll-mt-20 border-y border-white/10 py-10">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-white/40">{t.ticker}</p>
      <div dir="ltr" className="marquee-mask overflow-hidden">
        <ul className="animate-marquee flex w-max gap-12 pr-12 text-xl font-medium text-white/40">
          {row.map((tool, i) => (
            <li key={`${tool}-${i}`} aria-hidden={i >= tools.length}>{tool}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
