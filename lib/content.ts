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
    badge: "AI agents and workflow automation",
    line1: "AI agents and automation,",
    line2: "built, monitored, managed.",
    body: "We design, build and operate AI agents and n8n-based workflows, with integrations, guardrails, logging and human approval steps, so your processes run reliably and stay under your control.",
    cta: "Send Your Project Brief",
    secondary: "See what we build",
  },
  services: {
    title: "What we build",
    sub: "Focused systems, scoped to a clear business outcome.",
    items: [
      { icon: "bot", title: "AI Agent Development", body: "Task-specific agents with tool use, memory and clear boundaries: lead qualification, support triage, research and back-office tasks, handing off to your team with full context." },
      { icon: "chart", title: "Agent Management", body: "Ongoing operation of deployed agents: monitoring, logging, evaluation, prompt and model updates, cost control and failure handling." },
      { icon: "workflow", title: "Workflow Automation", body: "Multi-step automations across your tools on n8n, with retries, error handling and alerts." },
      { icon: "plug", title: "Integrations & APIs", body: "Connect your CRM, inbox, calendar, databases and internal tools through APIs and webhooks." },
      { icon: "mail", title: "Human-in-the-loop Controls", body: "Approval steps, review queues and escalation rules so people stay in charge of sensitive actions." },
    ],
  },
  ticker: "Tools we build with",
  process: {
    title: "How it works",
    sub: "A written, step-by-step process so scope, access and decisions stay clear.",
    steps: [
      { title: "Discovery", body: "You send a brief. We map the process, the tools and data involved, and what a correct result looks like." },
      { title: "Architecture and proposal", body: "You receive the design, scope, timeline and fixed price in writing before anything starts." },
      { title: "Build, test, guardrails", body: "We build against your real scenarios, add error handling, logging and approval steps, and test edge cases." },
      { title: "Deploy, monitor, hand over", body: "We deploy, monitor the first runs, and hand over documentation, with optional ongoing agent management." },
    ],
  },
  pricing: {
    title: "Simple, project-based pricing",
    sub: "Prices are starting points. Scope and final price are agreed in writing before any work begins.",
    from: "from",
    plans: [
      { name: "Starter", price: "$1,000", showFrom: true, blurb: "One focused automation, live and documented.", features: ["One production workflow or a single-task agent", "Up to 3 tool integrations", "Error handling and run logging", "Handover documentation", "Short support window"], kind: "standard", cta: "Send Your Project Brief" },
      { name: "Pro", price: "$3,000", showFrom: true, blurb: "A connected system across your operations.", features: ["Multiple workflows or an AI agent with tool use", "Custom API integrations", "Human-in-the-loop approval steps", "Monitoring, logging and alerts", "Extended support window", "Optional monthly agent management plan"], tag: "Best for scaling teams", kind: "featured", cta: "Send Your Project Brief" },
      { name: "Founding Client", price: "20% off", showFrom: false, blurb: "For our first three client projects, on a Starter or Pro scope.", features: ["Same scope and quality as the standard plan", "Fixed scope and price agreed in writing", "Staged payments: part at start, part on delivery", "In return: your written permission to share the project as a case study"], tag: "Limited to 3 projects", kind: "founding", cta: "Apply as a Founding Client" },
    ],
    customLead: "Larger or more complex project?",
    customLink: "Tell us about it",
    customTail: "and we will scope a custom quote.",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "What does agent management include?", a: "Ongoing operation of agents we have built for you: monitoring runs and failures, reviewing logs and output quality, updating prompts, tools or models when needed, and keeping usage costs visible. The exact scope and price are agreed in writing." },
      { q: "What happens when an automation fails?", a: "We build in retries, error handling and alerts, so failures are caught and routed to a person instead of failing silently. Sensitive actions can require human approval before they run." },
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
    body: "Tekbin AI is an independent studio run by one specialist with five years of hands-on experience in automation and AI agent management. We build and operate AI agents and workflow automation for small and growing businesses, with a clear scope, written agreements and a tested handover.",
    points: ["Fixed scope and price, agreed in writing", "Every workflow tested before handover", "Logging, error handling and human approval built in"],
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
    badge: "عامل‌های هوش مصنوعی و اتوماسیون گردش‌کار",
    line1: "عامل‌های هوش مصنوعی و اتوماسیون،",
    line2: "ساخته‌شده، پایش‌شده، مدیریت‌شده.",
    body: "ما عامل‌های هوش مصنوعی و گردش‌کارهای مبتنی بر n8n را طراحی، پیاده‌سازی و اجرا می‌کنیم، همراه با یکپارچه‌سازی، حفاظ‌های ایمنی، ثبت لاگ و مراحل تأیید انسانی، تا فرایندهای شما قابل‌اعتماد کار کنند و همیشه تحت کنترل شما بمانند.",
    cta: "رزرو مشاوره",
    secondary: "ببینید چه می‌سازیم",
  },
  services: {
    title: "چه چیزی می‌سازیم",
    sub: "سیستم‌های متمرکز، با هدف مشخص کسب‌وکاری.",
    items: [
      { icon: "bot", title: "توسعه‌ی عامل‌های هوش مصنوعی", body: "عامل‌های تک‌منظوره با استفاده از ابزار، حافظه و مرزهای مشخص: ارزیابی سرنخ، دسته‌بندی پشتیبانی، پژوهش و کارهای پشت‌صحنه، با تحویل به تیم شما همراه با تمام زمینه‌ی لازم." },
      { icon: "chart", title: "مدیریت عامل‌ها (Agent Management)", body: "اجرا و نگهداری مداوم عامل‌های مستقرشده: پایش، ثبت لاگ، ارزیابی کیفیت، به‌روزرسانی پرامپت و مدل، کنترل هزینه و مدیریت خطا." },
      { icon: "workflow", title: "اتوماسیون گردش‌کار", body: "اتوماسیون چندمرحله‌ای بین ابزارهای شما روی n8n، همراه با تلاش مجدد، مدیریت خطا و هشدار." },
      { icon: "plug", title: "یکپارچه‌سازی و API", body: "اتصال CRM، ایمیل، تقویم، پایگاه‌داده و ابزارهای داخلی شما از طریق API و وب‌هوک." },
      { icon: "mail", title: "کنترل‌های نظارت انسانی", body: "مراحل تأیید، صف بازبینی و قوانین ارجاع تا کنترل کارهای حساس همیشه دست انسان بماند." },
    ],
  },
  ticker: "ابزارهایی که با آن‌ها می‌سازیم",
  process: {
    title: "روند کار",
    sub: "یک روند مکتوب و مرحله‌به‌مرحله، تا محدوده‌ی کار، دسترسی‌ها و تصمیم‌ها همیشه روشن بماند.",
    steps: [
      { title: "کشف نیاز", body: "درباره‌ی فرایند، ابزارها و داده‌های درگیر و معنای «نتیجه‌ی درست» صحبت می‌کنیم و فرایند را نقشه‌برداری می‌کنیم." },
      { title: "معماری و پیشنهاد", body: "پیش از شروع هر کاری، طراحی، محدوده، زمان‌بندی و قیمت ثابت را به‌صورت مکتوب دریافت می‌کنید." },
      { title: "ساخت، آزمایش و حفاظ‌ها", body: "بر پایه‌ی سناریوهای واقعی شما می‌سازیم، مدیریت خطا، ثبت لاگ و مراحل تأیید اضافه می‌کنیم و حالت‌های مرزی را آزمایش می‌کنیم." },
      { title: "استقرار، پایش و تحویل", body: "سیستم را مستقر می‌کنیم، اجراهای اولیه را پایش می‌کنیم و مستندات را تحویل می‌دهیم، با گزینه‌ی مدیریت مداوم عامل‌ها." },
    ],
  },
  pricing: {
    title: "قیمت‌گذاری ساده و پروژه‌ای",
    sub: "قیمت‌ها نقطه‌ی شروع‌اند. محدوده‌ی کار و قیمت نهایی پیش از شروع هر کاری به‌صورت مکتوب توافق می‌شود.",
    from: "از",
    plans: [
      { name: "Starter", price: "$1,000", showFrom: true, blurb: "یک اتوماسیون متمرکز، آماده و مستندسازی‌شده.", features: ["یک گردش‌کار عملیاتی یا یک عامل تک‌وظیفه‌ای", "حداکثر ۳ یکپارچه‌سازی ابزار", "مدیریت خطا و ثبت لاگ اجراها", "مستندات تحویل", "دوره‌ی کوتاه پشتیبانی"], kind: "standard", cta: "رزرو مشاوره" },
      { name: "Pro", price: "$3,000", showFrom: true, blurb: "یک سیستم متصل در سراسر عملیات شما.", features: ["چند گردش‌کار یا عامل هوش مصنوعی با استفاده از ابزار", "یکپارچه‌سازی سفارشی از طریق API", "مراحل تأیید انسانی", "پایش، ثبت لاگ و هشدار", "دوره‌ی پشتیبانی طولانی‌تر", "طرح ماهانه‌ی مدیریت عامل‌ها (اختیاری)"], tag: "مناسب تیم‌های در حال رشد", kind: "featured", cta: "رزرو مشاوره" },
      { name: "مشتریان اول", price: "۲۰٪ تخفیف", showFrom: false, blurb: "برای سه پروژه‌ی اول ما، روی محدوده‌ی Starter یا Pro.", features: ["همان محدوده و کیفیت پلن عادی", "محدوده و قیمت ثابت، توافق‌شده به‌صورت مکتوب", "پرداخت مرحله‌ای: بخشی در شروع، بخشی هنگام تحویل", "در عوض: اجازه‌ی کتبی شما برای معرفی پروژه به‌عنوان نمونه‌کار"], tag: "محدود به ۳ پروژه", kind: "founding", cta: "درخواست پلن مشتریان اول" },
    ],
    customLead: "پروژه‌ی بزرگ‌تر یا پیچیده‌تر دارید؟",
    customLink: "درباره‌اش بنویسید",
    customTail: "تا قیمت اختصاصی بدهیم.",
  },
  faq: {
    title: "پرسش‌های متداول",
    items: [
      { q: "مدیریت عامل‌ها شامل چه کارهایی است؟", a: "اجرا و نگهداری مداوم عامل‌هایی که برای شما ساخته‌ایم: پایش اجراها و خطاها، بررسی لاگ‌ها و کیفیت خروجی، به‌روزرسانی پرامپت‌ها، ابزارها یا مدل‌ها در صورت نیاز، و شفاف نگه‌داشتن هزینه‌ی مصرف. محدوده و قیمت دقیق به‌صورت مکتوب توافق می‌شود." },
      { q: "اگر یک اتوماسیون خراب شود چه می‌شود؟", a: "تلاش مجدد، مدیریت خطا و هشدار را از ابتدا در سیستم می‌گذاریم تا خطاها گرفته و به یک انسان ارجاع شوند و بی‌صدا از بین نروند. برای کارهای حساس می‌توان تأیید انسانی را پیش از اجرا الزامی کرد." },
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
    body: "Tekbin AI یک استودیوی مستقل است که توسط یک متخصص با پنج سال سابقه‌ی عملی در اتوماسیون و مدیریت عامل‌های هوش مصنوعی اداره می‌شود. ما عامل‌های هوش مصنوعی و اتوماسیون گردش‌کار را برای کسب‌وکارهای کوچک و در حال رشد می‌سازیم و اجرا می‌کنیم، با محدوده‌ی روشن، توافق مکتوب و تحویل آزمایش‌شده.",
    points: ["محدوده و قیمت ثابت، توافق‌شده به‌صورت مکتوب", "هر گردش‌کار پیش از تحویل آزمایش می‌شود", "ثبت لاگ، مدیریت خطا و تأیید انسانی از ابتدا در سیستم"],
  },
  footer: { rights: "همه‌ی حقوق محفوظ است.", services: "خدمات", pricing: "قیمت‌ها", privacy: "حریم خصوصی", terms: "شرایط استفاده", contact: "تماس", privacyHref: "/fa/privacy", termsHref: "/fa/terms" },
};

export const dicts: Record<Lang, Dict> = { en, fa };
