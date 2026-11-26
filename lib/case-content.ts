import type { Clause } from "@/components/LegalClauses";

export const CASE_UPDATED_EN = "November 26, 2026";
export const CASE_UPDATED_FA = "۵ آذر ۱۴۰۵ (۲۶ نوامبر ۲۰۲۶)";

type Page = { meta: { title: string; description: string }; h1: string; intro: string; clauses: Clause[] };

export const caseEn: Page = {
  meta: {
    title: "Real estate lead agent: case study",
    description: "How we built an agent that answers and qualifies real estate leads around the clock, with validation before anything is sent.",
  },
  h1: "Case study: a lead-qualifying agent for a real estate agency",
  intro: "A real estate agency owned by Iranian founders in Canada (name withheld at the client's request). This page describes the problem, how the agent is built and what changed. The figures come from this one project and will differ for yours.",
  clauses: [
    { title: "The problem", body: ["Leads arrive from Instagram, WhatsApp and the website form, many of them at night or in busy hours. When nobody answers before morning, the lead often closes with another agent. The alternative was hiring admin staff at roughly $3,000 a month or more."] },
    { title: "How the agent works", list: [
      "Trigger: a message from WhatsApp or the website form.",
      "Brain: a language model with a prompt built to ask only the key questions: budget, buying or renting, and the area.",
      "Action: the data is written to the CRM, and a calendar booking link is sent only to leads who fit the agency's budget criteria.",
      "Orchestration runs in n8n, so every step is visible and can be changed.",
    ] },
    { title: "How we keep it from saying the wrong thing", body: ["The biggest fear with AI in client conversations is a wrong price or an irrelevant reply. Before any message goes out, a validation step checks the model's output against hard rules. If the output does not pass, or the agent is not sure, the message is handed to a person instead of being sent."] },
    { title: "What changed in this project", list: [
      "First response time: from about 4 hours to under 20 seconds.",
      "Booked in-person viewings: up about 35%.",
      "Cost: a one-time 1,800 USDT for the build, compared with a roughly $3,000 monthly salary for an extra admin. Optional monthly maintenance is priced separately.",
    ], body: ["These are results from one client, measured in their setup. We do not promise the same numbers elsewhere."] },
    { title: "Want the same for your business?", body: ["Try the free estimate on the home page, or send a brief and we will reply with a written scope and fixed price. For scoped agent projects we can also run a 14-day trial in a test environment. Terms are agreed in writing first. Write to {email}."] },
  ],
};

export const caseFa: Page = {
  meta: {
    title: "نمونه کار: ایجنت غربال سرنخ املاک",
    description: "چطور ایجنتی ساختیم که شبانه‌روز به سرنخ‌های املاک جواب می‌دهد و قبل از ارسال هر پیام، خروجی‌اش را اعتبارسنجی می‌کند.",
  },
  h1: "نمونه کار: ایجنت غربال سرنخ برای یک آژانس املاک",
  intro: "یک آژانس املاک با مدیران ایرانی در کانادا (نام آن به درخواست مشتری ذکر نمی‌شود). این صفحه مسئله، ساختار ایجنت و تغییرات را توضیح می‌دهد. عددها فقط مال همین یک پروژه‌اند و برای پروژه شما فرق می‌کنند.",
  clauses: [
    { title: "مسئله", body: ["سرنخ‌ها از اینستاگرام، واتس‌اپ و فرم سایت می‌رسند و بسیاری‌شان شب یا در ساعت‌های شلوغ. وقتی تا صبح کسی جواب ندهد، سرنخ اغلب با مشاور دیگری بسته می‌شود. راه جایگزین استخدام نیروی اداری با حقوق حدود ۳٬۰۰۰ دلار در ماه یا بیشتر بود."] },
    { title: "ایجنت چطور کار می‌کند", list: [
      "محرک: پیامی که از واتس‌اپ یا فرم سایت می‌رسد.",
      "مغز: یک مدل زبانی با پرامپتی که فقط سؤال‌های کلیدی می‌پرسد: بودجه، خرید یا اجاره، و منطقه.",
      "اقدام: داده در CRM ثبت می‌شود و لینک رزرو تقویم فقط برای سرنخ‌هایی ارسال می‌شود که با معیار بودجه آژانس جور باشند.",
      "هماهنگی همه چیز در n8n انجام می‌شود، پس هر گام دیدنی و قابل تغییر است.",
    ] },
    { title: "چطور جلوی حرف اشتباه را می‌گیریم", body: ["بزرگ‌ترین ترس از هوش مصنوعی در گفتگو با مشتری، قیمت غلط یا پاسخ بی‌ربط است. قبل از ارسال هر پیام، یک گام اعتبارسنجی خروجی مدل را با قوانین سخت چک می‌کند. اگر خروجی رد شود یا ایجنت مطمئن نباشد، پیام ارسال نمی‌شود و به یک آدم سپرده می‌شود."] },
    { title: "در این پروژه چه تغییر کرد", list: [
      "زمان اولین پاسخ: از حدود ۴ ساعت به کمتر از ۲۰ ثانیه.",
      "جلسه‌های بازدید حضوری ثبت‌شده: حدود ۳۵٪ بیشتر.",
      "هزینه: یک‌بار ۱٬۸۰۰ تتر برای ساخت، در برابر حقوق ماهانه حدود ۳٬۰۰۰ دلار برای یک نیروی اداری اضافه. نگهداری ماهانه اختیاری است و جدا قیمت‌گذاری می‌شود.",
    ], body: ["این‌ها نتیجه یک مشتری و در شرایط خود اوست. برای جای دیگر همین عددها را وعده نمی‌دهیم."] },
    { title: "همین را برای کسب‌وکار خودتان می‌خواهید؟", body: ["برآورد رایگان صفحه اصلی را امتحان کنید یا شرح پروژه را بفرستید تا دامنه کار و قیمت ثابت را مکتوب بفرستیم. برای پروژه‌های ایجنت با دامنه مشخص می‌توانیم یک دوره آزمایشی ۱۴ روزه در محیط تست هم اجرا کنیم و شرایطش را اول مکتوب توافق می‌کنیم. به {email} بنویسید."] },
  ],
};

