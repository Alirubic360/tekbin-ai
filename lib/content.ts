import type { Lang } from "@/lib/site";

export type Plan = {
  name: string;
  price: string;
  showFrom: boolean;
  blurb: string;
  features: string[];
  tag?: string;
  kind: "standard" | "featured" | "founding";
  cta: string;
};

export type Dict = {
  lang: Lang;
  home: string;
  switchLabel: string;
  switchHref: string;
  nav: { services: string; stack: string; pricing: string; cta: string };
  hero: { badge: string; line1: string; line2: string; body: string; cta: string; secondary: string };
  services: { title: string; sub: string; items: { icon: "bot" | "workflow" | "plug" | "mail" | "chart"; title: string; body: string }[] };
  ticker: string;
  pricing: { title: string; sub: string; from: string; plans: Plan[]; customLead: string; customLink: string; customTail: string };
  footer: { rights: string; services: string; pricing: string; privacy: string; terms: string; contact: string };
};

export const en: Dict = {
  lang: "en",
  home: "/",
  switchLabel: "فارسی",
  switchHref: "/fa",
  nav: { services: "Services", stack: "Stack", pricing: "Pricing", cta: "Send Your Project Brief" },
  hero: {
    badge: "AI automation for growing businesses",
    line1: "Automate the work.",
    line2: "Keep the growth.",
    body: "We design and build custom AI workflows that handle repetitive operations, so your team can focus on what only people can do.",
    cta: "Send Your Project Brief",
    secondary: "See what we build",
  },
  services: {
    title: "What we build",
    sub: "Focused systems, scoped to a clear business outcome.",
    items: [
      { icon: "bot", title: "Custom AI Agents", body: "Agents that qualify leads, answer questions and hand off to your team with full context." },
      { icon: "workflow", title: "Workflow Automation", body: "Multi-step automations across your tools, built on n8n." },
      { icon: "plug", title: "Integrations", body: "Connect your CRM, inbox, calendar and databases." },
      { icon: "mail", title: "Inbox & Follow-up", body: "Draft, route and follow up on messages with a human in the loop." },
      { icon: "chart", title: "Reporting", body: "Automated summaries so you see what matters without the spreadsheet work." },
    ],
  },
  ticker: "Tools we build with",
  pricing: {
    title: "Simple, project-based pricing",
    sub: "Prices are starting points. Scope and final price are agreed in writing before any work begins.",
    from: "from",
    plans: [
      { name: "Starter", price: "$1,000", showFrom: true, blurb: "One focused automation, live and documented.", features: ["One end-to-end workflow", "Up to 3 tool integrations", "Handover documentation", "Short support window"], kind: "standard", cta: "Send Your Project Brief" },
      { name: "Pro", price: "$3,000", showFrom: true, blurb: "A connected system across your operations.", features: ["Multiple workflows or an AI agent", "Custom integrations", "Human-in-the-loop controls", "Extended support window", "Optional monthly support plan"], tag: "Best for scaling teams", kind: "featured", cta: "Send Your Project Brief" },
      { name: "Founding Client", price: "20% off", showFrom: false, blurb: "For our first three client projects, on a Starter or Pro scope.", features: ["Same scope and quality as the standard plan", "Fixed scope and price agreed in writing", "Staged payments: part at start, part on delivery", "In return: your written permission to share the project as a case study"], tag: "Limited to 3 projects", kind: "founding", cta: "Apply as a Founding Client" },
    ],
    customLead: "Larger or more complex project?",
    customLink: "Tell us about it",
    customTail: "and we will scope a custom quote.",
  },
  footer: { rights: "All rights reserved.", services: "Services", pricing: "Pricing", privacy: "Privacy", terms: "Terms", contact: "Contact" },
};

