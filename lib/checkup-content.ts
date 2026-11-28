import type { Band, CardId, QId } from "@/lib/checkup";
import type { Lang } from "@/lib/site";

type Card = { finding: string; causes: string[]; verify: string; action: string; metric: string; limits: string };

export type CheckupDict = {
  lang: Lang;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  h1: string;
  intro: string;
  privacyNote: string;
  qs: Record<QId, { title: string; options: { value: string; label: string }[] }>;
  ui: { step: string; next: string; back: string; seeResult: string; restart: string };
  result: {
    title: string;
    score: string;
    outOf: string;
    prelim: string;
    noScore: string;
    bands: Record<Band, string>;
    coverage: string;
    cardsTitle: string;
    noCards: string;
    causes: string;
    verify: string;
    action: string;
    metric: string;
    limits: string;
  };
  cards: Record<CardId, Card>;
  limitations: string[];
  gate: {
    title: string;
    intro: string;
    name: string;
    email: string;
    consent: string;
    submit: string;
    sending: string;
    successTitle: string;
    successBody: string; // {email}
    mailtoTitle: string;
    mailtoBody: string; // {email}
    error: string;
    payloadSubject: string; // {name}
  };
};

const DK = { value: "dont_know" };

export const checkupDicts: Record<Lang, CheckupDict> = {
  fa: {
    lang: "fa",
    metaTitle: "چکاپ رایگان پاسخ‌گویی و پیگیری مشتری برای مشاوران املاک",
    metaDescription:
      "پنج سؤال کوتاه درباره‌ی پاسخ به درخواست‌های تازه، ثبت و پیگیری آن‌ها. نمره و سه اقدام اول را همان لحظه ببینید. بدون ثبت‌نام و بدون ذخیره‌ی پاسخ‌ها.",
    badge: "چکاپ رایگان",
    h1: "مشتریان ملک شما کجای مسیر از دست می‌روند؟",
    intro:
      "پنج سؤال کوتاه درباره‌ی مسیر دریافت درخواست، پاسخ‌گویی و پیگیری. نمره و سه اقدام اول را همان لحظه می‌بینید.",
    privacyNote: "همه‌چیز داخل مرورگر شما محاسبه می‌شود. پاسخ‌ها تا وقتی گزارش را ایمیل نکنید جایی فرستاده یا ذخیره نمی‌شوند.",
    qs: {
      q1: {
        title: "اولین پاسخ به یک درخواست تازه معمولاً چقدر طول می‌کشد؟",
        options: [
          { value: "le_5m", label: "تا ۵ دقیقه" },
          { value: "m5_30", label: "۵ تا ۳۰ دقیقه" },
          { value: "m30_2h", label: "۳۰ دقیقه تا ۲ ساعت" },
          { value: "h2_24", label: "۲ تا ۲۴ ساعت" },
          { value: "gt_24h", label: "بیش از ۲۴ ساعت" },
          { ...DK, label: "نمی‌دانم" },
        ],
      },
      q2: {
        title: "وقتی درخواست تازه می‌رسد معمولاً چه اتفاقی می‌افتد؟",
        options: [
          { value: "reply_and_qualify", label: "پاسخ می‌دهیم و نیاز مشتری را می‌پرسیم" },
          { value: "ack_only", label: "فقط یک پاسخ کوتاه یا رسید می‌دهیم" },
          { value: "nothing", label: "منتظر می‌مانیم تا یک نفر وقت کند" },
          { ...DK, label: "نمی‌دانم" },
        ],
      },
      q3: {
        title: "درخواست‌ها کجا ثبت می‌شوند؟",
        options: [
          { value: "crm", label: "در یک CRM" },
          { value: "shared_sheet", label: "در یک جدول مشترک تیم" },
          { value: "personal", label: "در جدول یا یادداشت شخصی" },
          { value: "chats_only", label: "فقط در خود گفت‌وگوها" },
          { ...DK, label: "نمی‌دانم" },
        ],
      },
      q4: {
        title: "درخواست‌هایی که جواب نگرفته‌اند چطور پیگیری می‌شوند؟",
        options: [
          { value: "planned", label: "با برنامه‌ی ثابت" },
          { value: "manual_regular", label: "دستی ولی منظم" },
          { value: "adhoc", label: "گاه‌به‌گاه" },
          { value: "none", label: "پیگیری نمی‌شوند" },
          { ...DK, label: "نمی‌دانم" },
        ],
      },
      q5: {
        title: "نیاز مشتری (بودجه، خرید یا اجاره، منطقه) در همان اولین تماس ثبت می‌شود؟",
        options: [
          { value: "always", label: "همیشه" },
          { value: "sometimes", label: "گاهی" },
          { value: "no", label: "نه" },
          { ...DK, label: "نمی‌دانم" },
        ],
      },
    },
    ui: { step: "سؤال {n} از {total}", next: "بعدی", back: "قبلی", seeResult: "دیدن نتیجه", restart: "شروع دوباره" },
    result: {
      title: "نتیجه‌ی چکاپ شما",
      score: "نمره",
      outOf: "از ۱۰۰",
      prelim: "مقدماتی: تعدادی از پاسخ‌ها «نمی‌دانم» بود.",
      noScore: "نمره‌ی قطعی هنوز قابل محاسبه نیست، چون حداقل ۶۰ درصد سؤال‌ها پاسخ داده نشده است.",
      bands: {
        needs_major_fix: "نیازمند اصلاح جدی",
        improvable_base: "پایه‌ی قابل بهبود",
        adequate_base: "پایه‌ی مناسب",
      },
      coverage: "پوشش پاسخ‌ها",
      cardsTitle: "اولین اقدام‌ها",
      noCards: "با این پاسخ‌ها مورد فوری‌ای دیده نشد. برای بررسی دقیق‌تر، گزارش کامل را ایمیل کنید.",
      causes: "چند احتمال",
      verify: "برای تأیید بپرسید",
      action: "اقدام پیشنهادی",
      metric: "چه چیزی را اندازه بگیرید",
      limits: "محدودیت",
    },
    cards: {
      "C-FIRST-REPLY": {
        finding: "پاسخ اولیه به درخواست‌ها کند یا نامطمئن است.",
        causes: ["بیرون از ساعت کاری کسی پاسخ نمی‌دهد", "درخواست‌ها در چند کانال پراکنده می‌رسند"],
        verify: "در هفته‌ی گذشته، اولین پاسخ به هر درخواست چند دقیقه بعد ارسال شد؟",
        action: "پاسخ اولیه با چند سؤال کوتاه (بودجه، خرید یا اجاره، منطقه) و ارجاع موارد حساس به یک نفر.",
        metric: "میانه‌ی زمان تا اولین پاسخ",
        limits: "بدون قول قیمت یا نتیجه؛ فقط با رضایت مشتری.",
      },
      "C-FOLLOWUP": {
        finding: "پیگیری درخواست‌هایی که جواب نگرفته‌اند برنامه‌ی ثابت ندارد.",
        causes: ["پیگیری به حافظه‌ی افراد وابسته است", "یادآوری و شرط توقف مشخص نیست"],
        verify: "چند درصد درخواست‌های بی‌پاسخ هفته‌ی گذشته دوباره پیگیری شدند؟",
        action: "پیگیری برنامه‌ریزی‌شده با رضایت مشتری و شرط توقف.",
        metric: "درصد درخواست‌های پیگیری‌شده",
        limits: "فقط برای افرادی که اجازه‌ی تماس داده‌اند.",
      },
      "C-CRM": {
        finding: "درخواست‌ها در جدول شخصی یا فقط در گفت‌وگوها نگه‌داری می‌شوند.",
        causes: ["ابزار مشترکی برای ثبت وجود ندارد"],
        verify: "اگر یک نفر امروز نباشد، دیگران می‌توانند وضعیت هر درخواست را ببینند؟",
        action: "ثبت خودکار هر درخواست در یک فهرست مشترک یا CRM.",
        metric: "درصد درخواست‌های ثبت‌شده در فهرست مشترک",
        limits: "نیازمند دسترسی به ابزار فعلی شما.",
      },
      "C-NEEDS-CAPTURE": {
        finding: "نیاز مشتری همیشه در همان اولین تماس ثبت نمی‌شود.",
        causes: ["سؤال‌های ثابت و مشخصی پرسیده نمی‌شود"],
        verify: "کدام اطلاعات معمولاً بعداً دوباره از مشتری پرسیده می‌شود؟",
        action: "یک فرم یا پرسش‌نامه‌ی کوتاه برای ثبت نیاز در همان اولین تماس.",
        metric: "درصد درخواست‌هایی که اطلاعات کلیدی در همان اولین تماس ثبت شد",
        limits: "فقط داده‌ی لازم گرفته شود.",
      },
    },
    limitations: [
      "این نمره فقط بر پایه‌ی پاسخ‌های خود شماست و تأیید نشده است.",
      "این چکاپ تخمینی از فروش ازدست‌رفته نمی‌دهد.",
    ],
    gate: {
      title: "گزارش کامل را ایمیل کنید",
      intro:
        "نام و ایمیلتان را بگذارید تا یک مهندس با یک یادداشت کوتاه درباره‌ی همین نتیجه پاسخ بدهد. پاسخ‌ها و نمره‌ی همین چکاپ هم همراه درخواست فرستاده می‌شود.",
      name: "نام شما",
      email: "ایمیل کاری",
      consent: "اجازه می‌دهم برای پاسخ به همین درخواست با من تماس گرفته شود.",
      submit: "ارسال درخواست",
      sending: "در حال ارسال…",
      successTitle: "درخواست ثبت شد",
      successBody: "ممنون. با یک یادداشت به {email} پاسخ می‌دهیم. اگر نرسید، پوشه‌ی اسپم را ببینید یا مستقیم برایمان بنویسید.",
      mailtoTitle: "یک قدم مانده",
      mailtoBody: "برنامه‌ی ایمیل شما باید با یک پیام آماده باز شده باشد. آن را به {email} بفرستید.",
      error: "مشکلی پیش آمد. لطفاً مستقیم برایمان ایمیل بزنید.",
      payloadSubject: "درخواست چکاپ املاک: {name}",
    },
  },
  en: {
    lang: "en",
    metaTitle: "Free lead-handling checkup for real estate agents",
    metaDescription:
      "Five short questions about how you answer, record and follow up new enquiries. See your score and top three actions instantly. No sign-up, nothing stored.",
    badge: "Free checkup",
    h1: "Where do your property leads slip away?",
    intro:
      "Five short questions about how enquiries are answered, recorded and followed up. You see your score and your top three actions straight away.",
    privacyNote: "Everything is calculated in your browser. Your answers are not sent or stored unless you choose to email the report.",
    qs: {
      q1: {
        title: "How long does the first reply to a new enquiry usually take?",
        options: [
          { value: "le_5m", label: "Within 5 minutes" },
          { value: "m5_30", label: "5 to 30 minutes" },
          { value: "m30_2h", label: "30 minutes to 2 hours" },
          { value: "h2_24", label: "2 to 24 hours" },
          { value: "gt_24h", label: "More than 24 hours" },
          { ...DK, label: "I don't know" },
        ],
      },
      q2: {
        title: "What usually happens when a new enquiry arrives?",
        options: [
          { value: "reply_and_qualify", label: "We reply and ask what the client needs" },
          { value: "ack_only", label: "We only send a short acknowledgement" },
          { value: "nothing", label: "We wait until someone has time" },
          { ...DK, label: "I don't know" },
        ],
      },
      q3: {
        title: "Where are enquiries recorded?",
        options: [
          { value: "crm", label: "In a CRM" },
          { value: "shared_sheet", label: "In a shared team sheet" },
          { value: "personal", label: "In a personal sheet or notes" },
          { value: "chats_only", label: "Only inside the chats" },
          { ...DK, label: "I don't know" },
        ],
      },
      q4: {
        title: "How are unanswered enquiries followed up?",
        options: [
          { value: "planned", label: "On a fixed schedule" },
          { value: "manual_regular", label: "By hand, but regularly" },
          { value: "adhoc", label: "Now and then" },
          { value: "none", label: "They are not followed up" },
          { ...DK, label: "I don't know" },
        ],
      },
      q5: {
        title: "Is the client's need (budget, buy or rent, area) recorded on the very first contact?",
        options: [
          { value: "always", label: "Always" },
          { value: "sometimes", label: "Sometimes" },
          { value: "no", label: "No" },
          { ...DK, label: "I don't know" },
        ],
      },
    },
    ui: { step: "Question {n} of {total}", next: "Next", back: "Back", seeResult: "See result", restart: "Start over" },
    result: {
      title: "Your checkup result",
      score: "Score",
      outOf: "out of 100",
      prelim: "Preliminary: some answers were “I don't know”.",
      noScore: "A firm score can't be calculated yet because fewer than 60% of the questions were answered.",
      bands: {
        needs_major_fix: "Needs major fixes",
        improvable_base: "Improvable base",
        adequate_base: "Adequate base",
      },
      coverage: "Answer coverage",
      cardsTitle: "First actions",
      noCards: "Nothing urgent showed up from these answers. Email the full report for a closer look.",
      causes: "Possible reasons",
      verify: "Ask to confirm",
      action: "Suggested action",
      metric: "What to measure",
      limits: "Limit",
    },
    cards: {
      "C-FIRST-REPLY": {
        finding: "The first reply to enquiries is slow or uncertain.",
        causes: ["Nobody replies outside working hours", "Enquiries arrive across several channels"],
        verify: "Last week, how many minutes after each enquiry did the first reply go out?",
        action: "A first reply with a few short questions (budget, buy or rent, area), with sensitive cases passed to one person.",
        metric: "Median time to first reply",
        limits: "No promises about price or outcome; only with the client's consent.",
      },
      "C-FOLLOWUP": {
        finding: "Following up unanswered enquiries has no fixed routine.",
        causes: ["Follow-up depends on people remembering", "There is no reminder or stop condition"],
        verify: "What share of last week's unanswered enquiries were followed up again?",
        action: "Scheduled follow-up with the client's consent and a stop condition.",
        metric: "Share of enquiries followed up",
        limits: "Only for people who agreed to be contacted.",
      },
      "C-CRM": {
        finding: "Enquiries are kept in a personal sheet or only inside chats.",
        causes: ["There is no shared tool for recording them"],
        verify: "If one person is out today, can the others see the status of every enquiry?",
        action: "Automatically record every enquiry in one shared list or CRM.",
        metric: "Share of enquiries recorded in the shared list",
        limits: "Needs access to the tool you already use.",
      },
      "C-NEEDS-CAPTURE": {
        finding: "The client's need is not always recorded on the first contact.",
        causes: ["The same fixed questions are not asked every time"],
        verify: "Which details do you usually have to ask the client for again later?",
        action: "A short form or questionnaire to record the need on the first contact.",
        metric: "Share of enquiries with key details recorded on the first contact",
        limits: "Collect only the data you need.",
      },
    },
    limitations: [
      "This score is based only on your own answers and is unverified.",
      "This checkup does not estimate lost sales.",
    ],
    gate: {
      title: "Email the full report",
      intro:
        "Leave your name and email and an engineer will reply with a short note about this result. Your answers and score are sent with the request.",
      name: "Your name",
      email: "Work email",
      consent: "I agree to be contacted to answer this request.",
      submit: "Send request",
      sending: "Sending…",
      successTitle: "Request received",
      successBody: "Thanks. We will reply to {email} with a note. If it does not arrive, check spam or write to us directly.",
      mailtoTitle: "Almost there",
      mailtoBody: "Your email app should have opened with a prefilled message. Send it to {email}.",
      error: "Something went wrong. Please email us directly instead.",
      payloadSubject: "Real estate checkup request: {name}",
    },
  },
};
