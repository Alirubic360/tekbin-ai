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
  tickerNote: string;
  process: { title: string; sub: string; steps: { title: string; body: string }[] };
  pricing: { title: string; sub: string; from: string; plans: Plan[]; customLead: string; customLink: string; customTail: string };
  faq: { title: string; items: { q: string; a: string }[] };
  team: { title: string; sub: string; roles: { icon: "bot" | "workflow" | "activity" | "message"; title: string; body: string }[] };
  about: { title: string; body: string; points: string[] };
  footer: { rights: string; services: string; pricing: string; privacy: string; terms: string; contact: string; privacyHref: string; termsHref: string };
};

export const en: Dict = {
  lang: "en",
  home: "/",
  switchLabel: "فارسی",
  switchHref: "/fa",
  lastUpdated: "Last updated",
  nav: { services: "Services", process: "Process", pricing: "Pricing", faq: "FAQ", cta: "Send your brief" },
  hero: {
    badge: "AI agents and n8n automation",
    line1: "We build AI agents",
    line2: "and keep them running.",
    body: "We build agents and n8n automations for your business. Then we monitor them, fix what breaks and keep costs visible. You get a clear plan, price and timeline in writing first.",
    cta: "Send your project brief",
    secondary: "See what we build",
  },
  services: {
    title: "What we build",
    sub: "Small, focused systems. Each one built around a clear outcome.",
    items: [
      { icon: "bot", title: "AI agent development", body: "Agents that do one job well: qualify leads, triage support, run research, update your CRM. Each has tools, limits and a handoff to you." },
      { icon: "chart", title: "Agent management", body: "We monitor runs, read logs, check output quality, update prompts and models, and track token costs." },
      { icon: "workflow", title: "Workflow automation", body: "n8n workflows with retries, error handling and alerts. When something breaks, you hear about it." },
      { icon: "plug", title: "Integrations and APIs", body: "CRM, inbox, calendar, databases, internal tools. Connected with APIs and webhooks." },
      { icon: "mail", title: "Human approval", body: "Sensitive actions wait for your OK. Review queues, approval steps and escalation rules." },
    ],
  },
  ticker: "Tools we work with",
  tickerNote: "Names and logos belong to their respective owners and do not imply endorsement.",
  process: {
    title: "How it works",
    sub: "Everything in writing, step by step.",
    steps: [
      { title: "Discovery", body: "You send a brief. We map the process, tools and data, and define what a correct result looks like." },
      { title: "Proposal", body: "You get the design, scope, timeline and fixed price in writing. Nothing starts until you approve." },
      { title: "Build and test", body: "We build against your real cases, add logging, error handling and approval steps, then test edge cases." },
      { title: "Launch and handover", body: "We deploy, watch the first runs and hand over documentation. Ongoing management is optional." },
    ],
  },
  pricing: {
    title: "Pricing",
    sub: "Starting prices in USD, paid in USDT. Scope and final price are agreed in writing before work starts.",
    from: "from",
    plans: [
      { name: "Starter", price: "$1,000", showFrom: true, blurb: "One automation or one single-task agent, live and documented.", features: ["One workflow or single-task agent", "Up to 3 integrations", "Error handling and run logs", "Handover documentation", "Short support window"], kind: "standard", cta: "Send your project brief" },
      { name: "Pro", price: "$3,000", showFrom: true, blurb: "A connected system across your operations.", features: ["Several workflows or an agent with tool use", "Custom API integrations", "Human approval steps", "Monitoring, logging and alerts", "Longer support window", "Optional monthly agent management"], tag: "Best for scaling teams", kind: "featured", cta: "Send your project brief" },
      { name: "Founding Client", price: "20% off", showFrom: false, blurb: "For our first three client projects, on a Starter or Pro scope.", features: ["Same scope and quality as the standard plan", "Fixed scope and price in writing", "Staged payments: part at start, part on delivery", "In return: your written OK to share the project as a case study"], tag: "Limited to 3 projects", kind: "founding", cta: "Apply as a founding client" },
    ],
    customLead: "Bigger project?",
    customLink: "Send us the details",
    customTail: "and we'll quote it separately.",
  },
  faq: {
    title: "Questions",
    items: [
      { q: "How do we communicate?", a: "Mostly in writing: your brief, our questions, a written proposal and progress updates by email. It keeps scope and decisions clear for both of us." },
      { q: "How do I pay?", a: "Prices are in USD and paid in USDT. We send an invoice with the amount and the network. Payments can be staged. USDT transfers can't be reversed, so we agree scope and price in writing first." },
      { q: "How is the final price set?", a: "Listed prices are starting points. After your brief we send a fixed scope and price in writing. Nothing starts until you approve it." },
      { q: "Do you guarantee results?", a: "No. Results depend on your data, tools and process. We commit to a clear scope, tested workflows and a documented handover. We don't promise specific savings or revenue." },
      { q: "What does agent management include?", a: "Ongoing operation of agents we've built for you: watching runs and failures, reviewing logs and output quality, updating prompts, tools or models, and keeping usage costs visible. Scope and price are agreed in writing." },
      { q: "What happens when an automation fails?", a: "We build in retries, error handling and alerts. Failures get caught and sent to a person instead of failing silently. Sensitive actions can require your approval before they run." },
      { q: "What happens to my data and accounts?", a: "We only ask for the access a project needs, ideally through limited accounts you can revoke any time. What we can access and how we use it is agreed in writing. See the Privacy Policy." },
      { q: "Do you use AI to do the work?", a: "Yes. We use AI tools, and a person reviews and tests every workflow before handover." },
      { q: "What if my project is bigger than Pro?", a: "Send the brief anyway. We'll quote it, or tell you plainly if it's not a good fit." },
    ],
  },
  team: {
    title: "The team",
    sub: "The areas of expertise behind every project.",
    roles: [
      { icon: "bot", title: "Agent engineering", body: "Designs agents, their tools, limits and handoffs to people." },
      { icon: "workflow", title: "Automation and integrations", body: "Builds n8n workflows and connects your tools through APIs and webhooks." },
      { icon: "activity", title: "Agent operations", body: "Monitors runs, reviews logs and output quality, tunes prompts and models, tracks costs." },
      { icon: "message", title: "Delivery and communication", body: "Scopes the work, writes the proposal and keeps you updated in writing." },
    ],
  },
  about: {
    title: "About Tekbin AI",
    body: "Tekbin AI is a team of specialists in automation and AI agent management, led by a specialist with five years of hands-on experience. We build and run AI agents and workflow automation for small and growing businesses. Clear scope, written agreements, tested handover.",
    points: ["Fixed scope and price, in writing", "Every workflow tested before handover", "Logging, error handling and human approval built in"],
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
    badge: "عامل هوش مصنوعی و اتوماسیون n8n",
    line1: "عامل هوش مصنوعی می‌سازیم",
    line2: "و مدیریتش می‌کنیم.",
    body: "برای کسب‌وکار شما عامل هوش مصنوعی و اتوماسیون n8n می‌سازیم. بعد پایششان می‌کنیم، خرابی‌ها را درست می‌کنیم و هزینه‌ها را شفاف نگه می‌داریم. اول یک برنامه‌ی روشن با قیمت و زمان‌بندی مکتوب می‌گیرید.",
    cta: "رزرو مشاوره",
    secondary: "ببینید چه می‌سازیم",
  },
  services: {
    title: "چه چیزی می‌سازیم",
    sub: "سیستم‌های کوچک و متمرکز. هر کدام حول یک نتیجه‌ی مشخص.",
    items: [
      { icon: "bot", title: "توسعه‌ی عامل هوش مصنوعی", body: "عاملی که یک کار را خوب انجام می‌دهد: ارزیابی سرنخ، دسته‌بندی پشتیبانی، پژوهش، به‌روزرسانی CRM. هر عامل ابزار و محدودیت دارد و کار را به شما تحویل می‌دهد." },
      { icon: "chart", title: "مدیریت عامل‌ها (Agent Management)", body: "اجراها را پایش می‌کنیم، لاگ‌ها را می‌خوانیم، کیفیت خروجی را می‌سنجیم، پرامپت و مدل را به‌روز می‌کنیم و هزینه‌ی توکن را زیر نظر داریم." },
      { icon: "workflow", title: "اتوماسیون گردش‌کار", body: "گردش‌کار n8n با تلاش مجدد، مدیریت خطا و هشدار. اگر چیزی خراب شود، شما باخبر می‌شوید." },
      { icon: "plug", title: "یکپارچه‌سازی و API", body: "CRM، ایمیل، تقویم، پایگاه‌داده و ابزارهای داخلی با API و وب‌هوک به هم وصل می‌شوند." },
      { icon: "mail", title: "تأیید انسانی", body: "کارهای حساس منتظر تأیید شما می‌مانند. صف بازبینی، مرحله‌ی تأیید و قوانین ارجاع." },
    ],
  },
  ticker: "ابزارهایی که با آن‌ها کار می‌کنیم",
  tickerNote: "نام و لوگوها متعلق به صاحبان آن‌هاست و به معنای تأیید یا شراکت نیست.",
  process: {
    title: "روند کار",
    sub: "همه‌چیز مکتوب و مرحله‌به‌مرحله.",
    steps: [
      { title: "کشف نیاز", body: "شما توضیح پروژه را می‌فرستید یا با هم صحبت می‌کنیم. فرایند، ابزارها و داده‌ها را نقشه‌برداری می‌کنیم و مشخص می‌کنیم «نتیجه‌ی درست» یعنی چه." },
      { title: "پیشنهاد", body: "طراحی، محدوده، زمان‌بندی و قیمت ثابت را مکتوب می‌گیرید. تا تأیید شما هیچ کاری شروع نمی‌شود." },
      { title: "ساخت و آزمایش", body: "روی سناریوهای واقعی شما می‌سازیم. لاگ، مدیریت خطا و مراحل تأیید اضافه می‌کنیم و حالت‌های مرزی را آزمایش می‌کنیم." },
      { title: "راه‌اندازی و تحویل", body: "مستقر می‌کنیم، اجراهای اول را زیر نظر می‌گیریم و مستندات را تحویل می‌دهیم. مدیریت مداوم اختیاری است." },
    ],
  },
  pricing: {
    title: "قیمت‌ها",
    sub: "قیمت‌ها به دلار و پرداخت با USDT است. محدوده و قیمت نهایی پیش از شروع کار مکتوب توافق می‌شود.",
    from: "از",
    plans: [
      { name: "Starter", price: "$1,000", showFrom: true, blurb: "یک اتوماسیون یا یک عامل تک‌وظیفه‌ای، آماده و مستندسازی‌شده.", features: ["یک گردش‌کار یا یک عامل تک‌وظیفه‌ای", "حداکثر ۳ یکپارچه‌سازی", "مدیریت خطا و لاگ اجرا", "مستندات تحویل", "دوره‌ی کوتاه پشتیبانی"], kind: "standard", cta: "رزرو مشاوره" },
      { name: "Pro", price: "$3,000", showFrom: true, blurb: "یک سیستم متصل در کل عملیات شما.", features: ["چند گردش‌کار یا عامل با استفاده از ابزار", "یکپارچه‌سازی سفارشی با API", "مراحل تأیید انسانی", "پایش، لاگ و هشدار", "دوره‌ی پشتیبانی طولانی‌تر", "مدیریت ماهانه‌ی عامل‌ها (اختیاری)"], tag: "مناسب تیم‌های در حال رشد", kind: "featured", cta: "رزرو مشاوره" },
      { name: "مشتریان اول", price: "۲۰٪ تخفیف", showFrom: false, blurb: "برای سه پروژه‌ی اول ما، با محدوده‌ی Starter یا Pro.", features: ["همان محدوده و کیفیت پلن عادی", "محدوده و قیمت ثابت، مکتوب", "پرداخت مرحله‌ای: بخشی در شروع، بخشی هنگام تحویل", "در عوض: اجازه‌ی کتبی شما برای معرفی پروژه به‌عنوان نمونه‌کار"], tag: "محدود به ۳ پروژه", kind: "founding", cta: "درخواست پلن مشتریان اول" },
    ],
    customLead: "پروژه‌ی بزرگ‌تر دارید؟",
    customLink: "جزئیاتش را برایمان بنویسید",
    customTail: "تا جداگانه قیمت بدهیم.",
  },
  faq: {
    title: "پرسش‌ها",
    items: [
      { q: "ارتباط ما چطور انجام می‌شود؟", a: "بعد از یک مشاوره‌ی اولیه، جزئیات مکتوب می‌شود: پیشنهاد کتبی، توافق روی محدوده و گزارش پیشرفت. این‌طوری تصمیم‌ها برای هر دو طرف روشن می‌ماند." },
      { q: "پرداخت چطور است؟", a: "قیمت‌ها به دلار و پرداخت با USDT است. فاکتوری با مبلغ و شبکه‌ی انتقال برایتان می‌فرستیم. پرداخت می‌تواند مرحله‌ای باشد. انتقال USDT برگشت‌پذیر نیست، برای همین محدوده و قیمت را اول مکتوب توافق می‌کنیم." },
      { q: "قیمت نهایی چطور مشخص می‌شود؟", a: "قیمت‌های درج‌شده نقطه‌ی شروع‌اند. بعد از مشاوره، محدوده و قیمت ثابت را مکتوب برایتان می‌فرستیم. تا تأیید شما هیچ کاری شروع نمی‌شود." },
      { q: "نتیجه تضمین دارد؟", a: "نه. نتیجه به داده‌ها، ابزارها و فرایند شما بستگی دارد. ما به محدوده‌ی روشن، گردش‌کار آزمایش‌شده و تحویل مستند متعهدیم. میزان مشخصی از صرفه‌جویی یا درآمد را وعده نمی‌دهیم." },
      { q: "مدیریت عامل‌ها شامل چه کارهایی است؟", a: "نگهداری مداوم عامل‌هایی که برایتان ساخته‌ایم: پایش اجراها و خطاها، بررسی لاگ و کیفیت خروجی، به‌روزرسانی پرامپت، ابزار یا مدل، و شفاف نگه‌داشتن هزینه‌ی مصرف. محدوده و قیمت مکتوب توافق می‌شود." },
      { q: "اگر اتوماسیون خراب شود چه می‌شود؟", a: "تلاش مجدد، مدیریت خطا و هشدار را از ابتدا می‌گذاریم. خطاها گرفته و به یک انسان ارجاع می‌شوند و بی‌صدا از بین نمی‌روند. برای کارهای حساس می‌شود تأیید شما را پیش از اجرا الزامی کرد." },
      { q: "داده‌ها و حساب‌های من چه می‌شود؟", a: "فقط دسترسی‌ای را می‌خواهیم که پروژه لازم دارد، ترجیحاً با حساب‌های محدودی که هر زمان بتوانید لغو کنید. اینکه به چه چیزی دسترسی داریم و چطور استفاده می‌کنیم، مکتوب توافق می‌شود. جزئیات در سیاست حریم خصوصی هست." },
      { q: "از هوش مصنوعی برای کار استفاده می‌کنید؟", a: "بله. از ابزارهای هوش مصنوعی استفاده می‌کنیم و هر گردش‌کار پیش از تحویل توسط یک انسان بررسی و آزمایش می‌شود." },
      { q: "اگر پروژه‌ام از Pro بزرگ‌تر باشد؟", a: "باز هم توضیحش را بفرستید. قیمت می‌دهیم، یا اگر مناسب نبود، صریح می‌گوییم." },
    ],
  },
  team: {
    title: "تیم",
    sub: "حوزه‌های تخصصی‌ای که پشت هر پروژه هستند.",
    roles: [
      { icon: "bot", title: "مهندسی عامل‌ها", body: "طراحی عامل‌ها، ابزارها، محدودیت‌ها و نقطه‌های تحویل به انسان." },
      { icon: "workflow", title: "اتوماسیون و یکپارچه‌سازی", body: "ساخت گردش‌کار n8n و اتصال ابزارها با API و وب‌هوک." },
      { icon: "activity", title: "عملیات عامل‌ها", body: "پایش اجراها، بررسی لاگ و کیفیت خروجی، تنظیم پرامپت و مدل و کنترل هزینه." },
      { icon: "message", title: "تحویل و ارتباط", body: "تعیین محدوده، نوشتن پیشنهاد و گزارش مکتوب به شما." },
    ],
  },
  about: {
    title: "درباره‌ی Tekbin AI",
    body: "Tekbin AI تیمی از متخصصان اتوماسیون و مدیریت عامل‌های هوش مصنوعی است، با رهبری یک متخصص با پنج سال سابقه‌ی عملی. ما برای کسب‌وکارهای کوچک و در حال رشد عامل هوش مصنوعی و اتوماسیون می‌سازیم و اجرا می‌کنیم. محدوده‌ی روشن، توافق مکتوب، تحویل آزمایش‌شده.",
    points: ["محدوده و قیمت ثابت، مکتوب", "هر گردش‌کار پیش از تحویل آزمایش می‌شود", "لاگ، مدیریت خطا و تأیید انسانی از ابتدا"],
  },
  footer: { rights: "همه‌ی حقوق محفوظ است.", services: "خدمات", pricing: "قیمت‌ها", privacy: "حریم خصوصی", terms: "شرایط استفاده", contact: "تماس", privacyHref: "/fa/privacy", termsHref: "/fa/terms" },
};

export const dicts: Record<Lang, Dict> = { en, fa };
