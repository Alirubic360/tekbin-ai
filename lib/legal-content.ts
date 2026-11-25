import type { Clause } from "@/components/LegalClauses";

export const LEGAL_UPDATED_EN = "November 26, 2026";
export const LEGAL_UPDATED_FA = "۵ آذر ۱۴۰۵ (۲۶ نوامبر ۲۰۲۶)";

/* ------------------------------------------------------------------ */
/* TERMS OF SERVICE — English                                          */
/* ------------------------------------------------------------------ */
export const termsEn: { intro: string; clauses: Clause[] } = {
  intro:
    "These Terms of Service (“Terms”) govern your use of {domain} and the AI agent, automation and related services offered by Tekbin AI (“Tekbin AI”, “we”, “us”). By using the website, sending us a brief or engaging us, you agree to these Terms on behalf of yourself and the business you represent. Our services are provided to businesses and professionals, not to consumers.",
  clauses: [
    {
      title: "Agreement and order of precedence",
      body: [
        "Each project is governed by (a) a written proposal, statement of work or order we both accept (the “Project Agreement”), and (b) these Terms. If they conflict, the Project Agreement prevails for that project, and only to the extent it expressly says so.",
        "Nothing on this website is a binding offer. A project begins only when you approve the Project Agreement in writing and any initial payment it requires has been made.",
      ],
    },
    {
      title: "Services and scope",
      body: [
        "We design, build, deploy and, where agreed, operate AI agents, workflow automations and integrations. The deliverables, timeline, fees, support period and any management plan are defined in the Project Agreement. Work outside that scope is a change request and is quoted separately.",
        "Timelines are estimates and depend on you providing accurate information, access, decisions and feedback on time. Delays caused by you or by third-party platforms extend the timeline accordingly and do not entitle you to a price reduction.",
      ],
    },
    {
      title: "Change requests",
      body: [
        "Either party may propose a change to scope, timeline or price. A change takes effect only when both parties confirm it in writing (email suffices). We may decline a change, and we may charge for time already spent on work that a change makes obsolete.",
      ],
    },
    {
      title: "Delivery, acceptance and corrections",
      list: [
        "Deliverables are accepted on the earliest of: your written approval, your use of the deliverable in production, or seven (7) business days after delivery without a written notice of reproducible defects.",
        "A “defect” means a failure of the deliverable to perform materially as described in the Project Agreement. Changes in your data, tools, third-party platforms, AI model behaviour or business rules after delivery are not defects.",
        "During the support window stated in the Project Agreement, we will correct reported defects at no extra charge. Correction, or re-performance of the affected work, is your sole and exclusive remedy for defects.",
      ],
    },
    {
      title: "Fees, payment and USDT",
      list: [
        "Prices are quoted in US dollars and paid in USDT on the network stated in the invoice, in the amount shown on the invoice. Invoices are due within seven (7) days of issue unless the Project Agreement says otherwise.",
        "Crypto transfers are generally irreversible. You are responsible for sending funds to the exact address on the invoice, for network fees, and for any loss from sending to a wrong address or network. A payment is complete only when we have received the full invoiced amount.",
        "Fees for work performed, deposits and completed stage payments are non-refundable unless the Project Agreement or mandatory law provides otherwise. If an invoice is overdue, we may pause work and any management or support services until it is paid.",
        "Prices exclude taxes, duties and levies, which are your responsibility, other than taxes on our own income. Third-party costs (AI model usage, automation platforms, hosting, APIs) are separate from our fees unless the Project Agreement says they are included.",
        "Introductory pricing, such as the Founding Client offer, is conditional on the terms stated on the pricing page and in the Project Agreement, including permission to present the project as a case study. We may end an introductory offer at any time for new engagements.",
      ],
    },
    {
      title: "Your responsibilities",
      list: [
        "Provide accurate and complete information, access and decisions on time, and keep credentials you share with us secure and revocable.",
        "Make sure you have the right to share, process and automate the data, accounts and systems you connect, and that you have given any notices and obtained any consents your use requires.",
        "Review outputs and automated actions before relying on them, and decide which actions may run without human approval. You remain responsible for decisions made using the deliverables.",
        "Use the deliverables lawfully and in line with the terms of the third-party tools involved.",
      ],
    },
    {
      title: "AI and automation outputs",
      body: [
        "AI systems can produce incorrect, incomplete or unexpected output, and automations can behave differently when inputs, tools or models change. We do not guarantee that outputs will be accurate, that automations will run without interruption, or that any particular saving, revenue, ranking or other business result will be achieved.",
        "We design human-approval steps, logging and error handling where agreed. Unless the Project Agreement states otherwise, you are responsible for operating and supervising the deliverables after handover.",
      ],
    },
    {
      title: "Third-party tools and services",
      body: [
        "Projects may rely on third-party platforms, models and APIs (for example n8n, OpenAI, Anthropic, Google, Cloudflare). Their availability, pricing, limits and terms are outside our control, may change without notice and apply to you directly. We are not responsible for their acts, omissions, outages or changes. Names and marks of third parties belong to their owners; mentioning them does not imply endorsement or partnership.",
      ],
    },
    {
      title: "Intellectual property",
      list: [
        "Our background materials: all templates, components, prompts, code libraries, methods, tools and know-how that we own or develop independently of your project, together with improvements to them, remain ours (“Background IP”).",
        "Deliverables: subject to full payment, you own the project-specific deliverables we create for you under the Project Agreement. We grant you a perpetual, non-exclusive, non-transferable, worldwide licence to use any Background IP embedded in them solely as part of those deliverables.",
        "Client Data: you keep all rights in your data. You grant us a limited licence to use it only to perform the services and as these Terms allow.",
        "We may reuse general know-how, skills and non-confidential, non-client-specific techniques. We will present a project as a case study or reference only with your written permission.",
        "This website, its design and content belong to Tekbin AI.",
      ],
    },
    {
      title: "Confidentiality",
      body: [
        "Each party will keep the other’s non-public information confidential, use it only for the project, and share it only with personnel, subcontractors and advisers who need it and are bound by equivalent duties. This does not apply to information that is public through no fault of the recipient, already known to it, independently developed, or lawfully received from a third party, or that must be disclosed by law (with notice where lawful). These duties continue for three (3) years after the project ends, and for as long as trade secrets remain secret.",
      ],
    },
    {
      title: "Personal data",
      body: [
        "Our {domain} privacy practices are described in the Privacy Policy. Where we process personal data on your behalf in a project, you are the controller (or equivalent) and we act as your processor, processing only on your documented instructions. We will enter into a data processing agreement on request where the law requires one.",
      ],
    },
    {
      title: "Warranties and disclaimers",
      body: [
        "We will perform the services with reasonable skill and care. Except as expressly stated in these Terms or the Project Agreement, and to the fullest extent permitted by law, the website and services are provided “as is” and “as available”, and we disclaim all other warranties, express or implied, including merchantability, fitness for a particular purpose, non-infringement, uninterrupted operation and error-free output.",
      ],
    },
    {
      title: "Limitation of liability",
      list: [
        "To the fullest extent permitted by law, neither party is liable to the other for indirect, incidental, consequential, special or punitive damages, or for loss of profits, revenue, business, goodwill or data, however arising, even if advised of the possibility.",
        "To the fullest extent permitted by law, our total aggregate liability arising out of or relating to a project or these Terms, whether in contract, tort (including negligence) or otherwise, is limited to the fees you actually paid us for that project in the three (3) months before the event giving rise to the claim.",
        "Nothing in these Terms limits liability that cannot be limited by law, including for fraud, wilful misconduct, or death or personal injury caused by negligence. These limits do not reduce your obligation to pay fees due.",
        "Any claim must be notified in writing within twelve (12) months after you became aware of the facts giving rise to it, and in any event within the limitation period permitted by law.",
      ],
    },
    {
      title: "Indemnity",
      body: [
        "You will defend, indemnify and hold harmless Tekbin AI, its personnel and subcontractors against third-party claims, and resulting losses, damages, costs and reasonable legal fees, arising from: (a) Client Data or your instructions, including any claim that you lacked the right to provide them; (b) your use of the deliverables in breach of law or of third-party terms; or (c) actions taken automatically by systems you operate after handover. We will notify you promptly of any claim, allow you to control its defence, and reasonably cooperate at your cost.",
      ],
    },
    {
      title: "Term, suspension and termination",
      list: [
        "Either party may terminate a project for convenience on ten (10) days’ written notice, or immediately if the other commits a material breach that remains uncured ten (10) days after written notice.",
        "On termination you pay for work performed up to the termination date, for stages started, and for non-cancellable third-party costs we incurred. Deposits and paid stage fees are not refunded except as the Project Agreement or mandatory law requires.",
        "We may suspend or end services immediately if required by law, if you use the services unlawfully or in a way that harms us or third parties, or if you do not pay on time.",
        "Clauses that by nature should survive termination (payment, intellectual property, confidentiality, disclaimers, liability, indemnity, governing law) do survive.",
      ],
    },
    {
      title: "Compliance with laws",
      body: [
        "Each party will comply with the laws that apply to it in connection with the services. We may decline, suspend or end work where we reasonably consider that continuing would breach applicable law, regulation or the rules of a payment or platform provider.",
      ],
    },
    {
      title: "Force majeure",
      body: [
        "Neither party is liable for delay or failure caused by events beyond its reasonable control, including outages of internet, cloud, payment-network or third-party platforms, changes in third-party APIs or model behaviour, governmental action, labour disputes, or natural events. Payment obligations for work already performed are not excused.",
      ],
    },
    {
      title: "General",
      list: [
        "Entire agreement: the Project Agreement and these Terms are the whole agreement on their subject and replace earlier discussions. Business terms in your purchase orders do not apply.",
        "Notices: by email to the addresses each party gives in the Project Agreement; for us, {email}.",
        "Assignment: you may not assign these Terms without our written consent. We may use qualified subcontractors and remain responsible for their work under these Terms.",
        "Severability and waiver: if a provision is unenforceable, the rest remains in effect and the provision is applied to the maximum extent permitted. Not enforcing a right is not a waiver.",
        "Relationship: the parties are independent contractors. Nothing creates a partnership, agency or employment.",
        "Language: the English text prevails. A Persian version is provided for convenience.",
      ],
    },
    {
      title: "Governing law and disputes",
      body: [
        "These Terms and any dispute arising from them or from a project are governed by the laws of the jurisdiction in which Tekbin AI is established, as stated in the Project Agreement or invoice, without regard to its conflict-of-laws rules. The UN Convention on Contracts for the International Sale of Goods does not apply.",
        "The parties will first try in good faith to resolve a dispute by written negotiation for thirty (30) days. Failing that, the dispute will be finally resolved by binding arbitration in English before a sole arbitrator, under the rules and at the seat stated in the Project Agreement. Either party may seek urgent interim relief from a competent court to protect confidential information or intellectual property.",
      ],
    },
    {
      title: "Changes and contact",
      body: [
        "We may update these Terms; the date above shows the latest version. Changes apply to new engagements and to existing ones from the next stage or renewal, unless the law requires otherwise. Questions: {email}.",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* PRIVACY POLICY — English                                            */
/* ------------------------------------------------------------------ */
export const privacyEn: { intro: string; clauses: Clause[] } = {
  intro:
    "This Privacy Policy explains how Tekbin AI (“we”, “us”) handles personal data when you visit {domain}, contact us, or use our services. Questions or requests: {email}.",
  clauses: [
    {
      title: "Who is responsible",
      body: [
        "For website visitors, enquiries and our own business records, Tekbin AI is the controller. For personal data inside a client’s project (for example customer records an automation processes), the client is the controller and we act as its processor, only on its documented instructions and under the project agreement.",
      ],
    },
    {
      title: "Data we collect",
      list: [
        "Information you send us: name, email, company, phone or messaging handle, project details and anything else you include in the brief form, in an email or in a call.",
        "Technical data: IP address, browser, device, pages requested and timestamps, processed by our hosting and security providers to deliver and protect the website.",
        "Payment data: if you pay in USDT, transaction details such as wallet addresses and amounts are recorded on a public blockchain, which we cannot alter or delete.",
        "Project data: data you give us access to so we can build or operate your automation, as described in the project agreement.",
      ],
    },
    {
      title: "Why we use it and on what basis",
      list: [
        "To answer enquiries, prepare proposals and take steps before and under a contract (contract or pre-contract steps).",
        "To deliver, secure, support and improve the website and services, and to keep business, accounting and tax records (legitimate interests and legal obligations).",
        "To establish, exercise or defend legal claims (legitimate interests).",
        "Where the law requires it, on your consent, which you can withdraw at any time without affecting earlier processing.",
      ],
      body: ["We do not sell personal data, and we do not use it for advertising profiling. This website sets no cookies of its own and uses no advertising or cross-site tracking tools. It does use Cloudflare Web Analytics, a measurement service designed to work without cookies, to see aggregate page views and performance; Cloudflare also processes request data to deliver and protect the site."],
    },
    {
      title: "Who we share it with",
      body: [
        "We share personal data only with service providers that help us operate, under their own terms and appropriate safeguards, and only as needed: hosting, DNS, email routing, security and web analytics (Cloudflare), email (Google Gmail), form delivery (Web3Forms), scheduling tools if we enable them, and the automation, AI-model and API providers a client’s project uses, as listed in the project agreement.",
        "We may also disclose data to professional advisers, to comply with law or a valid legal request, to protect rights and safety, or in a business transfer, where the recipient is bound to protect it.",
      ],
    },
    {
      title: "International transfers",
      body: [
        "Our providers may process data in countries other than yours. Where the law requires, we rely on appropriate safeguards such as standard contractual clauses or equivalent mechanisms offered by those providers.",
      ],
    },
    {
      title: "Retention",
      body: [
        "We keep personal data only as long as needed for the purposes above. As a general rule, enquiry and brief records are kept for up to 24 months after our last contact, and client project and accounting records for the contract term plus the period needed for legal, tax and accounting obligations and claims. Blockchain records are permanent. We then delete or anonymise data.",
      ],
    },
    {
      title: "Your rights",
      body: [
        "Depending on where you live, you may have the right to access, correct, delete or export your personal data, to restrict or object to processing, and to complain to your data protection authority. Email {email}; we may need to verify your identity and will respond within the period the law requires (generally within one month). These rights are subject to the exceptions the law allows, including for legal claims and record-keeping duties.",
      ],
    },
    {
      title: "Security",
      body: [
        "We use reasonable technical and organisational measures appropriate to the risk, such as access controls, limited-scope credentials and encrypted connections. No system is completely secure. If a personal data breach affects you, we will notify you and any authority as the law requires.",
      ],
    },
    {
      title: "Client project data",
      body: [
        "When we process personal data for a client, the client is responsible for having a lawful basis, giving required notices to individuals, and ensuring it may share the data with us. We process that data only to deliver the agreed services, apply appropriate security, use only the sub-processors the project requires, and delete or return it at the end of the project as agreed. We will sign a data processing agreement on request where the law requires one.",
      ],
    },
    {
      title: "Children",
      body: ["Our website and services are not directed to children under 16, and we do not knowingly collect their personal data."],
    },
    {
      title: "Changes and contact",
      body: [
        "We may update this policy; the date above shows the latest version, and we will give notice of material changes where the law requires. Nothing in this policy limits rights you have under mandatory law. Contact: {email}.",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* TERMS — Persian                                                     */
/* ------------------------------------------------------------------ */
export const termsFa: { intro: string; clauses: Clause[] } = {
  intro:
    "این «شرایط استفاده» بر استفاده‌ی شما از {domain} و خدمات عامل هوش مصنوعی، اتوماسیون و خدمات مرتبطی که Tekbin AI («ما») ارائه می‌کند حاکم است. با استفاده از وب‌سایت، ارسال درخواست یا سفارش خدمات، از طرف خودتان و کسب‌وکاری که نمایندگی می‌کنید با این شرایط موافقت می‌کنید. خدمات ما برای کسب‌وکارها و متخصصان است، نه مصرف‌کنندگان.\n\nنسخه‌ی انگلیسی مرجع است و ترجمه‌ی فارسی برای راحتی ارائه شده است. در صورت اختلاف، متن انگلیسی ملاک است.",
  clauses: [
    {
      title: "توافق و ترتیب اولویت",
      body: [
        "هر پروژه تابع (الف) یک پیشنهاد، شرح کار یا سفارش مکتوب است که هر دو طرف می‌پذیریم («توافق پروژه») و (ب) این شرایط. در صورت تعارض، برای همان پروژه توافق پروژه مقدم است، فقط تا جایی که صریحاً چنین بگوید.",
        "هیچ‌چیز در این وب‌سایت پیشنهاد الزام‌آور نیست. پروژه فقط وقتی شروع می‌شود که توافق پروژه را مکتوب تأیید کنید و پرداخت اولیه‌ی لازم انجام شده باشد.",
      ],
    },
    {
      title: "خدمات و محدوده‌ی کار",
      body: [
        "ما عامل‌های هوش مصنوعی، اتوماسیون گردش‌کار و یکپارچه‌سازی را طراحی، پیاده‌سازی، مستقر و در صورت توافق، اجرا و مدیریت می‌کنیم. خروجی‌ها، زمان‌بندی، هزینه‌ها، دوره‌ی پشتیبانی و هر طرح مدیریتی در توافق پروژه تعریف می‌شود. کار خارج از آن محدوده «درخواست تغییر» است و جداگانه قیمت‌گذاری می‌شود.",
        "زمان‌بندی‌ها تخمینی‌اند و به ارائه‌ی به‌موقع اطلاعات درست، دسترسی‌ها، تصمیم‌ها و بازخورد از سوی شما بستگی دارند. تأخیر ناشی از شما یا پلتفرم‌های شخص ثالث، زمان‌بندی را متناسب تمدید می‌کند و حق کاهش قیمت ایجاد نمی‌کند.",
      ],
    },
    {
      title: "درخواست تغییر",
      body: [
        "هر یک از طرفین می‌تواند تغییر در محدوده، زمان یا قیمت را پیشنهاد کند. تغییر فقط وقتی اعمال می‌شود که هر دو طرف آن را مکتوب (ایمیل کافی است) تأیید کنند. ما می‌توانیم تغییری را نپذیریم و برای کاری که با تغییر بی‌اثر می‌شود و زمانش صرف شده است، هزینه دریافت کنیم.",
      ],
    },
    {
      title: "تحویل، پذیرش و رفع نقص",
      list: [
        "خروجی‌ها در زودترین زمان از این موارد پذیرفته‌شده تلقی می‌شوند: تأیید مکتوب شما، استفاده‌ی عملیاتی شما از خروجی، یا گذشت هفت (۷) روز کاری از تحویل بدون اعلام مکتوب نقص قابل‌بازتولید.",
        "«نقص» یعنی ناتوانی خروجی در عملکرد اساسی مطابق توضیح توافق پروژه. تغییر در داده‌ها، ابزارها، پلتفرم‌های شخص ثالث، رفتار مدل هوش مصنوعی یا قواعد کسب‌وکار شما پس از تحویل، نقص محسوب نمی‌شود.",
        "در دوره‌ی پشتیبانی مندرج در توافق پروژه، نقص‌های گزارش‌شده را بدون هزینه‌ی اضافی رفع می‌کنیم. رفع نقص یا اجرای مجدد کار مربوط، تنها و انحصاری‌ترین راه جبران نقص است.",
      ],
    },
    {
      title: "هزینه‌ها، پرداخت و USDT",
      list: [
        "قیمت‌ها به دلار آمریکا اعلام می‌شود و با USDT روی شبکه‌ی مندرج در فاکتور و به مبلغ همان فاکتور پرداخت می‌شود. مگر توافق پروژه طور دیگری بگوید، فاکتورها ظرف هفت (۷) روز از صدور سررسید می‌شوند.",
        "انتقال رمزارز معمولاً برگشت‌پذیر نیست. ارسال وجه به آدرس دقیق فاکتور، کارمزد شبکه و هر زیان ناشی از ارسال به آدرس یا شبکه‌ی اشتباه بر عهده‌ی شماست. پرداخت وقتی کامل است که مبلغ کامل فاکتور به دست ما برسد.",
        "هزینه‌ی کار انجام‌شده، پیش‌پرداخت‌ها و مراحل پرداخت‌شده بازپرداخت نمی‌شود، مگر توافق پروژه یا قانون آمره طور دیگری بگوید. اگر فاکتوری معوق شود، می‌توانیم کار و خدمات مدیریت یا پشتیبانی را تا پرداخت متوقف کنیم.",
        "قیمت‌ها شامل مالیات، عوارض و حقوق دولتی نیست و این‌ها (جز مالیات بر درآمد خود ما) بر عهده‌ی شماست. هزینه‌های شخص ثالث (مصرف مدل هوش مصنوعی، پلتفرم‌های اتوماسیون، هاستینگ، APIها) جدا از دستمزد ماست، مگر توافق پروژه بگوید شامل شده‌اند.",
        "قیمت‌های معرفی، مثل پیشنهاد «مشتریان اول»، مشروط به شرایط اعلام‌شده در صفحه‌ی قیمت‌ها و توافق پروژه است، از جمله اجازه‌ی معرفی پروژه به‌عنوان نمونه‌کار. می‌توانیم هر زمان پیشنهاد معرفی را برای قراردادهای جدید پایان دهیم.",
      ],
    },
    {
      title: "مسئولیت‌های شما",
      list: [
        "اطلاعات درست و کامل، دسترسی‌ها و تصمیم‌ها را به‌موقع ارائه کنید و اعتبارنامه‌هایی را که به ما می‌دهید امن و قابل‌لغو نگه دارید.",
        "مطمئن شوید حق اشتراک‌گذاری، پردازش و خودکارسازی داده‌ها، حساب‌ها و سیستم‌هایی را که وصل می‌کنید دارید و هر اطلاع‌رسانی و رضایتی را که استفاده‌تان لازم دارد، انجام داده‌اید.",
        "پیش از اتکا به خروجی‌ها و اقدام‌های خودکار، آن‌ها را بررسی کنید و تعیین کنید کدام اقدام‌ها بدون تأیید انسانی اجرا شوند. مسئولیت تصمیم‌های مبتنی بر خروجی‌ها با شماست.",
        "از خروجی‌ها قانونی و مطابق شرایط ابزارهای شخص ثالث مربوط استفاده کنید.",
      ],
    },
    {
      title: "خروجی‌های هوش مصنوعی و اتوماسیون",
      body: [
        "سیستم‌های هوش مصنوعی ممکن است خروجی نادرست، ناقص یا غیرمنتظره بدهند و اتوماسیون‌ها با تغییر ورودی‌ها، ابزارها یا مدل‌ها رفتار متفاوتی نشان دهند. ما تضمین نمی‌کنیم که خروجی‌ها دقیق باشند، اتوماسیون‌ها بدون وقفه اجرا شوند یا صرفه‌جویی، درآمد، رتبه یا هر نتیجه‌ی تجاری مشخصی حاصل شود.",
        "در صورت توافق، مراحل تأیید انسانی، لاگ و مدیریت خطا را طراحی می‌کنیم. مگر توافق پروژه طور دیگری بگوید، اجرا و نظارت بر خروجی‌ها پس از تحویل بر عهده‌ی شماست.",
      ],
    },
    {
      title: "ابزارها و خدمات شخص ثالث",
      body: [
        "پروژه‌ها ممکن است به پلتفرم‌ها، مدل‌ها و APIهای شخص ثالث (مثلاً n8n، OpenAI، Anthropic، Google، Cloudflare) وابسته باشند. در دسترس بودن، قیمت، محدودیت و شرایط آن‌ها خارج از کنترل ماست، ممکن است بدون اطلاع قبلی تغییر کند و مستقیماً بر شما اعمال می‌شود. ما مسئول اقدام، قصور، قطعی یا تغییر آن‌ها نیستیم. نام و نشان اشخاص ثالث متعلق به صاحبان آن‌هاست و ذکرشان به معنای تأیید یا شراکت نیست.",
      ],
    },
    {
      title: "مالکیت فکری",
      list: [
        "مواد پیشینه‌ی ما: همه‌ی الگوها، اجزا، پرامپت‌ها، کتابخانه‌های کد، روش‌ها، ابزارها و دانش فنی که مستقل از پروژه‌ی شما در اختیار یا توسعه‌ی ماست، به‌علاوه‌ی بهبودهای آن‌ها، متعلق به ما می‌ماند («مالکیت فکری پیشینه»).",
        "خروجی‌ها: مشروط به پرداخت کامل، مالکیت خروجی‌های اختصاصی پروژه که طبق توافق پروژه برایتان می‌سازیم با شماست. ما یک مجوز دائمی، غیرانحصاری، غیرقابل‌انتقال و جهانی برای استفاده از مالکیت فکری پیشینه‌ی تعبیه‌شده در آن‌ها، فقط به‌عنوان بخشی از همان خروجی‌ها، به شما می‌دهیم.",
        "داده‌ی مشتری: همه‌ی حقوق داده‌هایتان با شماست. شما یک مجوز محدود به ما می‌دهید که فقط برای انجام خدمات و در حد مجاز این شرایط از آن استفاده کنیم.",
        "ما می‌توانیم از دانش فنی عمومی، مهارت‌ها و تکنیک‌های غیرمحرمانه و غیراختصاصی مشتری دوباره استفاده کنیم. پروژه را فقط با اجازه‌ی مکتوب شما به‌عنوان نمونه‌کار یا مرجع معرفی می‌کنیم.",
        "این وب‌سایت، طراحی و محتوای آن متعلق به Tekbin AI است.",
      ],
    },
    {
      title: "محرمانگی",
      body: [
        "هر طرف اطلاعات غیرعمومی طرف دیگر را محرمانه نگه می‌دارد، فقط برای پروژه به کار می‌برد و فقط با کارکنان، پیمانکاران فرعی و مشاورانی که به آن نیاز دارند و به تعهدات مشابه ملزم‌اند در میان می‌گذارد. این شامل اطلاعاتی نمی‌شود که بدون تقصیر گیرنده عمومی شده، از قبل نزد او بوده، مستقل تولید شده یا قانوناً از شخص ثالث دریافت شده، یا افشایش به حکم قانون الزامی است (با اطلاع‌رسانی در صورت مجاز بودن). این تعهدات تا سه (۳) سال پس از پایان پروژه، و تا زمانی که اسرار تجاری محرمانه بمانند، ادامه دارد.",
      ],
    },
    {
      title: "داده‌های شخصی",
      body: [
        "رویه‌های حریم خصوصی وب‌سایت {domain} در سیاست حریم خصوصی آمده است. وقتی در یک پروژه از طرف شما داده‌ی شخصی پردازش می‌کنیم، شما کنترل‌کننده (یا معادل آن) هستید و ما پردازشگر شما، فقط بر اساس دستورهای مکتوب شما. در صورتی که قانون لازم بداند، بنا به درخواست، توافق‌نامه‌ی پردازش داده امضا می‌کنیم.",
      ],
    },
    {
      title: "تضمین‌ها و سلب مسئولیت",
      body: [
        "خدمات را با مهارت و دقت معقول انجام می‌دهیم. جز آنچه در این شرایط یا توافق پروژه صریحاً آمده و تا حداکثر حد مجاز قانون، وب‌سایت و خدمات «همان‌گونه که هست» و «بر حسب دسترس‌پذیری» ارائه می‌شود و هر تضمین صریح یا ضمنی دیگر، از جمله قابلیت عرضه، تناسب برای هدفی خاص، عدم نقض حقوق، عملکرد بدون وقفه و خروجی بدون خطا را نفی می‌کنیم.",
      ],
    },
    {
      title: "محدودیت مسئولیت",
      list: [
        "تا حداکثر حد مجاز قانون، هیچ‌یک از طرفین در برابر دیگری مسئول خسارت غیرمستقیم، تبعی، خاص، اتفاقی یا تنبیهی، یا از دست رفتن سود، درآمد، کسب‌وکار، اعتبار یا داده نیست، به هر طریق که ایجاد شود و حتی اگر از احتمال آن مطلع شده باشد.",
        "تا حداکثر حد مجاز قانون، مجموع مسئولیت ما ناشی از یک پروژه یا این شرایط، چه قراردادی، چه قهری (از جمله بی‌احتیاطی) یا غیر آن، محدود به مبلغی است که بابت همان پروژه در سه (۳) ماه پیش از رویداد منشأ ادعا واقعاً به ما پرداخته‌اید.",
        "هیچ‌چیز در این شرایط مسئولیتی را که قانوناً قابل‌محدود شدن نیست محدود نمی‌کند، از جمله تقلب، تقصیر عمدی، یا مرگ و صدمه‌ی بدنی ناشی از بی‌احتیاطی. این محدودیت‌ها تعهد شما به پرداخت هزینه‌های سررسیدشده را کم نمی‌کند.",
        "هر ادعا باید ظرف دوازده (۱۲) ماه از زمان آگاهی شما از وقایع منشأ آن، و در هر حال در مهلت مرور زمان مجاز قانون، مکتوب اعلام شود.",
      ],
    },
    {
      title: "جبران خسارت",
      body: [
        "شما از Tekbin AI، کارکنان و پیمانکاران فرعی آن در برابر ادعاهای اشخاص ثالث و زیان‌ها، خسارت‌ها، هزینه‌ها و هزینه‌های حقوقی معقول ناشی از آن‌ها دفاع و آنان را جبران می‌کنید، در موارد: (الف) داده‌ی مشتری یا دستورهای شما، از جمله هر ادعا مبنی بر اینکه حق ارائه‌ی آن‌ها را نداشته‌اید؛ (ب) استفاده‌ی شما از خروجی‌ها در تعارض با قانون یا شرایط اشخاص ثالث؛ یا (پ) اقدام‌هایی که سیستم‌های تحت اجرای شما پس از تحویل به‌صورت خودکار انجام می‌دهند. ما ادعا را به‌سرعت به شما اطلاع می‌دهیم، کنترل دفاع را به شما می‌سپاریم و به هزینه‌ی شما به‌طور معقول همکاری می‌کنیم.",
      ],
    },
    {
      title: "مدت، تعلیق و فسخ",
      list: [
        "هر طرف می‌تواند با ده (۱۰) روز اخطار مکتوب، پروژه را بدون ذکر دلیل فسخ کند، یا اگر طرف دیگر مرتکب نقض اساسی شود و ده (۱۰) روز پس از اخطار مکتوب رفع نکند، بلافاصله فسخ کند.",
        "در فسخ، شما بابت کار انجام‌شده تا تاریخ فسخ، مراحل آغازشده و هزینه‌های غیرقابل‌لغو شخص ثالث که متحمل شده‌ایم می‌پردازید. پیش‌پرداخت‌ها و مراحل پرداخت‌شده بازپرداخت نمی‌شود، مگر توافق پروژه یا قانون آمره بگوید.",
        "اگر قانون ایجاب کند، اگر خدمات را غیرقانونی یا به شکلی که به ما یا اشخاص ثالث آسیب می‌زند به کار ببرید، یا اگر به‌موقع پرداخت نکنید، می‌توانیم خدمات را فوراً تعلیق یا قطع کنیم.",
        "بندهایی که ماهیتاً باید پس از فسخ باقی بمانند (پرداخت، مالکیت فکری، محرمانگی، سلب مسئولیت، مسئولیت، جبران خسارت، قانون حاکم) باقی می‌مانند.",
      ],
    },
    {
      title: "رعایت قوانین",
      body: [
        "هر طرف قوانینی را که در ارتباط با خدمات بر او اعمال می‌شود رعایت می‌کند. اگر به‌طور معقول تشخیص دهیم ادامه‌ی کار قانون، مقررات یا قواعد یک ارائه‌دهنده‌ی پرداخت یا پلتفرم را نقض می‌کند، می‌توانیم از کار امتناع، آن را تعلیق یا پایان دهیم.",
      ],
    },
    {
      title: "قوه‌ی قاهره",
      body: [
        "هیچ‌یک از طرفین در قبال تأخیر یا قصور ناشی از رویدادهای خارج از کنترل معقول خود مسئول نیست، از جمله قطعی اینترنت، ابر، شبکه‌های پرداخت یا پلتفرم‌های شخص ثالث، تغییر APIهای شخص ثالث یا رفتار مدل‌ها، اقدام دولتی، اختلافات کارگری یا رویدادهای طبیعی. تعهد پرداخت بابت کار انجام‌شده معاف نمی‌شود.",
      ],
    },
    {
      title: "مقررات عمومی",
      list: [
        "کل توافق: توافق پروژه و این شرایط تمام توافق درباره‌ی موضوع خود است و جایگزین گفت‌وگوهای پیشین می‌شود. شرایط تجاری در سفارش‌های خرید شما اعمال نمی‌شود.",
        "اخطارها: با ایمیل به نشانی‌هایی که هر طرف در توافق پروژه اعلام می‌کند؛ برای ما {email}.",
        "انتقال: بدون رضایت مکتوب ما نمی‌توانید این شرایط را منتقل کنید. ما می‌توانیم از پیمانکاران فرعی شایسته استفاده کنیم و مسئولیت کار آن‌ها طبق این شرایط با ماست.",
        "قابلیت تفکیک و عدم اسقاط: اگر حکمی غیرقابل‌اجرا باشد، بقیه معتبر می‌ماند و آن حکم تا حداکثر حد مجاز اعمال می‌شود. اجرا نکردن یک حق، اسقاط آن نیست.",
        "رابطه: طرفین پیمانکاران مستقل‌اند. هیچ‌چیز شراکت، نمایندگی یا رابطه‌ی استخدامی ایجاد نمی‌کند.",
        "زبان: متن انگلیسی مرجع است. نسخه‌ی فارسی برای راحتی ارائه شده است.",
      ],
    },
    {
      title: "قانون حاکم و حل اختلاف",
      body: [
        "این شرایط و هر اختلاف ناشی از آن یا از یک پروژه تابع قوانین حوزه‌ی قضایی‌ای است که Tekbin AI در آن مستقر است، آن‌گونه که در توافق پروژه یا فاکتور آمده، بدون توجه به قواعد تعارض قوانین. کنوانسیون ملل متحد درباره‌ی قراردادهای بیع بین‌المللی کالا اعمال نمی‌شود.",
        "طرفین ابتدا ظرف سی (۳۰) روز با حسن نیت و از راه مذاکره‌ی مکتوب برای حل اختلاف تلاش می‌کنند. در غیر این صورت، اختلاف با داوری الزام‌آور به زبان انگلیسی نزد یک داور واحد، طبق قواعد و در محلی که در توافق پروژه آمده، قطعی می‌شود. هر طرف می‌تواند برای حفاظت از اطلاعات محرمانه یا مالکیت فکری، از دادگاه صالح دستور موقت فوری بخواهد.",
      ],
    },
    {
      title: "تغییرات و تماس",
      body: [
        "ممکن است این شرایط را به‌روز کنیم؛ تاریخ بالای صفحه آخرین نسخه را نشان می‌دهد. تغییرات برای قراردادهای جدید و برای قراردادهای جاری از مرحله یا تمدید بعدی اعمال می‌شود، مگر قانون طور دیگری ایجاب کند. پرسش‌ها: {email}.",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* PRIVACY — Persian                                                   */
/* ------------------------------------------------------------------ */
export const privacyFa: { intro: string; clauses: Clause[] } = {
  intro:
    "این سیاست توضیح می‌دهد Tekbin AI («ما») وقتی از {domain} بازدید می‌کنید، با ما تماس می‌گیرید یا از خدماتمان استفاده می‌کنید، با داده‌های شخصی چه می‌کند. پرسش یا درخواست: {email}.\n\nنسخه‌ی انگلیسی مرجع است و ترجمه‌ی فارسی برای راحتی ارائه شده است.",
  clauses: [
    {
      title: "چه کسی مسئول است",
      body: [
        "برای بازدیدکنندگان وب‌سایت، درخواست‌ها و سوابق کسب‌وکار خودمان، Tekbin AI کنترل‌کننده است. برای داده‌های شخصی داخل پروژه‌ی یک مشتری (مثلاً رکوردهای مشتریانی که یک اتوماسیون پردازش می‌کند)، مشتری کنترل‌کننده است و ما پردازشگر او هستیم، فقط بر اساس دستورهای مکتوب او و طبق توافق پروژه.",
      ],
    },
    {
      title: "چه داده‌هایی جمع می‌کنیم",
      list: [
        "اطلاعاتی که برای ما می‌فرستید: نام، ایمیل، شرکت، شماره تماس یا آیدی پیام‌رسان، جزئیات پروژه و هر چیز دیگری که در فرم، ایمیل یا تماس می‌نویسید.",
        "داده‌های فنی: آدرس IP، مرورگر، دستگاه، صفحه‌های درخواست‌شده و زمان‌ها، که ارائه‌دهندگان هاستینگ و امنیت ما برای ارائه و محافظت از وب‌سایت پردازش می‌کنند.",
        "داده‌های پرداخت: اگر با USDT پرداخت کنید، جزئیات تراکنش مانند آدرس کیف پول و مبلغ روی یک بلاک‌چین عمومی ثبت می‌شود که ما نمی‌توانیم تغییر یا حذفش کنیم.",
        "داده‌های پروژه: داده‌هایی که برای ساخت یا اجرای اتوماسیون شما به آن‌ها دسترسی می‌دهید، آن‌گونه که در توافق پروژه آمده.",
      ],
    },
    {
      title: "چرا و بر چه مبنایی استفاده می‌کنیم",
      list: [
        "برای پاسخ به درخواست‌ها، تهیه‌ی پیشنهاد و اقدام‌های پیش از قرارداد و در چارچوب قرارداد (مبنای قرارداد یا مقدمات قرارداد).",
        "برای ارائه، حفظ امنیت، پشتیبانی و بهبود وب‌سایت و خدمات، و نگهداری سوابق کسب‌وکار، حسابداری و مالیات (منافع مشروع و تعهدات قانونی).",
        "برای اثبات، اعمال یا دفاع از ادعاهای حقوقی (منافع مشروع).",
        "در جایی که قانون الزام کند، بر مبنای رضایت شما، که هر زمان می‌توانید آن را پس بگیرید بدون اینکه بر پردازش‌های پیشین اثر بگذارد.",
      ],
      body: ["ما داده‌ی شخصی را نمی‌فروشیم و برای پروفایل‌سازی تبلیغاتی به کار نمی‌بریم. این وب‌سایت کوکی اختصاصی نمی‌گذارد و از ابزار تبلیغاتی یا ردیابی بین‌سایتی استفاده نمی‌کند. از Cloudflare Web Analytics، سرویس اندازه‌گیری‌ای که برای کار بدون کوکی طراحی شده، برای دیدن آمار کلی بازدید و عملکرد استفاده می‌کند؛ Cloudflare همچنین داده‌ی درخواست را برای ارائه و محافظت از سایت پردازش می‌کند."],
    },
    {
      title: "با چه کسانی به اشتراک می‌گذاریم",
      body: [
        "داده‌ی شخصی را فقط با ارائه‌دهندگانی که در اجرای کار به ما کمک می‌کنند، تحت شرایط خودشان و با تضمین‌های مناسب و فقط در حد نیاز به اشتراک می‌گذاریم: هاستینگ، DNS، مسیریابی ایمیل، امنیت و آمار وب (Cloudflare)، ایمیل (Google Gmail)، تحویل فرم (Web3Forms)، ابزار زمان‌بندی در صورت فعال‌سازی، و ارائه‌دهندگان اتوماسیون، مدل هوش مصنوعی و API که پروژه‌ی یک مشتری استفاده می‌کند، آن‌گونه که در توافق پروژه آمده.",
        "همچنین ممکن است داده را با مشاوران حرفه‌ای، برای رعایت قانون یا درخواست قانونی معتبر، برای حفاظت از حقوق و ایمنی، یا در انتقال کسب‌وکار، به گیرنده‌ای که ملزم به حفاظت از آن است، افشا کنیم.",
      ],
    },
    {
      title: "انتقال بین‌المللی",
      body: [
        "ارائه‌دهندگان ما ممکن است داده را در کشورهایی غیر از کشور شما پردازش کنند. در جایی که قانون الزام کند، به تضمین‌های مناسب مانند بندهای قراردادی استاندارد یا سازوکارهای معادلی که آن ارائه‌دهندگان عرضه می‌کنند تکیه می‌کنیم.",
      ],
    },
    {
      title: "مدت نگهداری",
      body: [
        "داده‌ی شخصی را فقط تا وقتی لازم برای اهداف بالاست نگه می‌داریم. به‌طور معمول، سوابق درخواست و فرم تا ۲۴ ماه پس از آخرین تماس، و سوابق پروژه و حسابداری مشتری تا پایان مدت قرارداد به‌علاوه‌ی مدت لازم برای تعهدات قانونی، مالیاتی و حسابداری و ادعاها نگه داشته می‌شود. سوابق بلاک‌چین دائمی است. سپس داده را حذف یا ناشناس می‌کنیم.",
      ],
    },
    {
      title: "حقوق شما",
      body: [
        "بسته به محل زندگی‌تان، ممکن است حق دسترسی، اصلاح، حذف یا دریافت نسخه‌ی داده‌ی شخصی، محدود کردن یا اعتراض به پردازش، و شکایت به مرجع حفاظت از داده را داشته باشید. به {email} ایمیل بزنید؛ ممکن است لازم باشد هویتتان را تأیید کنیم و در مهلتی که قانون تعیین می‌کند (معمولاً ظرف یک ماه) پاسخ می‌دهیم. این حقوق تابع استثناهایی است که قانون اجازه می‌دهد، از جمله برای ادعاهای حقوقی و تعهدات نگهداری سوابق.",
      ],
    },
    {
      title: "امنیت",
      body: [
        "از تدابیر فنی و سازمانی معقول متناسب با ریسک استفاده می‌کنیم، مانند کنترل دسترسی، اعتبارنامه‌های با دامنه‌ی محدود و اتصال رمزگذاری‌شده. هیچ سیستمی کاملاً امن نیست. اگر نقض داده‌ی شخصی شما را تحت تأثیر قرار دهد، طبق الزام قانون به شما و مرجع مربوط اطلاع می‌دهیم.",
      ],
    },
    {
      title: "داده‌های پروژه‌ی مشتری",
      body: [
        "وقتی برای یک مشتری داده‌ی شخصی پردازش می‌کنیم، مشتری مسئول داشتن مبنای قانونی، اطلاع‌رسانی لازم به افراد و اطمینان از مجاز بودن اشتراک آن داده با ماست. ما آن داده را فقط برای انجام خدمات توافق‌شده پردازش می‌کنیم، امنیت مناسب اعمال می‌کنیم، فقط از پردازشگران فرعی لازم برای پروژه استفاده می‌کنیم و در پایان پروژه، طبق توافق آن را حذف یا بازمی‌گردانیم. در صورتی که قانون لازم بداند، بنا به درخواست توافق‌نامه‌ی پردازش داده امضا می‌کنیم.",
      ],
    },
    {
      title: "کودکان",
      body: ["وب‌سایت و خدمات ما برای کودکان زیر ۱۶ سال نیست و آگاهانه داده‌ی شخصی آن‌ها را جمع نمی‌کنیم."],
    },
    {
      title: "تغییرات و تماس",
      body: [
        "ممکن است این سیاست را به‌روز کنیم؛ تاریخ بالای صفحه آخرین نسخه را نشان می‌دهد و در جایی که قانون الزام کند، تغییرات مهم را اطلاع می‌دهیم. هیچ‌چیز در این سیاست حقوقی را که طبق قانون آمره دارید محدود نمی‌کند. تماس: {email}.",
      ],
    },
  ],
};