export const payEn: Page = {
  meta: { title: "How to pay with USDT", description: "A short, plain guide to paying Tekbin AI invoices in USDT: network, staging, verification and fees." },
  h1: "How to pay with USDT",
  intro: "Prices are in USD and paid in USDT, a dollar-pegged stablecoin. It is simpler than it sounds. This is the whole process.",
  clauses: [
    { title: "1. Scope and price first", body: ["Nothing is invoiced until you have approved a written scope and a fixed price. USDT transfers cannot be reversed, so this order matters."] },
    { title: "2. We send an invoice", body: ["The invoice states the amount, the network and the wallet address, and it comes by email from {email}. Payments can be staged, for example 50% at the start and 50% after tested delivery."] },
    { title: "3. Send on the exact network named", body: ["Each invoice names one network. Use that one, exactly. We currently accept USDT on:"], list: [
      "BNB Smart Chain (BEP-20)",
      "Tron (TRC-20)",
      "Other networks only by prior agreement, written on the invoice.",
    ] },
    { title: "Careful: some networks look alike", body: ["BNB Smart Chain and Ethereum addresses both start with 0x and look identical. Sending on the wrong one can lose the funds. Check the network name on the invoice, not just the address. Network fees are paid by the sender. If you are unsure, write to us before you send."] },
    { title: "4. Verify the address", body: ["Check the wallet address against the invoice we emailed. We never change payment details over chat or direct message. If anything looks different, email {email} before you send."] },
    { title: "5. Optional test transfer", body: ["For a first payment you can send a small test amount first, confirm with us that it arrived, then send the rest."] },
    { title: "6. Send us the transaction ID", body: ["After you send, reply with the transaction hash. We confirm receipt in writing and start the stage."] },
    { title: "Questions", body: ["This guide is not tax or legal advice. For anything specific to your country, ask your own accountant. For anything about the process, write to {email}."] },
  ],
};

export const payFa: Page = {
  meta: { title: "راهنمای پرداخت با USDT", description: "راهنمای کوتاه و ساده پرداخت فاکتورهای Tekbin AI با USDT: شبکه، مرحله‌ای‌کردن، تأیید آدرس و کارمزد." },
  h1: "راهنمای پرداخت با USDT",
  intro: "قیمت‌ها به دلار است و پرداخت با USDT، یک استیبل‌کوین هم‌ارز دلار. از آنچه به نظر می‌رسد ساده‌تر است. کل فرایند این است.",
  clauses: [
    { title: "۱. اول دامنه کار و قیمت", body: ["تا دامنه کار و قیمت ثابت را مکتوب تأیید نکرده باشید، فاکتوری صادر نمی‌شود. انتقال USDT برگشت‌پذیر نیست و به همین دلیل این ترتیب مهم است."] },
    { title: "۲. فاکتور می‌فرستیم", body: ["فاکتور مبلغ، شبکه و آدرس کیف پول را دارد و با ایمیل از {email} می‌رسد. پرداخت می‌تواند مرحله‌ای باشد، مثلاً ۵۰٪ در شروع و ۵۰٪ بعد از تحویل و تست."] },
    { title: "۳. دقیقاً روی شبکه‌ای که نوشته‌ایم بفرستید", body: ["هر فاکتور یک شبکه را نام می‌برد. دقیقاً از همان استفاده کنید. فعلاً USDT را روی این شبکه‌ها می‌پذیریم:"], list: [
      "BNB Smart Chain (BEP-20)",
      "Tron (TRC-20)",
      "شبکه‌های دیگر فقط با توافق قبلی و با نوشتن روی فاکتور.",
    ] },
    { title: "دقت کنید: بعضی شبکه‌ها شبیه هم‌اند", body: ["آدرس BNB Smart Chain و Ethereum هر دو با 0x شروع می‌شود و شبیه هم است. ارسال روی شبکه اشتباه ممکن است باعث از دست رفتن پول شود. اسم شبکه روی فاکتور را بخوانید، نه فقط آدرس. کارمزد شبکه را فرستنده می‌دهد. اگر مطمئن نیستید، قبل از ارسال به ما بنویسید."] },
    { title: "۴. آدرس را تطبیق بدهید", body: ["آدرس کیف پول را با فاکتوری که ایمیل کرده‌ایم مقایسه کنید. ما اطلاعات پرداخت را هرگز از طریق چت یا پیام مستقیم تغییر نمی‌دهیم. اگر چیزی متفاوت بود، قبل از ارسال به {email} ایمیل بزنید."] },
    { title: "۵. تراکنش آزمایشی (اختیاری)", body: ["برای پرداخت اول می‌توانید ابتدا مبلغ کوچکی بفرستید، از رسیدنش با ما تأیید بگیرید و بعد بقیه را بفرستید."] },
    { title: "۶. شناسه تراکنش را بفرستید", body: ["بعد از ارسال، هش تراکنش را در پاسخ بفرستید. رسیدن پول را مکتوب تأیید می‌کنیم و مرحله را شروع می‌کنیم."] },
    { title: "پرسش‌ها", body: ["این راهنما مشاوره مالیاتی یا حقوقی نیست. برای هر چیزی که به کشور شما مربوط است از حسابدار خودتان بپرسید. برای هر چیزی درباره فرایند به {email} بنویسید."] },
  ],
};
