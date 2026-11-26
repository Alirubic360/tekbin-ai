import type { Lang } from "@/lib/site";

export type HoodDict = {
  title: string;
  sub: string;
  label: string; // "Illustrative reference design"
  nodes: { name: string; role: string }[];
  note: string;
  points: { title: string; body: string }[];
};

export const hoodDicts: Record<Lang, HoodDict> = {
  en: {
    title: "Under the hood",
    sub: "This is the shape of a typical support-triage agent. It is a reference design to show how we think about reliability, not a client project.",
    label: "Illustrative reference design",
    nodes: [
      { name: "Webhook", role: "Receives the event" },
      { name: "n8n router", role: "Classifies and routes" },
      { name: "LLM step", role: "Drafts or extracts" },
      { name: "Validator", role: "Checks schema and rules" },
      { name: "Human gate", role: "Approves risky actions" },
      { name: "CRM update", role: "Writes the result" },
    ],
    note: "Failed validation never reaches the CRM. It goes to a person.",
    points: [
      { title: "Validate before you write", body: "Model output is treated as untrusted input. It is checked against a schema and business rules before any system of record is touched." },
      { title: "A person for the risky parts", body: "Refunds, deletions and anything irreversible wait for human approval until you decide otherwise." },
      { title: "Logged and retryable", body: "Every run leaves a trace, failures retry with backoff, and the ones that keep failing raise an alert." },
    ],
  },
  fa: {
    title: "پشت صحنه",
    sub: "این شکل یک ایجنت معمولی تریاژ پشتیبانی است. یک طرح مرجع است تا نگاه ما به پایداری را نشان بدهد، نه پروژه یک مشتری.",
    label: "طرح مرجع، صرفاً برای توضیح",
    nodes: [
      { name: "وب‌هوک", role: "رویداد را دریافت می‌کند" },
      { name: "روتر n8n", role: "دسته‌بندی و مسیریابی" },
      { name: "گام مدل زبانی", role: "پیش‌نویس یا استخراج" },
      { name: "اعتبارسنج", role: "طرح و قوانین را چک می‌کند" },
      { name: "تأیید انسانی", role: "اقدام‌های پرریسک" },
      { name: "به‌روزرسانی CRM", role: "نتیجه را می‌نویسد" },
    ],
    note: "خروجی ردشده هرگز به CRM نمی‌رسد؛ به یک آدم می‌رسد.",
    points: [
      { title: "اول اعتبارسنجی، بعد نوشتن", body: "خروجی مدل ورودی نامطمئن حساب می‌شود. قبل از دست‌زدن به هر سیستم اصلی، با طرح و قوانین کسب‌وکار چک می‌شود." },
      { title: "برای بخش‌های پرریسک، یک آدم", body: "بازپرداخت، حذف و هر کار برگشت‌ناپذیر تا وقتی خودتان تصمیم دیگری نگیرید منتظر تأیید انسان می‌ماند." },
      { title: "ثبت‌شده و قابل تکرار", body: "هر اجرا ردی می‌گذارد، خطاها با فاصله زمانی دوباره امتحان می‌شوند و آن‌هایی که مدام شکست می‌خورند هشدار می‌دهند." },
    ],
  },
};
