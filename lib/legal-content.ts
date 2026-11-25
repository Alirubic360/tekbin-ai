import type { Clause } from "@/components/LegalClauses";

// Public legal texts for Tekbin AI. STATUS: DRAFT pending review by a qualified lawyer.
// Owner identity, governing law and forum are intentionally NOT filled in here; they are set
// per engagement in the Master Service Agreement / Project Agreement.

export const LEGAL_UPDATED_EN = "November 26, 2026";
export const LEGAL_UPDATED_FA = "۵ آذر ۱۴۰۵ (۲۶ نوامبر ۲۰۲۶)";
export const LEGAL_STATUS_EN = "Draft: under legal review";
export const LEGAL_STATUS_FA = "پیش‌نویس: در دست بازبینی حقوقی";

/* ------------------------------------------------------------------ */
/* TERMS OF SERVICE: English                                           */
/* ------------------------------------------------------------------ */
export const termsEn: { intro: string; clauses: Clause[] } = {
  intro:
    "These Terms of Service (“Terms”) govern your use of {domain} and describe the framework on which Tekbin AI offers AI engineering and automation services to businesses. They are a framework, not a substitute for a signed project contract: an engagement exists only on the basis described in clause 4.",
  clauses: [
    {
      title: "Who we are",
      body: [
        "Tekbin AI is the trade name of an independently operated AI engineering and automation studio. Tekbin AI is not an incorporated company. The contracting party for each engagement is the individual owner who operates Tekbin AI, identified by name in the applicable agreement. We may establish a company in the future; clause 27 explains how contracts could then be transferred.",
      ],
    },
    {
      title: "Who these Terms are for",
      body: [
        "Our services are provided to businesses and professionals acting for business purposes, not to consumers. If, despite this, a mandatory consumer-protection or other non-waivable rule applies to you, nothing in these Terms removes the rights it gives you.",
      ],
    },
    {
      title: "Using the website",
      body: [
        "The website is for general information. Content is not a binding offer, professional advice or a guarantee. You agree to use it lawfully and not to disrupt it, probe it for vulnerabilities without our written permission, or scrape it in violation of our robots.txt directives.",
      ],
    },
    {
      title: "Relationship with project contracts",
      list: [
        "Visiting this website, sending an enquiry or submitting a brief does not create a binding project engagement and does not, by itself, accept these Terms as a services contract.",
        "An engagement exists only when the client and Tekbin AI each affirmatively accept in writing, by a handwritten or electronic signature or an equivalent written acceptance suitable for the applicable law, the agreement for that project: a Master Service Agreement (“MSA”) and/or a Project Agreement or Statement of Work (“Project Agreement”).",
        "Where an MSA or Project Agreement applies, it governs that engagement. If it conflicts with these Terms, it prevails to the extent it says so expressly. Where none has been signed, these Terms do not oblige either party to start or pay for work.",
        "We may provide the MSA, Project Agreement, data processing agreement and AI and security schedule to a prospective client before an engagement starts. They are not published on this website.",
      ],
    },
    {
      title: "Our services",
      body: [
        "We design, build, deploy and, where agreed, operate AI agents, workflow automations and integrations, including related monitoring, documentation and support. The deliverables, timeline, fees, support period and any management plan for an engagement are defined in its Project Agreement.",
      ],
    },
    {
      title: "Project scope and deliverables",
      body: [
        "Every project must have a written scope with measurable acceptance criteria, stated exclusions and the systems, data and third-party services involved. Anything not expressly included is outside the fee. Timelines are estimates and depend on timely information, access, decisions and feedback from the client; delays caused by the client or by third-party platforms extend the timeline accordingly.",
      ],
    },
    {
      title: "Change requests",
      body: [
        "Either party may propose a change to scope, timeline or price. A change takes effect only when both parties confirm it in writing (email suffices where the Project Agreement allows). We may decline a change and may charge for reasonable time already spent on work that a change makes obsolete.",
      ],
    },
    {
      title: "Client responsibilities",
      list: [
        "Provide accurate and complete information, access and decisions on time, and keep credentials shared with us secure and revocable.",
        "Make sure you have the right to share, process and automate the data, accounts and systems you connect, and that you have given the notices and obtained the consents your use requires.",
        "Review outputs and automated actions before relying on them, and decide which actions may run without human approval. You remain responsible for your business decisions and for supervising the deliverables in operation.",
        "Use the deliverables lawfully and in line with the terms of the third-party tools involved.",
      ],
    },
    {
      title: "Delivery and acceptance",
      list: [
        "Deliverables are tested against the acceptance criteria in the Project Agreement. The client has the review period stated there (default ten (10) business days) to test and to report in writing any respect in which the deliverable does not meet those criteria.",
        "A deliverable is accepted on written approval, or when the review period ends without a written notice identifying a failure to meet the criteria, or when it is put into production use, unless the Project Agreement says otherwise.",
        "A “defect” is a failure to meet the agreed acceptance criteria. Changes in your data, tools, third-party platforms, AI model behaviour or business rules after delivery are not defects. We correct reported defects during the support period stated in the Project Agreement at no extra charge.",
      ],
    },
    {
      title: "Fees and payment",
      list: [
        "Unless the Project Agreement says otherwise, the default schedule is: 50% before the project starts, 30% after delivery of the agreed working milestone, and 20% before final production handover and transfer of the agreed deliverables.",
        "Invoices are due within the period stated in the Project Agreement (default seven (7) days from issue). If an invoice is overdue we may, after written notice and a reasonable opportunity to cure (default seven (7) days), suspend work and any management or support services; the schedule is then adjusted for the suspension and reasonable time to resume.",
        "Introductory pricing, such as the Founding Client offer, is conditional on the terms stated on the pricing page and in the Project Agreement, including written permission to present the project as a case study. We may end an introductory offer at any time for new engagements.",
      ],
    },
    {
      title: "Payment methods, USDT and restricted transfers",
      body: [
        "Prices are quoted in US dollars. USDT is one payment method we may accept; it is not the exclusive method. Which methods are available for an engagement depends on applicable law, the legal eligibility of both parties and the terms of the relevant payment provider. The Project Agreement specifies the method, the payment network, the amount, who bears network or transfer fees, confirmation requirements and how failed, delayed or restricted transfers are handled.",
        "Crypto transfers are generally irreversible. The payer is responsible for sending funds to the exact address and network on the invoice. A payment is complete only when the full invoiced amount has been received. We do not offer or accept any arrangement intended to avoid sanctions, identity checks, payment restrictions or financial regulation.",
      ],
    },
    {
      title: "Taxes and third-party costs",
      body: [
        "Fees exclude taxes, duties and levies, which are the client’s responsibility other than taxes on our own income. Third-party costs (AI model usage, automation platforms, hosting, APIs, infrastructure) are separate from our professional fees unless the Project Agreement says they are included. For liability purposes (clause 20), pass-through third-party charges and taxes are not counted as fees.",
      ],
    },
    {
      title: "AI-generated outputs and limitations",
      body: [
        "AI systems can produce incorrect, incomplete or unexpected output, and automations can behave differently when inputs, tools or models change. We do not guarantee that outputs will be accurate, that automations will run without interruption, or that any particular saving, revenue, ranking or other business result will be achieved. We design human-approval steps, logging and error handling where agreed, as set out in the AI and security schedule where one applies. Unless the Project Agreement states otherwise, the client is responsible for operating and supervising the deliverables after handover.",
      ],
    },
    {
      title: "Third-party services and API dependencies",
      body: [
        "Projects may rely on third-party platforms, models and APIs. Their availability, pricing, limits and terms are outside our control, may change without notice and apply to the client directly. We are not responsible for their acts, omissions, outages or changes, but we will tell the client promptly of changes we become aware of that affect a deliverable. Names and marks of third parties belong to their owners; mentioning them does not imply endorsement or partnership.",
      ],
    },
    {
      title: "Intellectual property",
      list: [
        "Tekbin AI retains its background intellectual property: reusable frameworks, generic connectors and modules, internal libraries and tools, generic prompts and templates, development methods and general know-how, together with improvements to them (“Background IP”).",
        "Client data remains the client’s property or under its lawful control. The client grants us a limited licence to use it only to perform the services.",
        "Client-specific deliverables carry the ownership or licence expressly stated in the Project Agreement. By default the client receives a licence to use the deliverables, including embedded Background IP, for its own business; any agreed assignment of project-specific intellectual property takes effect only after full payment and subject to applicable law.",
        "Open-source and third-party components remain subject to their own licences. We do not claim ownership of them.",
        "We present a project as a case study or reference only with the client’s written permission. This website, its design and content belong to Tekbin AI.",
      ],
    },
    {
      title: "Confidentiality",
      body: [
        "Each party will keep the other’s non-public information confidential, use it only for the engagement, and share it only with personnel, subcontractors and advisers who need it and are bound by equivalent duties. This does not apply to information that is public through no fault of the recipient, already known to it, independently developed, or lawfully received from a third party, or that must be disclosed by law (with notice where lawful). Confidentiality duties continue for the period stated in the MSA (default three (3) years after the engagement ends), and for as long as trade secrets remain secret.",
      ],
    },
    {
      title: "Data protection",
      body: [
        "How we handle personal data collected through this website is described in the Privacy Policy. Where we process personal data on a client’s behalf in a project, the roles of the parties are determined from the actual processing activities. Where we act as processor, we process only on the client’s documented instructions and will enter into a data processing agreement before the relevant processing starts where the applicable law requires one.",
      ],
    },
    {
      title: "Warranties and disclaimers",
      body: [
        "We will perform the services with reasonable skill and care. Except as expressly stated in these Terms or the Project Agreement, and to the fullest extent permitted by law, the website and services are provided “as is” and “as available”, and we disclaim other warranties, express or implied, including merchantability, fitness for a particular purpose, non-infringement, uninterrupted operation and error-free output.",
      ],
    },
    {
      title: "Support, maintenance and work outside the fee",
      body: [
        "Only the services expressly included in the Project Agreement are covered by the project fee. The following are separate matters, each included only if the Project Agreement says so: defect correction during the support period; new features; adapting to changes in third-party APIs or AI model behaviour; infrastructure management; ongoing maintenance; monitoring; and emergency support.",
      ],
    },
    {
      title: "Limitation of liability",
      list: [
        "To the fullest extent permitted by law, neither party is liable to the other for indirect, incidental, consequential, special or punitive damages, or for loss of profits, revenue, business, goodwill or data, however arising.",
        "Each project has its own liability framework, stated in its Project Agreement. Unless that agreement states a different cap, our total aggregate liability arising out of that project is limited to the professional fees paid or payable under that Project Agreement, excluding pass-through third-party charges and taxes.",
        "Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited, including for fraud, wilful misconduct, or death or personal injury caused by negligence. These limits do not reduce the client’s obligation to pay fees due.",
        "Claims must be notified in writing within the period stated in the MSA (default twelve (12) months after the claimant became aware of the facts), and in any event within any mandatory limitation period.",
      ],
    },
    {
      title: "Indemnification",
      body: [
        "The client will defend and indemnify Tekbin AI, its owner, personnel and subcontractors against third-party claims, and resulting losses and reasonable legal costs, arising from: (a) client data or instructions, including any claim that the client lacked the right to provide them; (b) the client’s use of the deliverables in breach of law or of third-party terms; or (c) actions taken automatically by systems the client operates after handover. We will notify the client promptly of a claim, let the client control the defence and cooperate reasonably at its cost. Indemnity obligations are subject to mandatory law and to any different terms in the MSA.",
      ],
    },
    {
      title: "Suspension and termination",
      list: [
        "Either party may terminate an engagement for convenience on written notice of ten (10) days, or immediately if the other commits a material breach that remains uncured ten (10) days after written notice.",
        "On termination, the final settlement is calculated under the applicable agreement and mandatory law, distinguishing: completed work (payable); work in progress (payable pro rata to progress); unused prepaid services (refunded); non-cancellable third-party costs incurred (payable); and refunds that the law requires. No payment is retained for services that were neither performed nor committed to.",
        "We may suspend or end services immediately where required by law or where the client uses the services unlawfully or in a way that harms us or third parties.",
        "On termination or completion we cooperate in a reasonable transition and handover of what has been paid for, as described in the MSA. Clauses that by nature should survive do survive.",
      ],
    },
    {
      title: "Legal compliance",
      body: [
        "Each party will comply with the laws that apply to it in connection with the services. We may decline, suspend or end work where we reasonably consider that continuing would breach applicable law, regulation or the rules of a payment or platform provider.",
      ],
    },
    {
      title: "Sanctions and restricted services",
      body: [
        "We provide services and accept payment only where doing so is lawful for both parties under the sanctions, export-control and trade laws that apply to them. Each client confirms in the engagement documents that it is not restricted from receiving the services. We may require information reasonably needed to confirm this, and we may decline, suspend or end an engagement where eligibility cannot be confirmed or a restriction applies.",
      ],
    },
    {
      title: "Force majeure",
      body: [
        "Neither party is liable for delay or failure caused by events beyond its reasonable control, including outages of internet, cloud, payment-network or third-party platforms, changes in third-party APIs or model behaviour, governmental action, labour disputes or natural events. Payment obligations for work already performed are not excused.",
      ],
    },
    {
      title: "Independent contractors and subcontractors",
      body: [
        "The parties are independent contractors; nothing creates a partnership, agency or employment relationship. We may engage qualified independent contractors and subcontractors, who are bound by confidentiality, intellectual-property and data-protection obligations appropriate to the work. We remain responsible to the client for their work under the applicable agreement.",
      ],
    },
    {
      title: "Assignment and future restructuring",
      body: [
        "The client may not assign an agreement without our written consent. Tekbin AI may, by written notice, transfer or novate an agreement to a company or other legal entity that succeeds to the Tekbin AI business, provided the successor assumes our obligations and, where applicable law or the agreement requires, the client consents (consent not to be unreasonably withheld).",
      ],
    },
    {
      title: "Notices",
      body: [
        "Notices are given in writing by email to the addresses each party states in the applicable agreement; for us, {email}. A legal service address may be provided in the MSA or Project Agreement rather than published on this website.",
      ],
    },
    {
      title: "Language",
      body: [
        "These Terms are published in English and Persian with the same meaning. If you notice a difference, please tell us and we will correct it. Which language version prevails in an engagement is stated in its MSA or Project Agreement, subject to applicable law.",
      ],
    },
    {
      title: "Governing law and disputes",
      body: [
        "The governing law and the method and forum for resolving disputes for an engagement (courts or arbitration, and the seat and rules if arbitration) are set out in its MSA or Project Agreement. Until the parties have agreed them in writing, nothing on this website selects them, and mandatory law applies. The parties will first try in good faith to resolve a dispute by written negotiation before starting formal proceedings, without limiting a party’s right to seek urgent interim relief to protect confidential information or intellectual property.",
      ],
    },
    {
      title: "Amendments",
      body: [
        "We may update these Terms; the date above shows the latest version. Changes apply to new engagements, and to existing engagements only as the applicable agreement allows or the law requires.",
      ],
    },
    {
      title: "Contact",
      body: ["Questions about these Terms: {email}."],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* PRIVACY POLICY: English                                             */
/* ------------------------------------------------------------------ */
export const privacyEn: { intro: string; clauses: Clause[] } = {
  intro:
    "This Privacy Policy explains how Tekbin AI handles personal data when you visit {domain}, contact us or engage us. Questions or requests: {email}.",
  clauses: [
    {
      title: "Who is responsible",
      body: [
        "For website visitors, enquiries and our own business records, the controller is the individual who operates Tekbin AI, which is a trade name and not an incorporated company. The owner’s legal name and a service address are provided in contracts or on request; we do not publish a private residential address. For personal data inside a client’s project, the roles of the parties are determined from the actual processing activities (see clause 11).",
      ],
    },
    {
      title: "Personal data we collect",
      list: [
        "Contact and enquiry information: name, email, company, phone or messaging handle, and anything else you write to us.",
        "Form submissions: everything you enter in the project brief or consultation form (project description, tools, volume, timeline, budget range and similar).",
        "Technical and server data: IP address, browser, device, pages requested and timestamps, processed by our infrastructure providers to deliver and protect the website.",
        "Project-related information: data you give us access to, or that we handle, so that we can build or operate an automation, as described in the project agreement.",
        "Payment records: invoices and, if you pay in USDT, transaction details such as wallet addresses and amounts, which are recorded on a public blockchain that we cannot alter or delete.",
      ],
    },
    {
      title: "Why we use it and on what basis",
      list: [
        "To answer enquiries, prepare proposals and take steps before and under a contract (contract or pre-contract steps).",
        "To deliver, secure, support and improve the website and services, and to measure usage and performance (legitimate interests).",
        "To keep business, accounting and tax records and to meet legal obligations (legal obligation).",
        "To establish, exercise or defend legal claims (legitimate interests).",
        "Where the law requires it, on your consent, which you can withdraw at any time without affecting earlier processing.",
      ],
      body: ["We do not sell personal data and we do not use it for advertising profiling. Which legal bases apply depends on where you are and the data protection law that applies to you."],
    },
    {
      title: "Cookies and tracking technologies",
      body: [
        "Our website sets no cookies of its own and we have not enabled advertising or cross-site tracking tools; we checked this on the live site and will re-check it when the implementation changes.",
        "The website uses Cloudflare Web Analytics to measure usage and performance. Its beacon is loaded from static.cloudflareinsights.com. Cloudflare states that it collects page performance metrics from the browser’s Performance API and that Web Analytics does not use cookies or localStorage for analytics or fingerprint individual visitors for that purpose; see Cloudflare’s documentation for its own description. Separately, Cloudflare, as our infrastructure provider, processes request data to deliver and protect the website and may use technical measures for security.",
        "Third-party services you choose to use through links or embedded tools (for example a booking page, if we add one) have their own cookies and policies.",
      ],
    },
    {
      title: "Service providers and subprocessors",
      body: [
        "We share personal data only with providers that help us operate, under their own terms and with appropriate safeguards, and only as needed. Currently used: Cloudflare (hosting, DNS, email routing, security and web analytics), Google Gmail (email), and Web3Forms (delivery of form submissions to our email). In client projects, the automation, AI-model and API providers the project needs are used as listed in the project agreement or its data processing agreement. No other analytics, advertising or marketing providers are currently used; if that changes, we will update this policy.",
        "We may also disclose data to professional advisers, to comply with law or a valid legal request, to protect rights and safety, or in a business transfer or restructuring where the recipient is bound to protect it.",
      ],
    },
    {
      title: "International transfers",
      body: [
        "Our providers may process data in countries other than yours. Where the law requires, we rely on appropriate safeguards such as standard contractual clauses or equivalent mechanisms offered by those providers. We do not claim that data stays within any particular country.",
      ],
    },
    {
      title: "Data retention",
      body: [
        "We keep personal data only as long as needed for the purposes above. As a general rule, enquiry and brief records are kept for up to 24 months after our last contact, and client project and accounting records for the term of the engagement plus the period needed for legal, tax and accounting obligations and claims. Blockchain records are permanent. We then delete or anonymise the data. A request to delete is honoured to the extent the law requires, but we may need to keep some records (for example for accounting, legal claims or security) and may delete other data on a schedule rather than immediately.",
      ],
    },
    {
      title: "Your rights",
      body: [
        "Depending on where you live, you may have the right to access, correct, delete or export your personal data, to restrict or object to processing, to withdraw consent, and to complain to your data protection authority. Email {email}; we may need to verify your identity and will respond within the period the law requires. These rights are subject to the exceptions the law allows.",
      ],
    },
    {
      title: "Security measures",
      body: [
        "We use technical and organisational measures appropriate to the risk, such as access controls, least-privilege and revocable credentials, encrypted connections and separation of client data. No system is completely secure and we cannot promise absolute security.",
      ],
    },
    {
      title: "Personal data breaches",
      body: [
        "If we become aware of a personal data breach affecting data we control, we will assess it promptly and notify affected individuals and the competent authority where the law requires, without undue delay. If a breach affects data we process for a client, we notify the client as the agreement provides so that it can meet its own obligations.",
      ],
    },
    {
      title: "Client project data",
      body: [
        "When we handle personal data in a client’s project, whether we act as processor or in another role depends on the actual processing activities, and we do not assume a role by default. Where we are a processor, we process the data only on the client’s documented instructions, apply appropriate security, use only the subprocessors the project requires and, at the end, delete or return the data as agreed. We will sign a data processing agreement before processing starts where the applicable law requires one, including where GDPR Article 28 applies. The client remains responsible for having a lawful basis, giving required notices and being entitled to share the data.",
      ],
    },
    {
      title: "Children",
      body: ["Our website and services are not directed to children under 16, and we do not knowingly collect their personal data."],
    },
    {
      title: "Changes to this policy",
      body: [
        "We may update this policy; the date above shows the latest version, and we will give notice of material changes where the law requires. Nothing in this policy limits rights you have under mandatory law.",
      ],
    },
    {
      title: "Contact and complaints",
      body: [
        "Privacy contact: {email}. You may also complain to the data protection authority in your country if you believe your rights have been infringed.",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* TERMS OF SERVICE: Persian                                           */
/* ------------------------------------------------------------------ */
export const termsFa: { intro: string; clauses: Clause[] } = {
  intro:
    "این «شرایط استفاده» بر استفاده‌ی شما از {domain} حاکم است و چارچوبی را توضیح می‌دهد که Tekbin AI بر اساس آن خدمات مهندسی هوش مصنوعی و اتوماسیون را به کسب‌وکارها ارائه می‌کند. این شرایط چارچوب است، نه جایگزین قرارداد امضاشده‌ی پروژه: قرارداد کاری فقط بر مبنایی که در بند ۴ آمده شکل می‌گیرد.",
  clauses: [
    {
      title: "ما کی هستیم",
      body: [
        "Tekbin AI نام تجاری یک استودیوی مستقل مهندسی هوش مصنوعی و اتوماسیون است. Tekbin AI یک شرکت ثبت‌شده نیست. طرف قرارداد در هر پروژه، فردِ صاحب و گرداننده‌ی Tekbin AI است که با نام در توافق مربوط مشخص می‌شود. ممکن است در آینده شرکتی تأسیس کنیم؛ بند ۲۷ توضیح می‌دهد قراردادها چطور می‌توانند منتقل شوند.",
      ],
    },
    {
      title: "این شرایط برای چه کسانی است",
      body: [
        "خدمات ما برای کسب‌وکارها و متخصصانی است که با هدف کسب‌وکار عمل می‌کنند، نه مصرف‌کنندگان. اگر با این حال، قاعده‌ی آمره‌ی حمایت از مصرف‌کننده یا قاعده‌ی غیرقابل‌اسقاط دیگری بر شما اعمال شود، هیچ‌چیز در این شرایط حقوقی را که آن قاعده به شما می‌دهد از بین نمی‌برد.",
      ],
    },
    {
      title: "استفاده از وب‌سایت",
      body: [
        "وب‌سایت برای اطلاع‌رسانی عمومی است. محتوا پیشنهاد الزام‌آور، مشاوره‌ی حرفه‌ای یا تضمین نیست. شما موافقت می‌کنید قانونی از آن استفاده کنید، اختلالی ایجاد نکنید، بدون اجازه‌ی مکتوب ما آسیب‌پذیری‌های آن را آزمایش نکنید و برخلاف دستورهای robots.txt ما آن را خزش نکنید.",
      ],
    },
    {
      title: "رابطه با قراردادهای پروژه",
      list: [
        "بازدید از این وب‌سایت، ارسال درخواست یا ثبت فرم توضیح پروژه، قرارداد کاری الزام‌آور ایجاد نمی‌کند و به‌تنهایی به معنای پذیرش این شرایط به‌عنوان قرارداد خدمات نیست.",
        "قرارداد کاری فقط وقتی شکل می‌گیرد که مشتری و Tekbin AI هر دو توافق همان پروژه را به‌صورت مکتوب و با تأیید صریح بپذیرند، با امضای دستی یا الکترونیکی یا تأیید مکتوب معادل که با قانون قابل‌اعمال سازگار باشد: «قرارداد خدمات اصلی» (MSA) و/یا «توافق پروژه» یا شرح کار (SOW).",
        "جایی که MSA یا توافق پروژه اعمال می‌شود، همان بر آن قرارداد حاکم است. در صورت تعارض با این شرایط، توافق پروژه مقدم است تا جایی که صریحاً چنین بگوید. جایی که چیزی امضا نشده باشد، این شرایط هیچ‌یک از طرفین را به شروع یا پرداخت بابت کار ملزم نمی‌کند.",
        "ممکن است MSA، توافق پروژه، توافق‌نامه‌ی پردازش داده و پیوست هوش مصنوعی و امنیت را پیش از شروع قرارداد برای مشتری احتمالی بفرستیم. این اسناد در این وب‌سایت منتشر نمی‌شوند.",
      ],
    },
    {
      title: "خدمات ما",
      body: [
        "ما عامل‌های هوش مصنوعی، اتوماسیون گردش‌کار و یکپارچه‌سازی را طراحی، پیاده‌سازی، مستقر و در صورت توافق، اجرا می‌کنیم، به‌علاوه‌ی پایش، مستندسازی و پشتیبانی مرتبط. خروجی‌ها، زمان‌بندی، هزینه‌ها، دوره‌ی پشتیبانی و هر طرح مدیریتی هر پروژه در توافق پروژه‌ی آن تعریف می‌شود.",
      ],
    },
    {
      title: "محدوده‌ی پروژه و خروجی‌ها",
      body: [
        "هر پروژه باید محدوده‌ی مکتوب با معیارهای پذیرش قابل‌اندازه‌گیری، استثناهای مشخص و فهرست سیستم‌ها، داده‌ها و خدمات شخص ثالثِ درگیر داشته باشد. هر چیزی که صریحاً شامل نشده باشد، خارج از دستمزد است. زمان‌بندی‌ها تخمینی‌اند و به ارائه‌ی به‌موقع اطلاعات، دسترسی‌ها، تصمیم‌ها و بازخورد مشتری بستگی دارند؛ تأخیر ناشی از مشتری یا پلتفرم‌های شخص ثالث، زمان‌بندی را متناسب تمدید می‌کند.",
      ],
    },
    {
      title: "درخواست تغییر",
      body: [
        "هر یک از طرفین می‌تواند تغییر در محدوده، زمان یا قیمت را پیشنهاد کند. تغییر فقط وقتی اعمال می‌شود که هر دو طرف آن را مکتوب تأیید کنند (در صورت اجازه‌ی توافق پروژه، ایمیل کافی است). ما می‌توانیم تغییری را نپذیریم و برای زمان معقولی که روی کاری صرف شده و با تغییر بی‌اثر می‌شود، هزینه دریافت کنیم.",
      ],
    },
    {
      title: "مسئولیت‌های مشتری",
      list: [
        "اطلاعات درست و کامل، دسترسی‌ها و تصمیم‌ها را به‌موقع ارائه کنید و اعتبارنامه‌هایی را که به ما می‌دهید امن و قابل‌لغو نگه دارید.",
        "مطمئن شوید حق اشتراک‌گذاری، پردازش و خودکارسازی داده‌ها، حساب‌ها و سیستم‌هایی را که وصل می‌کنید دارید و اطلاع‌رسانی‌ها و رضایت‌های لازم را انجام داده‌اید.",
        "پیش از اتکا به خروجی‌ها و اقدام‌های خودکار آن‌ها را بررسی کنید و تعیین کنید کدام اقدام‌ها بدون تأیید انسانی اجرا شوند. مسئولیت تصمیم‌های کسب‌وکار و نظارت بر خروجی‌ها در حال بهره‌برداری با شماست.",
        "از خروجی‌ها قانونی و مطابق شرایط ابزارهای شخص ثالث مربوط استفاده کنید.",
      ],
    },
    {
      title: "تحویل و پذیرش",
      list: [
        "خروجی‌ها با معیارهای پذیرشِ مندرج در توافق پروژه آزمایش می‌شوند. مشتری مهلت بازبینی مندرج در آن (پیش‌فرض ده (۱۰) روز کاری) را دارد تا آزمایش کند و هر جنبه‌ای را که خروجی با آن معیارها مطابقت ندارد مکتوب گزارش دهد.",
        "خروجی در این موارد پذیرفته‌شده است: تأیید مکتوب، پایان مهلت بازبینی بدون اعلام مکتوبِ عدم‌انطباق با معیارها، یا شروع استفاده‌ی عملیاتی، مگر توافق پروژه طور دیگری بگوید.",
        "«نقص» یعنی عدم انطباق با معیارهای پذیرش توافق‌شده. تغییر در داده‌ها، ابزارها، پلتفرم‌های شخص ثالث، رفتار مدل هوش مصنوعی یا قواعد کسب‌وکار شما پس از تحویل، نقص نیست. نقص‌های گزارش‌شده را در دوره‌ی پشتیبانی مندرج در توافق پروژه بدون هزینه‌ی اضافی رفع می‌کنیم.",
      ],
    },
    {
      title: "هزینه‌ها و پرداخت",
      list: [
        "مگر توافق پروژه طور دیگری بگوید، برنامه‌ی پیش‌فرض این است: ۵۰٪ پیش از شروع پروژه، ۳۰٪ پس از تحویل نقطه‌ی عطف کاری توافق‌شده، و ۲۰٪ پیش از تحویل نهایی به محیط عملیاتی و انتقال خروجی‌های توافق‌شده.",
        "فاکتورها در مهلت مندرج در توافق پروژه (پیش‌فرض هفت (۷) روز از صدور) سررسید می‌شوند. اگر فاکتوری معوق شود، می‌توانیم پس از اخطار مکتوب و فرصت معقول رفع تخلف (پیش‌فرض هفت (۷) روز)، کار و خدمات مدیریت یا پشتیبانی را متوقف کنیم؛ زمان‌بندی سپس برای دوره‌ی توقف و زمان معقول ازسرگیری تعدیل می‌شود.",
        "قیمت‌های معرفی، مثل پیشنهاد «مشتریان اول»، مشروط به شرایط اعلام‌شده در صفحه‌ی قیمت‌ها و توافق پروژه است، از جمله اجازه‌ی مکتوب برای معرفی پروژه به‌عنوان نمونه‌کار. می‌توانیم هر زمان پیشنهاد معرفی را برای قراردادهای جدید پایان دهیم.",
      ],
    },
    {
      title: "روش‌های پرداخت، USDT و انتقال‌های محدودشده",
      body: [
        "قیمت‌ها به دلار آمریکا اعلام می‌شود. USDT یکی از روش‌های پرداختی است که ممکن است بپذیریم و روش انحصاری نیست. اینکه چه روش‌هایی برای یک پروژه ممکن است به قانون قابل‌اعمال، صلاحیت حقوقی هر دو طرف و شرایط ارائه‌دهنده‌ی پرداخت مربوط بستگی دارد. توافق پروژه روش، شبکه‌ی پرداخت، مبلغ، پرداخت‌کننده‌ی کارمزد شبکه یا انتقال، الزامات تأیید و نحوه‌ی برخورد با انتقال‌های ناموفق، دیرکرد یا محدودشده را مشخص می‌کند.",
        "انتقال رمزارز معمولاً برگشت‌پذیر نیست. پرداخت‌کننده مسئول ارسال وجه به آدرس و شبکه‌ی دقیق فاکتور است. پرداخت وقتی کامل است که مبلغ کامل فاکتور رسیده باشد. ما هیچ ترتیبی را که برای دور زدن تحریم‌ها، احراز هویت، محدودیت‌های پرداخت یا مقررات مالی باشد، ارائه یا قبول نمی‌کنیم.",
      ],
    },
    {
      title: "مالیات و هزینه‌های شخص ثالث",
      body: [
        "دستمزد شامل مالیات، عوارض و حقوق دولتی نیست و این‌ها (جز مالیات بر درآمد خود ما) بر عهده‌ی مشتری است. هزینه‌های شخص ثالث (مصرف مدل هوش مصنوعی، پلتفرم‌های اتوماسیون، هاستینگ، APIها، زیرساخت) جدا از دستمزد حرفه‌ای ماست، مگر توافق پروژه بگوید شامل شده‌اند. برای محاسبه‌ی مسئولیت (بند ۲۰)، هزینه‌های عبوریِ شخص ثالث و مالیات‌ها جزو دستمزد حساب نمی‌شوند.",
      ],
    },
    {
      title: "خروجی‌های هوش مصنوعی و محدودیت‌ها",
      body: [
        "سیستم‌های هوش مصنوعی ممکن است خروجی نادرست، ناقص یا غیرمنتظره بدهند و اتوماسیون‌ها با تغییر ورودی‌ها، ابزارها یا مدل‌ها رفتار متفاوتی نشان دهند. ما تضمین نمی‌کنیم که خروجی‌ها دقیق باشند، اتوماسیون‌ها بدون وقفه اجرا شوند یا صرفه‌جویی، درآمد، رتبه یا هر نتیجه‌ی تجاری مشخصی حاصل شود. در صورت توافق، مراحل تأیید انسانی، لاگ و مدیریت خطا را طراحی می‌کنیم، آن‌گونه که در پیوست هوش مصنوعی و امنیت (در صورت وجود) آمده. مگر توافق پروژه طور دیگری بگوید، اجرا و نظارت بر خروجی‌ها پس از تحویل بر عهده‌ی مشتری است.",
      ],
    },
    {
      title: "خدمات شخص ثالث و وابستگی به API",
      body: [
        "پروژه‌ها ممکن است به پلتفرم‌ها، مدل‌ها و APIهای شخص ثالث وابسته باشند. در دسترس بودن، قیمت، محدودیت و شرایط آن‌ها خارج از کنترل ماست، ممکن است بدون اطلاع قبلی تغییر کند و مستقیماً بر مشتری اعمال می‌شود. ما مسئول اقدام، قصور، قطعی یا تغییر آن‌ها نیستیم، ولی تغییری را که از آن مطلع شویم و بر خروجی اثر بگذارد، به‌سرعت به مشتری اطلاع می‌دهیم. نام و نشان اشخاص ثالث متعلق به صاحبان آن‌هاست و ذکرشان به معنای تأیید یا شراکت نیست.",
      ],
    },
    {
      title: "مالکیت فکری",
      list: [
        "Tekbin AI مالکیت فکری پیشینه‌ی خود را نگه می‌دارد: چارچوب‌های قابل‌استفاده‌ی مجدد، اتصال‌دهنده‌ها و ماژول‌های عمومی، کتابخانه‌ها و ابزارهای داخلی، پرامپت‌ها و الگوهای عمومی، روش‌های توسعه و دانش فنی عمومی، به‌علاوه‌ی بهبودهای آن‌ها («مالکیت فکری پیشینه»).",
        "داده‌ی مشتری، دارایی مشتری یا تحت کنترل قانونی او می‌ماند. مشتری یک مجوز محدود به ما می‌دهد که فقط برای انجام خدمات از آن استفاده کنیم.",
        "خروجی‌های اختصاصی پروژه همان مالکیت یا مجوزی را دارند که در توافق پروژه صریحاً آمده. به‌طور پیش‌فرض مشتری مجوز استفاده از خروجی‌ها، از جمله مالکیت فکری پیشینه‌ی تعبیه‌شده در آن‌ها، را برای کسب‌وکار خود دریافت می‌کند؛ هر انتقال توافق‌شده‌ی مالکیت فکری اختصاصی پروژه فقط پس از پرداخت کامل و با رعایت قانون قابل‌اعمال اثر می‌کند.",
        "اجزای متن‌باز و شخص ثالث تابع مجوزهای خودشان می‌مانند. ما مالکیت آن‌ها را ادعا نمی‌کنیم.",
        "پروژه را فقط با اجازه‌ی مکتوب مشتری به‌عنوان نمونه‌کار یا مرجع معرفی می‌کنیم. این وب‌سایت، طراحی و محتوای آن متعلق به Tekbin AI است.",
      ],
    },
    {
      title: "محرمانگی",
      body: [
        "هر طرف اطلاعات غیرعمومی طرف دیگر را محرمانه نگه می‌دارد، فقط برای همان قرارداد به کار می‌برد و فقط با کارکنان، پیمانکاران فرعی و مشاورانی که به آن نیاز دارند و به تعهدات مشابه ملزم‌اند در میان می‌گذارد. این شامل اطلاعاتی نمی‌شود که بدون تقصیر گیرنده عمومی شده، از قبل نزد او بوده، مستقل تولید شده یا قانوناً از شخص ثالث دریافت شده، یا افشایش به حکم قانون الزامی است (با اطلاع‌رسانی در صورت مجاز بودن). تعهدات محرمانگی در مدت مندرج در MSA (پیش‌فرض سه (۳) سال پس از پایان قرارداد)، و تا زمانی که اسرار تجاری محرمانه بمانند، ادامه دارد.",
      ],
    },
    {
      title: "حفاظت از داده‌ها",
      body: [
        "نحوه‌ی برخورد با داده‌های شخصی جمع‌آوری‌شده از طریق این وب‌سایت در سیاست حریم خصوصی آمده است. جایی که در یک پروژه از طرف مشتری داده‌ی شخصی پردازش می‌کنیم، نقش طرفین از روی فعالیت‌های واقعی پردازش تعیین می‌شود. جایی که پردازشگر باشیم، فقط بر اساس دستورهای مکتوب مشتری پردازش می‌کنیم و در صورتی که قانون قابل‌اعمال لازم بداند، پیش از شروع پردازش مربوط، توافق‌نامه‌ی پردازش داده منعقد می‌کنیم.",
      ],
    },
    {
      title: "تضمین‌ها و سلب مسئولیت",
      body: [
        "خدمات را با مهارت و دقت معقول انجام می‌دهیم. جز آنچه در این شرایط یا توافق پروژه صریحاً آمده و تا حداکثر حد مجاز قانون، وب‌سایت و خدمات «همان‌گونه که هست» و «بر حسب دسترس‌پذیری» ارائه می‌شود و تضمین‌های صریح یا ضمنی دیگر، از جمله قابلیت عرضه، تناسب برای هدفی خاص، عدم نقض حقوق، عملکرد بدون وقفه و خروجی بدون خطا را نفی می‌کنیم.",
      ],
    },
    {
      title: "پشتیبانی، نگهداری و کار خارج از دستمزد",
      body: [
        "فقط خدماتی که در توافق پروژه صریحاً آمده‌اند در دستمزد پروژه گنجانده شده‌اند. این‌ها موضوعات جداگانه‌اند و هر کدام فقط در صورتی شامل است که توافق پروژه بگوید: رفع نقص در دوره‌ی پشتیبانی؛ قابلیت‌های جدید؛ سازگار کردن با تغییر APIهای شخص ثالث یا رفتار مدل هوش مصنوعی؛ مدیریت زیرساخت؛ نگهداری مداوم؛ پایش؛ و پشتیبانی اضطراری.",
      ],
    },
    {
      title: "محدودیت مسئولیت",
      list: [
        "تا حداکثر حد مجاز قانون، هیچ‌یک از طرفین در برابر دیگری مسئول خسارت غیرمستقیم، اتفاقی، تبعی، خاص یا تنبیهی، یا از دست رفتن سود، درآمد، کسب‌وکار، اعتبار یا داده نیست، به هر طریق که ایجاد شود.",
        "هر پروژه چارچوب مسئولیت خود را دارد که در توافق پروژه‌اش آمده است. مگر آن توافق سقف دیگری مشخص کند، مجموع مسئولیت ما ناشی از آن پروژه محدود است به دستمزد حرفه‌ای پرداخت‌شده یا قابل‌پرداخت طبق همان توافق پروژه، به‌استثنای هزینه‌های عبوری شخص ثالث و مالیات‌ها.",
        "هیچ‌چیز در این شرایط مسئولیتی را که قانوناً قابل‌اسقاط یا محدودسازی نیست محدود نمی‌کند، از جمله تقلب، تقصیر عمدی، یا مرگ و صدمه‌ی بدنی ناشی از بی‌احتیاطی. این محدودیت‌ها تعهد مشتری به پرداخت دستمزدهای سررسیدشده را کم نمی‌کند.",
        "ادعاها باید ظرف مدت مندرج در MSA (پیش‌فرض دوازده (۱۲) ماه از زمان آگاهی مدعی از وقایع)، و در هر حال در مهلت مرور زمان آمره، مکتوب اعلام شوند.",
      ],
    },
    {
      title: "جبران خسارت",
      body: [
        "مشتری از Tekbin AI، صاحب آن، کارکنان و پیمانکاران فرعی در برابر ادعاهای اشخاص ثالث و زیان‌ها و هزینه‌های حقوقی معقول ناشی از آن‌ها دفاع و آنان را جبران می‌کند، در موارد: (الف) داده‌ی مشتری یا دستورهای او، از جمله هر ادعا مبنی بر اینکه حق ارائه‌ی آن‌ها را نداشته است؛ (ب) استفاده‌ی مشتری از خروجی‌ها در تعارض با قانون یا شرایط اشخاص ثالث؛ یا (پ) اقدام‌هایی که سیستم‌های تحت اجرای مشتری پس از تحویل به‌صورت خودکار انجام می‌دهند. ما ادعا را به‌سرعت به مشتری اطلاع می‌دهیم، کنترل دفاع را به او می‌سپاریم و به هزینه‌ی او به‌طور معقول همکاری می‌کنیم. تعهدات جبران خسارت تابع قانون آمره و هر شرط متفاوت در MSA است.",
      ],
    },
    {
      title: "تعلیق و فسخ",
      list: [
        "هر طرف می‌تواند با اخطار مکتوب ده (۱۰) روزه قرارداد را بدون ذکر دلیل فسخ کند، یا اگر طرف دیگر مرتکب نقض اساسی شود و ده (۱۰) روز پس از اخطار مکتوب رفع نکند، بلافاصله فسخ کند.",
        "در فسخ، تسویه‌ی نهایی طبق توافق مربوط و قانون آمره محاسبه می‌شود و این‌ها را از هم تفکیک می‌کند: کار تکمیل‌شده (قابل‌پرداخت)؛ کار در جریان (متناسب با پیشرفت قابل‌پرداخت)؛ خدمات پیش‌پرداخت‌شده‌ی استفاده‌نشده (بازپرداخت می‌شود)؛ هزینه‌های غیرقابل‌لغو شخص ثالثِ انجام‌شده (قابل‌پرداخت)؛ و بازپرداخت‌هایی که قانون الزام می‌کند. وجهی بابت خدمات انجام‌نشده و تعهدنشده نگه داشته نمی‌شود.",
        "اگر قانون ایجاب کند یا مشتری از خدمات به شکل غیرقانونی یا به شکلی که به ما یا اشخاص ثالث آسیب می‌زند استفاده کند، می‌توانیم خدمات را فوراً تعلیق یا قطع کنیم.",
        "در فسخ یا پایان کار، برای انتقال و تحویل معقول آنچه بابتش پرداخت شده، آن‌گونه که در MSA آمده همکاری می‌کنیم. بندهایی که ماهیتاً باید باقی بمانند، باقی می‌مانند.",
      ],
    },
    {
      title: "رعایت قوانین",
      body: [
        "هر طرف قوانینی را که در ارتباط با خدمات بر او اعمال می‌شود رعایت می‌کند. اگر به‌طور معقول تشخیص دهیم ادامه‌ی کار قانون، مقررات یا قواعد یک ارائه‌دهنده‌ی پرداخت یا پلتفرم را نقض می‌کند، می‌توانیم از کار امتناع، آن را تعلیق یا پایان دهیم.",
      ],
    },
    {
      title: "تحریم‌ها و خدمات محدودشده",
      body: [
        "ما خدمات را فقط جایی ارائه و پرداخت را فقط جایی قبول می‌کنیم که این کار طبق قوانین تحریم، کنترل صادرات و تجارت قابل‌اعمال بر هر دو طرف قانونی باشد. هر مشتری در اسناد قرارداد تأیید می‌کند که از دریافت خدمات منع نشده است. ممکن است اطلاعاتی را که برای تأیید آن به‌طور معقول لازم است بخواهیم و می‌توانیم جایی که صلاحیت قابل‌تأیید نباشد یا محدودیتی اعمال شود، از قرارداد امتناع، آن را تعلیق یا پایان دهیم.",
      ],
    },
    {
      title: "قوه‌ی قاهره",
      body: [
        "هیچ‌یک از طرفین در قبال تأخیر یا قصور ناشی از رویدادهای خارج از کنترل معقول خود مسئول نیست، از جمله قطعی اینترنت، ابر، شبکه‌های پرداخت یا پلتفرم‌های شخص ثالث، تغییر APIهای شخص ثالث یا رفتار مدل‌ها، اقدام دولتی، اختلافات کارگری یا رویدادهای طبیعی. تعهد پرداخت بابت کار انجام‌شده معاف نمی‌شود.",
      ],
    },
    {
      title: "پیمانکاران مستقل و پیمانکاران فرعی",
      body: [
        "طرفین پیمانکار مستقل‌اند؛ هیچ‌چیز شراکت، نمایندگی یا رابطه‌ی استخدامی ایجاد نمی‌کند. ما می‌توانیم از پیمانکاران مستقل و فرعی شایسته استفاده کنیم که به تعهدات محرمانگی، مالکیت فکری و حفاظت از داده متناسب با کار ملزم‌اند. مسئولیت کار آن‌ها در برابر مشتری طبق توافق مربوط با ماست.",
      ],
    },
    {
      title: "انتقال و ساختار آتی",
      body: [
        "مشتری بدون رضایت مکتوب ما نمی‌تواند توافقی را منتقل کند. Tekbin AI می‌تواند با اخطار مکتوب، توافقی را به شرکت یا شخص حقوقی دیگری که جانشین کسب‌وکار Tekbin AI می‌شود منتقل یا تبدیل (novation) کند، مشروط به اینکه جانشین تعهدات ما را بپذیرد و در جایی که قانون یا توافق لازم بداند، مشتری رضایت دهد (رضایت نباید بی‌دلیل امتناع شود).",
      ],
    },
    {
      title: "ابلاغ‌ها",
      body: [
        "ابلاغ‌ها مکتوب و با ایمیل به نشانی‌هایی انجام می‌شود که هر طرف در توافق مربوط اعلام می‌کند؛ برای ما {email}. نشانی قانونی ابلاغ ممکن است به‌جای انتشار در این وب‌سایت در MSA یا توافق پروژه آورده شود.",
      ],
    },
    {
      title: "زبان",
      body: [
        "این شرایط به دو زبان انگلیسی و فارسی و با یک مفهوم منتشر شده است. اگر تفاوتی دیدید به ما بگویید تا اصلاح کنیم. اینکه در یک قرارداد کدام نسخه‌ی زبانی مرجع است، در MSA یا توافق پروژه‌ی آن، با رعایت قانون قابل‌اعمال، مشخص می‌شود.",
      ],
    },
    {
      title: "قانون حاکم و حل اختلاف",
      body: [
        "قانون حاکم و روش و مرجع حل اختلاف هر قرارداد (دادگاه یا داوری، و در داوری محل و قواعد آن) در MSA یا توافق پروژه‌ی آن آمده است. تا وقتی طرفین آن‌ها را مکتوب توافق نکرده‌اند، هیچ‌چیز در این وب‌سایت آن‌ها را انتخاب نمی‌کند و قانون آمره اعمال می‌شود. طرفین پیش از شروع رسیدگی رسمی، ابتدا با حسن نیت از راه مذاکره‌ی مکتوب برای حل اختلاف تلاش می‌کنند، بدون اینکه حق هر طرف برای درخواست دستور موقت فوری برای حفاظت از اطلاعات محرمانه یا مالکیت فکری محدود شود.",
      ],
    },
    {
      title: "اصلاحات",
      body: [
        "ممکن است این شرایط را به‌روز کنیم؛ تاریخ بالای صفحه آخرین نسخه را نشان می‌دهد. تغییرات برای قراردادهای جدید، و برای قراردادهای جاری فقط به‌گونه‌ای که توافق مربوط اجازه می‌دهد یا قانون ایجاب می‌کند، اعمال می‌شود.",
      ],
    },
    {
      title: "تماس",
      body: ["پرسش درباره‌ی این شرایط: {email}."],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* PRIVACY POLICY: Persian                                             */
/* ------------------------------------------------------------------ */
export const privacyFa: { intro: string; clauses: Clause[] } = {
  intro:
    "این سیاست توضیح می‌دهد Tekbin AI وقتی از {domain} بازدید می‌کنید، با ما تماس می‌گیرید یا ما را به کار می‌گیرید، با داده‌های شخصی چه می‌کند. پرسش یا درخواست: {email}.",
  clauses: [
    {
      title: "چه کسی مسئول است",
      body: [
        "برای بازدیدکنندگان وب‌سایت، درخواست‌ها و سوابق کسب‌وکار خودمان، کنترل‌کننده فردی است که Tekbin AI را اداره می‌کند؛ Tekbin AI نام تجاری است و شرکت ثبت‌شده نیست. نام قانونی صاحب و نشانی ابلاغ در قراردادها یا بنا به درخواست ارائه می‌شود؛ نشانی محل سکونت شخصی را منتشر نمی‌کنیم. برای داده‌های شخصی داخل پروژه‌ی مشتری، نقش طرفین از روی فعالیت‌های واقعی پردازش تعیین می‌شود (بند ۱۱ را ببینید).",
      ],
    },
    {
      title: "داده‌های شخصی که جمع می‌کنیم",
      list: [
        "اطلاعات تماس و درخواست: نام، ایمیل، شرکت، شماره تماس یا آیدی پیام‌رسان و هر چیز دیگری که برایمان می‌نویسید.",
        "ثبت فرم: هر چه در فرم توضیح پروژه یا درخواست مشاوره وارد می‌کنید (شرح پروژه، ابزارها، حجم، زمان‌بندی، بازه‌ی بودجه و مانند آن).",
        "داده‌های فنی و سرور: آدرس IP، مرورگر، دستگاه، صفحه‌های درخواست‌شده و زمان‌ها، که ارائه‌دهندگان زیرساخت ما برای ارائه و محافظت از وب‌سایت پردازش می‌کنند.",
        "اطلاعات مرتبط با پروژه: داده‌هایی که به آن‌ها دسترسی می‌دهید یا با آن‌ها کار می‌کنیم تا اتوماسیون را بسازیم یا اجرا کنیم، آن‌گونه که در توافق پروژه آمده.",
        "سوابق پرداخت: فاکتورها و، اگر با USDT پرداخت کنید، جزئیات تراکنش مانند آدرس کیف پول و مبلغ که روی یک بلاک‌چین عمومی ثبت می‌شود و ما نمی‌توانیم تغییر یا حذفش کنیم.",
      ],
    },
    {
      title: "چرا و بر چه مبنایی استفاده می‌کنیم",
      list: [
        "برای پاسخ به درخواست‌ها، تهیه‌ی پیشنهاد و اقدام‌های پیش از قرارداد و در چارچوب قرارداد (مبنای قرارداد یا مقدمات قرارداد).",
        "برای ارائه، حفظ امنیت، پشتیبانی و بهبود وب‌سایت و خدمات، و اندازه‌گیری استفاده و عملکرد (منافع مشروع).",
        "برای نگهداری سوابق کسب‌وکار، حسابداری و مالیات و رعایت تعهدات قانونی (تکلیف قانونی).",
        "برای اثبات، اعمال یا دفاع از ادعاهای حقوقی (منافع مشروع).",
        "در جایی که قانون الزام کند، بر مبنای رضایت شما، که هر زمان می‌توانید آن را پس بگیرید بدون اینکه بر پردازش‌های پیشین اثر بگذارد.",
      ],
      body: ["ما داده‌ی شخصی را نمی‌فروشیم و برای پروفایل‌سازی تبلیغاتی به کار نمی‌بریم. اینکه کدام مبنای قانونی اعمال می‌شود به محل شما و قانون حفاظت از داده‌ای که بر شما اعمال می‌شود بستگی دارد."],
    },
    {
      title: "کوکی‌ها و فناوری‌های ردیابی",
      body: [
        "وب‌سایت ما کوکی اختصاصی نمی‌گذارد و ابزار تبلیغاتی یا ردیابی بین‌سایتی را فعال نکرده‌ایم؛ این را روی سایت زنده بررسی کرده‌ایم و با تغییر پیاده‌سازی دوباره بررسی می‌کنیم.",
        "وب‌سایت برای اندازه‌گیری استفاده و عملکرد از Cloudflare Web Analytics استفاده می‌کند. اسکریپت آن از static.cloudflareinsights.com بارگذاری می‌شود. Cloudflare اعلام می‌کند معیارهای عملکرد صفحه را از Performance API مرورگر جمع می‌کند و Web Analytics برای آمار از کوکی یا localStorage استفاده نمی‌کند و برای این منظور بازدیدکنندگان را با fingerprinting ردیابی نمی‌کند؛ توضیح خود Cloudflare را در مستنداتش ببینید. جدا از آن، Cloudflare به‌عنوان ارائه‌دهنده‌ی زیرساخت ما، داده‌ی درخواست را برای ارائه و محافظت از وب‌سایت پردازش می‌کند و ممکن است اقدام‌های فنی امنیتی به کار ببرد.",
        "خدمات شخص ثالثی که از طریق لینک یا ابزار جاسازی‌شده استفاده می‌کنید (مثلاً یک صفحه‌ی رزرو، اگر اضافه کنیم) کوکی‌ها و سیاست‌های خودشان را دارند.",
      ],
    },
    {
      title: "ارائه‌دهندگان خدمات و پردازشگران فرعی",
      body: [
        "داده‌ی شخصی را فقط با ارائه‌دهندگانی که در اجرای کار به ما کمک می‌کنند، تحت شرایط خودشان، با تضمین‌های مناسب و فقط در حد نیاز به اشتراک می‌گذاریم. در حال حاضر استفاده می‌شود: Cloudflare (هاستینگ، DNS، مسیریابی ایمیل، امنیت و آمار وب)، Google Gmail (ایمیل) و Web3Forms (تحویل ثبت فرم‌ها به ایمیل ما). در پروژه‌های مشتری، ارائه‌دهندگان اتوماسیون، مدل هوش مصنوعی و API که پروژه نیاز دارد، آن‌گونه که در توافق پروژه یا توافق‌نامه‌ی پردازش داده آمده، به کار می‌روند. در حال حاضر هیچ ارائه‌دهنده‌ی آمار، تبلیغات یا بازاریابی دیگری استفاده نمی‌شود؛ اگر تغییر کند، این سیاست را به‌روز می‌کنیم.",
        "همچنین ممکن است داده را با مشاوران حرفه‌ای، برای رعایت قانون یا درخواست قانونی معتبر، برای حفاظت از حقوق و ایمنی، یا در انتقال یا بازساختار کسب‌وکار، به گیرنده‌ای که ملزم به حفاظت از آن است، افشا کنیم.",
      ],
    },
    {
      title: "انتقال بین‌المللی",
      body: [
        "ارائه‌دهندگان ما ممکن است داده را در کشورهایی غیر از کشور شما پردازش کنند. در جایی که قانون الزام کند، به تضمین‌های مناسب مانند بندهای قراردادی استاندارد یا سازوکارهای معادلی که آن ارائه‌دهندگان عرضه می‌کنند تکیه می‌کنیم. ادعا نمی‌کنیم داده در یک کشور مشخص می‌ماند.",
      ],
    },
    {
      title: "مدت نگهداری داده",
      body: [
        "داده‌ی شخصی را فقط تا وقتی لازم برای اهداف بالاست نگه می‌داریم. به‌طور معمول، سوابق درخواست و فرم تا ۲۴ ماه پس از آخرین تماس، و سوابق پروژه و حسابداری مشتری تا پایان مدت قرارداد به‌علاوه‌ی مدت لازم برای تعهدات قانونی، مالیاتی و حسابداری و ادعاها نگه داشته می‌شود. سوابق بلاک‌چین دائمی است. سپس داده را حذف یا ناشناس می‌کنیم. درخواست حذف تا حدی که قانون الزام کند انجام می‌شود، ولی ممکن است لازم باشد بعضی سوابق (مثلاً برای حسابداری، ادعاهای حقوقی یا امنیت) نگه داشته شود و داده‌های دیگر طبق برنامه و نه لزوماً فوراً حذف شود.",
      ],
    },
    {
      title: "حقوق شما",
      body: [
        "بسته به محل زندگی‌تان، ممکن است حق دسترسی، اصلاح، حذف یا دریافت نسخه‌ی داده‌ی شخصی، محدود کردن یا اعتراض به پردازش، پس گرفتن رضایت و شکایت به مرجع حفاظت از داده را داشته باشید. به {email} ایمیل بزنید؛ ممکن است لازم باشد هویتتان را تأیید کنیم و در مهلتی که قانون تعیین می‌کند پاسخ می‌دهیم. این حقوق تابع استثناهایی است که قانون اجازه می‌دهد.",
      ],
    },
    {
      title: "تدابیر امنیتی",
      body: [
        "از تدابیر فنی و سازمانی متناسب با ریسک استفاده می‌کنیم، مانند کنترل دسترسی، اعتبارنامه‌های با حداقل دسترسی و قابل‌لغو، اتصال رمزگذاری‌شده و جداسازی داده‌ی مشتریان. هیچ سیستمی کاملاً امن نیست و نمی‌توانیم امنیت مطلق را تعهد کنیم.",
      ],
    },
    {
      title: "نقض داده‌ی شخصی",
      body: [
        "اگر از نقض داده‌ی شخصی‌ای که کنترلش با ماست مطلع شویم، آن را به‌سرعت ارزیابی می‌کنیم و در جایی که قانون الزام کند، بدون تأخیر ناروا به افراد متأثر و مرجع صالح اطلاع می‌دهیم. اگر نقض بر داده‌ای اثر بگذارد که برای مشتری پردازش می‌کنیم، طبق توافق به مشتری اطلاع می‌دهیم تا بتواند تعهدات خود را انجام دهد.",
      ],
    },
    {
      title: "داده‌های پروژه‌ی مشتری",
      body: [
        "وقتی در پروژه‌ی مشتری با داده‌ی شخصی کار می‌کنیم، اینکه پردازشگر هستیم یا نقش دیگری داریم به فعالیت‌های واقعی پردازش بستگی دارد و به‌طور پیش‌فرض نقشی فرض نمی‌کنیم. جایی که پردازشگر باشیم، داده را فقط بر اساس دستورهای مکتوب مشتری پردازش می‌کنیم، امنیت مناسب اعمال می‌کنیم، فقط از پردازشگران فرعی لازم برای پروژه استفاده می‌کنیم و در پایان، طبق توافق داده را حذف یا بازمی‌گردانیم. در صورتی که قانون قابل‌اعمال لازم بداند، از جمله جایی که ماده‌ی ۲۸ GDPR اعمال می‌شود، پیش از شروع پردازش توافق‌نامه‌ی پردازش داده امضا می‌کنیم. مشتری مسئول داشتن مبنای قانونی، اطلاع‌رسانی لازم و مجاز بودن اشتراک داده باقی می‌ماند.",
      ],
    },
    {
      title: "کودکان",
      body: ["وب‌سایت و خدمات ما برای کودکان زیر ۱۶ سال نیست و آگاهانه داده‌ی شخصی آن‌ها را جمع نمی‌کنیم."],
    },
    {
      title: "تغییرات این سیاست",
      body: [
        "ممکن است این سیاست را به‌روز کنیم؛ تاریخ بالای صفحه آخرین نسخه را نشان می‌دهد و در جایی که قانون الزام کند، تغییرات مهم را اطلاع می‌دهیم. هیچ‌چیز در این سیاست حقوقی را که طبق قانون آمره دارید محدود نمی‌کند.",
      ],
    },
    {
      title: "تماس و شکایت",
      body: [
        "تماس حریم خصوصی: {email}. اگر فکر می‌کنید حقوقتان نقض شده، می‌توانید به مرجع حفاظت از داده‌ی کشور خودتان هم شکایت کنید.",
      ],
    },
  ],
};
