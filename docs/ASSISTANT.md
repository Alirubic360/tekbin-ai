# Tekbin assistant (`/assistant`, `/fa/assistant`)

A chat assistant grounded in Tekbin's own documentation. It works in two modes:

- **kb** (no secrets needed): the reply is the documented answer for the best-matching topic. Runs in the browser if the API is unreachable.
- **llm** (needs a provider key): `functions/api/chat.ts` asks a language model to write the reply from the retrieved documents only, then checks it. If the check fails twice, or the provider errors or times out (20 s), the visitor gets the documented answer instead. Each reply is labelled with its mode.

## Files

| File | Purpose |
| --- | --- |
| `lib/assistant-kb.ts` | The only facts the assistant may state (EN + FA). Add or edit answers here. |
| `lib/assistant.ts` | Retrieval, prompt, output validation, deterministic fallback. Shared by browser and function. |
| `functions/api/chat.ts` | Cloudflare Pages Function, `POST /api/chat`. Provider-neutral. |
| `components/AssistantChat.tsx`, `AssistantPage.tsx`, `lib/assistant-content.ts` | UI. |
| `scripts/assistant-test.mjs` | `npm run test:assistant` (KB lint, retrieval, validators, function with a fake provider). |

## Turning on the language model

Cloudflare dashboard > Workers & Pages > your Pages project > Settings > Variables and Secrets. Add to **Production** (and Preview if wanted):

| Name | Type | Example |
| --- | --- | --- |
| `LLM_API_KEY` | **Secret** | the provider's API key |
| `LLM_MODEL` | Text | the model id your provider gives you |
| `LLM_BASE_URL` | Text | `https://<provider>/v1` for OpenAI-compatible APIs, or the provider's base URL for the Anthropic Messages API (the code appends `/chat/completions` or `/v1/messages`). Must be `https://`. |
| `LLM_REASONING_EFFORT` | Text, optional | `none` for Gemini 2.5 Flash (stops hidden "thinking" from using the token budget); omit for models that do not accept it |
| `LLM_API_STYLE` | Text, optional | `openai` (default) or `anthropic` |
| `ALLOWED_ORIGINS` | Text, optional | extra comma-separated origins allowed to call the API |

Then redeploy. Never put the key in the repository, in `NEXT_PUBLIC_*` variables, or in chat. Without these variables the assistant keeps working in kb mode.

Optional: bind a KV namespace named `RATE_KV` (Settings > Bindings) so the per-IP limit (20 requests / 10 min) is shared across Cloudflare locations. Without it the limit is per isolate, which is weaker.

### Google Gemini (AI Studio key)

`LLM_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai`, `LLM_MODEL=<a Flash model listed in AI Studio, e.g. gemini-2.5-flash>`, `LLM_REASONING_EFFORT=none`, key from https://aistudio.google.com/api-keys. Check Google's terms for the key's tier: on free tiers, prompts may be used to improve Google's products, so use a paid (billing-enabled) project before real visitors type business details.

## Safeguards (all tested)

Same-origin check; body, history (last 6 turns) and per-message (600 chars) caps; per-IP rate limit; `max_tokens` 900; 20 s timeout; no message content is logged. Replies are rejected if they contain links other than this site's pages, emails other than `hello@tekbin.ir`, numbers not present in the retrieved documents or the user's message, promises or guarantees, a suggestion to consult an expert, or the wrong language.

## What has not been verified

No real model has been called from this code yet. Quality in Persian and the rate of rejected replies must be measured on real questions once a provider is configured. Check the provider's terms, data-processing and regional availability before enabling it; visitor messages are sent to that provider in llm mode, and `/privacy` should say so.
