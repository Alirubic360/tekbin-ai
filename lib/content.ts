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
  footer: { rights: string; services: string; pricing: string; privacy: string; terms: string; contact: string; privacyHref: string; termsHref: string; caseLabel: string; caseHref: string; payLabel: string; payHref: string };
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
    body: "We build agents and n8n workflows for your business, then stay on to watch them: logs, failures, costs, output quality. Before we write a line of anything, you get a plan, a price and a timeline in writing.",
    cta: "Send your project brief",
    secondary: "See what we build",
  },
  services: {
    title: "What we build",
    sub: "Small, focused systems. Each one built around a single outcome.",
    items: [
      { icon: "bot", title: "AI agent development", body: "One agent, one job, done well: lead qualification, support triage, research, CRM updates. Each agent gets its own tools, hard limits and a clean handoff to a person." },
      { icon: "chart", title: "Agent management", body: "Agents drift over time. We watch runs and logs, check output quality, update prompts and models, and keep token spend visible so nothing surprises you." },
      { icon: "workflow", title: "Workflow automation", body: "n8n workflows with retries, error handling and alerts. When something breaks at 2 a.m., you hear about it that night, not a week later." },
      { icon: "plug", title: "Integrations and APIs", body: "Your CRM, inbox, calendar, databases and internal tools, wired together with APIs and webhooks wherever they exist." },
      { icon: "mail", title: "Human approval", body: "Some actions shouldn't run on their own: refunds, client emails, record changes. We add approval steps and review queues so a person signs off first." },
    ],
  },
  ticker: "Tools we work with",
  tickerNote: "Names and logos belong to their respective owners and do not imply endorsement.",
  process: {
    title: "How it works",
    sub: "Everything in writing, one step at a time.",
    steps: [
      { title: "Discovery", body: "You send a brief. We map the process, the tools and the data, and agree on what “working” actually means." },
      { title: "Proposal", body: "You get the design, scope, timeline and a fixed price in writing. Nothing starts until you say yes." },
      { title: "Build and test", body: "We build against your real cases, add logging, error handling and approval steps, then try to break it with edge cases." },
      { title: "Launch and handover", body: "We deploy, watch the first runs closely and hand over documentation. Ongoing management is optional." },
    ],
  },
  pricing: {
    title: "Pricing",
    sub: "Prices are in USD, paid in USDT. They're starting points: final scope and price are agreed in writing before any work begins.",
    from: "from",
    plans: [
      { name: "Starter", price: "$1,000", showFrom: true, blurb: "One automation or one single-task agent, live and documented.", features: ["One workflow or single-task agent", "Up to 3 integrations", "Error handling and run logs", "Handover documentation", "Short support window"], kind: "standard", cta: "Send your project brief" },
      { name: "Pro", price: "$3,000", showFrom: true, blurb: "A connected system across your operations.", features: ["Several workflows or an agent with tool use", "Custom API integrations", "Human approval steps", "Monitoring, logging and alerts", "Longer support window", "Optional monthly agent management"], tag: "Best for scaling teams", kind: "featured", cta: "Send your project brief" },
      { name: "Founding Client", price: "20% off", showFrom: false, blurb: "For our first three client projects, on a Starter or Pro scope.", features: ["Same scope and quality as the standard plan", "Fixed scope and price, in writing", "Staged payments: part at the start, part on delivery", "In return: your written OK to share the project as a case study"], tag: "Limited to 3 projects", kind: "founding", cta: "Apply as a founding client" },
    ],
    customLead: "Bigger than that?",
    customLink: "Send us the details",
    customTail: "and we'll quote it separately.",
  },
  faq: {
    title: "Questions",
    items: [
      { q: "How do we communicate?", a: "Mostly in writing. You send a brief, we ask questions, we send a written proposal, and we keep you posted by email. It keeps scope and decisions clear for both sides." },
      { q: "How do I pay?", a: "Prices are in USD and paid in USDT. We send an invoice with the amount and the network, and payments can be staged. USDT transfers can't be reversed, so we always agree scope and price in writing first." },
      { q: "How is the final price set?", a: "The prices on this page are starting points. After your brief we send a fixed scope and price in writing, and nothing starts until you approve it." },
      { q: "Do you guarantee results?", a: "No. Results depend on your data, tools and process, and anyone promising exact savings is guessing. What we do commit to: a clear scope, tested workflows and a documented handover." },
      { q: "Is there a trial period?", a: "For scoped agent projects, yes: we can run the agent for 14 days in a test environment. If its error rate on the agreed test cases is not under 1%, you do not have to continue. The test cases and terms are agreed in writing before we start." },
      { q: "What does agent management include?", a: "We keep the agents we've built running well: watching runs and failures, reading logs, checking output quality, updating prompts, tools or models, and keeping usage costs visible. Scope and price are agreed in writing." },
      { q: "What happens when an automation fails?", a: "It shouldn't fail silently. We add retries, error handling and alerts, so a failure gets caught and routed to a person. For sensitive actions we can also require your approval before anything runs." },
      { q: "What happens to my data and accounts?", a: "We only ask for the access the project needs, ideally through limited accounts you can revoke at any time. What we can access and how we use it is agreed in writing. More in the Privacy Policy." },
      { q: "Do you use AI to do the work?", a: "Yes, like anyone building in this space. A person reviews and tests every workflow before handover." },
      { q: "What if my project is bigger than Pro?", a: "Send the brief anyway. We'll quote it, or tell you straight if it's not a good fit." },
    ],
  },
  team: {
    title: "The team",
    sub: "The areas of expertise behind every project.",
    roles: [
      { icon: "bot", title: "Agent engineering", body: "Designs the agents themselves: their tools, their limits and where they hand off to people." },
      { icon: "workflow", title: "Automation and integrations", body: "Builds the n8n workflows and connects your tools through APIs and webhooks." },
      { icon: "activity", title: "Agent operations", body: "Watches runs and logs, checks output quality, tunes prompts and models, tracks costs." },
      { icon: "message", title: "Delivery and communication", body: "Scopes the work, writes the proposal and keeps you updated in writing." },
    ],
  },
  about: {
    title: "About Tekbin AI",
    body: "Tekbin AI is a team of specialists in automation and AI agent management, led by someone with five years of hands-on experience. We build and run AI agents and workflow automation for small and growing businesses: clear scope, written agreements, tested handover.",
    points: ["Fixed scope and price, in writing", "Every workflow tested before handover", "Logging, error handling and human approval built in"],
  },
  footer: { rights: "All rights reserved.", services: "Services", pricing: "Pricing", privacy: "Privacy", terms: "Terms", contact: "Contact", privacyHref: "/privacy", termsHref: "/terms", caseLabel: "Case study", caseHref: "/cases/real-estate-lead-agent", payLabel: "Pay with USDT", payHref: "/payments" },
};

