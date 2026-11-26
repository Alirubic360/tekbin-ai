import type { Lang } from "@/lib/site";

// Planning assumptions for the readiness estimate. They are rough ranges, shown to the visitor
// as assumptions, never as measured results or promises.
export const HOURS_MID = [2.5, 7.5, 15, 30, 50]; // hours per week, midpoint of each option
export const SHARE: [number, number][] = [
  [0.3, 0.6], // customer support
  [0.4, 0.7], // data entry
  [0.25, 0.5], // lead qualification
  [0.2, 0.4], // other
];
export const WEEKS_PER_MONTH = 4.33;

export type AuditDict = {
  lang: Lang;
  badge: string;
  title: string;
  sub: string;
  q: { bottleneck: string; hours: string; tools: string; contact: string };
  bottlenecks: string[];
  hours: string[];
  tools: string[];
  next: string;
  back: string;
  step: string; // "Step {n} of {total}"
  resultTitle: string;
  resultLine: string; // {low} {high} {total}
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
    sub: "Three questions, a rough estimate on the spot, and an architecture note from an engineer if you want one. Nothing is stored in your browser.",
    q: {
      bottleneck: "Where does the manual work pile up?",
      hours: "About how many hours a week does your team spend on it?",
      tools: "Which tools does that work touch?",
      contact: "Want a written architecture note for your case?",
    },
    bottlenecks: ["Customer support", "Data entry", "Lead qualification", "Something else"],
    hours: ["Under 5", "5–10", "10–20", "20–40", "40+"],
    tools: ["Email", "CRM", "Spreadsheets", "Custom or internal system"],
    next: "Next",
    back: "Back",
    step: "Step {n} of {total}",
    resultTitle: "Your rough estimate",
    resultLine: "About {total} hours a month of manual work. Part of that, roughly {low}–{high} hours, is typically a candidate for automation.",
    assumptions:
      "This is a planning estimate, not a promise. It multiplies your weekly hours by a range we assume for this kind of work (30–60% for support, 40–70% for data entry, 25–50% for lead qualification, 20–40% for other). Real numbers depend on your data, tools and process, and the first call is where we check them.",
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
    sub: "سه سؤال، یک برآورد تقریبی همان لحظه، و اگر بخواهید یک یادداشت معماری از یک مهندس. چیزی در مرورگر شما ذخیره نمی‌شود.",
    q: {
      bottleneck: "کار دستی بیشتر کجا تلنبار می‌شود؟",
      hours: "تیم شما تقریباً هفته‌ای چند ساعت صرف آن می‌کند؟",
      tools: "این کار با کدام ابزارها سروکار دارد؟",
      contact: "یادداشت معماری مکتوب برای حالت خودتان می‌خواهید؟",
    },
    bottlenecks: ["پشتیبانی مشتری", "ورود داده", "غربال سرنخ فروش", "مورد دیگر"],
    hours: ["کمتر از ۵", "۵ تا ۱۰", "۱۰ تا ۲۰", "۲۰ تا ۴۰", "بیش از ۴۰"],
    tools: ["ایمیل", "CRM", "اکسل / جدول", "سیستم سفارشی یا داخلی"],
    next: "بعدی",
    back: "قبلی",
    step: "مرحله {n} از {total}",
    resultTitle: "برآورد تقریبی شما",
    resultLine: "حدود {total} ساعت کار دستی در ماه. بخشی از آن، تقریباً {low} تا {high} ساعت، معمولاً کاندیدای اتوماسیون است.",
    assumptions:
      "این یک برآورد برنامه‌ریزی است، نه تعهد. ساعت‌های هفتگی شما در بازه‌ای ضرب شده که برای این نوع کار فرض کرده‌ایم (پشتیبانی ۳۰ تا ۶۰٪، ورود داده ۴۰ تا ۷۰٪، غربال سرنخ ۲۵ تا ۵۰٪، موارد دیگر ۲۰ تا ۴۰٪). عدد واقعی به داده، ابزار و فرایند شما بستگی دارد و در همان گفتگوی اول بررسی‌اش می‌کنیم.",
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
