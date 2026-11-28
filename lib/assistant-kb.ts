// Tekbin knowledge base: the ONLY facts the assistant may state.
// Every entry is derived from what the website already says (services, process, pricing, FAQ, payments,
// case study) plus general, well-established engineering practice. Nothing here invents a client, a result,
// a timeline or a price. A test (scripts/assistant-test.mjs) fails if an answer contains a number that is
// not in the allowlist, so new numbers must be added deliberately.

export type L = { en: string; fa: string };
export type Entry = {
  id: string;
  kw: { en: string[]; fa: string[] };
  q: L;
  a: L; // paragraphs separated by a blank line; lines starting with "- " are bullets
  src: { label: L; href: string }[];
  next?: string[];
};

// Numbers the knowledge base is allowed to contain (price tiers, discount, trial, limits).
export const ALLOWED_NUMBERS = ["1000", "3000", "20", "3", "14", "1", "5", "4", "35", "1800"];

export const KB: Entry[] = [
  {
    id: "about",
    kw: {
      en: ["what is tekbin", "who are you", "what do you do", "about tekbin", "tekbin ai", "your company", "what is this site"],
      fa: ["تک بین", "تکبین", "شما چه کاری", "چه کار می کنید", "درباره", "شرکت شما", "کی هستید", "چه خدماتی", "چه کاری انجام"],
    },
    q: { en: "What is Tekbin AI?", fa: "Tekbin AI چیست؟" },
    a: {
      en: "Tekbin AI is a studio that designs, builds and runs AI agents and n8n workflow automation for small and growing businesses.\n\nThe approach is deliberately narrow: one agent, one job, done well. Each project starts from a written scope and a fixed price, is tested on your real cases before handover, and can stay under management afterwards.",
      fa: "Tekbin AI یک استودیوی طراحی، ساخت و اجرای ایجنت هوش مصنوعی و اتوماسیون گردش‌کار با n8n برای کسب‌وکارهای کوچک و در حال رشد است.\n\nرویکرد عمداً محدود است: هر ایجنت یک کار را خوب انجام می‌دهد. هر پروژه با محدوده‌ی مکتوب و قیمت ثابت شروع می‌شود، قبل از تحویل روی نمونه‌های واقعی خودتان آزمایش می‌شود و بعد از آن می‌تواند تحت مدیریت بماند.",
    },
    src: [{ label: { en: "Home", fa: "صفحه‌ی اصلی" }, href: "/" }],
    next: ["services", "process", "pricing"],
  },
  {
    id: "services",
    kw: {
      en: ["services", "what do you build", "offer", "capabilities", "what can you build", "build for me", "use cases"],
      fa: ["خدمات", "چه چیزی می سازید", "چه می سازید", "چه کارهایی", "قابلیت", "نمونه کاربرد", "چه ایجنتی"],
    },
    q: { en: "What do you build?", fa: "چه چیزی می‌سازید؟" },
    a: {
      en: "Five areas:\n\n- AI agent development: one agent, one job, for example lead qualification, support triage, research or CRM updates. Each agent gets its own tools, hard limits and a clean hand-off point.\n- Agent management: we watch runs and logs, check output quality, update prompts and models and keep token spend visible.\n- Workflow automation: n8n workflows with retries, error handling and alerts.\n- Integrations and APIs: your CRM, inbox, calendar, databases and internal tools, connected through APIs and webhooks wherever they exist.\n- Human approval: approval steps and review queues for actions that should not run on their own, such as refunds, client emails or record changes.",
      fa: "پنج حوزه:\n\n- توسعه‌ی ایجنت هوش مصنوعی: هر ایجنت یک کار، مثلاً غربال سرنخ، دسته‌بندی پشتیبانی، پژوهش یا به‌روزرسانی CRM. هر ایجنت ابزار، محدودیت سخت و نقطه‌ی تحویل مشخص خودش را دارد.\n- مدیریت ایجنت: اجراها و لاگ‌ها را می‌بینیم، کیفیت خروجی را می‌سنجیم، پرامپت و مدل را به‌روز می‌کنیم و هزینه‌ی توکن را شفاف نگه می‌داریم.\n- اتوماسیون گردش‌کار: گردش‌کارهای n8n با تلاش مجدد، مدیریت خطا و هشدار.\n- یکپارچه‌سازی و API: CRM، ایمیل، تقویم، پایگاه‌داده و ابزارهای داخلی شما، هر جا API و وب‌هوک وجود داشته باشد.\n- تأیید انسانی: مراحل تأیید و صف بازبینی برای کارهایی که نباید خودکار اجرا شوند، مثل بازپرداخت، ایمیل به مشتری یا تغییر رکورد.",
    },
    src: [{ label: { en: "Services", fa: "خدمات" }, href: "/#services" }, { label: { en: "AI agent development", fa: "توسعه‌ی ایجنت هوش مصنوعی" }, href: "/ai-agent-development" }],
    next: ["agent-vs-automation", "integrations", "pricing"],
  },
  {
    id: "agent-vs-automation",
    kw: {
      en: ["agent vs", "difference between agent", "what is an ai agent", "ai agent", "chatbot", "zapier", "workflow vs agent", "automation vs agent", "what is an agent"],
      fa: ["فرق ایجنت", "ایجنت چیست", "عامل هوش مصنوعی چیست", "ایجنت با", "چت بات", "زپیر", "اتوماسیون با ایجنت", "تفاوت"],
    },
    q: { en: "What is the difference between an AI agent, a workflow and a chatbot?", fa: "تفاوت ایجنت هوش مصنوعی، گردش‌کار و چت‌بات چیست؟" },
    a: {
      en: "- A workflow follows fixed steps you define: if this happens, do that. It is predictable and cheap to run, and it is the right tool whenever the rules are clear.\n- An AI agent adds a language model that can interpret messy input (a free-text message, an email) and choose among actions within limits you set. It is useful when the input varies and rules alone would be too rigid.\n- A chatbot is mainly a conversation interface. It talks, but it does not necessarily write to your CRM or trigger actions.\n\nIn practice we combine them: a workflow does the dependable plumbing, the model handles the unstructured part, and a validation step checks the model's output before anything is written or sent.",
      fa: "- گردش‌کار مراحل ثابتی را دنبال می‌کند که خودتان تعریف می‌کنید: اگر این شد، آن را انجام بده. قابل پیش‌بینی و ارزان است و هر جا قاعده‌ها روشن‌اند، ابزار درست همین است.\n- ایجنت هوش مصنوعی یک مدل زبانی اضافه می‌کند که می‌تواند ورودی نامرتب (پیام متنی آزاد، ایمیل) را بفهمد و در چارچوب محدودیت‌هایی که شما می‌گذارید بین چند اقدام انتخاب کند. وقتی ورودی متنوع است و قاعده‌ی ثابت خیلی سفت می‌شود، به کار می‌آید.\n- چت‌بات بیشتر یک رابط گفت‌وگوست. حرف می‌زند، ولی لزوماً در CRM چیزی ثبت نمی‌کند یا اقدامی راه نمی‌اندازد.\n\nدر عمل ترکیب می‌کنیم: گردش‌کار کارهای قابل اتکا را انجام می‌دهد، مدل بخش بی‌ساختار را می‌فهمد و یک گام اعتبارسنجی خروجی مدل را قبل از هر نوشتن یا ارسال بررسی می‌کند.",
    },
    src: [{ label: { en: "Under the hood", fa: "پشت صحنه" }, href: "/#architecture" }],
    next: ["hallucination", "n8n"],
  },
  {
    id: "n8n",
    kw: {
      en: ["n8n", "why n8n", "workflow tool", "self host", "low code", "automation platform"],
      fa: ["n8n", "ان هشت ان", "چرا n8n", "ابزار گردش کار", "سلف هاست", "میزبانی"],
    },
    q: { en: "Why n8n, and when is it not the right tool?", fa: "چرا n8n، و کجا ابزار درستی نیست؟" },
    a: {
      en: "n8n is a workflow automation tool that can be self-hosted. We use it because every step is visible and editable, it connects to most tools through APIs and webhooks, and error handling, retries and logs are first-class features.\n\nIt is a good fit when you need to connect several tools with clear rules and want to see and change every step without heavy custom code. It is a poor fit for very high-volume, low-latency systems, or for logic that is mostly custom software. In those cases a different approach serves you better, and we say so early.",
      fa: "n8n یک ابزار اتوماسیون گردش‌کار است که می‌شود آن را روی سرور خودتان میزبانی کرد. از آن استفاده می‌کنیم چون هر گام دیدنی و قابل ویرایش است، از طریق API و وب‌هوک به بیشتر ابزارها وصل می‌شود و مدیریت خطا، تلاش مجدد و لاگ از قابلیت‌های اصلی‌اش است.\n\nوقتی مناسب است که چند ابزار را با قاعده‌های روشن وصل می‌کنید و می‌خواهید هر گام را بدون کد سنگین ببینید و تغییر بدهید. برای سیستم‌های بسیار پرحجم و کم‌تأخیر، یا منطقی که بیشترش نرم‌افزار سفارشی است، مناسب نیست. در آن موارد راه دیگری بهتر جواب می‌دهد و ما زود همین را می‌گوییم.",
    },
    src: [{ label: { en: "n8n automation services", fa: "خدمات اتوماسیون n8n" }, href: "/n8n-automation-services" }],
    next: ["reliability", "integrations"],
  },
  {
    id: "process",
    kw: {
      en: ["process", "how does it work", "how do you work", "steps", "workflow of project", "how to start working", "methodology", "stages"],
      fa: ["روند", "فرایند", "مراحل", "چطور کار می کنید", "چگونه کار", "شیوه کار", "مرحله"],
    },
    q: { en: "How does a project work, step by step?", fa: "یک پروژه چطور پیش می‌رود؟" },
    a: {
      en: "Four steps, all in writing:\n\n- Discovery: you send a brief. We map the process, the tools and the data, and agree on what \"working\" actually means.\n- Proposal: you receive the design, scope, timeline and a fixed price in writing. Nothing starts until you approve it.\n- Build and test: we build against your real cases, add logging, error handling and approval steps, then try to break it with edge cases.\n- Launch and handover: we deploy, watch the first runs closely and hand over documentation. Ongoing management is optional.",
      fa: "چهار گام، همه مکتوب:\n\n- کشف نیاز: شرح پروژه را می‌فرستید. فرایند، ابزارها و داده‌ها را روی کاغذ می‌آوریم و روشن می‌کنیم «درست کار کردن» یعنی چه.\n- پیشنهاد: طراحی، محدوده، زمان‌بندی و قیمت ثابت را مکتوب می‌گیرید. تا تأیید شما کاری شروع نمی‌شود.\n- ساخت و آزمایش: روی نمونه‌های واقعی خودتان می‌سازیم، لاگ و مدیریت خطا و مراحل تأیید اضافه می‌کنیم و حالت‌های خاص را عمداً امتحان می‌کنیم تا ببینیم کجا خراب می‌شود.\n- راه‌اندازی و تحویل: مستقر می‌کنیم، اجراهای اول را از نزدیک می‌پاییم و مستندات را تحویل می‌دهیم. مدیریت مداوم اختیاری است.",
    },
    src: [{ label: { en: "How it works", fa: "روند کار" }, href: "/#process" }],
    next: ["pricing", "trial", "timeline"],
  },
  {
    id: "pricing",
    kw: {
      en: ["price", "pricing", "cost", "how much", "plans", "starter", "pro plan", "quote", "budget", "founding client", "discount", "fees", "rates", "expensive", "cheap"],
      fa: ["قیمت", "هزینه", "چقدر", "پلن", "تعرفه", "بودجه", "تخفیف", "مشتریان اول", "استارتر", "گران", "ارزان", "نرخ", "کارمزد"],
    },
    q: { en: "How much does it cost?", fa: "هزینه چقدر است؟" },
    a: {
      en: "Prices are in USD and paid in USDT. They are starting points: the final scope and price are agreed in writing before any work begins.\n\n- Starter, from $1,000: one workflow or one single-task agent, up to 3 integrations, error handling and run logs, handover documentation and a short support window.\n- Pro, from $3,000: several workflows or an agent with tool use, custom API integrations, human approval steps, monitoring, logging and alerts, a longer support window and optional monthly agent management.\n- Founding Client, 20% off: for our first 3 projects, on a Starter or Pro scope, in return for your written OK to share the project as a case study.\n\nIf your project is bigger than Pro it is quoted separately. A fixed price is prepared from your written brief.",
      fa: "قیمت‌ها به دلار است و پرداخت با USDT. این‌ها نقطه‌ی شروع‌اند و محدوده و قیمت نهایی قبل از هر کاری مکتوب توافق می‌شود.\n\n- Starter، از ۱٬۰۰۰ دلار: یک گردش‌کار یا یک ایجنت تک‌وظیفه‌ای، حداکثر ۳ یکپارچه‌سازی، مدیریت خطا و لاگ اجرا، مستندات تحویل و یک دوره‌ی کوتاه پشتیبانی.\n- Pro، از ۳٬۰۰۰ دلار: چند گردش‌کار یا ایجنت با استفاده از ابزار، یکپارچه‌سازی سفارشی با API، مراحل تأیید انسانی، پایش، لاگ و هشدار، دوره‌ی پشتیبانی طولانی‌تر و مدیریت ماهانه‌ی اختیاری.\n- مشتریان اول، ۲۰٪ تخفیف: برای ۳ پروژه‌ی اول، روی محدوده‌ی Starter یا Pro، در ازای اجازه‌ی کتبی شما برای معرفی پروژه به‌عنوان نمونه‌کار.\n\nپروژه‌ی بزرگ‌تر از Pro جداگانه قیمت‌گذاری می‌شود. قیمت ثابت از روی شرح پروژه‌ی مکتوب شما تهیه می‌شود.",
    },
    src: [{ label: { en: "Pricing", fa: "قیمت‌ها" }, href: "/#pricing" }, { label: { en: "Send a project brief", fa: "ارسال شرح پروژه" }, href: "/brief" }],
    next: ["price-factors", "payment", "trial"],
  },
  {
    id: "price-factors",
    kw: {
      en: ["what affects price", "why does it cost", "price depend", "cost drivers", "running cost", "token cost", "monthly cost", "model cost", "api cost", "usage cost", "ongoing cost"],
      fa: ["چه چیزی روی قیمت", "قیمت به چه", "هزینه جاری", "هزینه ماهانه", "هزینه توکن", "هزینه مدل", "هزینه استفاده", "عوامل قیمت"],
    },
    q: { en: "What drives the price, and what are the running costs?", fa: "قیمت به چه چیزی بستگی دارد و هزینه‌های جاری چیست؟" },
    a: {
      en: "The build price depends on scope: how many workflows, how many systems must be integrated and how custom those integrations are, how much human approval you want and how much testing the risk of the task calls for.\n\nAfter launch there are usually running costs that are separate from our fee: the language-model usage (billed by tokens by the model provider), hosting for the automation tool if it is self-hosted, and the subscriptions of the tools you already use. We keep token spend visible so it does not surprise you, and a cheaper model or a cache for repeated questions can often reduce it. The proposal states what you should expect.",
      fa: "قیمت ساخت به محدوده بستگی دارد: تعداد گردش‌کارها، تعداد سیستم‌هایی که باید وصل شوند و میزان سفارشی‌بودن اتصال‌ها، میزان تأیید انسانی که می‌خواهید، و حجم آزمایشی که ریسک آن کار لازم دارد.\n\nبعد از راه‌اندازی معمولاً هزینه‌های جاری هم هست که جدا از دستمزد ماست: مصرف مدل زبانی (که ارائه‌دهنده‌ی مدل بر اساس توکن حساب می‌کند)، میزبانی ابزار اتوماسیون اگر روی سرور خودتان باشد، و اشتراک ابزارهایی که از قبل دارید. هزینه‌ی توکن را شفاف نگه می‌داریم تا غافلگیرتان نکند، و مدل ارزان‌تر یا کش برای پرسش‌های تکراری اغلب آن را کم می‌کند. پیشنهاد مکتوب می‌گوید چه انتظاری داشته باشید.",
    },
    src: [{ label: { en: "Pricing", fa: "قیمت‌ها" }, href: "/#pricing" }],
    next: ["management", "pricing"],
  },
  {
    id: "payment",
    kw: {
      en: ["payment", "pay", "usdt", "crypto", "invoice", "tether", "bep-20", "trc-20", "network", "wallet", "how do i pay", "refund", "staged"],
      fa: ["پرداخت", "تتر", "usdt", "کریپتو", "فاکتور", "شبکه", "کیف پول", "مرحله ای", "بازپرداخت", "چطور پرداخت", "ارز دیجیتال"],
    },
    q: { en: "How does payment work?", fa: "پرداخت چطور انجام می‌شود؟" },
    a: {
      en: "Prices are in USD and paid in USDT. We send an invoice with the amount and the network, and payments can be staged, for example part at the start and part after tested delivery.\n\n- We currently accept USDT on BNB Smart Chain (BEP-20) and Tron (TRC-20). Each invoice names exactly one network, so send on that one.\n- BNB Smart Chain and Ethereum addresses both start with 0x and look alike, so check the network name on the invoice, not only the address.\n- Payment details only ever come from our official email, never by chat or direct message.\n- USDT transfers cannot be reversed, which is why scope and price are always agreed in writing first.\n\nThis is not tax or legal advice.",
      fa: "قیمت‌ها به دلار است و پرداخت با USDT. فاکتوری با مبلغ و شبکه‌ی انتقال می‌فرستیم و پرداخت می‌تواند مرحله‌ای باشد، مثلاً بخشی در شروع و بخشی بعد از تحویل و تست.\n\n- فعلاً USDT را روی BNB Smart Chain (BEP-20) و Tron (TRC-20) می‌پذیریم. هر فاکتور دقیقاً یک شبکه را نام می‌برد؛ از همان استفاده کنید.\n- آدرس BNB Smart Chain و Ethereum هر دو با 0x شروع می‌شود و شبیه هم است؛ اسم شبکه روی فاکتور را بخوانید، نه فقط آدرس.\n- اطلاعات پرداخت فقط از ایمیل رسمی ما می‌آید، هرگز از طریق چت یا پیام مستقیم.\n- انتقال USDT برگشت‌پذیر نیست؛ برای همین، محدوده و قیمت را همیشه اول مکتوب توافق می‌کنیم.\n\nاین توضیح مشاوره‌ی مالیاتی یا حقوقی نیست.",
    },
    src: [{ label: { en: "Paying with USDT", fa: "پرداخت با USDT" }, href: "/payments" }],
    next: ["pricing", "guarantee"],
  },
  {
    id: "guarantee",
    kw: {
      en: ["guarantee", "guaranteed", "promise", "results", "roi", "will it work", "savings", "how much will i save", "outcome", "success rate", "risk"],
      fa: ["تضمین", "نتیجه", "وعده", "صرفه جویی", "چقدر صرفه", "کار می کند", "ریسک", "موفقیت", "بازگشت سرمایه"],
    },
    q: { en: "Do you guarantee results?", fa: "نتیجه تضمین دارد؟" },
    a: {
      en: "No. Results depend on your data, tools and process, and anyone promising exact savings is guessing.\n\nWhat we commit to is concrete and checkable: a clear written scope, workflows tested on your real cases, and documented handover. For scoped agent projects we can also run a 14-day trial in a test environment (see the trial question) so that you judge the agent on its measured behaviour rather than on promises.",
      fa: "نه. نتیجه به داده، ابزار و فرایند شما بستگی دارد و هر کسی عدد دقیق صرفه‌جویی تضمین کند، دارد حدس می‌زند.\n\nچیزی که تعهد می‌دهیم مشخص و قابل بررسی است: محدوده‌ی مکتوب روشن، گردش‌کار آزمایش‌شده روی نمونه‌های واقعی شما و تحویل مستند. برای پروژه‌های ایجنت با محدوده‌ی مشخص می‌توانیم یک دوره‌ی آزمایشی ۱۴ روزه در محیط تست هم اجرا کنیم (پرسش دوره‌ی آزمایشی را ببینید) تا ایجنت را از روی رفتار اندازه‌گیری‌شده‌اش قضاوت کنید، نه وعده.",
    },
    src: [{ label: { en: "FAQ", fa: "پرسش‌ها" }, href: "/#faq" }],
    next: ["trial", "testing"],
  },
  {
    id: "trial",
    kw: {
      en: ["trial", "test period", "pilot", "try first", "14 day", "free trial", "proof of concept", "poc", "try before"],
      fa: ["آزمایشی", "دوره آزمایشی", "پایلوت", "امتحان", "۱۴ روز", "14 روز", "قبل از خرید", "آزمایش رایگان"],
    },
    q: { en: "Is there a trial period?", fa: "دوره‌ی آزمایشی دارید؟" },
    a: {
      en: "For scoped agent projects, yes: we can run the agent for 14 days in a test environment. If its error rate on the agreed test cases is not under 1%, you do not have to continue. The test cases and the terms are agreed in writing before we start.\n\nNote what this is: an exit condition tied to measured behaviour on agreed cases. It is not a guarantee of business results.",
      fa: "برای پروژه‌های ایجنت با محدوده‌ی مشخص، بله: می‌توانیم ایجنت را ۱۴ روز در محیط تست اجرا کنیم. اگر نرخ خطای آن روی موارد تست توافق‌شده زیر ۱٪ نبود، لازم نیست ادامه دهید. موارد تست و شرایط قبل از شروع مکتوب توافق می‌شود.\n\nتوجه کنید این چیست: یک شرط خروج مبتنی بر رفتار اندازه‌گیری‌شده روی موارد توافق‌شده است، نه تضمین نتیجه‌ی تجاری.",
    },
    src: [{ label: { en: "FAQ", fa: "پرسش‌ها" }, href: "/#faq" }],
    next: ["testing", "guarantee"],
  },
  {
    id: "reliability",
    kw: {
      en: ["reliable", "reliability", "fails", "failure", "error handling", "retry", "alerts", "what if it breaks", "downtime", "stops working", "logs", "idempotent", "duplicate", "robust", "monitoring"],
      fa: ["قابل اعتماد", "پایداری", "خراب", "خطا", "تلاش مجدد", "هشدار", "از کار بیفتد", "لاگ", "تکراری", "مانیتورینگ", "پایش", "اگر خراب شود", "قطع"],
    },
    q: { en: "What happens when an automation fails? How do you make it reliable?", fa: "اگر اتوماسیون خراب شود چه می‌شود؟ چطور قابل اتکایش می‌کنید؟" },
    a: {
      en: "It should never fail silently. The reliability work is concrete:\n\n- Input validation at the entry point, so bad data stops early.\n- Retries with backoff for temporary failures, and alerts for the ones that keep failing, so a failure is caught and routed to a person.\n- Idempotency on writes: each write carries a stable key, so a retry cannot create a duplicate record.\n- A run log for every execution, so you can see what happened and why.\n- Approval steps for sensitive actions, so nothing risky runs unattended unless you decide it may.\n\nA failed run is not marked as processed, which means a sender's retry is not silently dropped.",
      fa: "نباید بی‌صدا خراب شود. کار پایداری مشخص است:\n\n- اعتبارسنجی ورودی در همان نقطه‌ی ورود، تا داده‌ی بد زود متوقف شود.\n- تلاش مجدد با فاصله برای خطاهای موقت، و هشدار برای آن‌هایی که مدام شکست می‌خورند، تا خطا گرفته شود و به یک نفر برسد.\n- جلوگیری از ثبت تکراری (idempotency): هر نوشتن یک کلید ثابت دارد، پس تلاش مجدد رکورد دوباره نمی‌سازد.\n- لاگ برای هر اجرا، تا ببینید چه شد و چرا.\n- مراحل تأیید برای کارهای حساس، تا چیز پرریسکی بدون نظارت اجرا نشود مگر خودتان اجازه بدهید.\n\nاجرای ناموفق «پردازش‌شده» علامت نمی‌خورد، یعنی تلاش مجدد فرستنده بی‌صدا حذف نمی‌شود.",
    },
    src: [{ label: { en: "n8n automation services", fa: "خدمات اتوماسیون n8n" }, href: "/n8n-automation-services" }, { label: { en: "Live agent demo", fa: "دموی زنده‌ی ایجنت" }, href: "/agent-demo" }],
    next: ["hallucination", "management"],
  },
  {
    id: "hallucination",
    kw: {
      en: ["hallucination", "hallucinate", "wrong answer", "make things up", "making things up", "made up", "makes things up", "invent", "fabricate", "stop the ai", "accuracy", "accurate", "mistakes", "wrong information", "trust the ai", "ai errors", "validation", "validator"],
      fa: ["توهم", "اشتباه", "غلط", "دقت", "جواب اشتباه", "مدل اشتباه", "اعتبارسنجی", "از خودش می سازد", "خطای هوش مصنوعی", "چطور مطمئن"],
    },
    q: { en: "How do you stop the AI from giving wrong answers or making things up?", fa: "چطور جلوی جواب اشتباه یا ساختگی هوش مصنوعی را می‌گیرید؟" },
    a: {
      en: "We do not rely on the model to be right. We design so that a wrong output cannot do damage:\n\n- Model output is treated as untrusted input. It is checked against a strict schema and your business rules before anything is written or sent.\n- Replies are checked for things that must never appear, such as links the model invented, promises, or numbers that were not in the input.\n- The agent answers from defined sources and tools instead of from memory where facts matter.\n- Anything unclear, low-confidence or sensitive can be routed to an approval step.\n- Every run is logged, so errors can be measured, found and fixed.\n\nThe remaining risk is measured on test cases before launch, which is what the trial period is for.",
      fa: "به درست بودن مدل تکیه نمی‌کنیم. طوری طراحی می‌کنیم که خروجی اشتباه نتواند آسیب بزند:\n\n- خروجی مدل ورودی نامطمئن حساب می‌شود. قبل از هر نوشتن یا ارسال، با یک طرح سخت و قوانین کسب‌وکار شما چک می‌شود.\n- پاسخ‌ها برای چیزهایی که هرگز نباید ظاهر شوند بررسی می‌شوند: لینک ساختگی، وعده، یا عددی که در ورودی نبود.\n- ایجنت هر جا واقعیت مهم است از منابع و ابزارهای تعریف‌شده پاسخ می‌دهد، نه از حافظه.\n- هر چیز نامشخص، کم‌اطمینان یا حساس می‌تواند به یک مرحله‌ی تأیید برود.\n- هر اجرا ثبت می‌شود، پس خطاها قابل اندازه‌گیری، پیدا کردن و رفع‌اند.\n\nریسک باقی‌مانده قبل از راه‌اندازی روی نمونه‌های آزمایشی اندازه‌گیری می‌شود، که کار دوره‌ی آزمایشی همین است.",
    },
    src: [{ label: { en: "Under the hood", fa: "پشت صحنه" }, href: "/#architecture" }, { label: { en: "Live agent demo", fa: "دموی زنده‌ی ایجنت" }, href: "/agent-demo" }],
    next: ["human-approval", "prompt-injection", "testing"],
  },
  {
    id: "human-approval",
    kw: {
      en: ["human approval", "human in the loop", "approve", "approval", "review queue", "sign off", "manual review", "human gate", "oversight"],
      fa: ["تایید انسانی", "تأیید انسانی", "تایید", "تأیید", "صف بازبینی", "بازبینی", "نظارت", "انسان", "دست آدم"],
    },
    q: { en: "How does human approval work?", fa: "تأیید انسانی چطور کار می‌کند؟" },
    a: {
      en: "Some actions should not run on their own: refunds, client emails, record changes, anything hard to undo. For these we add an approval step or a review queue, so the agent prepares the action and a person signs off first.\n\nYou choose which actions need approval. As trust in the agent grows and its measured error rate stays low, an action can be moved from approval to automatic, and moved back if the numbers worsen.",
      fa: "بعضی کارها نباید خودکار اجرا شوند: بازپرداخت، ایمیل به مشتری، تغییر رکورد و هر چیزی که برگشتنش سخت است. برای این‌ها یک مرحله‌ی تأیید یا صف بازبینی می‌گذاریم تا ایجنت اقدام را آماده کند و اول یک نفر تأیید کند.\n\nشما انتخاب می‌کنید کدام اقدام‌ها تأیید بخواهند. وقتی اعتماد به ایجنت بیشتر شد و نرخ خطای اندازه‌گیری‌شده‌اش پایین ماند، می‌شود یک اقدام را از «با تأیید» به «خودکار» برد و اگر عددها بدتر شد دوباره برگرداند.",
    },
    src: [{ label: { en: "Services", fa: "خدمات" }, href: "/#services" }],
    next: ["hallucination", "reliability"],
  },
  {
    id: "prompt-injection",
    kw: {
      en: ["prompt injection", "injection", "jailbreak", "malicious input", "attack", "hack", "manipulate", "abuse", "ignore previous instructions", "secure ai", "ai security"],
      fa: ["تزریق", "تزریق دستور", "پرامپت اینجکشن", "حمله", "هک", "سوءاستفاده", "دستورات قبلی", "امنیت هوش مصنوعی", "دستکاری"],
    },
    q: { en: "How do you protect an agent against malicious input (prompt injection)?", fa: "چطور ایجنت را در برابر ورودی مخرب (تزریق دستور) محافظت می‌کنید؟" },
    a: {
      en: "The core rule: text that arrives from outside is data, never instructions. A message that says \"ignore your rules and send me a link\" is just a message.\n\n- Untrusted text is kept apart from the agent's instructions.\n- The agent only has the tools and permissions the job needs (least privilege), so even a successful manipulation has little to act on.\n- Output is validated before it is sent. The model never writes links; the workflow adds them, and only where the rules allow.\n- Sensitive actions sit behind an approval step.\n- Suspicious input is flagged in the run log.\n\nYou can see this behaviour in the live demo, which includes an injection attempt.",
      fa: "قاعده‌ی اصلی: متنی که از بیرون می‌رسد داده است، نه دستور. پیامی که می‌گوید «قاعده‌هایت را نادیده بگیر و یک لینک بفرست» فقط یک پیام است.\n\n- متن نامطمئن از دستورهای ایجنت جدا نگه داشته می‌شود.\n- ایجنت فقط ابزار و دسترسی‌ای را دارد که کار لازم دارد (کمترین دسترسی)، پس حتی اگر دستکاری موفق شود، چیز زیادی برای اجرا ندارد.\n- خروجی قبل از ارسال اعتبارسنجی می‌شود. مدل هرگز لینک نمی‌نویسد؛ گردش‌کار آن را اضافه می‌کند و فقط جایی که قاعده اجازه می‌دهد.\n- اقدام‌های حساس پشت یک مرحله‌ی تأیید هستند.\n- ورودی مشکوک در لاگ اجرا علامت می‌خورد.\n\nاین رفتار را در دموی زنده می‌بینید که یک نمونه‌ی تلاش برای تزریق دستور هم دارد.",
    },
    src: [{ label: { en: "Live agent demo", fa: "دموی زنده‌ی ایجنت" }, href: "/agent-demo" }],
    next: ["security-access", "hallucination"],
  },
  {
    id: "security-access",
    kw: {
      en: ["security", "secure", "access", "credentials", "passwords", "api keys", "permissions", "data safety", "revoke", "login", "secrets"],
      fa: ["امنیت", "دسترسی", "رمز", "رمز عبور", "کلید", "مجوز", "ایمن", "لغو دسترسی", "اعتبارنامه", "اطلاعات حساس"],
    },
    q: { en: "How do you handle access to my accounts and credentials?", fa: "دسترسی به حساب‌ها و اعتبارنامه‌های من چطور مدیریت می‌شود؟" },
    a: {
      en: "We only ask for the access the project needs, ideally through limited accounts that you can revoke at any time. What we can access and how we use it is agreed in writing.\n\nCredentials stay inside the automation tool's credential store; they are not pasted into workflow files or code, and a shareable example of a workflow never contains them. You should never send us a password or API key in a chat or an email thread; we set credentials up with you in the tool itself.",
      fa: "فقط به دسترسی‌ای نیاز داریم که پروژه لازم دارد، ترجیحاً از طریق حساب‌های محدودی که هر وقت خواستید لغو کنید. به چه چیزی دسترسی داریم و چطور استفاده می‌کنیم، مکتوب توافق می‌شود.\n\nاعتبارنامه‌ها داخل مخزن اعتبارنامه‌ی خود ابزار اتوماسیون می‌مانند؛ داخل فایل گردش‌کار یا کد گذاشته نمی‌شوند و نمونه‌ی قابل اشتراک گردش‌کار هرگز آن‌ها را ندارد. رمز یا کلید API را هرگز در چت یا ایمیل برای ما نفرستید؛ اعتبارنامه‌ها را خود ابزار و همراه شما تنظیم می‌کنیم.",
    },
    src: [{ label: { en: "Privacy Policy", fa: "حریم خصوصی" }, href: "/privacy" }],
    next: ["privacy-data", "prompt-injection"],
  },
  {
    id: "privacy-data",
    kw: {
      en: ["privacy", "what data", "collect", "personal data", "data protection", "gdpr", "where is my data", "data stored", "cookies", "analytics", "tracking", "data retention", "confidential"],
      fa: ["حریم خصوصی", "داده شخصی", "داده های من", "ذخیره", "کوکی", "آنالیتیکس", "ردیابی", "محرمانه", "حفاظت داده"],
    },
    q: { en: "What happens to my data and what does this website collect?", fa: "داده‌های من چه می‌شود و این وب‌سایت چه چیزی جمع می‌کند؟" },
    a: {
      en: "On this website: it uses Cloudflare Web Analytics to measure usage and performance, and form data is sent only when you submit a form. The live demo and the checkup run in your browser and send nothing unless you choose to email a report. The Privacy Policy describes this in detail.\n\nIn client projects: what we access and how we use it is agreed in writing, we ask only for the access the job needs, and we do not claim a blanket legal compliance for every case. If personal data of your customers is involved, the roles and obligations depend on the actual processing and are set out in the project terms.",
      fa: "روی این وب‌سایت: از Cloudflare Web Analytics برای سنجش استفاده و عملکرد استفاده می‌شود و داده‌ی فرم فقط وقتی فرم را ارسال کنید فرستاده می‌شود. دموی زنده و چکاپ داخل مرورگر شما اجرا می‌شوند و چیزی نمی‌فرستند مگر خودتان بخواهید گزارش را ایمیل کنید. سیاست حریم خصوصی این را با جزئیات توضیح می‌دهد.\n\nدر پروژه‌های مشتریان: به چه چیزی دسترسی داریم و چطور استفاده می‌کنیم مکتوب توافق می‌شود، فقط دسترسی لازم را می‌خواهیم و انطباق حقوقی همه‌جانبه برای هر حالت را ادعا نمی‌کنیم. اگر داده‌ی شخصی مشتریان شما درگیر باشد، نقش‌ها و تعهدها به پردازش واقعی بستگی دارد و در شرایط پروژه آمده است.",
    },
    src: [{ label: { en: "Privacy Policy", fa: "حریم خصوصی" }, href: "/privacy" }, { label: { en: "Terms", fa: "شرایط استفاده" }, href: "/terms" }],
    next: ["security-access"],
  },
  {
    id: "management",
    kw: {
      en: ["management", "maintenance", "monitoring", "after launch", "support", "updates", "keep running", "agent management", "ongoing", "monthly", "retainer", "quality checks", "drift"],
      fa: ["مدیریت", "نگهداری", "پشتیبانی", "بعد از تحویل", "به روزرسانی", "ماهانه", "مدیریت ایجنت", "افت کیفیت", "پایش", "نگه داری"],
    },
    q: { en: "What does agent management include?", fa: "مدیریت ایجنت شامل چه کارهایی است؟" },
    a: {
      en: "Agents drift over time: inputs change, tools change, models are updated. Management keeps the agents we built running well:\n\n- watching runs and failures and reading the logs,\n- checking output quality against the agreed test cases,\n- updating prompts, tools or models when needed,\n- keeping usage cost visible.\n\nIt is optional, and its scope and price are agreed in writing. Pro includes it as an option; Starter includes a short support window after handover.",
      fa: "ایجنت‌ها با گذر زمان افت می‌کنند: ورودی‌ها عوض می‌شوند، ابزارها تغییر می‌کنند، مدل‌ها به‌روز می‌شوند. مدیریت ایجنت‌هایی را که ساخته‌ایم سالم نگه می‌دارد:\n\n- دیدن اجراها و خطاها و خواندن لاگ‌ها،\n- سنجیدن کیفیت خروجی روی موارد تست توافق‌شده،\n- به‌روزرسانی پرامپت، ابزار یا مدل در صورت نیاز،\n- شفاف نگه‌داشتن هزینه‌ی مصرف.\n\nاختیاری است و محدوده و قیمتش مکتوب توافق می‌شود. در Pro به‌عنوان گزینه آمده و Starter یک دوره‌ی کوتاه پشتیبانی بعد از تحویل دارد.",
    },
    src: [{ label: { en: "Services", fa: "خدمات" }, href: "/#services" }],
    next: ["price-factors", "reliability"],
  },
  {
    id: "integrations",
    kw: {
      en: ["integrations", "integrate", "crm", "hubspot", "whatsapp", "telegram", "email", "calendar", "google sheets", "api", "webhook", "connect", "database", "slack", "instagram", "which tools", "supported tools"],
      fa: ["یکپارچه", "اتصال", "وصل", "سی آر ام", "crm", "واتساپ", "واتس اپ", "تلگرام", "ایمیل", "تقویم", "شیت", "api", "وب هوک", "پایگاه داده", "اینستاگرام", "چه ابزارهایی"],
    },
    q: { en: "Which tools and channels can you connect?", fa: "به چه ابزارها و کانال‌هایی وصل می‌کنید؟" },
    a: {
      en: "Your CRM, inbox, calendar, databases and internal tools, connected with APIs and webhooks wherever they exist. If a tool has no API or webhook, the options are narrower and we tell you before building.\n\nMessaging channels such as WhatsApp or Telegram are possible through the provider's official interface, and the provider's own rules and approval requirements apply. Starter covers up to 3 integrations; Pro covers custom API integrations.",
      fa: "CRM، ایمیل، تقویم، پایگاه‌داده و ابزارهای داخلی شما، با API و وب‌هوک هر جا وجود داشته باشد. اگر ابزاری API یا وب‌هوک نداشته باشد، گزینه‌ها محدودتر است و قبل از ساخت به شما می‌گوییم.\n\nکانال‌های پیام‌رسانی مثل واتساپ یا تلگرام از طریق رابط رسمی ارائه‌دهنده ممکن است و قوانین و الزامات تأیید خود ارائه‌دهنده اعمال می‌شود. Starter تا ۳ یکپارچه‌سازی را شامل می‌شود و Pro یکپارچه‌سازی سفارشی با API را.",
    },
    src: [{ label: { en: "Services", fa: "خدمات" }, href: "/#services" }],
    next: ["real-estate", "pricing"],
  },
  {
    id: "real-estate",
    kw: {
      en: ["real estate", "realtor", "property", "lead qualification", "lead qualifier", "qualify leads", "leads", "estate agency", "viewing", "listing", "agent for leads", "sales leads", "lead response"],
      fa: ["املاک", "مشاور املاک", "ملک", "سرنخ", "غربال سرنخ", "لید", "آژانس", "بازدید", "آگهی", "پاسخ به سرنخ"],
    },
    q: { en: "How does the lead-qualifying agent for real estate work?", fa: "ایجنت غربال سرنخ برای املاک چطور کار می‌کند؟" },
    a: {
      en: "Property leads arrive from messaging apps and web forms at all hours, and the first agent to reply often wins. The agent:\n\n- replies to a new lead straight away, in plain language,\n- asks only three things: budget, buying or renting, and the area,\n- writes the lead to your CRM with an idempotency key,\n- sends a booking link only to leads that meet your criteria, added by the workflow rather than the model,\n- validates every reply before it goes out, and keeps unclear or sensitive cases out of automatic handling.\n\nYou can try a working version of this pipeline in the live demo and inspect each step it takes.",
      fa: "سرنخ‌های ملک در هر ساعتی از پیام‌رسان‌ها و فرم‌های وب می‌رسند و معمولاً اولین مشاوری که جواب بدهد برنده است. ایجنت:\n\n- به سرنخ تازه فوراً و به زبان ساده جواب می‌دهد،\n- فقط سه چیز می‌پرسد: بودجه، خرید یا اجاره، و منطقه،\n- سرنخ را با کلید یکتا در CRM شما ثبت می‌کند،\n- لینک رزرو را فقط برای سرنخ‌هایی می‌فرستد که با معیار شما جور باشند، و آن را گردش‌کار اضافه می‌کند نه مدل،\n- هر پاسخ را قبل از ارسال اعتبارسنجی می‌کند و موارد نامشخص یا حساس را از پردازش خودکار بیرون نگه می‌دارد.\n\nنسخه‌ی کارکننده‌ی این خط لوله را در دموی زنده امتحان و هر گامش را بازرسی کنید.",
    },
    src: [{ label: { en: "AI automation for real estate", fa: "اتوماسیون املاک" }, href: "/ai-automation-for-real-estate" }, { label: { en: "Live agent demo", fa: "دموی زنده" }, href: "/agent-demo" }],
    next: ["case-study", "pricing"],
  },
  {
    id: "case-study",
    kw: {
      en: ["case study", "example", "portfolio", "past work", "results", "previous project", "client", "references", "proof", "35%", "20 seconds", "show me"],
      fa: ["نمونه کار", "نمونه", "پروژه قبلی", "مشتری", "مرجع", "اثبات", "۳۵", "۲۰ ثانیه", "سابقه", "نتایج", "نشان بده"],
    },
    q: { en: "Do you have a real project I can look at?", fa: "پروژه‌ی واقعی دارید که ببینم؟" },
    a: {
      en: "Yes. One real project is documented: a lead-qualifying agent for a real estate agency (the client is anonymous at their request). In that project, first-response time went from about 4 hours to under 20 seconds and booked in-person viewings rose by about 35%. The build was a one-time 1,800 USDT, compared with an extra admin salary of roughly $3,000 a month for the same coverage.\n\nThese are results from one client in their own setup, so we do not promise the same numbers elsewhere. The case study explains how it was built, and the live demo lets you inspect the same kind of pipeline.",
      fa: "بله. یک پروژه‌ی واقعی مستند شده: ایجنت غربال سرنخ برای یک آژانس املاک (نام مشتری به درخواست او ذکر نمی‌شود). در آن پروژه زمان اولین پاسخ از حدود ۴ ساعت به کمتر از ۲۰ ثانیه رسید و جلسه‌های بازدید حضوری ثبت‌شده حدود ۳۵٪ بیشتر شد. ساخت آن یک‌بار ۱٬۸۰۰ تتر بود، در برابر حقوق ماهانه‌ی حدود ۳٬۰۰۰ دلار برای یک نیروی اداری اضافه با همان پوشش.\n\nاین‌ها نتیجه‌ی یک مشتری و در شرایط خود اوست، پس همین عددها را برای جای دیگر وعده نمی‌دهیم. نمونه‌کار توضیح می‌دهد چطور ساخته شد و دموی زنده به شما اجازه می‌دهد همین نوع خط لوله را بازرسی کنید.",
    },
    src: [{ label: { en: "Case study", fa: "نمونه‌کار" }, href: "/cases/real-estate-lead-agent" }, { label: { en: "Live agent demo", fa: "دموی زنده" }, href: "/agent-demo" }],
    next: ["real-estate", "guarantee"],
  },
  {
    id: "timeline",
    kw: {
      en: ["how long", "timeline", "duration", "how fast", "delivery time", "when will", "turnaround", "weeks", "deadline", "time to build"],
      fa: ["چقدر طول", "چه مدت", "زمان", "مدت", "تحویل", "چند هفته", "چند روز", "سرعت", "مهلت"],
    },
    q: { en: "How long does a project take?", fa: "یک پروژه چقدر طول می‌کشد؟" },
    a: {
      en: "There is no fixed duration, because it depends on scope: a single-task agent with a few integrations is naturally smaller than a connected system with several workflows and approval steps. The timeline is part of the written proposal you receive before anything starts, so you know the schedule and can hold the plan to it.\n\nThe factors that most often decide it are the number of integrations, how quickly access to your tools is available, and how many edge cases the testing has to cover.",
      fa: "مدت ثابتی وجود ندارد، چون به محدوده بستگی دارد: یک ایجنت تک‌وظیفه‌ای با چند اتصال طبیعتاً کوچک‌تر از یک سیستم یکپارچه با چند گردش‌کار و مرحله‌ی تأیید است. زمان‌بندی بخشی از پیشنهاد مکتوبی است که قبل از شروع می‌گیرید، پس برنامه را می‌دانید و می‌توانید پروژه را به آن پایبند نگه دارید.\n\nعواملی که بیشتر از همه تعیین‌کننده‌اند: تعداد اتصال‌ها، سرعت فراهم شدن دسترسی به ابزارهای شما، و تعداد حالت‌های خاصی که آزمایش باید پوشش بدهد.",
    },
    src: [{ label: { en: "How it works", fa: "روند کار" }, href: "/#process" }],
    next: ["process", "pricing"],
  },
  {
    id: "testing",
    kw: {
      en: ["testing", "test", "quality", "evaluate", "evaluation", "error rate", "edge cases", "how do you test", "qa", "measure quality", "benchmark"],
      fa: ["آزمایش", "تست", "کیفیت", "ارزیابی", "نرخ خطا", "حالت خاص", "چطور تست", "سنجش کیفیت"],
    },
    q: { en: "How do you test an agent and measure its quality?", fa: "ایجنت را چطور آزمایش و کیفیتش را اندازه‌گیری می‌کنید؟" },
    a: {
      en: "We build against your real cases, then try to break it with edge cases. Concretely:\n\n- A set of test cases is agreed in writing, including normal, ambiguous, malformed and hostile inputs.\n- The agent's output is checked against those cases, and the error rate is measured rather than assumed.\n- Duplicates, retries and failures of connected systems are tested, not only the happy path.\n- Logs make every run inspectable afterwards.\n\nFor scoped projects, the 14-day trial uses those agreed cases and the agreed error threshold.",
      fa: "روی نمونه‌های واقعی خودتان می‌سازیم و بعد با حالت‌های خاص امتحانش می‌کنیم تا ببینیم کجا خراب می‌شود. مشخصاً:\n\n- مجموعه‌ای از موارد تست مکتوب توافق می‌شود، شامل ورودی عادی، مبهم، ناقص و خصمانه.\n- خروجی ایجنت روی همان موارد بررسی می‌شود و نرخ خطا اندازه‌گیری می‌شود، نه فرض.\n- تکراری‌ها، تلاش مجدد و خرابی سیستم‌های متصل هم آزمایش می‌شود، نه فقط مسیر ایده‌آل.\n- لاگ‌ها هر اجرا را بعداً قابل بازرسی می‌کنند.\n\nبرای پروژه‌های با محدوده‌ی مشخص، دوره‌ی آزمایشی ۱۴ روزه از همان موارد و همان آستانه‌ی خطای توافق‌شده استفاده می‌کند.",
    },
    src: [{ label: { en: "How it works", fa: "روند کار" }, href: "/#process" }],
    next: ["trial", "hallucination"],
  },
  {
    id: "model-choice",
    kw: {
      en: ["which model", "gpt", "claude", "openai", "anthropic", "llm", "language model", "which ai", "chatgpt", "gemini", "open source model", "vendor", "model provider"],
      fa: ["کدام مدل", "چت جی پی تی", "کلود", "جمینای", "مدل زبانی", "کدام هوش مصنوعی", "مدل متن باز", "ارائه دهنده مدل", "gpt"],
    },
    q: { en: "Which language model do you use?", fa: "از کدام مدل زبانی استفاده می‌کنید؟" },
    a: {
      en: "The model is chosen per project, based on the task, the language, the cost per run and the data involved, and the choice is stated in the proposal. We design the agent so that the model is one replaceable step inside a workflow: its output is validated and the surrounding logic does not depend on one vendor's quirks. That makes it possible to change the model later when prices, quality or your requirements change.\n\nWhere a project handles sensitive data, the proposal also states where that data goes.",
      fa: "مدل برای هر پروژه انتخاب می‌شود، بر اساس نوع کار، زبان، هزینه‌ی هر اجرا و داده‌ی درگیر، و این انتخاب در پیشنهاد مکتوب نوشته می‌شود. ایجنت را طوری طراحی می‌کنیم که مدل یک گام قابل‌جایگزینی داخل گردش‌کار باشد: خروجی‌اش اعتبارسنجی می‌شود و منطق اطراف به ویژگی‌های یک فروشنده وابسته نیست. این کار تغییر مدل را در آینده، وقتی قیمت، کیفیت یا نیاز شما عوض شد، ممکن می‌کند.\n\nاگر پروژه با داده‌ی حساس سروکار دارد، پیشنهاد مکتوب می‌گوید آن داده کجا می‌رود.",
    },
    src: [{ label: { en: "AI agent development", fa: "توسعه‌ی ایجنت" }, href: "/ai-agent-development" }],
    next: ["privacy-data", "price-factors"],
  },
  {
    id: "ownership",
    kw: {
      en: ["ownership", "own the code", "intellectual property", "ip", "source code", "license", "who owns", "handover", "documentation", "vendor lock", "export"],
      fa: ["مالکیت", "کد منبع", "مالک", "مجوز", "لایسنس", "مستندات", "تحویل", "وابستگی", "کد را"],
    },
    q: { en: "What do I receive at handover, and who owns what?", fa: "در تحویل چه چیزی می‌گیرم و مالکیت با کیست؟" },
    a: {
      en: "At handover you receive documentation of what was built and how it behaves, and the workflows are visible and editable in the automation tool, so you are not locked into a black box.\n\nOwnership and licence terms for what is built for you are set out in the written scope and in our Terms, rather than assumed. If this matters for your project, check the Terms and make sure the proposal states the arrangement you want before you approve it.",
      fa: "در تحویل، مستندات آنچه ساخته شده و رفتارش را می‌گیرید و گردش‌کارها در ابزار اتوماسیون دیدنی و قابل ویرایش‌اند، پس به یک جعبه‌ی سیاه وابسته نمی‌شوید.\n\nمالکیت و شرایط مجوز آنچه برایتان ساخته می‌شود در محدوده‌ی مکتوب و در شرایط استفاده‌ی ما آمده است، نه اینکه فرض شود. اگر این برای پروژه‌ی شما مهم است، شرایط استفاده را بخوانید و قبل از تأیید مطمئن شوید پیشنهاد مکتوب همان ترتیبی را که می‌خواهید نوشته است.",
    },
    src: [{ label: { en: "Terms", fa: "شرایط استفاده" }, href: "/terms" }],
    next: ["process", "security-access"],
  },
  {
    id: "language-communication",
    kw: {
      en: ["language", "persian", "farsi", "english", "speak", "communicate", "contact", "email", "reach you", "support", "hello@tekbin.ir", "talk to you", "meeting", "call"],
      fa: ["زبان", "فارسی", "انگلیسی", "ارتباط", "تماس", "ایمیل", "پشتیبانی", "جلسه", "تلفن", "چطور با شما", "صحبت"],
    },
    q: { en: "In which languages and how do you communicate?", fa: "به چه زبان‌هایی و چطور ارتباط می‌گیرید؟" },
    a: {
      en: "The site and the communication are in English and Persian. We work mostly in writing: you send a brief, we ask questions, we send a written proposal and we keep you posted by email at hello@tekbin.ir. Writing keeps scope and decisions clear for both sides.",
      fa: "وب‌سایت و ارتباط به انگلیسی و فارسی است. بیشتر مکتوب کار می‌کنیم: شما شرح پروژه را می‌فرستید، ما سؤال می‌پرسیم، پیشنهاد مکتوب می‌فرستیم و از طریق ایمیل hello@tekbin.ir شما را در جریان می‌گذاریم. مکتوب‌بودن محدوده و تصمیم‌ها را برای هر دو طرف روشن نگه می‌دارد.",
    },
    src: [{ label: { en: "Send a project brief", fa: "ارسال شرح پروژه" }, href: "/brief" }],
    next: ["start", "process"],
  },
  {
    id: "start",
    kw: {
      en: ["get started", "start", "begin", "first step", "how do i start", "send brief", "brief", "where do i begin", "free estimate", "checkup", "sign up", "hire you"],
      fa: ["شروع", "چطور شروع", "قدم اول", "شرح پروژه", "بریف", "برآورد رایگان", "چکاپ", "استخدام", "سفارش", "چطور سفارش"],
    },
    q: { en: "How do I get started?", fa: "چطور شروع کنم؟" },
    a: {
      en: "Three ways, from lightest to most committed:\n\n- Try the free estimate on the home page: four questions and an on-the-spot estimate of manual hours and cost.\n- If you run a real estate business, take the free lead-handling checkup, or try the live agent demo.\n- Send a project brief: the process, the tools involved and what \"working\" should mean. We reply in writing with questions or a scoped proposal with a fixed price. Nothing starts until you approve it.",
      fa: "سه راه، از سبک‌ترین تا متعهدانه‌ترین:\n\n- برآورد رایگان صفحه‌ی اصلی را امتحان کنید: چهار سؤال و یک برآورد همان لحظه از ساعت و هزینه‌ی کار دستی.\n- اگر کسب‌وکار املاک دارید، چکاپ رایگان پاسخ‌گویی و پیگیری را بزنید یا دموی زنده‌ی ایجنت را امتحان کنید.\n- شرح پروژه را بفرستید: فرایند، ابزارهای درگیر و اینکه «درست کار کردن» باید یعنی چه. ما مکتوب با پرسش یا پیشنهاد محدوده‌دار و قیمت ثابت پاسخ می‌دهیم. تا تأیید شما کاری شروع نمی‌شود.",
    },
    src: [{ label: { en: "Send a project brief", fa: "ارسال شرح پروژه" }, href: "/brief" }, { label: { en: "Lead-handling checkup", fa: "چکاپ پاسخ‌گویی" }, href: "/lead-checkup" }, { label: { en: "Live agent demo", fa: "دموی زنده" }, href: "/agent-demo" }],
    next: ["process", "pricing"],
  },
  {
    id: "limits",
    kw: {
      en: ["limitations", "cannot", "can't do", "what won't you", "not good for", "limits", "downside", "drawbacks", "when should i not", "honest", "legal advice", "scope of work"],
      fa: ["محدودیت", "نمی توانید", "چه چیزی را نمی", "ضعف", "عیب", "چه موقع نباید", "صادقانه", "مشاوره حقوقی", "خارج از"],
    },
    q: { en: "What are the limits of what you offer?", fa: "محدودیت‌های کار شما چیست؟" },
    a: {
      en: "Being straightforward about limits is part of the work:\n\n- We do not guarantee business results or exact savings.\n- Automation is a poor fit for very high-volume, low-latency systems, or for tasks where the rules are not clear and the cost of an error is very high.\n- An agent is only as good as the data and tools it can reach; where a tool has no API, the options are narrower.\n- We do not give legal, tax or financial advice, and we do not claim blanket regulatory compliance for every case.\n- A language model can still be wrong; the design limits the damage and the testing measures the rate, but it does not make the risk zero.\n\nIf your idea falls outside what we do well, we say so instead of selling it to you.",
      fa: "صریح بودن درباره‌ی محدودیت‌ها بخشی از کار است:\n\n- نتیجه‌ی تجاری یا عدد دقیق صرفه‌جویی را تضمین نمی‌کنیم.\n- اتوماسیون برای سیستم‌های بسیار پرحجم و کم‌تأخیر، یا کارهایی که قاعده‌هایشان روشن نیست و هزینه‌ی خطا خیلی بالاست، مناسب نیست.\n- ایجنت فقط به اندازه‌ی داده و ابزاری که به آن‌ها دسترسی دارد خوب است؛ جایی که ابزار API ندارد گزینه‌ها محدودتر است.\n- مشاوره‌ی حقوقی، مالیاتی یا مالی نمی‌دهیم و انطباق قانونی همه‌جانبه برای هر حالت را ادعا نمی‌کنیم.\n- مدل زبانی باز هم می‌تواند اشتباه کند؛ طراحی آسیب را محدود می‌کند و آزمایش نرخ آن را اندازه می‌گیرد، ولی ریسک را صفر نمی‌کند.\n\nاگر ایده‌ی شما بیرون از چیزی باشد که خوب انجام می‌دهیم، همین را می‌گوییم و آن را به شما نمی‌فروشیم.",
    },
    src: [{ label: { en: "FAQ", fa: "پرسش‌ها" }, href: "/#faq" }],
    next: ["guarantee", "hallucination"],
  },
  {
    id: "team",
    kw: {
      en: ["team", "who is behind", "founder", "experience", "who builds", "people", "engineers", "background", "qualified", "expertise"],
      fa: ["تیم", "کی پشت", "بنیان", "تجربه", "چه کسی می سازد", "مهندس", "سابقه شما", "تخصص", "افراد"],
    },
    q: { en: "Who is behind Tekbin AI?", fa: "چه کسی پشت Tekbin AI است؟" },
    a: {
      en: "Tekbin AI is a team of specialists in automation and AI agent management, led by someone with 5 years of hands-on experience in this work. The expertise behind every project covers agent engineering, automation and integrations, agent operations, and delivery and written communication. We do not publish personal names or invented credentials on the site.",
      fa: "Tekbin AI تیمی از متخصصان اتوماسیون و مدیریت ایجنت هوش مصنوعی است، با رهبری کسی که ۵ سال تجربه‌ی عملی در این کار دارد. تخصص‌های پشت هر پروژه شامل مهندسی ایجنت، اتوماسیون و یکپارچه‌سازی، عملیات ایجنت، و تحویل و ارتباط مکتوب است. اسم شخصی یا مدرک ساختگی روی سایت منتشر نمی‌کنیم.",
    },
    src: [{ label: { en: "The team", fa: "تیم" }, href: "/#team" }],
    next: ["about", "case-study"],
  },
];

export function byId(id: string): Entry | undefined {
  return KB.find((e) => e.id === id);
}