export const fa: Dict = {
  lang: "fa",
  home: "/fa",
  switchLabel: "English",
  switchHref: "/",
  lastUpdated: "آخرین به‌روزرسانی",
  nav: { services: "خدمات", process: "روند کار", pricing: "قیمت‌ها", faq: "پرسش‌ها", cta: "درخواست مشاوره" },
  hero: {
    badge: "عامل هوش مصنوعی و اتوماسیون n8n",
    line1: "عامل هوش مصنوعی می‌سازیم",
    line2: "و مدیریتش می‌کنیم.",
    body: "برای کسب‌وکار شما عامل هوش مصنوعی و گردش‌کار n8n می‌سازیم و بعدش هم کنارتان می‌مانیم: لاگ‌ها، خطاها، هزینه‌ها و کیفیت خروجی را زیر نظر داریم. قبل از اینکه کاری شروع شود، یک برنامه، قیمت و زمان‌بندی مکتوب دستتان می‌دهیم.",
    cta: "درخواست مشاوره",
    secondary: "ببینید چه می‌سازیم",
  },
  services: {
    title: "چه چیزی می‌سازیم",
    sub: "سیستم‌های کوچک و متمرکز؛ هر کدام برای یک نتیجه‌ی مشخص.",
    items: [
      { icon: "bot", title: "توسعه‌ی عامل هوش مصنوعی", body: "هر عامل یک کار را خوب انجام می‌دهد: ارزیابی سرنخ، دسته‌بندی تیکت‌های پشتیبانی، پژوهش، به‌روزرسانی CRM. هر کدام ابزار و محدودیت خودش را دارد و جایی که لازم باشد، کار را تمیز به یک آدم تحویل می‌دهد." },
      { icon: "chart", title: "مدیریت عامل‌ها (Agent Management)", body: "عامل‌ها با گذر زمان افت می‌کنند. اجراها و لاگ‌ها را می‌بینیم، کیفیت خروجی را می‌سنجیم، پرامپت و مدل را به‌روز می‌کنیم و هزینه‌ی توکن را جلوی چشم نگه می‌داریم تا غافلگیر نشوید." },
      { icon: "workflow", title: "اتوماسیون گردش‌کار", body: "گردش‌کارهای n8n با تلاش مجدد، مدیریت خطا و هشدار. اگر نیمه‌شب چیزی خراب شود، همان شب خبردار می‌شوید، نه یک هفته بعد." },
      { icon: "plug", title: "یکپارچه‌سازی و API", body: "CRM، ایمیل، تقویم، پایگاه‌داده و ابزارهای داخلی خودتان؛ هر جا API و وب‌هوک باشد، با همان‌ها به هم وصل می‌شوند." },
      { icon: "mail", title: "تأیید انسانی", body: "بعضی کارها نباید خودکار انجام شوند: بازپرداخت، ایمیل به مشتری، تغییر یک رکورد. مرحله‌ی تأیید و صف بازبینی می‌گذاریم تا اول یک نفر تأیید کند." },
    ],
  },
  ticker: "ابزارهایی که با آن‌ها کار می‌کنیم",
  tickerNote: "نام و لوگوها متعلق به صاحبان آن‌هاست و به معنای تأیید یا شراکت نیست.",
  process: {
    title: "روند کار",
    sub: "همه‌چیز مکتوب و قدم‌به‌قدم.",
    steps: [
      { title: "کشف نیاز", body: "توضیح پروژه را می‌فرستید یا با هم حرف می‌زنیم. فرایند، ابزارها و داده‌ها را روی کاغذ می‌آوریم و روشن می‌کنیم «درست کار کردن» یعنی چه." },
      { title: "پیشنهاد", body: "طراحی، محدوده، زمان‌بندی و قیمت ثابت را مکتوب می‌گیرید. تا شما تأیید نکنید، کاری شروع نمی‌شود." },
      { title: "ساخت و آزمایش", body: "روی نمونه‌های واقعی خودتان می‌سازیم، لاگ و مدیریت خطا و مراحل تأیید اضافه می‌کنیم و حالت‌های خاص را عمداً امتحان می‌کنیم تا ببینیم کجا خراب می‌شود." },
      { title: "راه‌اندازی و تحویل", body: "مستقر می‌کنیم، اجراهای اول را از نزدیک می‌پاییم و مستندات را تحویل می‌دهیم. مدیریت مداوم اختیاری است." },
    ],
  },
  pricing: {
    title: "قیمت‌ها",
    sub: "قیمت‌ها به دلار است و پرداخت با USDT. اینجا فقط نقطه‌ی شروع را می‌بینید؛ محدوده و قیمت نهایی قبل از هر کاری مکتوب توافق می‌شود.",
    from: "از",
    plans: [
      { name: "Starter", price: "$1,000", showFrom: true, blurb: "یک اتوماسیون یا یک عامل تک‌وظیفه‌ای؛ آماده و مستندسازی‌شده.", features: ["یک گردش‌کار یا یک عامل تک‌وظیفه‌ای", "حداکثر ۳ یکپارچه‌سازی", "مدیریت خطا و لاگ اجرا", "مستندات تحویل", "دوره‌ی کوتاه پشتیبانی"], kind: "standard", cta: "درخواست مشاوره" },
      { name: "Pro", price: "$3,000", showFrom: true, blurb: "یک سیستم یکپارچه برای کل عملیات شما.", features: ["چند گردش‌کار یا عامل با استفاده از ابزار", "یکپارچه‌سازی سفارشی با API", "مراحل تأیید انسانی", "پایش، لاگ و هشدار", "دوره‌ی پشتیبانی طولانی‌تر", "مدیریت ماهانه‌ی عامل‌ها (اختیاری)"], tag: "مناسب تیم‌های در حال رشد", kind: "featured", cta: "درخواست مشاوره" },
      { name: "مشتریان اول", price: "۲۰٪ تخفیف", showFrom: false, blurb: "برای سه پروژه‌ی اول ما، با محدوده‌ی Starter یا Pro.", features: ["همان محدوده و کیفیت پلن عادی", "محدوده و قیمت ثابت، مکتوب", "پرداخت مرحله‌ای: بخشی در شروع، بخشی هنگام تحویل", "در عوض: اجازه‌ی کتبی شما برای معرفی پروژه به‌عنوان نمونه‌کار"], tag: "محدود به ۳ پروژه", kind: "founding", cta: "درخواست پلن مشتریان اول" },
    ],
    customLead: "پروژه‌تان بزرگ‌تر است؟",
    customLink: "جزئیاتش را برایمان بنویسید",
    customTail: "تا جداگانه قیمت بدهیم.",
  },
  faq: {
    title: "پرسش‌ها",
    items: [
      { q: "ارتباط ما چطور است؟", a: "بعد از یک مشاوره‌ی اولیه، همه‌چیز را مکتوب می‌کنیم: پیشنهاد، توافق روی محدوده و گزارش پیشرفت. این‌طوری هر دو طرف می‌دانند دقیقاً روی چه چیزی توافق کرده‌اند." },
      { q: "پرداخت چطور است؟", a: "قیمت‌ها به دلار است و پرداخت با USDT. فاکتوری با مبلغ و شبکه‌ی انتقال برایتان می‌فرستیم و پرداخت می‌تواند مرحله‌ای باشد. انتقال USDT برگشت‌پذیر نیست؛ برای همین، محدوده و قیمت را همیشه اول مکتوب توافق می‌کنیم." },
      { q: "قیمت نهایی چطور مشخص می‌شود؟", a: "قیمت‌های این صفحه نقطه‌ی شروع‌اند. بعد از مشاوره، محدوده و قیمت ثابت را مکتوب برایتان می‌فرستیم و تا تأیید شما کاری شروع نمی‌شود." },
      { q: "نتیجه تضمین دارد؟", a: "نه. نتیجه به داده، ابزار و فرایند شما بستگی دارد و هر کسی عدد دقیق صرفه‌جویی تضمین کند، دارد حدس می‌زند. چیزی که تعهد می‌دهیم: محدوده‌ی روشن، گردش‌کار آزمایش‌شده و تحویل مستند." },
      { q: "دوره آزمایشی دارید؟", a: "برای پروژه‌های ایجنت با محدوده مشخص، بله: می‌توانیم ایجنت را ۱۴ روز در محیط تست اجرا کنیم. اگر نرخ خطای آن روی موارد تست توافق‌شده زیر ۱٪ نبود، لازم نیست ادامه دهید. موارد تست و شرایط قبل از شروع مکتوب توافق می‌شود." },
      { q: "مدیریت عامل‌ها شامل چه کارهایی است؟", a: "نگه‌داشتن عامل‌هایی که برایتان ساخته‌ایم: دیدن اجراها و خطاها، خواندن لاگ‌ها، سنجیدن کیفیت خروجی، به‌روزرسانی پرامپت و ابزار و مدل، و شفاف نگه‌داشتن هزینه‌ی مصرف. محدوده و قیمتش مکتوب توافق می‌شود." },
      { q: "اگر اتوماسیون خراب شود چه می‌شود؟", a: "نباید بی‌صدا خراب شود. تلاش مجدد، مدیریت خطا و هشدار می‌گذاریم تا خطا گرفته شود و به یک نفر برسد. برای کارهای حساس هم می‌شود تأیید شما را قبل از اجرا الزامی کرد." },
      { q: "داده‌ها و حساب‌های من چه می‌شود؟", a: "فقط به دسترسی‌ای نیاز داریم که پروژه لازم دارد، ترجیحاً از طریق حساب‌های محدودی که هر وقت خواستید لغو کنید. به چه چیزی دسترسی داریم و چطور استفاده می‌کنیم، مکتوب توافق می‌شود. جزئیات در سیاست حریم خصوصی هست." },
      { q: "برای کار از هوش مصنوعی استفاده می‌کنید؟", a: "بله، مثل هر کسی که امروز در این حوزه کار می‌کند. هر گردش‌کار قبل از تحویل توسط یک آدم بررسی و تست می‌شود." },
      { q: "اگر پروژه‌ام از Pro بزرگ‌تر باشد؟", a: "باز هم توضیحش را بفرستید. قیمت می‌دهیم، یا اگر به درد هم نمی‌خوردیم، رک می‌گوییم." },
    ],
  },
  team: {
    title: "تیم",
    sub: "حوزه‌های تخصصی‌ای که پشت هر پروژه هستند.",
    roles: [
      { icon: "bot", title: "مهندسی عامل‌ها", body: "طراحی خود عامل‌ها: ابزارها، محدودیت‌ها و جایی که کار را به آدم‌ها می‌سپارند." },
      { icon: "workflow", title: "اتوماسیون و یکپارچه‌سازی", body: "ساخت گردش‌کارهای n8n و وصل کردن ابزارهای شما با API و وب‌هوک." },
      { icon: "activity", title: "عملیات عامل‌ها", body: "دیدن اجراها و لاگ‌ها، سنجیدن کیفیت خروجی، تنظیم پرامپت و مدل و کنترل هزینه." },
      { icon: "message", title: "تحویل و ارتباط", body: "تعیین محدوده، نوشتن پیشنهاد و گزارش مکتوب به شما." },
    ],
  },
  about: {
    title: "درباره‌ی Tekbin AI",
    body: "Tekbin AI تیمی از متخصصان اتوماسیون و مدیریت عامل‌های هوش مصنوعی است، با رهبری کسی که پنج سال تجربه‌ی عملی در این کار دارد. برای کسب‌وکارهای کوچک و در حال رشد عامل هوش مصنوعی و اتوماسیون می‌سازیم و اجرا می‌کنیم؛ با محدوده‌ی روشن، توافق مکتوب و تحویل آزمایش‌شده.",
    points: ["محدوده و قیمت ثابت، مکتوب", "هر گردش‌کار قبل از تحویل آزمایش می‌شود", "لاگ، مدیریت خطا و تأیید انسانی از همان ابتدا"],
  },
  footer: { rights: "همه‌ی حقوق محفوظ است.", services: "خدمات", pricing: "قیمت‌ها", privacy: "حریم خصوصی", terms: "شرایط استفاده", contact: "تماس", privacyHref: "/fa/privacy", termsHref: "/fa/terms", caseLabel: "نمونه کار", caseHref: "/fa/cases/real-estate-lead-agent", payLabel: "پرداخت با USDT", payHref: "/fa/payments" },
};

export const dicts: Record<Lang, Dict> = { en, fa };
