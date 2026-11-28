"""Generate golden results for every answer combination from the Python project.

Usage (from the tekbin-audit project, venv active):
    python /path/to/tekbin-ai/scripts/gen_checkup_golden.py > scripts/checkup-golden.json
The Python implementation (audit/scoring.py, audit/knowledge.py) is the reference.
"""
import itertools
import json

from audit.knowledge import select_cards
from audit.models import Answers, AuditInput
from audit.scoring import score_audit

OPTS = {
    "q1": ["le_5m", "m5_30", "m30_2h", "h2_24", "gt_24h", "dont_know"],
    "q2": ["reply_and_qualify", "ack_only", "nothing", "dont_know"],
    "q3": ["crm", "shared_sheet", "personal", "chats_only", "dont_know"],
    "q4": ["planned", "manual_regular", "adhoc", "none", "dont_know"],
    "q5": ["always", "sometimes", "no", "dont_know"],
}
rows = []
for combo in itertools.product(*OPTS.values()):
    answers = dict(zip(OPTS, combo, strict=True))
    r = score_audit(AuditInput(has_website=False, answers=Answers(**answers)))
    cards = [s.card.id for s in select_cards(r, {})]
    rows.append([list(combo), None if r.score is None else r.score, r.band,
                 r.coverage, r.preliminary, r.earned, r.known_max, cards])
print(json.dumps({"rules": "re-0.2.0", "knowledge": "k-0.1.0",
                  "columns": ["answers", "score", "band", "coverage",
                              "preliminary", "earned", "known_max", "cards"],
                  "rows": rows}, separators=(",", ":")))
