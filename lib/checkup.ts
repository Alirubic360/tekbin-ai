// Lead-handling checkup: scoring and problem-card selection.
// This is a line-for-line port of the response-only path of the Python project
// (audit/scoring.py + audit/knowledge.py, rules re-0.2.0 / knowledge k-0.1.0).
// Everything runs in the browser; nothing is sent anywhere. Parity with the Python
// implementation is verified by scripts/checkup-parity.mjs over every answer combination.

export const RULES_VERSION = "re-0.2.0";
export const KNOWLEDGE_VERSION = "k-0.1.0";

export type QId = "q1" | "q2" | "q3" | "q4" | "q5";
export type Answers = Record<QId, string>;

export const DONT_KNOW = "dont_know";

// [max points, points per answer]. "dont_know" is absent on purpose: it is unknown, not zero.
export const QUESTIONS: Record<QId, { max: number; points: Record<string, number> }> = {
  q1: { max: 15, points: { le_5m: 15, m5_30: 11, m30_2h: 7, h2_24: 3, gt_24h: 0 } },
  q2: { max: 7, points: { reply_and_qualify: 7, ack_only: 3, nothing: 0 } },
  q3: { max: 8, points: { crm: 8, shared_sheet: 5, personal: 2, chats_only: 0 } },
  q4: { max: 10, points: { planned: 10, manual_regular: 7, adhoc: 3, none: 0 } },
  q5: { max: 5, points: { always: 5, sometimes: 2, no: 0 } },
};

export const Q_ORDER: QId[] = ["q1", "q2", "q3", "q4", "q5"];

export type Band = "needs_major_fix" | "improvable_base" | "adequate_base";
export type Status = "pass" | "partial" | "fail" | "unknown";

export type Item = { code: string; status: Status; points: number | null; max: number };

export type CardId = "C-FIRST-REPLY" | "C-FOLLOWUP" | "C-CRM" | "C-NEEDS-CAPTURE";

export type Result = {
  score: number | null;
  band: Band | null;
  coverage: number;
  preliminary: boolean;
  earned: number;
  knownMax: number;
  relevantMax: number;
  items: Item[];
  cards: { id: CardId; priority: number; evidence: string }[];
};

// impact, effort from the knowledge cards; confidence for self-reported answers is 0.6.
const CARD_META: Record<CardId, { impact: number; effort: number }> = {
  "C-FIRST-REPLY": { impact: 5, effort: 2 },
  "C-FOLLOWUP": { impact: 4, effort: 2 },
  "C-CRM": { impact: 4, effort: 3 },
  "C-NEEDS-CAPTURE": { impact: 3, effort: 2 },
};
const SELF_REPORTED_CONFIDENCE = 0.6;
const MAX_CARDS = 3;

// Rule -> card, with the same thresholds as audit/knowledge.py (points at or below the limit).
const RULES: { q: QId; limit: number; card: CardId }[] = [
  { q: "q1", limit: 7, card: "C-FIRST-REPLY" },
  { q: "q4", limit: 3, card: "C-FOLLOWUP" },
  { q: "q3", limit: 2, card: "C-CRM" },
  { q: "q5", limit: 2, card: "C-NEEDS-CAPTURE" },
];

export function evaluate(answers: Answers): Result {
  const items: Item[] = Q_ORDER.map((q) => {
    const { max, points } = QUESTIONS[q];
    const p = points[answers[q]];
    const pts = p === undefined ? null : p;
    const status: Status = pts === null ? "unknown" : pts === max ? "pass" : pts === 0 ? "fail" : "partial";
    return { code: q.toUpperCase(), status, points: pts, max };
  });

  const relevantMax = items.reduce((s, i) => s + i.max, 0);
  const known = items.filter((i) => i.points !== null);
  const knownMax = known.reduce((s, i) => s + i.max, 0);
  const earned = known.reduce((s, i) => s + (i.points as number), 0);

  const enough = knownMax * 100 >= 60 * relevantMax;
  const band: Band | null = !enough
    ? null
    : earned * 100 < 40 * knownMax
      ? "needs_major_fix"
      : earned * 100 < 70 * knownMax
        ? "improvable_base"
        : "adequate_base";

  const byCode = new Map(items.map((i) => [i.code, i]));
  const cards = RULES.flatMap((r) => {
    const item = byCode.get(r.q.toUpperCase());
    if (!item || item.points === null || item.points > r.limit) return [];
    const m = CARD_META[r.card];
    return [{ id: r.card, priority: (m.impact * SELF_REPORTED_CONFIDENCE) / m.effort, evidence: item.code }];
  })
    .sort((a, b) => b.priority - a.priority || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0))
    .slice(0, MAX_CARDS);

  return {
    score: enough ? (earned * 100) / knownMax : null,
    band,
    coverage: (knownMax * 100) / relevantMax,
    preliminary: enough && knownMax * 100 < 80 * relevantMax,
    earned,
    knownMax,
    relevantMax,
    items,
    cards,
  };
}

export function emptyAnswers(): Answers {
  return { q1: DONT_KNOW, q2: DONT_KNOW, q3: DONT_KNOW, q4: DONT_KNOW, q5: DONT_KNOW };
}