export const fa: Dict = {
  lang: "fa",
  home: "/fa",
  switchLabel: "English",
  switchHref: "/",
  nav: { services: "خدمات", stack: "ابزارها", pricing: "قیمت‌ها", cta: "رزرو مشاوره" },
  hero: {
    badge: "اتوماسیون هوش مصنوعی برای کسب‌وکارهای در حال رشد",
    line1: "کار تکراری را خودکار کنید.",
    line2: "برای رشد وقت بگذارید.",
    body: "ما گردش‌کارهای هوش مصنوعی سفارشی طراحی و پیاده‌سازی می‌کنیم تا عملیات تکراری خودکار انجام شود و تیم شما روی کارهایی تمرکز کند که فقط انسان از پس‌شان برمی‌آید.",
    cta: "رزرو مشاوره",
    secondary: "ببینید چه می‌سازیم",
  },
  services: {
    title: "چه چیزی می‌سازیم",
    sub: "سیستم‌های متمرکز، با هدف مشخص کسب‌وکاری.",
    items: [
      { icon: "bot", title: "عامل‌های هوش مصنوعی سفارشی", body: "عامل‌هایی که سرنخ‌ها را ارزیابی می‌کنند، به پرسش‌ها پاسخ می‌دهند و با تمام زمینه‌ی لازم به تیم شما تحویل می‌دهند." },
      { icon: "workflow", title: "اتوماسیون گردش‌کار", body: "اتوماسیون چندمرحله‌ای بین ابزارهای شما، ساخته‌شده روی n8n." },
      { icon: "plug", title: "یکپارچه‌سازی", body: "اتصال CRM، ایمیل، تقویم و پایگاه‌داده‌های شما." },
      { icon: "mail", title: "ایمیل و پیگیری", body: "نوشتن پیش‌نویس، مسیردهی و پیگیری پیام‌ها، با نظارت انسانی." },
      { icon: "chart", title: "گزارش‌گیری", body: "خلاصه‌های خودکار تا بدون درگیری با صفحه‌گسترده ببینید چه چیزی مهم است." },
    ],
  },
  ticker: "ابزارهایی که با آن‌ها می‌سازیم",
  pricing: {
    title: "قیمت‌گذاری ساده و پروژه‌ای",
    sub: "قیمت‌ها نقطه‌ی شروع‌اند. محدوده‌ی کار و قیمت نهایی پیش از شروع هر کاری به‌صورت مکتوب توافق می‌شود.",
    from: "از",
    plans: [
      { name: "Starter", price: "$1,000", showFrom: true, blurb: "یک اتوماسیون متمرکز، آماده و مستندسازی‌شده.", features: ["یک گردش‌کار کامل از ابتدا تا انتها", "حداکثر ۳ یکپارچه‌سازی ابزار", "مستندات تحویل", "دوره‌ی کوتاه پشتیبانی"], kind: "standard", cta: "رزرو مشاوره" },
      { name: "Pro", price: "$3,000", showFrom: true, blurb: "یک سیستم متصل در سراسر عملیات شما.", features: ["چند گردش‌کار یا یک عامل هوش مصنوعی", "یکپارچه‌سازی سفارشی", "کنترل‌های نظارت انسانی", "دوره‌ی پشتیبانی طولانی‌تر", "طرح پشتیبانی ماهانه (اختیاری)"], tag: "مناسب تیم‌های در حال رشد", kind: "featured", cta: "رزرو مشاوره" },
      { name: "مشتریان اول", price: "۲۰٪ تخفیف", showFrom: false, blurb: "برای سه پروژه‌ی اول ما، روی محدوده‌ی Starter یا Pro.", features: ["همان محدوده و کیفیت پلن عادی", "محدوده و قیمت ثابت، توافق‌شده به‌صورت مکتوب", "پرداخت مرحله‌ای: بخشی در شروع، بخشی هنگام تحویل", "در عوض: اجازه‌ی کتبی شما برای معرفی پروژه به‌عنوان نمونه‌کار"], tag: "محدود به ۳ پروژه", kind: "founding", cta: "درخواست پلن مشتریان اول" },
    ],
    customLead: "پروژه‌ی بزرگ‌تر یا پیچیده‌تر دارید؟",
    customLink: "درباره‌اش بنویسید",
    customTail: "تا قیمت اختصاصی بدهیم.",
  },
  footer: { rights: "همه‌ی حقوق محفوظ است.", services: "خدمات", pricing: "قیمت‌ها", privacy: "Privacy (English)", terms: "Terms (English)", contact: "تماس" },
};

export const dicts: Record<Lang, Dict> = { en, fa };
