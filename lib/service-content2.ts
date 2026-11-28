import type { Clause } from "@/components/LegalClauses";

type Page = { meta: { title: string; description: string }; h1: string; intro: string; clauses: Clause[] };

export const n8nEn: Page = {
  meta: {
    title: "n8n Automation Services",
    description: "n8n workflow automation for growing businesses: integrations, retries, error alerts and human approval, built and monitored by a small engineering team.",
  },
  h1: "n8n automation services",
  intro: "n8n is a workflow automation tool that can be self-hosted. We use it to connect your CRM, inbox, calendar, databases and AI models into workflows that run on their own, and we build them so that failures are caught instead of hidden.",
  clauses: [
    { title: "What we build with n8n", list: [
      "Lead capture and routing: forms, WhatsApp and email into your CRM, with the right owner assigned.",
      "Support and inbox workflows: sort, tag, draft replies for approval and escalate what needs a person.",
      "Data sync and reporting: keep tools consistent and send the same report on schedule.",
      "AI steps inside workflows: classification, extraction and drafting, always followed by a validation step.",
    ] },
    { title: "What makes a workflow reliable", list: [
      "Input validation at the door, so bad data stops early.",
      "Retries with backoff for temporary failures, and alerts for the ones that keep failing.",
      "Idempotency on writes, so a retry does not create a duplicate record.",
      "Human approval for risky actions, and a run log for every execution.",
      "Credentials kept inside n8n, never inside the workflow file.",
    ] },
    { title: "When n8n is the right tool, and when it is not", body: ["n8n is a good fit when you need to connect several tools with clear rules, want to see and change every step, and prefer to avoid heavy custom code. It is a poor fit for very high-volume, low-latency systems or logic that is mostly custom software. We tell you early if your project is better served another way."] },
    { title: "How it works", list: [
      "You send a brief: the process, the tools and what “working” should mean.",
      "We reply in writing with a scoped proposal and a fixed price.",
      "We build and test against your real cases, then launch and hand over documentation.",
      "Optional monthly management: we watch runs and failures, check output and keep costs visible.",
    ] },
    { title: "Pricing", body: ["Prices are in USD and paid in USDT, with staged payments. Starter starts at $1,000 for one automation or single-task agent. Pro starts at $3,000 for a connected system. The final scope and price are agreed in writing before work begins. We do not guarantee business results, which depend on your data, tools and process."] },
    { title: "Next step", body: ["Send us your brief or read how an AI agent project works from start to finish. Write to {email}."] },
  ],
};

