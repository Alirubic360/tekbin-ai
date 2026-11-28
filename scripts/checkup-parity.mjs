// Verifies lib/checkup.ts against the Python reference for every answer combination.
// Run: node --experimental-strip-types scripts/checkup-parity.mjs
import { readFileSync } from "node:fs";
import { evaluate } from "../lib/checkup.ts";

const golden = JSON.parse(readFileSync(new URL("./checkup-golden.json", import.meta.url), "utf8"));
const Q = ["q1", "q2", "q3", "q4", "q5"];
let bad = 0;
for (const [answers, score, band, coverage, preliminary, earned, knownMax, cards] of golden.rows) {
  const r = evaluate(Object.fromEntries(Q.map((q, i) => [q, answers[i]])));
  const problems = [];
  if ((r.score === null) !== (score === null) || (score !== null && Math.abs(r.score - score) > 1e-9)) problems.push(`score ${r.score} vs ${score}`);
  if (r.band !== band) problems.push(`band ${r.band} vs ${band}`);
  if (Math.abs(r.coverage - coverage) > 1e-9) problems.push(`coverage ${r.coverage} vs ${coverage}`);
  if (r.preliminary !== preliminary) problems.push(`preliminary ${r.preliminary} vs ${preliminary}`);
  if (r.earned !== earned || r.knownMax !== knownMax) problems.push(`earned/known ${r.earned}/${r.knownMax} vs ${earned}/${knownMax}`);
  if (JSON.stringify(r.cards.map((c) => c.id)) !== JSON.stringify(cards)) problems.push(`cards ${r.cards.map((c) => c.id)} vs ${cards}`);
  if (problems.length) { bad++; if (bad <= 5) console.log("MISMATCH", answers.join(","), problems.join("; ")); }
}
console.log(`${golden.rows.length} combinations checked, ${bad} mismatches`);
process.exit(bad ? 1 : 0);
