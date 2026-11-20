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
        en: "All your quotes with their books, their authors and your reflections, sorted and grouped by book, author or topic.",
        ar: "كل اقتباساتك مع كتبها ومؤلفيها وتأمّلاتك، مرتّبة ومجمّعة حسب الكتاب أو المؤلف أو الموضوع.",
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
        en: "Find a quote even if you have forgotten its wording, and ask your library a question and it answers from your own quotes.",
        ar: "اعثر على الاقتباس وإن نسيت لفظه، واسأل مكتبتك فتجيبك من اقتباساتك أنت.",
      },
    },
    {
      title: { en: "Write from them", ar: "اكتب منها" },
      body: {
        en: "Build your essay from your quotes and the links between them, then collect your essays into a book.",
        ar: "ابنِ مقالك من اقتباساتك وصلاتها، ثم اجمع مقالاتك في كتاب.",
      },
    },
    {
      title: { en: "Today's Shadhra", ar: "شذرة اليوم" },
      body: {
        en: "Every day a quote from your library comes back to you, on the home screen or in the morning notification.",
        ar: "كل يوم اقتباس من مكتبتك يعود إليك، على الشاشة الرئيسية أو في إشعار الصباح.",
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
      src: "/images/apps/shadhra/stats.webp",
      caption: { en: "Talk to your library", ar: "حاور مكتبتك" },
      shape: "phone",
    },
  ],
  faq: [
    {
      q: { en: "Is the app free?", ar: "هل التطبيق مجاني؟" },
      a: { en: "Yes.", ar: "نعم." },
    },
    {
      q: { en: "Can other people see my quotes?", ar: "هل اقتباساتي ظاهرة للناس؟" },
      a: {
        en: "Your quotes are private to you, except what you choose to publish.",
        ar: "اقتباساتك خاصة بك، إلا ما تختار أنت نشره.",
      },
    },
    {
      q: { en: "Does it work without internet?", ar: "هل يعمل بلا إنترنت؟" },
      a: {
        en: "Yes, on Android: your whole library is on your device, and what you add is uploaded when the connection comes back.",
        ar: "نعم على أندرويد: مكتبتك كاملة على جهازك، وما تضيفه يُرفع حين يعود الاتصال.",
      },
    },
    {
      q: { en: "Can I export my library?", ar: "هل أستطيع تصدير مكتبتي؟" },
      a: {
        en: "Yes, for example to an Excel sheet with your quotes and their reflections.",
        ar: "نعم، مثلًا إلى جدول Excel فيه اقتباساتك وتأمّلاتها.",
      },
    },
  ],
  notes: [{ en: "Made by Ahmad Nayfeh.", ar: "صنعه أحمد نايفه." }],
  build: {
    stack: [
      "FastAPI",
      "Python 3.12",
      "PostgreSQL",
      "Alembic",
      "Redis",
      "React",
      "Vite",
      "Tailwind",
      "Expo",
      "React Native",
    ],
    body: {
      en: "One FastAPI backend serves both a React web app and an Expo / React Native Android app. The data is in PostgreSQL with Alembic migrations, and Redis with a background worker runs the OCR and AI jobs. The AI layer is a multi-provider router with fallbacks, per-feature cost tracking and spending limits. An admin console has feature flags, kill switches and usage dashboards.",
      ar: "خادم واحد مبني بـ FastAPI يخدم تطبيق ويب بـ React وتطبيق أندرويد بـ Expo / React Native. البيانات في PostgreSQL مع ترحيلات Alembic، و Redis مع عامل في الخلفية ينفّذ مهام استخراج النص (OCR) والذكاء الاصطناعي. طبقة الذكاء الاصطناعي موجِّه بين عدة مزوّدين له بدائل عند التعطل، مع تتبّع التكلفة لكل ميزة وحدود للإنفاق. وللإدارة لوحة فيها مفاتيح لتشغيل المزايا وإيقافها فوراً ولوحات للاستخدام.",
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
        en: "CI runs linting, type checks, about 300 backend and web test files, and an OCR accuracy gate that fails the build if the character error rate on a fixed Arabic test set exceeds 5%",
        ar: "الفحص الآلي (CI) يشغّل فحص الصياغة والأنواع ونحو 300 ملف اختبار للخادم والويب، وبوابة لدقة استخراج النص تُفشل البناء إذا تجاوزت نسبة الخطأ في الأحرف 5% على مجموعة اختبار عربية ثابتة",
      },
    ],
  },
}