export const n8nFa: Page = {
  meta: {
    title: "خدمات اتوماسیون n8n",
    description: "اتوماسیون گردش‌کار با n8n برای کسب‌وکارهای در حال رشد: یکپارچه‌سازی، تلاش مجدد، هشدار خطا و تأیید انسانی، با ساخت و پایش توسط یک تیم مهندسی کوچک.",
  },
  h1: "خدمات اتوماسیون n8n",
  intro: "n8n یک ابزار اتوماسیون گردش‌کار است که می‌شود آن را روی سرور خودتان میزبانی کرد. با آن CRM، ایمیل، تقویم، پایگاه‌داده و مدل‌های هوش مصنوعی شما را به هم وصل می‌کنیم تا خودکار کار کنند، و طوری می‌سازیم که خطا گرفته شود و پنهان نماند.",
  clauses: [
    { title: "با n8n چه می‌سازیم", list: [
      "دریافت و مسیریابی سرنخ: فرم، واتس‌اپ و ایمیل به CRM، با تعیین مسئول مناسب.",
      "گردش‌کار پشتیبانی و صندوق ایمیل: دسته‌بندی، برچسب، پیش‌نویس پاسخ برای تأیید و ارجاع موارد نیازمند آدم.",
      "همگام‌سازی داده و گزارش: ابزارها هماهنگ می‌مانند و گزارش مشخص سر وقت ارسال می‌شود.",
      "گام‌های هوش مصنوعی داخل گردش‌کار: دسته‌بندی، استخراج و نوشتن پیش‌نویس، همیشه با یک گام اعتبارسنجی بعدش.",
    ] },
    { title: "چه چیزی یک گردش‌کار را قابل اتکا می‌کند", list: [
      "اعتبارسنجی ورودی در همان ابتدا تا داده‌ی بد زود متوقف شود.",
      "تلاش مجدد با فاصله برای خطاهای موقت، و هشدار برای آن‌هایی که مدام شکست می‌خورند.",
      "جلوگیری از ثبت تکراری (idempotency) روی نوشتن‌ها، تا تلاش مجدد رکورد دوباره نسازد.",
      "تأیید انسانی برای کارهای پرریسک و ثبت لاگ برای هر اجرا.",
      "اعتبارنامه‌ها داخل خود n8n می‌مانند، نه داخل فایل گردش‌کار.",
    ] },
    { title: "کجا n8n ابزار درستی است و کجا نیست", body: ["n8n وقتی مناسب است که چند ابزار را با قاعده‌های روشن وصل می‌کنید، می‌خواهید هر گام را ببینید و تغییر بدهید و نمی‌خواهید کد سنگین سفارشی بنویسید. برای سیستم‌های بسیار پرحجم و کم‌تأخیر، یا منطقی که بیشترش نرم‌افزار سفارشی است، مناسب نیست. اگر پروژه‌ی شما با راه دیگری بهتر جواب می‌دهد، زود می‌گوییم."] },
    { title: "روند کار", list: [
      "شما شرح پروژه را می‌فرستید: فرایند، ابزارها و اینکه «درست کار کردن» یعنی چه.",
      "ما مکتوب پاسخ می‌دهیم: محدوده و قیمت ثابت.",
      "روی نمونه‌های واقعی شما می‌سازیم و آزمایش می‌کنیم، بعد راه‌اندازی و تحویل مستندات.",
      "مدیریت ماهانه (اختیاری): اجراها و خطاها را می‌بینیم، خروجی را می‌سنجیم و هزینه را شفاف نگه می‌داریم.",
    ] },
    { title: "قیمت", body: ["قیمت‌ها به دلار است و پرداخت با USDT، مرحله‌ای. Starter از ۱٬۰۰۰ دلار برای یک اتوماسیون یا ایجنت تک‌وظیفه‌ای و Pro از ۳٬۰۰۰ دلار برای یک سیستم یکپارچه شروع می‌شود. محدوده و قیمت نهایی قبل از هر کاری مکتوب توافق می‌شود. نتیجه‌ی تجاری را تضمین نمی‌کنیم و به داده، ابزار و فرایند شما بستگی دارد."] },
    { title: "قدم بعدی", body: ["شرح پروژه‌تان را بفرستید یا بخوانید یک پروژه‌ی ایجنت از اول تا آخر چطور پیش می‌رود. به {email} بنویسید."] },
  ],
};

export const reEn: Page = {
  meta: {
    title: "AI Automation for Real Estate Agencies",
    description: "A lead-qualifying agent for real estate agencies: it answers new leads quickly, asks only budget, buy or rent and area, and books viewings for the right leads.",
  },
  h1: "AI automation for real estate agencies",
  intro: "Real estate leads arrive from Instagram, WhatsApp and web forms at all hours, and the first agent to reply often wins. We build a lead-qualifying agent that answers quickly, asks the few questions that matter and hands the right leads to a person.",
  clauses: [
    { title: "The problem", body: ["When nobody answers a message until morning, the lead often closes with another agent. Hiring extra admin staff is expensive and still leaves gaps outside working hours."] },
    { title: "What the agent does", list: [
      "Replies to new WhatsApp and web-form leads straight away, in plain language.",
      "Asks only three things: budget, buying or renting, and the preferred area.",
      "Writes the lead to your CRM and sends a booking link only to leads that fit your criteria.",
      "Passes anything unclear, sensitive or low-confidence to a person instead of guessing.",
    ] },
    { title: "How we keep it safe", list: [
      "The model never quotes prices, makes promises or sends links. The workflow adds the booking link itself, and only for qualified leads.",
      "Every reply is validated against a strict schema and business rules before it is sent.",
      "Failed validation goes to a person, not to the lead.",
      "CRM writes use an idempotency key, so a retry never creates a duplicate lead.",
    ] },
    { title: "A real project", body: ["In a project for a real estate agency, first-response time went from about 4 hours to under 20 seconds and booked in-person viewings rose by about 35%. These are results from one client in their own setup, so we do not promise the same numbers elsewhere. Read the full case study for how it was built."] },
    { title: "What we need from you", list: [
      "Your CRM and how leads are currently recorded.",
      "Your messaging channel (for example WhatsApp through an approved provider).",
      "Your qualification criteria and what a good lead looks like.",
      "Someone who can approve the edge cases in the first weeks.",
    ] },
    { title: "Pricing and trial", body: ["Prices are in USD and paid in USDT, with staged payments. A single-task agent like this starts at $1,000, depending on integrations. For scoped projects we can run a 14-day trial in a test environment, with test cases and terms agreed in writing first. We do not guarantee business results. Write to {email} to start."] },
  ],
};

