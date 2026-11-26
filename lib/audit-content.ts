import type { Lang } from "@/lib/site";

// Planning assumptions for the readiness estimate. They are rough ranges, shown to the visitor
// as assumptions, never as measured results or promises.
export const HOURS_MID = [2.5, 7.5, 15, 30, 50]; // hours per week, midpoint of each option
export const TAKEOVER = 0.7; // planning assumption: share of that time an agent takes over
export const WAGES = [25, 28, 20, 25]; // hourly benchmarks: Canada, Europe, UAE, other (editable by the visitor)
export const WEEKS_PER_MONTH = 4.33;

export type AuditDict = {
  lang: Lang;
  badge: string;
  title: string;
  sub: string;
  q: { bottleneck: string; hours: string; tools: string; wage: string; contact: string };
  countries: string[];
  wageLabel: string;
  costLine: string; // {yearly}
  bottlenecks: string[];
  hours: string[];
  tools: string[];
  next: string;
  back: string;
  step: string; // "Step {n} of {total}"
  resultTitle: string;
  resultLine: string; // {total} {cost}
  assumptions: string;
  toolNotes: { standard: string; custom: string };
  contactIntro: string;
  labels: { name: string; email: string };
  placeholders: { name: string; email: string };
  submit: string;
  sending: string;
  consent: string;
  successTitle: string;
  successBody: string; // {email}
  mailtoTitle: string;
  mailtoBody: string; // {email}
  error: string;
  payloadSubject: string; // {name}
  restart: string;
};

