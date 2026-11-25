import type { Lang } from "@/lib/site";

export type BriefDict = {
  lang: Lang;
  // page
  badge: string;
  title: string;
  intro: string;
  steps: { title: string; body: string }[];
  secretsNote: string;
  metaTitle: string;
  metaDescription: string;
  // form
  sections: { about: string; project: string; scope: string };
  labels: Record<
    | "name" | "email" | "company" | "contact" | "projectType" | "process" | "tools"
    | "volume" | "approval" | "data" | "timeline" | "budget" | "notes",
    string
  >;
  placeholders: Record<"name" | "email" | "company" | "contact" | "process" | "notes", string> & {
    projectType: string; volume: string; approval: string; data: string; timeline: string; budget: string;
  };
  options: {
    projectTypes: string[]; tools: string[]; volumes: string[]; approvals: string[];
    sensitivities: string[]; timelines: string[]; budgets: string[];
  };
  consent: { before: string; link: string; after: string };
  submit: string;
  sending: string;
  hint: string;
  successTitle: string;
  successBody: string; // {email}
  mailtoTitle: string;
  mailtoBody: string; // {email}
  error: string;
  errorLink: string;
  payloadSubject: string; // {name}
  mailLabels: Record<string, string>;
};

const toolsEn = ["n8n", "Zapier", "Make", "HubSpot", "Salesforce", "Google Workspace", "Microsoft 365", "Slack", "Notion", "Airtable", "WhatsApp / Telegram", "Custom API"];

export const briefEn: BriefDict = {
  lang: "en",
  badge: "Project brief",
  title: "Tell us what to automate.",
  intro:
    "The more concrete the brief, the better the proposal. Tell us what kicks the process off, what happens step by step and what the end result should be. Rough is fine; we'll ask for whatever's missing.",
  steps: [
    { title: "You send the brief", body: "The process, the tools involved, and what \u201cworking\u201d looks like." },
    { title: "We reply in writing", body: "A few clarifying questions, then a scoped proposal with a fixed price." },
    { title: "You approve first", body: "Nothing starts until scope, access and price are agreed in writing." },
  ],
  secretsNote: "Please don't put passwords, API keys or other secrets in this form. We'll sort out access separately.",
  metaTitle: "Send your project brief",
  metaDescription: "Tell us which process you want to automate. We reply in writing with questions or a scoped proposal.",
  sections: { about: "About you", project: "The project", scope: "Scope and constraints" },
  labels: {
    name: "Full name", email: "Work email", company: "Company or website", contact: "",
    projectType: "What do you need?", process: "Which process should we automate?", tools: "Tools involved",
    volume: "Expected volume", approval: "Human approval needed?", data: "Data involved",
    timeline: "Timeline", budget: "Budget range (USD)", notes: "Anything else we should know?",
  },
  placeholders: {
    name: "Jane Cooper", email: "jane@company.com", company: "company.com", contact: "",
    process: "What kicks it off, what happens next, and what should the result be? For example: a lead fills in our website form, we enrich and score it, create a deal in HubSpot and ping sales in Slack.",
    notes: "Links, constraints, existing systems, edge cases.",
    projectType: "Select a type", volume: "Select volume", approval: "Select an option", data: "Select data type",
    timeline: "Select a timeline", budget: "Select a range",
  },
  options: {
    projectTypes: ["AI agent", "Workflow automation", "Integration / API work", "Manage an existing agent", "Not sure yet"],
    tools: [...toolsEn, "Other"],
    volumes: ["Under 100 runs / month", "100 – 1,000", "1,000 – 10,000", "10,000+", "Not sure"],
    approvals: ["Yes, for sensitive actions", "No, fully automated", "Not sure yet"],
    sensitivities: ["Public data only", "Internal business data", "Personal customer data", "Regulated data (health, finance)"],
    timelines: ["As soon as possible", "2 – 6 weeks", "Flexible"],
    budgets: ["Under $1,000", "$1,000 – $3,000", "$3,000 – $10,000", "$10,000+", "Not sure yet"],
  },
  consent: { before: "I agree that Tekbin AI may use these details to reply to my brief, as described in the ", link: "Privacy Policy", after: "." },
  submit: "Send brief",
  sending: "Sending",
  hint: "No account needed. We reply in writing.",
  successTitle: "Brief received",
  successBody: "Thanks, we've got it. We'll read it through and write back to {email} with questions or a written proposal.",
  mailtoTitle: "Your email app should open",
  mailtoBody: "Your brief is pre-filled in a draft addressed to {email}. Send it from your email app and we'll reply in writing. If nothing opened, just email us at {email}.",
  error: "Something went wrong. Please email your brief to",
  errorLink: "",
  payloadSubject: "New project brief: {name}",
  mailLabels: {
    name: "Name", email: "Email", company: "Company / website", contact: "Contact", projectType: "Project type",
    process: "Process to automate", tools: "Current tools", volume: "Volume", approval: "Human approval",
    data: "Data sensitivity", timeline: "Timeline", budget: "Budget", notes: "Notes", subject: "Project brief",
  },
};

