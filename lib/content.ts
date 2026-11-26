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
  footer: { tagline: string; rights: string; services: string; pricing: string; privacy: string; terms: string; contact: string; privacyHref: string; termsHref: string; caseLabel: string; caseHref: string; payLabel: string; payHref: string };
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
    body: "We build AI agents and n8n workflows for your business, and we stay on to keep an eye on them: logs, failures, costs, output quality. Before we start, you get the plan, the price and the timeline in writing.",
    cta: "Send your project brief",
    secondary: "See what we build",
  },
  services: {
    title: "What we build",
    sub: "Custom AI agent development, n8n workflow automation and ongoing agent management. Small, focused systems, each built around a single outcome.",
    items: [
      { icon: "bot", title: "AI agent development", body: "One agent, one job, done well: lead qualification, support triage, research, CRM updates. Each agent gets its own tools, hard limits and a clean handoff to a person." },
      { icon: "chart", title: "Agent management", body: "Agents drift over time. We read the logs, check the output, update prompts and models, and keep an eye on token spend so the bill never surprises you." },
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
      { q: "How do we communicate?", a: "Mostly in writing. You send a brief, we ask questions, we send a proposal, and we keep you posted by email. That way both sides always know what was agreed." },
      { q: "How do I pay?", a: "Prices are in USD and paid in USDT. We send an invoice with the amount and the network, and payments can be staged. USDT transfers can't be reversed, so we always agree scope and price in writing first." },
      { q: "How is the final price set?", a: "The prices on this page are starting points. After your brief we send a fixed scope and price in writing, and nothing starts until you approve it." },
      { q: "Do you guarantee results?", a: "No. Results depend on your data, tools and process, and anyone promising exact savings is guessing. What we do commit to: a clear scope, tested workflows and a documented handover." },
      { q: "Is there a trial period?", a: "For scoped agent projects, yes: we can run the agent for 14 days in a test environment. If its error rate on the agreed test cases is not under 1%, you do not have to continue. The test cases and terms are agreed in writing before we start." },
      { q: "What does agent management include?", a: "We keep the agents we've built running well: watching runs and failures, reading logs, checking output quality, updating prompts, tools or models, and keeping usage costs visible. Scope and price are agreed in writing." },
      { q: "What happens when an automation fails?", a: "It shouldn't fail silently. We add retries, error handling and alerts, so a failure gets caught and routed to a person. For sensitive actions we can also require your approval before anything runs." },
      { q: "What happens to my data and accounts?", a: "We only ask for the access the project needs, ideally through limited accounts you can revoke at any time. What we can access and how we use it is agreed in writing. More in the Privacy Policy." },
      { q: "What does an AI automation agency do?", a: "We find the repetitive, rule-based work in your business and replace it with AI agents and automated workflows: lead qualification, support triage, CRM updates, reporting. Then we monitor them so they keep working." },
      { q: "How much does AI agent development cost?", a: "It depends on scope, integrations and how much human approval you want. Our plans start at $1,000 for a single-task agent or automation and $3,000 for a connected system. After your brief we send a fixed price in writing." },
      { q: "Do you use AI to do the work?", a: "Yes, like everyone building in this space. A person reviews and tests every workflow before we hand it over." },
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
  footer: { tagline: "Automation that stays up.", rights: "All rights reserved.", services: "Services", pricing: "Pricing", privacy: "Privacy", terms: "Terms", contact: "Contact", privacyHref: "/privacy", termsHref: "/terms", caseLabel: "Case study", caseHref: "/cases/real-estate-lead-agent", payLabel: "Pay with USDT", payHref: "/payments" },
};

export const fa: Dict = {
  lang: "fa",
  home: "/fa",
  switchLabel: "English",
  switchHref: "/",
  lastUpdated: "آخرین به‌روزرسانی",
  nav: { services: "خدمات", process: "روند کار", pricing: "قیمت‌ها", faq: "پرسش‌ها", cta: "درخواست مشاوره" },
  hero: {
    badge: "ایجنت هوش مصنوعی و اتوماسیون n8n",
    line1: "ایجنت می‌سازیم",
    line2: "و مدیریتش می‌کنیم.",
    body: "برای کسب‌وکارتان ایجنت هوش مصنوعی و گردش‌کار n8n می‌سازیم و بعد از تحویل هم کنارتان می‌مانیم: لاگ‌ها، خطاها، هزینه‌ها و کیفیت خروجی را می‌پاییم. قبل از شروع، برنامه، قیمت و زمان‌بندی را مکتوب دستتان می‌دهیم.",
    cta: "درخواست مشاوره",
    secondary: "ببینید چه می‌سازیم",
  },
  services: {
    title: "چه چیزی می‌سازیم",
    sub: "توسعه‌ی ایجنت هوش مصنوعی سفارشی، اتوماسیون گردش‌کار با n8n و مدیریت مداوم ایجنت‌ها. سیستم‌های کوچک و متمرکز، هر کدام برای یک نتیجه‌ی مشخص.",
    items: [
      { icon: "bot", title: "توسعه‌ی ایجنت هوش مصنوعی", body: "هر ایجنت یک کار را خوب انجام می‌دهد: ارزیابی سرنخ، دسته‌بندی تیکت‌های پشتیبانی، پژوهش، به‌روزرسانی CRM. هر کدام ابزار و محدودیت خودش را دارد و جایی که لازم باشد، کار را تمیز به یک آدم تحویل می‌دهد." },
      { icon: "chart", title: "مدیریت ایجنت‌ها (Agent Management)", body: "ایجنت‌ها با گذر زمان افت می‌کنند. اجراها و لاگ‌ها را می‌بینیم، کیفیت خروجی را می‌سنجیم، پرامپت و مدل را به‌روز می‌کنیم و هزینه‌ی توکن را جلوی چشم نگه می‌داریم تا غافلگیر نشوید." },
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
      { title: "شناخت نیاز", body: "توضیح پروژه را می‌فرستید یا با هم حرف می‌زنیم. فرایند، ابزارها و داده‌ها را روی کاغذ می‌آوریم و روشن می‌کنیم «درست کار کردن» یعنی چه." },
      { title: "پیشنهاد", body: "طراحی، محدوده، زمان‌بندی و قیمت ثابت را مکتوب می‌گیرید. تا شما تأیید نکنید، کاری شروع نمی‌شود." },
      { title: "ساخت و آزمایش", body: "روی نمونه‌های واقعی خودتان می‌سازیم، لاگ و مدیریت خطا و مراحل تأیید اضافه می‌کنیم و حالت‌های خاص را عمداً امتحان می‌کنیم تا ببینیم کجا خراب می‌شود." },
      { title: "راه‌اندازی و تحویل", body: "راه‌اندازی می‌کنیم، اجراهای اول را از نزدیک می‌پاییم و مستندات را تحویل می‌دهیم. مدیریت مداوم اختیاری است." },
    ],
  },
  pricing: {
    title: "قیمت‌ها",
    sub: "قیمت‌ها به دلار است و پرداخت با USDT. اینجا فقط نقطه‌ی شروع را می‌بینید؛ محدوده و قیمت نهایی قبل از هر کاری مکتوب توافق می‌شود.",
    from: "از",
    plans: [
      { name: "Starter", price: "$1,000", showFrom: true, blurb: "یک اتوماسیون یا یک ایجنت تک‌وظیفه‌ای؛ آماده و مستندسازی‌شده.", features: ["یک گردش‌کار یا یک ایجنت تک‌وظیفه‌ای", "حداکثر ۳ یکپارچه‌سازی", "مدیریت خطا و لاگ اجرا", "مستندات تحویل", "دوره‌ی کوتاه پشتیبانی"], kind: "standard", cta: "درخواست مشاوره" },
      { name: "Pro", price: "$3,000", showFrom: true, blurb: "یک سیستم یکپارچه برای کل عملیات شما.", features: ["چند گردش‌کار یا ایجنت با استفاده از ابزار", "یکپارچه‌سازی سفارشی با API", "مراحل تأیید انسانی", "پایش، لاگ و هشدار", "دوره‌ی پشتیبانی طولانی‌تر", "مدیریت ماهانه‌ی ایجنت‌ها (اختیاری)"], tag: "مناسب تیم‌های در حال رشد", kind: "featured", cta: "درخواست مشاوره" },
      { name: "مشتریان اول", price: "۲۰٪ تخفیف", showFrom: false, blurb: "برای سه پروژه‌ی اول ما، با محدوده‌ی Starter یا Pro.", features: ["همان محدوده و کیفیت پلن عادی", "محدوده و قیمت ثابت، مکتوب", "پرداخت مرحله‌ای: بخشی در شروع، بخشی هنگام تحویل", "در عوض: اجازه‌ی کتبی شما برای معرفی پروژه به‌عنوان نمونه‌کار"], tag: "محدود به ۳ پروژه", kind: "founding", cta: "درخواست پلن مشتریان اول" },
    ],
    customLead: "پروژه‌تان بزرگ‌تر است؟",
    customLink: "جزئیاتش را برایمان بنویسید",
    customTail: "تا جداگانه قیمت بدهیم.",
  },
  faq: {
    title: "پرسش‌ها",
    items: [
      { q: "ارتباط ما چطور است؟", a: "بعد از یک گفتگوی اولیه، همه‌چیز را مکتوب می‌کنیم: پیشنهاد، محدوده و گزارش پیشرفت. این‌طوری هر دو طرف دقیقاً می‌دانند روی چه چیزی توافق کرده‌ایم." },
      { q: "پرداخت چطور است؟", a: "قیمت‌ها به دلار است و پرداخت با USDT. فاکتوری با مبلغ و شبکه‌ی انتقال برایتان می‌فرستیم و پرداخت می‌تواند مرحله‌ای باشد. انتقال USDT برگشت‌پذیر نیست؛ برای همین، محدوده و قیمت را همیشه اول مکتوب توافق می‌کنیم." },
      { q: "قیمت نهایی چطور مشخص می‌شود؟", a: "قیمت‌های این صفحه نقطه‌ی شروع‌اند. بعد از مشاوره، محدوده و قیمت ثابت را مکتوب برایتان می‌فرستیم و تا تأیید شما کاری شروع نمی‌شود." },
      { q: "نتیجه تضمین دارد؟", a: "نه. نتیجه به داده، ابزار و فرایند شما بستگی دارد و هر کسی عدد دقیق صرفه‌جویی تضمین کند، دارد حدس می‌زند. چیزی که تعهد می‌دهیم: محدوده‌ی روشن، گردش‌کار آزمایش‌شده و تحویل مستند." },
      { q: "دوره آزمایشی دارید؟", a: "برای پروژه‌های ایجنت با محدوده مشخص، بله: می‌توانیم ایجنت را ۱۴ روز در محیط تست اجرا کنیم. اگر نرخ خطای آن روی موارد تست توافق‌شده زیر ۱٪ نبود، لازم نیست ادامه دهید. موارد تست و شرایط قبل از شروع مکتوب توافق می‌شود." },
      { q: "مدیریت ایجنت‌ها شامل چه کارهایی است؟", a: "نگه‌داشتن ایجنت‌هایی که برایتان ساخته‌ایم: دیدن اجراها و خطاها، خواندن لاگ‌ها، سنجیدن کیفیت خروجی، به‌روزرسانی پرامپت و ابزار و مدل، و شفاف نگه‌داشتن هزینه‌ی مصرف. محدوده و قیمتش مکتوب توافق می‌شود." },
      { q: "اگر اتوماسیون خراب شود چه می‌شود؟", a: "نباید بی‌صدا خراب شود. تلاش مجدد، مدیریت خطا و هشدار می‌گذاریم تا خطا گرفته شود و به یک نفر برسد. برای کارهای حساس هم می‌شود تأیید شما را قبل از اجرا الزامی کرد." },
      { q: "داده‌ها و حساب‌های من چه می‌شود؟", a: "فقط به دسترسی‌ای نیاز داریم که پروژه لازم دارد، ترجیحاً از طریق حساب‌های محدودی که هر وقت خواستید لغو کنید. به چه چیزی دسترسی داریم و چطور استفاده می‌کنیم، مکتوب توافق می‌شود. جزئیات در سیاست حریم خصوصی هست." },
      { q: "آژانس اتوماسیون هوش مصنوعی دقیقاً چه کار می‌کند؟", a: "کارهای تکراری و قاعده‌مند کسب‌وکار شما را پیدا می‌کنیم و با ایجنت هوش مصنوعی و گردش‌کار خودکار جایگزین می‌کنیم: غربال سرنخ، دسته‌بندی پشتیبانی، به‌روزرسانی CRM، گزارش‌گیری. بعد هم پایششان می‌کنیم تا درست کار کنند." },
      { q: "هزینه‌ی ساخت ایجنت هوش مصنوعی چقدر است؟", a: "به محدوده کار، تعداد یکپارچه‌سازی‌ها و میزان تأیید انسانی بستگی دارد. پلن‌های ما از ۱٬۰۰۰ دلار برای یک ایجنت یا اتوماسیون تک‌وظیفه‌ای و ۳٬۰۰۰ دلار برای یک سیستم یکپارچه شروع می‌شود. بعد از توضیح پروژه، قیمت ثابت را مکتوب می‌فرستیم." },
      { q: "برای کار از هوش مصنوعی استفاده می‌کنید؟", a: "بله، مثل هر کسی که امروز در این حوزه کار می‌کند. هر گردش‌کار قبل از تحویل توسط یک آدم بررسی و تست می‌شود." },
      { q: "اگر پروژه‌ام از Pro بزرگ‌تر باشد؟", a: "باز هم توضیحش را بفرستید. قیمت می‌دهیم، یا اگر به درد هم نمی‌خوردیم، رک می‌گوییم." },
    ],
  },
  team: {
    title: "تیم",
    sub: "حوزه‌های تخصصی‌ای که پشت هر پروژه هستند.",
    roles: [
      { icon: "bot", title: "مهندسی ایجنت‌ها", body: "طراحی خود ایجنت‌ها: ابزارها، محدودیت‌ها و جایی که کار را به آدم‌ها می‌سپارند." },
      { icon: "workflow", title: "اتوماسیون و یکپارچه‌سازی", body: "ساخت گردش‌کارهای n8n و وصل کردن ابزارهای شما با API و وب‌هوک." },
      { icon: "activity", title: "عملیات ایجنت‌ها", body: "دیدن اجراها و لاگ‌ها، سنجیدن کیفیت خروجی، تنظیم پرامپت و مدل و کنترل هزینه." },
      { icon: "message", title: "تحویل و ارتباط", body: "تعیین محدوده، نوشتن پیشنهاد و گزارش مکتوب به شما." },
    ],
  },
  about: {
    title: "درباره‌ی Tekbin AI",
    body: "Tekbin AI تیمی از متخصصان اتوماسیون و مدیریت ایجنت‌های هوش مصنوعی است، با رهبری کسی که پنج سال تجربه‌ی عملی در این کار دارد. برای کسب‌وکارهای کوچک و در حال رشد ایجنت هوش مصنوعی و اتوماسیون می‌سازیم و اجرا می‌کنیم؛ با محدوده‌ی روشن، توافق مکتوب و تحویل آزمایش‌شده.",
    points: ["محدوده و قیمت ثابت، مکتوب", "هر گردش‌کار قبل از تحویل آزمایش می‌شود", "لاگ، مدیریت خطا و تأیید انسانی از همان ابتدا"],
  },
  footer: { tagline: "اتوماسیونی که سرپا می‌ماند.", rights: "همه‌ی حقوق محفوظ است.", services: "خدمات", pricing: "قیمت‌ها", privacy: "حریم خصوصی", terms: "شرایط استفاده", contact: "تماس", privacyHref: "/fa/privacy", termsHref: "/fa/terms", caseLabel: "نمونه کار", caseHref: "/fa/cases/real-estate-lead-agent", payLabel: "پرداخت با USDT", payHref: "/fa/payments" },
};

export const dicts: Record<Lang, Dict> = { en, fa };
