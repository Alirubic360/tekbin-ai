import { site } from "@/lib/site";

export type Clause = { title: string; body?: string[]; list?: string[] };

// Replaces {email} with a mailto link and {domain} with the site domain.
export function render(text: string) {
  const domain = site.url.replace(/^https?:\/\//, "");
  return text
    .replaceAll("{domain}", domain)
    .split("{email}")
    .flatMap((part, i, arr) =>
      i < arr.length - 1
        ? [part, <a key={i} href={`mailto:${site.email}`}>{site.email}</a>]
        : [part]
    );
}

export default function LegalClauses({ clauses, numbered = true, fa = false }: { clauses: Clause[]; numbered?: boolean; fa?: boolean }) {
  const digits = (n: number) => (fa ? String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]) : String(n));
  return (
    <>
      {clauses.map((c, i) => (
        <section key={c.title}>
          <h2>{numbered ? `${digits(i + 1)}${fa ? " - " : ". "}` : ""}{c.title}</h2>
          {c.body?.map((p, j) => (
            <p key={j} className={j > 0 ? "mt-3" : undefined}>{render(p)}</p>
          ))}
          {c.list && (
            <ul className={c.body ? "mt-3" : undefined}>
              {c.list.map((li, k) => (
                <li key={k}>{render(li)}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </>
  );
}

export function LegalIntro({ text }: { text: string }) {
  return (
    <section>
      {text.split("\n\n").map((p, i) => (
        <p key={i} className={i > 0 ? "mt-3" : undefined}>{render(p)}</p>
      ))}
    </section>
  );
}
