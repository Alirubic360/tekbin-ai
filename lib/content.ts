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
  lastUpdated: string;
  nav: { services: string; process: string; pricing: string; faq: string; cta: string };
  hero: { badge: string; line1: string; line2: string; body: string; cta: string; secondary: string };
  services: { title: string; sub: string; items: { icon: "bot" | "workflow" | "plug" | "mail" | "chart"; title: string; body: string }[] };
  ticker: string;
  process: { title: string; sub: string; steps: { title: string; body: string }[] };
  pricing: { title: string; sub: string; from: string; plans: Plan[]; customLead: string; customLink: string; customTail: string };
  faq: { title: string; items: { q: string; a: string }[] };
  about: { title: string; body: string; points: string[] };
  footer: { rights: string; services: string; pricing: string; privacy: string; terms: string; contact: string; privacyHref: string; termsHref: string };
};

export const en: Dict = {
  lang: "en",
  home: "/",
  switchLabel: "فارسی",
  switchHref: "/fa",
  lastUpdated: "Last updated",
  nav: { services: "Services", process: "Process", pricing: "Pricing", faq: "FAQ", cta: "Send Your Project Brief" },
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
  process: {
    title: "How it works",
    sub: "A simple, written process so scope and decisions stay clear.",
    steps: [
      { title: "Send your brief", body: "Tell us which process you want to automate, which tools you use and what a good result looks like." },
      { title: "Written proposal", body: "You receive a clear scope, timeline and fixed price in writing before anything starts." },
      { title: "Build and test", body: "We build the workflow and test it against your real scenarios, sharing progress as we go." },
      { title: "Handover and support", body: "You get documentation and a support window to make sure it runs the way you expect." },
    ],
  },
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
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "How do we communicate?", a: "Mostly in writing. You send a project brief, we reply with questions and a written proposal, and we share progress updates by email. This keeps scope and decisions clear for both sides." },
      { q: "How is the final price decided?", a: "Listed prices are starting points. After your brief we send a fixed scope and price in writing, and nothing starts until you approve it. Payments can be staged." },
      { q: "Do you guarantee results?", a: "No. Outcomes depend on your data, tools and processes. We commit to a clear scope, tested workflows and documented handover, not to specific savings or revenue." },
      { q: "What happens to my data and accounts?", a: "We ask only for the access a project needs, ideally through limited accounts you can revoke at any time. What we can access and how it is used is agreed in writing. See our Privacy Policy for details." },
      { q: "Do you use AI to do the work?", a: "Yes. We use AI tools in our own work, and a person reviews and tests every workflow before handover." },
      { q: "What if my project is bigger than Starter or Pro?", a: "Send your brief anyway. We will scope a custom quote, or tell you plainly if it is not a good fit." },
    ],
  },
  about: {
    title: "About Tekbin AI",
    body: "Tekbin AI is an independent studio run by one specialist with five years of professional experience. We build custom AI automations for small and growing businesses and keep the process simple: clear scope, written agreements and a tested handover.",
    points: ["Fixed scope and price, agreed in writing", "Every workflow tested before handover", "Plain communication, no jargon"],
  },
  footer: { rights: "All rights reserved.", services: "Services", pricing: "Pricing", privacy: "Privacy", terms: "Terms", contact: "Contact", privacyHref: "/privacy", termsHref: "/terms" },
};

