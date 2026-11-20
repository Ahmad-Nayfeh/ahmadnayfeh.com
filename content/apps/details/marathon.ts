// Page data for Reading Marathon (/apps/marathon/).
import type { AppDetail } from "../types"

export const detail: AppDetail = {
  slug: "marathon",
  tagline: {
    en: "Your own books, and groups that celebrate them",
    ar: "كتبك أنت، ومجموعاتك تحتفل بها",
  },
  intro: {
    en: "Pick the book you are reading and log your time in it with one tap. On your own shelf, or with your friends and family on one book. Every minute is logged against a book. You log once, and it is saved on your shelf and counted in every group you are in.",
    ar: "اختر الكتاب الذي تقرؤه، وسجّل وقتك فيه بلمسة واحدة. وحدك على رفّك، أو مع أصدقائك وعائلتك على كتاب واحد. كل دقيقة تُسجَّل في كتاب. تسجّل مرة واحدة، فتُحفظ على رفّك وتُحسب في كل مجموعة أنت فيها.",
  },
  facts: [
    { en: "Free", ar: "مجاني" },
    { en: "No ads, no subscriptions", ar: "بلا إعلانات وبلا اشتراكات" },
    { en: "Android app", ar: "تطبيق أندرويد" },
    { en: "In Arabic", ar: "بالعربية" },
  ],
  downloads: [
    {
      label: { en: "Download the app (APK)", ar: "حمّل التطبيق (APK)" },
      href: "reading-marathon.apk",
      release: ".",
      kind: "apk",
      primary: true,
      version: "0.1.0",
      size: "4.3 MB",
      note: { en: "Android 8 or newer", ar: "أندرويد 8 فأحدث" },
    },
  ],
  features: [
    {
      title: { en: "One-tap logging", ar: "تسجيل بلمسة" },
      body: {
        en: "Each book you are reading has a card with 15, 30, 45 and 60 minutes, and an \"Undo\". You can also edit any day in the last two weeks.",
        ar: "لكل كتاب تقرؤه بطاقة فيها 15 و30 و45 و60 دقيقة، مع «تراجع». وتعديل أي يوم من آخر أسبوعين.",
      },
    },
    {
      title: { en: "Your shelf and your timer", ar: "رفّك ومؤقتك" },
      body: {
        en: "Your books: reading now, finished, want to read. A timer for each book that you stop from the notification, and an evening reminder you can log from without opening the app.",
        ar: "كتبك: أقرؤها الآن، أتممتها، أريد قراءتها. ومؤقت لكل كتاب توقفه من الإشعار، وتذكير مساء تسجّل منه دون فتح التطبيق.",
      },
    },
    {
      title: { en: "Groups", ar: "مجموعات" },
      body: {
        en: "For friends, family and book clubs. Private with an invite code, or public so any reader can find them.",
        ar: "للأصدقاء والعائلة ونوادي القراءة. خاصة برمز دعوة، أو عامة يجدها أي قارئ.",
      },
    },
    {
      title: { en: "A shared book", ar: "كتاب مشترك" },
      body: {
        en: "You pick it from one unified book catalog and its author comes with it. Then you get the group ranking, who read today, and who finished the book.",
        ar: "تختاره من فهرس كتب موحّد فيأتي مؤلفه معه، ثم ترتيب المجموعة، ومن قرأ اليوم، ومن أتمّ الكتاب.",
      },
    },
    {
      title: { en: "Points and ranking", ar: "نقاط وترتيب" },
      body: {
        en: "One point for every 10 minutes and 50 for finishing the book, unless the group sets other numbers. The group also chooses what counts: all of its members' reading, or the shared book only. Share the ranking as text, on WhatsApp for example, with one tap.",
        ar: "نقطة لكل 10 دقائق و50 لإتمام الكتاب، ما لم تختر المجموعة أرقاماً أخرى. والمجموعة تختار أيضاً ما يُحسب: كل قراءة الأعضاء أو الكتاب المشترك وحده. شارك الترتيب نصاً، في واتساب مثلاً، بلمسة.",
      },
    },
    {
      title: { en: "Your goal and your numbers", ar: "هدفك وأرقامك" },
      body: {
        en: "A personal daily goal, days in a row, hours this month and this year, and your reading map.",
        ar: "هدف يومي شخصي، أيام متتالية، ساعات الشهر والعام، وخريطة قراءتك.",
      },
    },
  ],
  screenshots: [
    {
      src: "/images/apps/marathon/home.webp",
      caption: {
        en: "Home: today's reading and a card for each book you are reading",
        ar: "الرئيسية: قراءة اليوم وبطاقة لكل كتاب تقرؤه",
      },
      shape: "phone",
    },
    {
      src: "/images/apps/marathon/log.webp",
      caption: {
        en: "Log a reading: the day, the book and the minutes",
        ar: "تسجيل قراءة: اليوم والكتاب والدقائق",
      },
      shape: "phone",
    },
    {
      src: "/images/apps/marathon/group.webp",
      caption: {
        en: "The group: the shared book and the ranking",
        ar: "المجموعة: الكتاب المشترك والترتيب",
      },
      shape: "phone",
    },
    {
      src: "/images/apps/marathon/activity.webp",
      caption: {
        en: "Group activity: who read today and who finished the book",
        ar: "نشاط المجموعة: من قرأ اليوم ومن أتمّ الكتاب",
      },
      shape: "phone",
    },
    {
      src: "/images/apps/marathon/shelf.webp",
      caption: {
        en: "My shelf: the books I am reading and the ones I finished",
        ar: "رفّي: الكتب التي أقرؤها والتي أتممتها",
      },
      shape: "phone",
    },
    {
      src: "/images/apps/marathon/groups.webp",
      caption: {
        en: "Groups: my groups and the public groups",
        ar: "المجموعات: مجموعاتي والمجموعات العامة",
      },
      shape: "phone",
    },
    {
      src: "/images/apps/marathon/me.webp",
      caption: {
        en: "Me: the numbers, the reading map and the goal",
        ar: "أنا: الأرقام وخريطة القراءة والهدف",
      },
      shape: "phone",
    },
    {
      src: "/images/apps/marathon/sign-in.webp",
      caption: {
        en: "Sign in with a Google account",
        ar: "الدخول بحساب Google",
      },
      shape: "phone",
    },
  ],
  sections: [
    {
      title: { en: "How it works", ar: "كيف يعمل" },
      intro: {
        en: "Half an hour every day with friends who are reading the same book is easier than a whole book on your own. And the easier logging is, the longer people keep going. That is why one tap is enough.",
        ar: "نصف ساعة كل يوم مع أصدقاء يقرؤون الكتاب نفسه أسهل من كتاب كامل وحدك. وكلما سهُل التسجيل، استمرّ الناس. لذلك يكفيه لمسة واحدة.",
      },
      items: [
        {
          title: { en: "Sign in and choose your name", ar: "ادخل واختر اسمك" },
          body: {
            en: "With a Google account, then set your daily goal.",
            ar: "بحساب Google، ثم هدفك اليومي.",
          },
        },
        {
          title: { en: "Create a group or join one", ar: "أنشئ مجموعة أو انضم إليها" },
          body: {
            en: "Share the invite code or its link, and choose the shared book and how long it runs.",
            ar: "شارك رمز الدعوة أو رابطها، واختر الكتاب المشترك ومدته.",
          },
        },
        {
          title: { en: "Pick your book and log every day", ar: "اختر كتابك وسجّل كل يوم" },
          body: {
            en: "From the catalog or by searching, then with one tap, with the timer, or from the notification. The ranking and the activity update for everyone right away.",
            ar: "من الفهرس أو بالبحث، ثم بلمسة أو بالمؤقت أو من الإشعار. الترتيب والنشاط يتحدّثان للجميع فوراً.",
          },
        },
      ],
    },
    {
      title: { en: "Who does what", ar: "من يفعل ماذا" },
      items: [
        {
          title: { en: "Member", ar: "العضو" },
          body: {
            en: "Logs their own reading, announces finishing the book, and sees the ranking and the activity.",
            ar: "يسجّل قراءته، ويعلن إتمام الكتاب، ويرى الترتيب والنشاط.",
          },
        },
        {
          title: { en: "Moderator", ar: "المشرف" },
          body: {
            en: "Adds books, and manages the members and the invite code.",
            ar: "يضيف الكتب، ويدير الأعضاء ورمز الدعوة.",
          },
        },
        {
          title: { en: "Owner", ar: "المالك" },
          body: {
            en: "Everything above, and also appoints moderators, transfers ownership, and deletes the group.",
            ar: "كل ما سبق، ويعيّن المشرفين، وينقل الملكية، ويحذف المجموعة.",
          },
        },
      ],
    },
  ],
  install: [
    {
      title: { en: "Download the file", ar: "حمّل الملف" },
      body: {
        en: "Tap \"Download the app\" on an Android phone.",
        ar: "اضغط «حمّل التطبيق» من هاتف أندرويد.",
      },
    },
    {
      title: { en: "Open it", ar: "افتحه" },
      body: {
        en: "From the notifications or the Downloads folder. If you are asked to \"allow installing from this source\", allow it for the browser.",
        ar: "من الإشعارات أو مجلد التنزيلات. إن طُلب «السماح بالتثبيت من هذا المصدر» فاسمح به للمتصفح.",
      },
    },
    {
      title: { en: "If Play Protect appears", ar: "إن ظهر Play Protect" },
      body: {
        en: "Choose \"More details\", then \"Install anyway\". The app is not on the Play Store yet, which is why this warning appears.",
        ar: "اختر «تفاصيل إضافية» ثم «التثبيت على أي حال». التطبيق ليس على متجر Play بعد، لذلك يظهر هذا التنبيه.",
      },
    },
  ],
  faq: [
    {
      q: { en: "Is the app free?", ar: "هل التطبيق مجاني؟" },
      a: { en: "Yes, with no ads and no subscriptions.", ar: "نعم، بلا إعلانات وبلا اشتراكات." },
    },
    {
      q: { en: "Does it work on iPhone?", ar: "هل يعمل على الآيفون؟" },
      a: {
        en: "For now it is Android only (version 8 or newer).",
        ar: "حالياً أندرويد فقط (الإصدار 8 فأحدث).",
      },
    },
    {
      q: {
        en: "I am in more than one group. Do I log for each one?",
        ar: "أنا في أكثر من مجموعة. هل أسجّل لكل واحدة؟",
      },
      a: {
        en: "No. You log once, and your minutes count in all of your groups.",
        ar: "لا. تسجّل مرة واحدة، وتُحسب دقائقك في كل مجموعاتك.",
      },
    },
    {
      q: {
        en: "I could not find our book in the catalog, or its author is wrong",
        ar: "لم أجد كتابنا في الفهرس، أو مؤلفه خطأ",
      },
      a: {
        en: "Add it from the book selection screen and you can use it right away, or tap \"Wrong title or author?\" under the book. We review every suggestion so the catalog stays consistent.",
        ar: "أضفه من شاشة اختيار الكتاب ويمكنكم استخدامه فوراً، أو اضغط «خطأ في العنوان أو المؤلف؟» تحت الكتاب. نراجع كل اقتراح ليبقى الفهرس موحّداً.",
      },
    },
    {
      q: { en: "How do I update the app?", ar: "كيف أحدّث التطبيق؟" },
      a: {
        en: "Download the new version from this page and install it over the old one.",
        ar: "حمّل الإصدار الجديد من هذه الصفحة وثبّته فوق القديم.",
      },
    },
  ],
  notes: [{ en: "Made by Ahmad Nayfeh.", ar: "صنعه أحمد نايفه." }],
  links: [{ label: { en: "Privacy policy", ar: "سياسة الخصوصية" }, href: "privacy/" }],
  build: {
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "DataStore",
      "WorkManager",
      "Firebase Authentication",
      "Cloud Firestore",
      "Robolectric",
    ],
    body: {
      en: "An Android app written in Kotlin and Jetpack Compose with Material 3. The interface is Arabic and always right-to-left, in light and dark. A pure-Kotlin core module holds every rule (points, rankings, streaks, validation and catalog search) and has unit tests. Sign-in is with Google only, and the data lives in Firestore with an offline cache: a reading is written to the reader's private log and shelf, and to each of their groups. The app replaced an earlier version from 2025, a Streamlit dashboard that readers fed by filling in a Google Form every day.",
      ar: "تطبيق أندرويد مكتوب بلغة Kotlin و Jetpack Compose مع Material 3. الواجهة عربية ومن اليمين إلى اليسار دائماً، بمظهرين فاتح وداكن. كل القواعد (النقاط والترتيب والأيام المتتالية والتحقق والبحث في الفهرس) في وحدة core مكتوبة بـ Kotlin وحدها ولها اختبارات. الدخول بحساب Google فقط، والبيانات في Firestore مع نسخة تعمل دون اتصال: القراءة تُكتب في سجل القارئ الخاص ورفّه، وفي كل مجموعة هو فيها. وقد حلّ التطبيق محل نسخة سابقة من عام 2025: لوحة Streamlit يغذّيها القرّاء بتعبئة نموذج Google كل يوم.",
    },
    highlights: [
      {
        en: "A catalog of about 4,900 books from Wikidata, searched on the phone so it works offline",
        ar: "فهرس فيه نحو 4,900 كتاب من Wikidata، يُبحث فيه على الهاتف فيعمل دون اتصال",
      },
      {
        en: "Security rules enforce roles, invite codes, and that each reader writes only their own reading; 127 tests run them against the Firestore emulator",
        ar: "قواعد الحماية تفرض الأدوار ورموز الدعوة وألا يكتب القارئ إلا قراءته هو، ويتحقق منها 127 اختباراً على محاكي Firestore",
      },
      {
        en: "An admin panel in the app and on the web: catalog review, groups, users, announcements, and an audit log of every action",
        ar: "لوحة إدارة في التطبيق وعلى الويب: مراجعة الفهرس، والمجموعات، والمستخدمون، والإعلانات، وسجل لكل إجراء",
      },
      {
        en: "A screenshot tour of the main screens, rendered with Robolectric on an in-memory backend, runs without an emulator",
        ar: "جولة لقطات للشاشات الرئيسية تُرسم بـ Robolectric على خادم في الذاكرة، وتعمل دون محاكي",
      },
      {
        en: "Export your reading log and shelf as CSV, or delete your account and everything in it, from inside the app",
        ar: "تصدير سجل قراءتك ورفّك بصيغة CSV، أو حذف حسابك بكل ما فيه، من داخل التطبيق",
      },
    ],
  },
}