export const reFa: Page = {
  meta: {
    title: "اتوماسیون هوش مصنوعی برای آژانس‌های املاک",
    description: "ایجنت غربال سرنخ برای آژانس‌های املاک: سریع به سرنخ‌های تازه جواب می‌دهد، فقط بودجه، خرید یا اجاره و منطقه را می‌پرسد و برای سرنخ‌های مناسب بازدید رزرو می‌کند.",
  },
  h1: "اتوماسیون هوش مصنوعی برای آژانس‌های املاک",
  intro: "سرنخ‌های املاک در هر ساعتی از اینستاگرام، واتس‌اپ و فرم سایت می‌رسند و معمولاً اولین مشاوری که جواب بدهد برنده است. ایجنت غربال سرنخی می‌سازیم که سریع جواب می‌دهد، چند سؤال مهم را می‌پرسد و سرنخ‌های مناسب را به یک آدم می‌سپارد.",
  clauses: [
    { title: "مسئله", body: ["وقتی تا صبح کسی به پیام جواب ندهد، سرنخ اغلب با مشاور دیگری بسته می‌شود. استخدام نیروی اداری اضافه گران است و باز هم خارج از ساعت کاری خالی می‌ماند."] },
    { title: "ایجنت چه می‌کند", list: [
      "به سرنخ‌های تازه‌ی واتس‌اپ و فرم سایت فوراً و به زبان ساده جواب می‌دهد.",
      "فقط سه چیز می‌پرسد: بودجه، خرید یا اجاره، و منطقه‌ی مدنظر.",
      "سرنخ را در CRM ثبت می‌کند و لینک رزرو را فقط برای سرنخ‌هایی می‌فرستد که با معیار شما جور باشند.",
      "هر چه مبهم، حساس یا کم‌اطمینان باشد را به یک آدم می‌سپارد، نه اینکه حدس بزند.",
    ] },
    { title: "چطور امنش نگه می‌داریم", list: [
      "مدل هرگز قیمت نمی‌دهد، وعده نمی‌دهد و لینک نمی‌فرستد. لینک رزرو را خود گردش‌کار و فقط برای سرنخ‌های واجد شرایط اضافه می‌کند.",
      "هر پاسخ قبل از ارسال با طرح سخت و قوانین کسب‌وکار اعتبارسنجی می‌شود.",
      "پاسخ ردشده به یک آدم می‌رسد، نه به سرنخ.",
      "ثبت در CRM با کلید یکتا (idempotency) است تا تلاش مجدد سرنخ تکراری نسازد.",
    ] },
    { title: "یک پروژه‌ی واقعی", body: ["در پروژه‌ای برای یک آژانس املاک، زمان اولین پاسخ از حدود ۴ ساعت به کمتر از ۲۰ ثانیه رسید و جلسه‌های بازدید حضوری ثبت‌شده حدود ۳۵٪ بیشتر شد. این نتیجه‌ی یک مشتری و در شرایط خود اوست و همین عددها را برای جای دیگر وعده نمی‌دهیم. برای دیدن اینکه چطور ساخته شد، نمونه‌کار کامل را بخوانید."] },
    { title: "از شما چه می‌خواهیم", list: [
      "CRM شما و اینکه سرنخ‌ها الان چطور ثبت می‌شوند.",
      "کانال پیام‌رسانی شما (مثلاً واتس‌اپ از طریق یک ارائه‌دهنده‌ی تأییدشده).",
      "معیار غربال شما و اینکه سرنخ خوب چه شکلی است.",
      "یک نفر که در هفته‌های اول موارد خاص را تأیید کند.",
    ] },
    { title: "قیمت و دوره‌ی آزمایشی", body: ["قیمت‌ها به دلار است و پرداخت با USDT، مرحله‌ای. یک ایجنت تک‌وظیفه‌ای مثل این بسته به یکپارچه‌سازی‌ها از ۱٬۰۰۰ دلار شروع می‌شود. برای پروژه‌های با محدوده‌ی مشخص می‌توانیم یک دوره‌ی آزمایشی ۱۴ روزه در محیط تست اجرا کنیم، با موارد تست و شرایطی که اول مکتوب توافق می‌شود. نتیجه‌ی تجاری را تضمین نمی‌کنیم. برای شروع به {email} بنویسید."] },
  ],
};
