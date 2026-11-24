const tools = ["n8n", "LangChain", "OpenAI", "Anthropic", "Zapier", "Supabase", "Next.js", "Python"];

export default function TechTicker() {
  const row = [...tools, ...tools];
  return (
    <section id="stack" aria-label="Tools we build with" className="scroll-mt-20 border-y border-white/10 py-10">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-white/40">Tools we build with</p>
      <div className="marquee-mask overflow-hidden">
        <ul className="animate-marquee flex w-max gap-12 pr-12 text-xl font-medium text-white/40">
          {row.map((t, i) => (
            <li key={`${t}-${i}`} aria-hidden={i >= tools.length}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
