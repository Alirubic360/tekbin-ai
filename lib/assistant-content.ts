import type { Lang } from "@/lib/site";

export type AssistantDict = {
  lang: Lang;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  h1: string;
  intro: string;
  chat: {
    title: string; placeholder: string; send: string; empty: string; you: string; bot: string; thinking: string; reset: string;
    suggested: string; related: string; sources: string; modeLlm: string; modeKb: string; limited: string; notice: string;
  };
  suggestedIds: string[];
  how: { title: string; items: string[] };
  limits: { title: string; items: string[] };
  links: { agent: string; case: string; brief: string };
};

export const assistantDicts: Record<Lang, AssistantDict> = {
  en: {
    lang: "en",
    metaTitle: "Ask the Tekbin AI assistant: pricing, process, reliability, security",
    metaDescription:
      "Ask detailed questions about AI agents, n8n automation, pricing, testing, reliability and security. Answers are grounded in Tekbin's own documentation and checked before they are shown.",
    badge: "Assistant",
    h1: "Ask anything about how Tekbin builds agents",
    intro:
      "A working example of what we build: an assistant that answers from a fixed set of documents, checks its own replies and says so when it does not know. Ask about pricing, process, testing, reliability, security or the real-estate lead agent.",
    chat: {
      title: "Tekbin assistant",
      placeholder: "Ask a question, for example: how do you stop an agent from making things up?",
      send: "Send",
      empty: "Pick a question below or type your own.",
      you: "You",
      bot: "Tekbin assistant",
      thinking: "Thinking…",
      reset: "Clear conversation",
      suggested: "Suggested questions",
      related: "Related questions",
      sources: "Sources",
      modeLlm: "AI answer, written from our documents and checked",
      modeKb: "Answer taken directly from our documents",
      limited: "Too many questions for now. Please try again in a few minutes.",
      notice: "Messages are sent to this site's server to produce an answer, and may be passed to a language-model provider. Please do not enter passwords, keys or personal data.",
    },
    suggestedIds: ["services", "pricing", "hallucination", "reliability", "case-study", "payment"],
    how: {
      title: "How it works",
      items: [
        "Your question is matched against Tekbin's documented answers (services, pricing, process, security, testing, payments, the case study).",
        "When the AI service is configured, a language model writes the reply using only those documents. Otherwise you get the documented answer directly. Each reply is labelled so you can tell which.",
        "Every AI reply is checked before it is shown: links must be pages of this site, numbers must come from the documents or your message, promises of results are rejected, and it must be in your language. If a check fails, you get the documented answer instead.",
        "If nothing in the documents covers your question, it says so instead of guessing.",
      ],
    },
    limits: {
      title: "What to keep in mind",
      items: [
        "It knows what is written on this site. It does not know your business and cannot give a quote; a quote needs your written project brief.",
        "It gives general information, not legal, tax or financial advice, and it never promises results.",
        "Language models can still be wrong. Prices and terms in the written proposal are the ones that count.",
      ],
    },
    links: { agent: "Try the live lead-qualifying agent", case: "Read the case study", brief: "Send a project brief" },
  },
  fa: {
    lang: "fa",
    metaTitle: "از دستیار Tekbin AI بپرسید: قیمت، روند کار، پایداری و امنیت",
    metaDescription:
      "درباره‌ی ایجنت هوش مصنوعی، اتوماسیون n8n، قیمت، آزمایش، پایداری و امنیت سؤال دقیق بپرسید. پاسخ‌ها بر پایه‌ی مستندات خود Tekbin است و قبل از نمایش بررسی می‌شود.",
    badge: "دستیار",
    h1: "هر چه درباره‌ی ساخت ایجنت در Tekbin می‌خواهید بپرسید",
    intro:
      "نمونه‌ی کارکننده‌ی چیزی که می‌سازیم: دستیاری که از مجموعه‌ای ثابت از مستندات جواب می‌دهد، پاسخ‌های خودش را بررسی می‌کند و وقتی نمی‌داند، همین را می‌گوید. درباره‌ی قیمت، روند کار، آزمایش، پایداری، امنیت یا ایجنت سرنخ املاک بپرسید.",
    chat: {
      title: "دستیار Tekbin",
      placeholder: "سؤال بپرسید، مثلاً: چطور جلوی ساختن اطلاعات ساختگی توسط ایجنت را می‌گیرید؟",
      send: "ارسال",
      empty: "یکی از سؤال‌های زیر را انتخاب کنید یا سؤال خودتان را بنویسید.",
      you: "شما",
      bot: "دستیار Tekbin",
      thinking: "در حال پاسخ…",
      reset: "پاک کردن گفت‌وگو",
      suggested: "سؤال‌های پیشنهادی",
      related: "سؤال‌های مرتبط",
      sources: "منابع",
      modeLlm: "پاسخ هوش مصنوعی، نوشته‌شده از روی مستندات ما و بررسی‌شده",
      modeKb: "پاسخ مستقیم از مستندات ما",
      limited: "فعلاً تعداد سؤال‌ها زیاد شده. چند دقیقه‌ی دیگر دوباره امتحان کنید.",
      notice: "پیام‌ها برای تولید پاسخ به سرور این سایت فرستاده می‌شود و ممکن است به ارائه‌دهنده‌ی مدل زبانی هم برسد. لطفاً رمز، کلید یا اطلاعات شخصی وارد نکنید.",
    },
    suggestedIds: ["services", "pricing", "hallucination", "reliability", "case-study", "payment"],
    how: {
      title: "چطور کار می‌کند",
      items: [
        "سؤال شما با پاسخ‌های مستند Tekbin (خدمات، قیمت، روند، امنیت، آزمایش، پرداخت، نمونه‌کار) تطبیق داده می‌شود.",
        "وقتی سرویس هوش مصنوعی فعال باشد، یک مدل زبانی فقط با همان مستندات پاسخ را می‌نویسد؛ در غیر این صورت پاسخ مستند مستقیم نمایش داده می‌شود. هر پاسخ برچسب دارد تا بدانید کدام است.",
        "هر پاسخ هوش مصنوعی قبل از نمایش بررسی می‌شود: لینک‌ها باید صفحه‌های همین سایت باشند، عددها باید از مستندات یا پیام شما بیایند، وعده‌ی نتیجه رد می‌شود و پاسخ باید به زبان شما باشد. اگر بررسی رد شود، به‌جایش پاسخ مستند نمایش داده می‌شود.",
        "اگر چیزی در مستندات سؤال شما را پوشش ندهد، حدس نمی‌زند و همین را می‌گوید.",
      ],
    },
    limits: {
      title: "چه چیزهایی را در نظر بگیرید",
      items: [
        "فقط چیزهایی را می‌داند که در این سایت نوشته شده. کسب‌وکار شما را نمی‌شناسد و قیمت دقیق نمی‌دهد؛ قیمت دقیق به شرح پروژه‌ی مکتوب شما نیاز دارد.",
        "اطلاعات عمومی می‌دهد، نه مشاوره‌ی حقوقی، مالیاتی یا مالی، و هرگز نتیجه وعده نمی‌دهد.",
        "مدل زبانی هنوز می‌تواند اشتباه کند. قیمت و شرایطی که در پیشنهاد مکتوب آمده ملاک است.",
      ],
    },
    links: { agent: "ایجنت زنده‌ی غربال سرنخ را امتحان کنید", case: "نمونه‌کار را بخوانید", brief: "شرح پروژه را بفرستید" },
  },
};