export const fa: Dict = {
  lang: "fa",
  home: "/fa",
  switchLabel: "English",
  switchHref: "/",
  lastUpdated: "آخرین به‌روزرسانی",
  nav: { services: "خدمات", process: "روند کار", pricing: "قیمت‌ها", faq: "پرسش‌ها", cta: "رزرو مشاوره" },
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
  process: {
    title: "روند کار",
    sub: "یک روند ساده و شفاف، تا محدوده‌ی کار و تصمیم‌ها همیشه روشن بماند.",
    steps: [
      { title: "مشاوره‌ی اولیه", body: "درباره‌ی فرایندی که می‌خواهید خودکار شود، ابزارهایتان و نتیجه‌ی مطلوب صحبت می‌کنیم." },
      { title: "پیشنهاد مکتوب", body: "پیش از شروع هر کاری، محدوده، زمان‌بندی و قیمت ثابت را به‌صورت مکتوب دریافت می‌کنید." },
      { title: "ساخت و آزمایش", body: "گردش‌کار را می‌سازیم و با سناریوهای واقعی شما آزمایش می‌کنیم و در طول مسیر گزارش می‌دهیم." },
      { title: "تحویل و پشتیبانی", body: "مستندات و یک دوره‌ی پشتیبانی دریافت می‌کنید تا مطمئن شوید همان‌طور که انتظار دارید کار می‌کند." },
    ],
  },
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
  faq: {
    title: "پرسش‌های متداول",
    items: [
      { q: "ارتباط ما چگونه انجام می‌شود؟", a: "بعد از یک مشاوره‌ی اولیه، جزئیات به‌صورت مکتوب ثبت می‌شود: پیشنهاد کتبی، توافق روی محدوده و گزارش‌های پیشرفت. این کار باعث می‌شود تصمیم‌ها برای هر دو طرف روشن بماند." },
      { q: "قیمت نهایی چگونه مشخص می‌شود؟", a: "قیمت‌های درج‌شده نقطه‌ی شروع‌اند. پس از مشاوره، محدوده و قیمت ثابت به‌صورت مکتوب برایتان ارسال می‌شود و تا تأیید شما هیچ کاری شروع نمی‌شود. پرداخت می‌تواند مرحله‌ای باشد." },
      { q: "آیا نتیجه تضمین می‌شود؟", a: "خیر. نتیجه به داده‌ها، ابزارها و فرایندهای شما بستگی دارد. ما به محدوده‌ی روشن، گردش‌کارهای آزمایش‌شده و تحویل مستند متعهد هستیم، نه به میزان مشخصی از صرفه‌جویی یا درآمد." },
      { q: "داده‌ها و حساب‌های من چه می‌شود؟", a: "فقط به دسترسی‌ای نیاز داریم که پروژه لازم دارد، ترجیحاً از طریق حساب‌های محدودی که هر زمان بتوانید لغو کنید. اینکه به چه چیزی دسترسی داریم و چگونه استفاده می‌شود، مکتوب توافق می‌شود. جزئیات در سیاست حریم خصوصی هست." },
      { q: "آیا برای کار از هوش مصنوعی استفاده می‌کنید؟", a: "بله. ما در کار خودمان از ابزارهای هوش مصنوعی استفاده می‌کنیم و هر گردش‌کار پیش از تحویل توسط یک انسان بررسی و آزمایش می‌شود." },
      { q: "اگر پروژه‌ام از Starter یا Pro بزرگ‌تر باشد؟", a: "باز هم درباره‌اش بنویسید. قیمت اختصاصی می‌دهیم، یا اگر مناسب نبود، صریح می‌گوییم." },
    ],
  },
  about: {
    title: "درباره‌ی Tekbin AI",
    body: "Tekbin AI یک استودیوی مستقل است که توسط یک متخصص با پنج سال سابقه‌ی کاری حرفه‌ای اداره می‌شود. ما اتوماسیون‌های هوش مصنوعی سفارشی را برای کسب‌وکارهای کوچک و در حال رشد می‌سازیم و روند کار را ساده نگه می‌داریم: محدوده‌ی روشن، توافق مکتوب و تحویل آزمایش‌شده.",
    points: ["محدوده و قیمت ثابت، توافق‌شده به‌صورت مکتوب", "هر گردش‌کار پیش از تحویل آزمایش می‌شود", "ارتباط ساده و بدون اصطلاحات پیچیده"],
  },
  footer: { rights: "همه‌ی حقوق محفوظ است.", services: "خدمات", pricing: "قیمت‌ها", privacy: "حریم خصوصی", terms: "شرایط استفاده", contact: "تماس", privacyHref: "/fa/privacy", termsHref: "/fa/terms" },
};

export const dicts: Record<Lang, Dict> = { en, fa };
