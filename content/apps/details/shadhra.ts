// Page data for Shadhra (/apps/shadhra/).
import type { AppDetail } from "../types"

export const detail: AppDetail = {
  slug: "shadhra",
  tagline: {
    en: "What stops you while you read will not get lost again",
    ar: "ما يستوقفك وأنت تقرأ لا يضيع بعد اليوم",
  },
  intro: {
    en: "Shadhra is one library for your quotes and your reflections: photograph the page or type the text, and save it with its book, its author and what it made you think. Then group what is similar, link ideas together, and write your essays and books from them.",
    ar: "شذرة مكتبة واحدة لاقتباساتك وتأمّلاتك: صوّر الصفحة أو اكتب النص، واحفظه مع كتابه ومؤلفه وما خطر لك فيه. ثم اجمع المتشابه، واربط بين الأفكار، واكتب منها مقالاتك وكتبك.",
  },
  facts: [
    { en: "Free", ar: "مجاني" },
    { en: "Android and the web", ar: "أندرويد والويب" },
    { en: "Arabic and English", ar: "عربي وإنجليزي" },
  ],
  downloads: [
    {
      label: { en: "Open shadhra.app", ar: "افتح shadhra.app" },
      href: "https://shadhra.app",
      kind: "external",
      primary: true,
    },
    {
      label: { en: "Get it on Google Play", ar: "حمّله من Google Play" },
      href: "https://play.google.com/store/apps/details?id=app.shadhra",
      kind: "external",
    },
  ],
  features: [
    {
      title: { en: "Capture it in the moment", ar: "التقط في لحظتها" },
      body: {
        en: "Photograph the book page and the Arabic or English text is extracted, or type it yourself, and write your reflection with it in the same step.",
        ar: "صوّر صفحة الكتاب فيُستخرج النص العربي أو الإنجليزي، أو اكتبه بنفسك، واكتب تأمّلك معه في الخطوة نفسها.",
      },
    },
    {
      title: { en: "One place", ar: "مكان واحد" },
      body: {
        en: "All your quotes with their books, their authors and your reflections, sorted and grouped by book, author, tag, language or period.",
        ar: "كل اقتباساتك مع كتبها ومؤلفيها وتأمّلاتك، مرتّبة ومجمّعة حسب الكتاب أو المؤلف أو الوسم أو اللغة أو الفترة.",
      },
    },
    {
      title: { en: "Links and patterns", ar: "الصلات والأنساق" },
      body: {
        en: "Link two quotes and name the connection between them, and let Shadhra gather quotes that are close in meaning into patterns.",
        ar: "اربط بين اقتباسين وسمِّ الصلة بينهما، ودَع شذرة تجمع ما تقارب في المعنى في أنساق.",
      },
    },
    {
      title: { en: "Search by meaning", ar: "ابحث بالمعنى" },
      body: {
        en: "Find a quote even if you have forgotten its wording, and ask your library a question: it answers only from your own quotes, reflections and essays, and shows its sources.",
        ar: "اعثر على الاقتباس وإن نسيت لفظه، واسأل مكتبتك فتجيبك من اقتباساتك وتأمّلاتك ومقالاتك أنت فقط، مع ذكر المصادر.",
      },
    },
    {
      title: { en: "Write from them", ar: "اكتب منها" },
      body: {
        en: "Build your essay from your quotes, writing it yourself or starting from an AI draft, export it as a PDF, then collect your essays into a print-ready book.",
        ar: "ابنِ مقالك من اقتباساتك، تكتبه بنفسك أو تبدأ من مسودة يقترحها الذكاء الاصطناعي، وصدّره PDF، ثم اجمع مقالاتك في كتاب جاهز للطباعة.",
      },
    },
    {
      title: { en: "Today's Shadhra", ar: "شذرة اليوم" },
      body: {
        en: "Every day a quote from your library comes back to you: on the home page, in the Android home-screen widget, or in a morning notification at the time you choose.",
        ar: "كل يوم اقتباس من مكتبتك يعود إليك: في الصفحة الرئيسة، أو في أداة الشاشة الرئيسية على أندرويد، أو في إشعار صباحي في الوقت الذي تختاره.",
      },
    },
  ],
  screenshots: [
    {
      src: "/images/apps/shadhra/home.webp",
      caption: { en: "Home and Today's Shadhra", ar: "الرئيسية وشذرة اليوم" },
      shape: "phone",
    },
    {
      src: "/images/apps/shadhra/capture.webp",
      caption: {
        en: "Adding a quote by typing or with a photo",
        ar: "إضافة اقتباس بالكتابة أو بالصورة",
      },
      shape: "phone",
    },
    {
      src: "/images/apps/shadhra/library.webp",
      caption: { en: "The library with the reflections", ar: "المكتبة مع التأمّلات" },
      shape: "phone",
    },
    {
      src: "/images/apps/shadhra/groups.webp",
      caption: { en: "Quotes grouped by book", ar: "الاقتباسات مجمّعة حسب الكتاب" },
      shape: "phone",
    },
    {
      src: "/images/apps/shadhra/essays.webp",
      caption: { en: "Essays", ar: "المقالات" },
      shape: "phone",
    },
    {
      src: "/images/apps/shadhra/talk-to-library.webp",
      caption: {
        en: "Further down the home page: Talk to your library, your counts and On this day",
        ar: "أسفل الصفحة الرئيسة: حاور مكتبتك، وأعدادك، وفي مثل هذا اليوم",
      },
      shape: "phone",
    },
  ],
  faq: [
    {
      q: { en: "Is the app free?", ar: "هل التطبيق مجاني؟" },
      a: {
        en: "Yes. Saving, organising and searching are free, and every account gets a monthly allowance for the AI features such as photo to text and talking to your library. The current plans are shown on shadhra.app.",
        ar: "نعم. الحفظ والتنظيم والبحث مجانية، ولكل حساب رصيد شهري لمزايا الذكاء الاصطناعي مثل استخراج النص من الصورة ومحاورة المكتبة. والباقات الحالية معروضة في shadhra.app.",
      },
    },
    {
      q: { en: "Can other people see my quotes?", ar: "هل اقتباساتي ظاهرة للناس؟" },
      a: {
        en: "You decide. A new account is private until you choose, and every quote and reflection has its own setting: public, anonymous, or only for you. An essay stays private until you publish it.",
        ar: "القرار لك. الحساب الجديد خاص إلى أن تختار، ولكل اقتباس وتأمّل إعداده: عام، أو بلا اسم، أو لك وحدك. والمقال يبقى خاصًا إلى أن تنشره.",
      },
    },
    {
      q: { en: "Does it work without internet?", ar: "هل يعمل بلا إنترنت؟" },
      a: {
        en: "Yes, on Android: your whole library is on your device to read and search, and the quotes you add, edit or delete are synced when the connection comes back. Features that need the server, such as photo to text and the AI features, need a connection.",
        ar: "نعم على أندرويد: مكتبتك كاملة على جهازك للقراءة والبحث، وما تضيفه أو تعدّله أو تحذفه من الاقتباسات يُزامَن حين يعود الاتصال. أما ما يحتاج إلى الخادم، كاستخراج النص من الصورة ومزايا الذكاء الاصطناعي، فيلزمه اتصال.",
      },
    },
    {
      q: { en: "Can I export my library?", ar: "هل أستطيع تصدير مكتبتي؟" },
      a: {
        en: "Yes, at any time: as an Excel sheet of your quotes and their reflections, a full backup in one JSON file, Markdown files, plain text or a PDF.",
        ar: "نعم، في أي وقت: جدول Excel فيه اقتباساتك وتأمّلاتها، أو نسخة احتياطية كاملة في ملف JSON واحد، أو ملفات Markdown، أو نص عادي، أو PDF.",
      },
    },
  ],
  notes: [{ en: "Made by Ahmad Nayfeh.", ar: "صنعه أحمد نايفه." }],
  build: {
    stack: [
      "FastAPI",
      "Python 3.12",
      "PostgreSQL",
      "pgvector",
      "Alembic",
      "Redis",
      "arq",
      "TypeScript",
      "React",
      "Vite",
      "Tailwind",
      "Expo",
      "React Native",
      "SQLite",
    ],
    body: {
      en: "One FastAPI backend serves both a React web app and an Expo / React Native Android app. The data is in PostgreSQL with Alembic migrations, with pgvector holding the embeddings behind search by meaning and patterns, and an arq worker on Redis runs the OCR and other background jobs. On Android the library is also kept in SQLite on the device, so it works offline and syncs later. The AI layer is one router that every AI feature calls: it walks an ordered chain of providers and falls back when one fails, enforces per-user daily caps, and records every call in a usage ledger. An admin console has feature flags, kill switches and usage dashboards.",
      ar: "خادم واحد مبني بـ FastAPI يخدم تطبيق ويب بـ React وتطبيق أندرويد بـ Expo / React Native. البيانات في PostgreSQL مع ترحيلات Alembic، وفيها pgvector لتمثيلات المعنى التي يقوم عليها البحث بالمعنى والأنساق، وعامل arq على Redis ينفّذ استخراج النص (OCR) وسائر مهام الخلفية. وعلى أندرويد تُحفظ المكتبة أيضًا في SQLite على الجهاز، فتعمل بلا اتصال ثم تُزامَن. طبقة الذكاء الاصطناعي موجِّه واحد تمرّ به كل المزايا: يجرّب سلسلة مرتّبة من المزوّدين وينتقل إلى التالي عند التعطل، ويطبّق حدًّا يوميًا لكل مستخدم، ويسجّل كل استدعاء في سجل للاستخدام. وللإدارة لوحة فيها مفاتيح لتشغيل المزايا وإيقافها فوراً ولوحات للاستخدام.",
    },
    highlights: [
      {
        en: "Live on the web (shadhra.app) and on Google Play",
        ar: "يعمل على الويب (shadhra.app) وعلى Google Play",
      },
      {
        en: "Photo-to-text capture for Arabic and English book pages",
        ar: "استخراج النص من صور صفحات الكتب العربية والإنجليزية",
      },
      {
        en: "FastAPI backend shared by a React web app and an Expo Android app",
        ar: "خادم FastAPI واحد لتطبيق ويب بـ React وتطبيق أندرويد بـ Expo",
      },
      {
        en: "CI runs linting, type checks, more than 300 backend and web test files, a web build, Docker image builds and a database migration round trip. An OCR accuracy script scores the character error rate against human transcriptions with a 5% ceiling; it runs on a private set of page images, not on every push",
        ar: "الفحص الآلي (CI) يشغّل فحص الصياغة والأنواع وأكثر من 300 ملف اختبار للخادم والويب، وبناء الويب، وبناء صور Docker، وتجربة ترحيلات قاعدة البيانات ذهابًا وإيابًا. ولدقة استخراج النص سكربت يقيس نسبة الخطأ في الأحرف مقابل نصوص منسوخة يدويًا بحدّ أقصى 5%، ويُشغَّل على مجموعة خاصة من صور الصفحات لا عند كل دفع",
      },
    ],
  },
}