export const auditDicts: Record<Lang, AuditDict> = {
  en: {
    lang: "en",
    badge: "Free estimate",
    title: "How much manual work could an agent take off your team?",
    sub: "Four questions, a rough estimate on the spot, and an architecture note from an engineer if you want one. Nothing is stored in your browser.",
    q: {
      bottleneck: "Where does the manual work pile up?",
      hours: "About how many hours a week does your team spend on it?",
      tools: "Which tools does that work touch?",
      wage: "Where is your team based, and what does an hour of that work cost you?",
      contact: "Want a written architecture note for your case?",
    },
    bottlenecks: ["Customer support", "Data entry", "Lead qualification", "Something else"],
    countries: ["Canada", "Europe", "UAE", "Other"],
    wageLabel: "Hourly cost, in USD or similar (you can edit it)",
    costLine: "If an agent takes over about 70% of that time, the saving is roughly {yearly} a year.",
    hours: ["Under 5", "5–10", "10–20", "20–40", "40+"],
    tools: ["Email", "CRM", "Spreadsheets", "Custom or internal system"],
    next: "Next",
    back: "Back",
    step: "Step {n} of {total}",
    resultTitle: "Your rough estimate",
    resultLine: "About {total} hours a month of manual work, roughly {cost} a month in staff time.",
    assumptions:
      "This is a planning estimate, not a promise. It is weekly hours × 4.33 × hourly cost, with an assumed 70% of that time taken over by an agent. Country presets are rough benchmarks (Canada 25, Europe 28, UAE 20 per hour) and you can change them. Real results depend on your data, tools and process, and the first call is where we check them.",
    toolNotes: {
      standard: "Email, CRM and spreadsheets are normal integration points for the workflows we build.",
      custom: "A custom or internal system needs an API or webhook review first. That is the main thing we would check.",
    },
    contactIntro: "Leave your details and an engineer replies by email with a short architecture note: how we would approach this, what we would need from you, and what could go wrong. No automated pitch.",
    labels: { name: "Your name", email: "Work email" },
    placeholders: { name: "Jane Smith", email: "jane@company.com" },
    submit: "Email me the note",
    sending: "Sending…",
    consent: "We use your details only to reply to this request.",
    successTitle: "Request received",
    successBody: "Thanks. We will reply to {email} with the architecture note. If it does not arrive, check spam or write to us directly.",
    mailtoTitle: "Almost there",
    mailtoBody: "Your email app should have opened with a prefilled message. Send it to {email} and we will reply.",
    error: "Something went wrong. Please email us directly instead.",
    payloadSubject: "Audit estimate request: {name}",
    restart: "Start over",
  },
  fa: {
    lang: "fa",
    badge: "برآورد رایگان",
    title: "یک ایجنت چقدر از کار دستی تیم شما را کم می‌کند؟",
    sub: "چهار سؤال، یک برآورد تقریبی همان لحظه، و اگر بخواهید یک یادداشت معماری از یک مهندس. چیزی در مرورگر شما ذخیره نمی‌شود.",
    q: {
      bottleneck: "کار دستی بیشتر کجا تلنبار می‌شود؟",
      hours: "تیم شما تقریباً هفته‌ای چند ساعت صرف آن می‌کند؟",
      tools: "این کار با کدام ابزارها سروکار دارد؟",
      wage: "تیم شما کجاست و هر ساعت این کار چقدر برایتان هزینه دارد؟",
      contact: "یادداشت معماری مکتوب برای حالت خودتان می‌خواهید؟",
    },
    bottlenecks: ["پشتیبانی مشتری", "ورود داده", "غربال سرنخ فروش", "مورد دیگر"],
    countries: ["کانادا", "اروپا", "امارات", "جای دیگر"],
    wageLabel: "هزینه ساعتی، به دلار یا معادل آن (قابل ویرایش)",
    costLine: "اگر ایجنت حدود ۷۰٪ از این زمان را بر عهده بگیرد، صرفه‌جویی تقریباً {yearly} در سال است.",
    hours: ["کمتر از ۵", "۵ تا ۱۰", "۱۰ تا ۲۰", "۲۰ تا ۴۰", "بیش از ۴۰"],
    tools: ["ایمیل", "CRM", "اکسل / جدول", "سیستم سفارشی یا داخلی"],
    next: "بعدی",
    back: "قبلی",
    step: "مرحله {n} از {total}",
    resultTitle: "برآورد تقریبی شما",
    resultLine: "حدود {total} ساعت کار دستی در ماه، تقریباً {cost} در ماه هزینه نیروی انسانی.",
    assumptions:
      "این یک برآورد برنامه‌ریزی است، نه تعهد. فرمول: ساعت هفتگی × ۴٫۳۳ × هزینه ساعتی، با این فرض که ایجنت ۷۰٪ از آن زمان را بر عهده می‌گیرد. مقدارهای پیش‌فرض کشورها تقریبی‌اند (کانادا ۲۵، اروپا ۲۸، امارات ۲۰ در ساعت) و قابل تغییرند. عدد واقعی به داده، ابزار و فرایند شما بستگی دارد و در همان گفتگوی اول بررسی‌اش می‌کنیم.",
    toolNotes: {
      standard: "ایمیل، CRM و جدول‌ها نقاط اتصال معمول در جریان‌هایی هستند که می‌سازیم.",
      custom: "سیستم سفارشی یا داخلی اول به بررسی API یا وب‌هوک نیاز دارد. مهم‌ترین چیزی که چک می‌کنیم همین است.",
    },
    contactIntro: "مشخصاتتان را بگذارید تا یک مهندس با یک یادداشت معماری کوتاه به ایمیلتان پاسخ دهد: چطور به این موضوع نگاه می‌کنیم، چه چیزی از شما لازم داریم و چه چیزی ممکن است خراب شود. بدون پیام تبلیغاتی خودکار.",
    labels: { name: "نام شما", email: "ایمیل کاری" },
    placeholders: { name: "نام و نام خانوادگی", email: "name@company.com" },
    submit: "یادداشت را ایمیل کنید",
    sending: "در حال ارسال…",
    consent: "مشخصات شما فقط برای پاسخ به همین درخواست استفاده می‌شود.",
    successTitle: "درخواست ثبت شد",
    successBody: "ممنون. یادداشت معماری را به {email} می‌فرستیم. اگر نرسید، پوشه اسپم را ببینید یا مستقیم برایمان بنویسید.",
    mailtoTitle: "یک قدم مانده",
    mailtoBody: "برنامه ایمیل شما باید با یک پیام آماده باز شده باشد. آن را به {email} بفرستید تا پاسخ بدهیم.",
    error: "مشکلی پیش آمد. لطفاً مستقیم برایمان ایمیل بزنید.",
    payloadSubject: "درخواست برآورد: {name}",
    restart: "شروع دوباره",
  },
};
