import type { Clause } from "@/components/LegalClauses";

export const SERVICE_UPDATED_EN = "November 26, 2026";
export const SERVICE_UPDATED_FA = "۵ آذر ۱۴۰۵ (۲۶ نوامبر ۲۰۲۶)";

type Page = { meta: { title: string; description: string }; h1: string; intro: string; clauses: Clause[]; linkLabel: string };

export const agentEn: Page = {
  meta: {
    title: "AI Agent Development Services",
    description: "Custom AI agent development for small and growing businesses: one agent, one job, built on n8n and your tools, with validation, human approval and monitoring.",
  },
  h1: "AI agent development services",
  intro: "We design, build and run custom AI agents for small and growing businesses. Each agent does one job well, works with the tools you already use, and hands over to a person when it should. Here is what we build, how we work and what it costs.",
  linkLabel: "AI agent development services",
  clauses: [
    { title: "What an AI agent can do for your business", body: ["An agent is a system that reads a message or an event, decides what to do within clear limits, and acts through your tools. Typical first projects:"], list: [
      "Lead qualification: ask a few key questions, write the answers to your CRM, book a call only for the right leads.",
      "Support triage: sort incoming requests, draft replies for approval, route the hard ones to a person.",
      "CRM and admin updates: keep records, tasks and reports current without manual copying.",
      "Research and reporting: collect, summarise and send the same weekly report every time.",
    ] },
    { title: "How we build agents that behave", list: [
      "One agent, one job. A narrow scope is easier to test and easier to trust.",
      "Model output is treated as untrusted. It is checked against a schema and business rules before anything is written or sent.",
      "A person approves the risky actions: refunds, client emails, record changes, anything hard to undo.",
      "Every run is logged. Failures retry, and the ones that keep failing raise an alert.",
      "We build with n8n and APIs, so you can see every step and change it later.",
    ] },
    { title: "Our process", list: [
      "You send a brief: the process, the tools involved and what “working” should mean.",
      "We reply in writing with a scoped proposal and a fixed price. Nothing starts until you approve it.",
      "We build against your real cases and try to break it with edge cases.",
      "We launch, watch the first runs closely and hand over documentation. Ongoing management is optional.",
    ] },
    { title: "What it costs", body: ["Prices are in USD and paid in USDT, with staged payments. They are starting points. The final scope and price are agreed in writing before any work begins."], list: [
      "Starter, from $1,000: one automation or one single-task agent, up to three integrations, error handling and run logs, handover documentation.",
      "Pro, from $3,000: a connected system with several workflows or an agent with tool use, custom API integrations, human approval steps, monitoring and alerts.",
      "Founding Client: 20% off a Starter or Pro scope for our first three projects, in return for your written OK to share the project as a case study.",
    ] },
    { title: "What we do not promise", body: ["We do not guarantee business results. They depend on your data, tools and process. What we commit to is a clear scope, tested workflows and a documented handover. For scoped agent projects we can also run a 14-day trial in a test environment, with the test cases and terms agreed in writing first."] },
    { title: "See it in practice", body: ["Read the case study of a lead-qualifying agent for a real estate agency, or send us your brief and we will reply with questions or a proposal. Write to {email}."] },
  ],
};

