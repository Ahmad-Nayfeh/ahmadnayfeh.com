// Khatwa: page data for /apps/khatwa/ (Arabic is the owner's original wording).
import type { AppDetail } from "../types"

export const detail: AppDetail = {
  slug: "khatwa",
  tagline: {
    en: "Walk to unlock your phone",
    ar: "امشِ لتفتح جوالك",
  },
  intro: {
    en: "Khatwa counts your steps and distance, locks your phone until you walk the number of steps you set, and turns walking into a game: a daily quest, levels, and a streak flame. Every day it also suggests a nearby place to walk at the most suitable time.",
    ar: "خطوة يعدّ خطواتك ومسافتك، ويقفل جوالك حتى تمشي العدد الذي تحدده، ويحوّل المشي إلى لعبة: مهمة يومية، ومستويات، وشعلة استمرارية. ويقترح عليك كل يوم مكاناً قريباً للمشي في أنسب وقت.",
  },
  facts: [
    { en: "Free Android app", ar: "تطبيق أندرويد مجاني" },
    { en: "Arabic and English", ar: "عربي وإنجليزي" },
    { en: "Works without internet and without an account", ar: "يعمل بلا إنترنت وبلا حساب" },
  ],
  downloads: [
    {
      label: { en: "Download the app (APK)", ar: "نزّل التطبيق (APK)" },
      href: "khatwa.apk",
      release: ".",
      kind: "apk",
      primary: true,
      version: "0.10.0",
      size: "4.4 MB",
      note: { en: "Android 8 or newer", ar: "أندرويد 8 فأحدث" },
    },
  ],
  features: [
    {
      title: { en: "Locked until you walk", ar: "قفل حتى تمشي" },
      body: {
        en: "Choose a number of steps and lock the phone; it unlocks by itself once you have walked them. Includes scheduled locks, allowed apps, and a confirmation that prevents locking by an accidental tap.",
        ar: "اختر عدد الخطوات واقفل الجوال، فيُفتح تلقائياً حين تمشيها. مع قفل مجدول وتطبيقات مسموحة، وتأكيد يمنع القفل بلمسة خاطئة.",
      },
    },
    {
      title: { en: "Streak flame", ar: "شعلة الاستمرارية" },
      body: {
        en: "It grows with every day you complete your quest, and changes through seven stages up to the Phoenix after 365 days.",
        ar: "تكبر مع كل يوم تكمل فيه مهمتك، وتتغير عبر سبع مراحل حتى العنقاء بعد 365 يوماً.",
      },
    },
    {
      title: { en: "Today's challenge", ar: "تحدي اليوم" },
      body: {
        en: "A nearby place to walk, at the distance that completes your goal, at the most suitable time based on the weather and prayer times. For cities in Saudi Arabia.",
        ar: "مكان قريب للمشي بالمسافة التي تكمل هدفك، في أنسب وقت حسب الطقس ومواقيت الصلاة. لمدن السعودية.",
      },
    },
    {
      title: { en: "My walks and my map", ar: "مشياتي وخريطتي" },
      body: {
        en: "Every walk with its route, distance and duration, plus a map of all the roads you have walked and how many kilometres of streets you have discovered.",
        ar: "كل مشية بمسارها ومسافتها ومدتها، وخريطة لكل الطرق التي مشيتها وكم كيلومتراً من الشوارع اكتشفت.",
      },
    },
    {
      title: { en: "Home workout program", ar: "برنامج رياضي منزلي" },
      body: {
        en: "Six months with no equipment: 77 exercises from easiest to hardest, progressing automatically based on how you rate each exercise.",
        ar: "ستة أشهر بلا أدوات، 77 تمريناً من الأسهل إلى الأصعب، يتقدّم تلقائياً حسب تقييمك لكل تمرين.",
      },
    },
    {
      title: { en: "Groups (optional)", ar: "مجموعات (اختياري)" },
      body: {
        en: "Compete with your friends using an invite code: a podium for the top three and a leaderboard for the day, the week and the month.",
        ar: "تنافس مع أصدقائك برمز دعوة: منصة لأول ثلاثة ولوحة صدارة لليوم والأسبوع والشهر.",
      },
    },
  ],
  screenshots: [
    {
      src: "/images/apps/khatwa/home.webp",
      caption: { en: "Home: today's steps and the System message", ar: "الرئيسية: خطوات اليوم ورسالة النظام" },
      shape: "phone",
    },
    {
      src: "/images/apps/khatwa/lock-blocked.webp",
      caption: { en: "Lock screen: walk to unlock your phone", ar: "شاشة القفل: امشِ لتفتح جوالك" },
      shape: "phone",
    },
    {
      src: "/images/apps/khatwa/lock-confirm.webp",
      caption: { en: "Lock confirmation", ar: "تأكيد القفل" },
      shape: "phone",
    },
    {
      src: "/images/apps/khatwa/system.webp",
      caption: { en: "The System: status window and daily quest", ar: "النظام: نافذة الحالة والمهمة اليومية" },
      shape: "phone",
    },
    {
      src: "/images/apps/khatwa/challenge.webp",
      caption: { en: "Today's challenge", ar: "تحدي اليوم" },
      shape: "phone",
    },
    {
      src: "/images/apps/khatwa/live-walk.webp",
      caption: { en: "The walk on the map", ar: "المشية على الخريطة" },
      shape: "phone",
    },
    {
      src: "/images/apps/khatwa/my-map.webp",
      caption: { en: "My map", ar: "خريطتي" },
      shape: "phone",
    },
    {
      src: "/images/apps/khatwa/stats.webp",
      caption: { en: "Statistics", ar: "الإحصائيات" },
      shape: "phone",
    },
    {
      src: "/images/apps/khatwa/groups.webp",
      caption: { en: "Groups", ar: "المجموعات" },
      shape: "phone",
    },
  ],
  sections: [
    {
      title: { en: "The System: walking as a game", ar: "النظام: المشي كلعبة" },
      intro: {
        en: "The \"System\" tab gives you a quest every day: a step goal, the day's exercise, and the map challenge as a reward.",
        ar: "تبويب «النظام» يعطيك مهمة كل يوم: هدف خطوات، وتمرين اليوم، وتحدي الخريطة كمكافأة.",
      },
      items: [
        {
          title: { en: "Experience and levels", ar: "خبرة ومستويات" },
          body: {
            en: "From rank E to rank S, and a status window with four values drawn from your real activity: fitness, endurance, exploration, discipline.",
            ar: "من الرتبة E إلى S، ونافذة حالة بأربع قيم من نشاطك الحقيقي: اللياقة، التحمّل، الاستكشاف، الانضباط.",
          },
        },
        {
          title: { en: "System messages", ar: "رسائل النظام" },
          body: {
            en: "They state the facts in numbers first, then what is required of you now, in a tone that changes with what you deserve.",
            ar: "تذكر الحقيقة بالأرقام أولاً، ثم المطلوب منك الآن، بنبرة تتغير حسب ما تستحق.",
          },
        },
        {
          title: { en: "A penalty that means something", ar: "عقوبة لها معنى" },
          body: {
            en: "If you miss the quest, the phone locks the next morning until you walk the missing steps. One day a week is forgiven, and the penalty can be turned off.",
            ar: "إن فاتتك المهمة يُقفل الجوال صباح اليوم التالي حتى تمشي الخطوات الناقصة. يُسامَح يوم كل أسبوع، ويمكن إيقافها.",
          },
        },
        {
          title: { en: "The seven stages of the flame", ar: "مراحل الشعلة السبع" },
          body: {
            en: "Ember, then Flame (5), Blaze (10), Blue Fire (25), Violet (50), Golden (100), and Phoenix (365 days).",
            ar: "جمرة، ثم شعلة (5)، لهيب (10)، النار الزرقاء (25)، البنفسجية (50)، الذهبية (100)، العنقاء (365 يوماً).",
          },
        },
      ],
    },
  ],
  install: [
    {
      title: { en: "Download the file and open it", ar: "نزّل الملف وافتحه" },
      body: {
        en: "If you are asked to \"allow installing from this source\", allow it. If Play Protect blocks it, choose \"Install anyway\".",
        ar: "إن طُلب «السماح بالتثبيت من هذا المصدر» فاسمح به. إن حجبه Play Protect اختر «التثبيت على أي حال».",
      },
    },
    {
      title: { en: "Follow the welcome screens", ar: "اتبع شاشات الترحيب" },
      body: {
        en: "They explain each permission before asking for it. Choose your city and enter your height so distance can be calculated.",
        ar: "تشرح كل صلاحية قبل طلبها. اختر مدينتك واكتب طولك لحساب المسافة.",
      },
    },
    {
      title: { en: "Turn on the lock", ar: "فعّل القفل" },
      body: {
        en: "The app guides you through enabling the accessibility service and display over other apps. On Android 13 or newer, first allow \"restricted settings\" from the app info page.",
        ar: "التطبيق يرشدك لتفعيل خدمة الإتاحة والعرض فوق التطبيقات. على أندرويد 13 فأحدث اسمح أولاً بـ«الإعدادات المقيّدة» من معلومات التطبيق.",
      },
    },
    {
      title: { en: "On Samsung", ar: "على سامسونج" },
      body: {
        en: "App settings → Battery → \"Unrestricted\", so step counting does not stop.",
        ar: "إعدادات التطبيق ← البطارية ← «غير مقيّد»، حتى لا يتوقف العدّ.",
      },
    },
  ],
  faq: [
    {
      q: { en: "Is the app free?", ar: "هل التطبيق مجاني؟" },
      a: { en: "Yes.", ar: "نعم." },
    },
    {
      q: { en: "The lock is not working?", ar: "القفل لا يعمل؟" },
      a: {
        en: "In the Lock tab, under the \"Lock is not working\" alert, tap \"How do I enable it?\" and follow the steps. Or check Settings → Permission status.",
        ar: "في تبويب القفل، تحت تنبيه «القفل لا يعمل»، اضغط «كيف أفعّله؟» واتبع الخطوات. أو راجع الإعدادات ← حالة الصلاحيات.",
      },
    },
    {
      q: { en: "Steps are not being counted?", ar: "الخطوات لا تُعدّ؟" },
      a: {
        en: "The phone has to be with you while you walk. Check the permission status, and the battery restrictions on Samsung.",
        ar: "الجوال يجب أن يكون معك أثناء المشي. راجع حالة الصلاحيات وقيود البطارية على سامسونج.",
      },
    },
    {
      q: { en: "What if I need my phone in an emergency?", ar: "ماذا لو احتجت جوالي في طارئ؟" },
      a: {
        en: "The lock screen has an emergency button: a wait, then typing a sentence. It is recorded as a \"surrender\" and has consequences in the game (experience is deducted, the wait gets longer, and the flame turns to ash). Half of the deduction can be recovered with an atonement quest.",
        ar: "في شاشة القفل زر للطوارئ: انتظار ثم كتابة جملة. يُسجَّل «استسلاماً» وله عواقب في اللعبة (خصم من الخبرة، وانتظار يطول، والشعلة تصير رماداً)، ويمكن استعادة نصف الخصم بمهمة تكفير.",
      },
    },
    {
      q: { en: "What about privacy?", ar: "ماذا عن الخصوصية؟" },
      a: {
        en: "Your routes stay on your phone and in your own private backup only, and are never shown to groups. Weather is requested for the centre of your city, not for your location. Groups are off until you turn them on, and then only your nickname and your step counts are sent.",
        ar: "مساراتك تبقى على جوالك وفي نسختك الخاصة فقط، ولا تظهر للمجموعات أبداً. الطقس يُطلب لمركز مدينتك لا لموقعك. المجموعات مطفأة حتى تفعّلها، وعندها تُرسل اسمك المستعار وأرقام خطواتك فقط.",
      },
    },
    {
      q: { en: "Moved to a new phone?", ar: "نقلت إلى جوال جديد؟" },
      a: {
        en: "With an account: sign in and your data and groups come back. Without an account: Settings → Backup → Export, then import on the new phone.",
        ar: "مع حساب: سجّل الدخول فتعود بياناتك ومجموعاتك. بلا حساب: الإعدادات ← النسخة الاحتياطية ← تصدير، ثم استيراد في الجوال الجديد.",
      },
    },
  ],
  notes: [
    {
      en: "Works without internet and without an account. Only the daily challenge, the maps and the update check need internet, and the account is optional. From version 0.11 the app asks ahmadnayfeh.com at most once a day whether a newer version exists; it sends nothing about you, and an update installs only after you agree.",
      ar: "يعمل بلا إنترنت وبلا حساب. التحدي اليومي والخرائط والتحقق من التحديثات فقط تحتاج إنترنت، والحساب اختياري. ابتداءً من الإصدار 0.11 يسأل التطبيق موقع ahmadnayfeh.com مرة في اليوم على الأكثر: هل يوجد إصدار أحدث؟ لا يرسل شيئاً عنك، ولا يُثبَّت التحديث إلا بعد موافقتك.",
    },
    {
      en: "Consult a doctor before starting the workout program, especially if you have high body weight, joint pain, or a heart or blood pressure problem.",
      ar: "استشر طبيباً قبل البدء بالبرنامج الرياضي، خاصة مع وزن مرتفع أو ألم في المفاصل أو مشكلة في القلب أو الضغط.",
    },
    {
      en: "Maps and places © OpenStreetMap contributors. Weather by Open-Meteo.com.",
      ar: "الخرائط والأماكن © OpenStreetMap contributors · الطقس Open-Meteo.com",
    },
  ],
  build: {
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "WorkManager",
      "Firebase (Auth, Firestore, App Check)",
      "GitHub Actions",
    ],
    body: {
      en: "A native Android app that I designed, built and released on my own. It is written in Kotlin with Jetpack Compose, Room and WorkManager, with the core logic in a pure-Kotlin module that is tested without the Android SDK. Steps come from the phone's hardware step sensor. Firebase (Auth, Firestore with tested security rules, App Check) backs the optional account and groups, and GitHub Actions runs the unit and emulator tests and publishes signed releases.",
      ar: "تطبيق أندرويد أصلي صمّمته وبنيته وأصدرته بمفردي. مكتوب بلغة Kotlin مع Jetpack Compose و Room و WorkManager، والمنطق الأساسي في وحدة Kotlin خالصة تُختبر بلا حاجة إلى Android SDK. الخطوات تُقرأ من حسّاس الخطوات في الجوال. Firebase (Auth و Firestore بقواعد أمان مختبرة و App Check) للحساب الاختياري والمجموعات، و GitHub Actions يشغّل اختبارات الوحدات واختبارات المحاكي وينشر إصدارات موقّعة.",
    },
    highlights: [
      {
        en: "Native Kotlin and Jetpack Compose, bilingual and right-to-left first",
        ar: "Kotlin و Jetpack Compose أصليان، بلغتين ومن اليمين إلى اليسار أولاً",
      },
      {
        en: "Optional phone lock until the daily step goal is met",
        ar: "قفل اختياري للجوال حتى يتحقق هدف الخطوات اليومي",
      },
      {
        en: "Daily walk challenge using OpenStreetMap, weather, and prayer times",
        ar: "تحدي مشي يومي يعتمد على OpenStreetMap والطقس ومواقيت الصلاة",
      },
      {
        en: "Signed releases from CI with unit and emulator tests",
        ar: "إصدارات موقّعة من CI مع اختبارات وحدات واختبارات محاكي",
      },
    ],
  },
}
