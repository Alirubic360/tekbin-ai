import { Sparkles } from "lucide-react";
import {
  siAnthropic,
  siLangchain,
  siN8n,
  siNextdotjs,
  siPython,
  siSupabase,
  siZapier,
} from "simple-icons";
import type { Dict } from "@/lib/content";

type Tool = { name: string; path?: string };

// Brand icons come from Simple Icons (monochrome). OpenAI has no icon in that set,
// so it uses a neutral placeholder icon next to its name.
const tools: Tool[] = [
  { name: "n8n", path: siN8n.path },
  { name: "LangChain", path: siLangchain.path },
  { name: "OpenAI" },
  { name: "Anthropic", path: siAnthropic.path },
  { name: "Zapier", path: siZapier.path },
  { name: "Supabase", path: siSupabase.path },
  { name: "Next.js", path: siNextdotjs.path },
  { name: "Python", path: siPython.path },
];

export default function TechTicker({ t }: { t: Dict }) {
  const row = [...tools, ...tools];
  return (
    <section id="stack" aria-label={t.ticker} className="scroll-mt-20 border-y border-white/10 py-10">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-white/40">{t.ticker}</p>
      <div dir="ltr" className="marquee-mask overflow-hidden">
        <ul className="animate-marquee flex w-max gap-12 pr-12 text-lg font-medium text-white/45">
          {row.map((tool, i) => (
            <li key={`${tool.name}-${i}`} aria-hidden={i >= tools.length} className="flex items-center gap-2.5">
              {tool.path ? (
                <svg role="img" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                  <path d={tool.path} />
                </svg>
              ) : (
                <Sparkles size={22} aria-hidden="true" />
              )}
              {tool.name}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-6 px-6 text-center text-xs text-white/30">{t.tickerNote}</p>
    </section>
  );
}