export const agentFa: Page = {
  meta: {
    title: "خدمات ساخت ایجنت هوش مصنوعی",
    description: "ساخت ایجنت هوش مصنوعی سفارشی برای کسب‌وکارهای کوچک و در حال رشد: هر ایجنت یک کار، روی n8n و ابزارهای شما، با اعتبارسنجی، تأیید انسانی و پایش.",
  },
  h1: "خدمات ساخت ایجنت هوش مصنوعی",
  intro: "برای کسب‌وکارهای کوچک و در حال رشد ایجنت هوش مصنوعی سفارشی طراحی، ساخت و اجرا می‌کنیم. هر ایجنت یک کار را خوب انجام می‌دهد، با ابزارهایی که همین حالا دارید کار می‌کند و جایی که لازم باشد کار را به یک آدم می‌سپارد. اینجا می‌خوانید چه می‌سازیم، چطور کار می‌کنیم و هزینه چقدر است.",
  linkLabel: "خدمات ساخت ایجنت هوش مصنوعی",
  clauses: [
    { title: "یک ایجنت برای کسب‌وکار شما چه کار می‌کند", body: ["ایجنت سیستمی است که یک پیام یا رویداد را می‌خواند، در چارچوب محدودیت‌های روشن تصمیم می‌گیرد و از طریق ابزارهای شما عمل می‌کند. پروژه‌های اول معمولاً این‌ها هستند:"], list: [
      "غربال سرنخ: چند سؤال کلیدی می‌پرسد، پاسخ‌ها را در CRM ثبت می‌کند و فقط برای سرنخ‌های مناسب جلسه می‌گذارد.",
      "دسته‌بندی پشتیبانی: درخواست‌ها را مرتب می‌کند، پیش‌نویس پاسخ برای تأیید می‌نویسد و موارد سخت را به یک آدم می‌دهد.",
      "به‌روزرسانی CRM و کارهای اداری: رکوردها، وظایف و گزارش‌ها بدون کپی‌کردن دستی به‌روز می‌مانند.",
      "پژوهش و گزارش: هر هفته همان گزارش را جمع‌آوری، خلاصه و ارسال می‌کند.",
    ] },
    { title: "چطور ایجنتی می‌سازیم که درست رفتار کند", list: [
      "هر ایجنت یک کار. محدوده‌ی کوچک آزمودنش و اعتماد به آن را ساده‌تر می‌کند.",
      "خروجی مدل ورودی نامطمئن حساب می‌شود و قبل از نوشتن یا ارسال هر چیزی، با طرح و قوانین کسب‌وکار چک می‌شود.",
      "برای کارهای پرریسک یک آدم تأیید می‌کند: بازپرداخت، ایمیل به مشتری، تغییر رکورد و هر کار سخت‌برگشت.",
      "هر اجرا ثبت می‌شود. خطاها دوباره امتحان می‌شوند و آن‌هایی که مدام شکست می‌خورند هشدار می‌دهند.",
      "روی n8n و API می‌سازیم، پس هر گام دیدنی است و بعداً می‌توانید تغییرش بدهید.",
    ] },
    { title: "روند کار ما", list: [
      "شما شرح پروژه را می‌فرستید: فرایند، ابزارها و اینکه «درست کار کردن» یعنی چه.",
      "ما مکتوب پاسخ می‌دهیم: محدوده و قیمت ثابت. تا تأیید شما کاری شروع نمی‌شود.",
      "روی نمونه‌های واقعی خودتان می‌سازیم و با حالت‌های خاص امتحانش می‌کنیم.",
      "راه‌اندازی می‌کنیم، اجراهای اول را از نزدیک می‌پاییم و مستندات را تحویل می‌دهیم. مدیریت مداوم اختیاری است.",
    ] },
    { title: "هزینه چقدر است", body: ["قیمت‌ها به دلار است و پرداخت با USDT، به‌صورت مرحله‌ای. این‌ها نقطه‌ی شروع‌اند و محدوده و قیمت نهایی قبل از هر کاری مکتوب توافق می‌شود."], list: [
      "Starter، از ۱٬۰۰۰ دلار: یک اتوماسیون یا یک ایجنت تک‌وظیفه‌ای، حداکثر ۳ یکپارچه‌سازی، مدیریت خطا و لاگ اجرا و مستندات تحویل.",
      "Pro، از ۳٬۰۰۰ دلار: یک سیستم یکپارچه با چند گردش‌کار یا ایجنت با ابزار، یکپارچه‌سازی سفارشی با API، مراحل تأیید انسانی، پایش و هشدار.",
      "مشتریان اول: ۲۰٪ تخفیف روی محدوده‌ی Starter یا Pro برای سه پروژه‌ی اول، در ازای اجازه‌ی کتبی شما برای معرفی پروژه به‌عنوان نمونه‌کار.",
    ] },
    { title: "چه چیزی را وعده نمی‌دهیم", body: ["نتیجه‌ی تجاری را تضمین نمی‌کنیم؛ به داده، ابزار و فرایند شما بستگی دارد. تعهد ما محدوده‌ی روشن، گردش‌کار آزمایش‌شده و تحویل مستند است. برای پروژه‌های ایجنت با محدوده‌ی مشخص می‌توانیم یک دوره‌ی آزمایشی ۱۴ روزه در محیط تست هم اجرا کنیم، با موارد تست و شرایطی که اول مکتوب توافق می‌شود."] },
    { title: "در عمل ببینید", body: ["نمونه‌کار ایجنت غربال سرنخ برای یک آژانس املاک را بخوانید، یا شرح پروژه‌تان را بفرستید تا با پرسش یا پیشنهاد مکتوب پاسخ بدهیم. به {email} بنویسید."] },
  ],
};
