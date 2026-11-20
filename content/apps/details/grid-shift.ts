// Grid Shift: page data for /apps/grid-shift/, carried over from the game's original Arabic information page.
import type { AppDetail } from "../types"

export const detail: AppDetail = {
  slug: "grid-shift",
  tagline: {
    en: "Be the control engineer on shift",
    ar: "كن مهندس التحكم المناوب",
  },
  intro: {
    en: "A fault in a cable under the street has cut the power to a whole neighbourhood. Find the faulted cable, isolate it at both ends, and bring power back to the homes as quickly and safely as you can, the way control rooms on distribution networks do.",
    ar: "عطل في كابل تحت الشارع قطع الكهرباء عن حيّ كامل. حدّد الكابل المعطوب، واعزله من طرفيه، وأعِد الكهرباء إلى المنازل بأسرع وقت وبأمان، كما تفعل غرف التحكم في شبكات التوزيع.",
  },
  facts: [
    { en: "Free browser game", ar: "لعبة متصفح مجانية" },
    { en: "Arabic and English", ar: "عربي وإنجليزي" },
    { en: "Phone and computer", ar: "جوال وكمبيوتر" },
    { en: "No download, no sign-up, no ads", ar: "بلا تحميل، بلا تسجيل، بلا إعلانات" },
  ],
  downloads: [
    {
      kind: "open",
      primary: true,
      href: "app/",
      label: { en: "Play now", ar: "العب الآن" },
      note: { en: "The first lesson takes 3 minutes.", ar: "الدرس الأول يأخذ 3 دقائق." },
    },
  ],
  video: {
    src: "/apps/grid-shift/media/grid-shift-explainer-ar.mp4",
    poster: "/apps/grid-shift/media/poster.jpg",
    captions: "/apps/grid-shift/media/grid-shift-explainer-ar.vtt",
    captionsLang: "ar",
    title: {
      en: "What the game is, why it is useful, and how to play it",
      ar: "ما هي اللعبة، ولماذا هي مفيدة، وكيف تلعبها",
    },
  },
  features: [
    {
      title: { en: "Ring networks", ar: "الشبكات الحلقية" },
      body: {
        en: "A ring between two grid stations, split by a normally open point (NOP), so each half is fed from one station.",
        ar: "حلقة بين محطتي تحويل، مقسومة بنقطة فتح طبيعية (NOP)، فكل نصف يتغذّى من محطة.",
      },
    },
    {
      title: { en: "Fault passage indicators", ar: "مؤشرات مرور العطل" },
      body: {
        en: "They raise a flag if the fault current passed through them; the fault lies between the last raised flag and the first lowered one.",
        ar: "ترفع علمًا إذا مرّ بها تيار العطل؛ العطل بين آخر علم مرفوع وأول علم منخفض.",
      },
    },
    {
      title: { en: "Isolation and restoring supply", ar: "العزل وإعادة التغذية" },
      body: {
        en: "Open both ends of the faulted cable, then reclose the breaker, and feed the rest from the other station. Never tie the two stations together.",
        ar: "افتح طرفي الكابل المعطوب، ثم أعِد إغلاق القاطع، وغذِّ الباقي من المحطة الأخرى، ولا تربط المحطتين أبدًا.",
      },
    },
    {
      title: { en: "Safety before repair", ar: "السلامة قبل الإصلاح" },
      body: {
        en: "Lock and tag, test that there is no voltage, earth both ends, then the permit to work. The game teaches safe practice only.",
        ar: "قفل وبطاقة، اختبار انعدام الجهد، تأريض الطرفين، ثم تصريح العمل. اللعبة تعلّم الممارسة الآمنة فقط.",
      },
    },
    {
      title: { en: "Protection coordination", ar: "تنسيق الحماية" },
      body: {
        en: "Set the overcurrent relays so that the one nearest the fault trips first, using real curves.",
        ar: "اضبط مرحّلات التيار الزائد حتى يفصل الأقرب إلى العطل أولًا، مع منحنيات حقيقية.",
      },
    },
    {
      title: { en: "Who is it for?", ar: "لمن هي؟" },
      body: {
        en: "Engineering students, new engineers, and anyone who asks: how does the power come back after an outage?",
        ar: "طلاب الهندسة، والمهندسون الجدد، وكل من يسأل: كيف تعود الكهرباء بعد انقطاعها؟",
      },
    },
  ],
  screenshots: [
    {
      src: "/images/apps/grid-shift/lesson.webp",
      caption: {
        en: "Lesson one: one step at a time, and what you need lights up",
        ar: "الدرس الأول: خطوة واحدة في كل مرة، والمطلوب يضيء",
      },
      shape: "wide",
    },
    {
      src: "/images/apps/grid-shift/hints.webp",
      caption: {
        en: "The hint: where to look, then why, then the exact step",
        ar: "التلميح: أين تنظر، ثم لماذا، ثم الخطوة بالضبط",
      },
      shape: "wide",
    },
    {
      src: "/images/apps/grid-shift/solution.webp",
      caption: {
        en: "Watch the solution like a video, and take over from any step",
        ar: "شاهد الحل كفيديو، وأكمل أنت من أي خطوة",
      },
      shape: "wide",
    },
  ],
  install: [
    {
      title: { en: "Start lesson one", ar: "ابدأ الدرس الأول" },
      body: {
        en: "Press \"Play now\", then \"Start: Lesson 1\". In three minutes you bring power back to 265 homes.",
        ar: "اضغط «العب الآن» ثم «ابدأ: الدرس 1». ثلاث دقائق تعيد فيها الكهرباء إلى 265 منزلًا.",
      },
    },
    {
      title: { en: "Continue with lessons 2 to 4", ar: "تابع الدروس 2 إلى 4" },
      body: {
        en: "You learn dispatching crews, earthing, permits to work, and returning to the normal arrangement.",
        ar: "تتعلّم إرسال الفرق، والتأريض، وتصاريح العمل، والعودة إلى الوضع الطبيعي.",
      },
    },
    {
      title: { en: "Play the daily challenge", ar: "العب تحدّي اليوم" },
      body: {
        en: "A new fault every day with a different condition, and the stars compare your result with a reference plan.",
        ar: "عطل جديد كل يوم بشرط مختلف، والنجوم تقارن نتيجتك بخطة مرجعية.",
      },
    },
  ],
  faq: [
    {
      q: { en: "Do I need experience with electricity?", ar: "هل أحتاج خبرة في الكهرباء؟" },
      a: {
        en: "No. Lesson one explains each step when you reach it, and hints are available in every shift.",
        ar: "لا. الدرس الأول يشرح كل خطوة في وقتها، والتلميحات متاحة في كل مناوبة.",
      },
    },
    {
      q: { en: "Is it free?", ar: "هل هي مجانية؟" },
      a: {
        en: "Yes, completely: no sign-up and no ads, and it runs in the browser on phones and computers.",
        ar: "نعم، بالكامل: بلا تسجيل وبلا إعلانات، وتعمل في المتصفح على الجوال والكمبيوتر.",
      },
    },
    {
      q: { en: "Are these the electricity company's operating rules?", ar: "هل هي قواعد تشغيل شركة الكهرباء؟" },
      a: {
        en: "No. The switching logic in the game is a general safe sequence built on published references. It is not any company's operating rules, not an authorisation, and not a substitute for training.",
        ar: "لا. منطق التحويل في اللعبة تسلسل آمن عام مبني على مراجع منشورة، وليس قواعد تشغيل أي شركة، ولا تفويضًا، ولا بديلًا عن التدريب.",
      },
    },
    {
      q: { en: "What does \"customer-minutes\" mean?", ar: "ماذا تعني «دقائق انقطاع المشتركين»؟" },
      a: {
        en: "The number of homes without power multiplied by how long the outage lasts. It is your score: the lower it is, the better you did.",
        ar: "عدد المنازل المنقطعة مضروبًا في مدة الانقطاع. هي نتيجتك: كلما قلّت كان أداؤك أفضل.",
      },
    },
    {
      q: { en: "Does using a hint affect my rating?", ar: "هل يؤثر التلميح على تقييمي؟" },
      a: {
        en: "\"Where to look\" and \"Why\" are free. \"The exact step\" caps the rating at two stars, and watching the solution caps it at one star.",
        ar: "«أين تنظر» و«لماذا» مجانيان. «الخطوة بالضبط» تجعل أعلى تقييم نجمتين، ومشاهدة الحل نجمة واحدة.",
      },
    },
  ],
  notes: [
    {
      en: "The game is built on published standards and references (short-circuit calculations to IEC 60909, protection curves to IEC 60255 and IEEE), and every simplification is written down inside the game under \"Model notes\".",
      ar: "اللعبة مبنية على مواصفات ومراجع منشورة (حسابات قصر الدائرة IEC 60909، ومنحنيات الحماية IEC 60255 وIEEE)، وكل تبسيط مكتوب داخل اللعبة في «ملاحظات النموذج».",
    },
    {
      en: "The voice-over in the video is machine-generated with a synthetic Arabic voice. The video shows the real game.",
      ar: "التعليق الصوتي في الفيديو مولّد آليًا بصوت عربي اصطناعي. الفيديو يعرض اللعبة الحقيقية.",
    },
  ],
}