export const briefFa: BriefDict = {
  lang: "fa",
  badge: "درخواست مشاوره",
  title: "بگویید چه چیزی را می‌خواهید خودکار کنیم.",
  intro:
    "هر چه توضیح مشخص‌تر باشد، پیشنهاد دقیق‌تر می‌شود. بنویسید چه چیزی کار را شروع می‌کند، مرحله‌به‌مرحله چه اتفاقی می‌افتد و نتیجه باید چه باشد. ناقص هم باشد اشکالی ندارد؛ هرچه کم باشد می‌پرسیم.",
  steps: [
    { title: "درخواستتان را می‌فرستید", body: "فرایند، ابزارهایی که درگیرند و اینکه «درست کار کردن» یعنی چه." },
    { title: "با شما در تماس می‌شویم", body: "اول چند سؤال تکمیلی، بعد پیشنهاد مکتوب با قیمت ثابت." },
    { title: "اول شما تأیید می‌کنید", body: "تا محدوده، دسترسی‌ها و قیمت مکتوب توافق نشود، کاری شروع نمی‌شود." },
  ],
  secretsNote: "لطفاً رمز عبور، کلید API یا اطلاعات محرمانه‌ی دیگر را در این فرم نگذارید؛ دسترسی‌ها را جداگانه هماهنگ می‌کنیم.",
  metaTitle: "درخواست مشاوره",
  metaDescription: "فرایندی را که می‌خواهید خودکار شود توضیح دهید. با پرسش‌های تکمیلی یا پیشنهاد مکتوب پاسخ می‌دهیم.",
  sections: { about: "درباره‌ی شما", project: "پروژه", scope: "محدوده و محدودیت‌ها" },
  labels: {
    name: "نام و نام خانوادگی", email: "ایمیل", company: "شرکت یا وب‌سایت",
    contact: "شماره تماس یا آیدی تلگرام/واتساپ (اختیاری)",
    projectType: "به چه چیزی نیاز دارید؟", process: "کدام فرایند را خودکار کنیم؟", tools: "ابزارهای درگیر",
    volume: "حجم تقریبی اجرا", approval: "آیا تأیید انسانی لازم است؟", data: "نوع داده‌ی درگیر",
    timeline: "زمان‌بندی", budget: "بازه‌ی بودجه (دلار)", notes: "چیز دیگری هست که باید بدانیم؟",
  },
  placeholders: {
    name: "نام شما", email: "name@company.com", company: "company.com",
    contact: "مثلاً @username یا +98 ...",
    process: "چه چیزی کار را شروع می‌کند، بعدش چه اتفاقی می‌افتد و نتیجه باید چه باشد؟ مثلاً: مشتری فرم سایت را پر می‌کند، اطلاعاتش تکمیل و امتیازدهی می‌شود، در HubSpot معامله ساخته می‌شود و تیم فروش در Slack خبردار می‌شود.",
    notes: "لینک‌ها، محدودیت‌ها، سیستم‌های موجود، حالت‌های خاص.",
    projectType: "یک مورد را انتخاب کنید", volume: "حجم را انتخاب کنید", approval: "یک مورد را انتخاب کنید",
    data: "نوع داده را انتخاب کنید", timeline: "زمان‌بندی را انتخاب کنید", budget: "یک بازه را انتخاب کنید",
  },
  options: {
    projectTypes: ["عامل هوش مصنوعی", "اتوماسیون گردش‌کار", "یکپارچه‌سازی / کار با API", "مدیریت یک عامل موجود", "هنوز مطمئن نیستم"],
    tools: [...toolsEn, "سایر"],
    volumes: ["کمتر از ۱۰۰ اجرا در ماه", "۱۰۰ تا ۱٬۰۰۰", "۱٬۰۰۰ تا ۱۰٬۰۰۰", "بیش از ۱۰٬۰۰۰", "نمی‌دانم"],
    approvals: ["بله، برای کارهای حساس", "خیر، کاملاً خودکار", "هنوز مطمئن نیستم"],
    sensitivities: ["فقط داده‌ی عمومی", "داده‌ی داخلی کسب‌وکار", "داده‌ی شخصی مشتریان", "داده‌ی تحت مقررات (سلامت، مالی)"],
    timelines: ["هر چه زودتر", "۲ تا ۶ هفته", "انعطاف‌پذیر"],
    budgets: ["کمتر از ۱٬۰۰۰ دلار", "۱٬۰۰۰ تا ۳٬۰۰۰ دلار", "۳٬۰۰۰ تا ۱۰٬۰۰۰ دلار", "بیش از ۱۰٬۰۰۰ دلار", "هنوز مطمئن نیستم"],
  },
  consent: { before: "موافقم که Tekbin AI از این اطلاعات برای پاسخ به درخواست من استفاده کند، مطابق ", link: "سیاست حریم خصوصی", after: "." },
  submit: "ارسال درخواست",
  sending: "در حال ارسال",
  hint: "نیازی به ساخت حساب نیست.",
  successTitle: "درخواست شما دریافت شد",
  successBody: "ممنون، درخواستتان رسید. بررسی می‌کنیم و با سؤال‌های تکمیلی یا پیشنهاد مکتوب به {email} جواب می‌دهیم.",
  mailtoTitle: "برنامه‌ی ایمیل شما باید باز شود",
  mailtoBody: "درخواستتان در یک پیش‌نویس با مقصد {email} آماده شده. همان را از برنامه‌ی ایمیل بفرستید. اگر چیزی باز نشد، مستقیم به {email} ایمیل بزنید.",
  error: "مشکلی پیش آمد. لطفاً درخواست را به این ایمیل بفرستید:",
  errorLink: "",
  payloadSubject: "درخواست مشاوره‌ی جدید: {name}",
  mailLabels: {
    name: "نام", email: "ایمیل", company: "شرکت / وب‌سایت", contact: "راه تماس", projectType: "نوع پروژه",
    process: "فرایند موردنظر", tools: "ابزارها", volume: "حجم", approval: "تأیید انسانی",
    data: "نوع داده", timeline: "زمان‌بندی", budget: "بودجه", notes: "توضیحات", subject: "درخواست مشاوره",
  },
};

export const briefDicts: Record<Lang, BriefDict> = { en: briefEn, fa: briefFa };
