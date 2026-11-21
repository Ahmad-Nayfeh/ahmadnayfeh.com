// Reel: page data for /apps/reel/ (Arabic is the owner's original wording).
import type { AppDetail } from "../types"

export const detail: AppDetail = {
  slug: "reel",
  tagline: {
    en: "A video and music player with no ads. It plays everything, and remembers where you stopped.",
    ar: "مشغّل فيديو وموسيقى بلا إعلانات. يشغّل كل شيء، ويتذكّر أين توقفت.",
  },
  intro: {
    en: "A lightweight alternative to MX Player: no ads, no tracking, no accounts. It plays the movies that show up without sound in other players (AC3, E-AC3 and DTS) without any extra pack.",
    ar: "بديل خفيف لـ MX Player: لا إعلانات، لا تتبّع، لا حسابات. يشغّل الأفلام التي تظهر بلا صوت في المشغّلات الأخرى (AC3 وE-AC3 وDTS) دون أي حزمة إضافية.",
  },
  facts: [
    { en: "Completely free", ar: "مجاني تمامًا" },
    { en: "No ads", ar: "لا إعلانات" },
    { en: "No tracking", ar: "لا تتبّع" },
    { en: "No accounts", ar: "لا حسابات" },
    { en: "Android 8 or newer", ar: "أندرويد 8 فما فوق" },
  ],
  downloads: [
    {
      label: { en: "Download Reel (APK)", ar: "حمّل Reel (APK)" },
      href: "reel.apk",
      release: ".",
      kind: "apk",
      primary: true,
      version: "1.0.0",
      size: "6 MB",
      note: { en: "Android 8 or newer", ar: "أندرويد 8 فما فوق" },
    },
  ],
  features: [
    {
      title: { en: "Sound for every movie", ar: "صوت لكل الأفلام" },
      body: {
        en: "Built-in FFmpeg decoders for Dolby and DTS audio, which kick in automatically when your phone does not support them.",
        ar: "محلّلات FFmpeg مدمجة لصوت Dolby وDTS، تعمل تلقائيًا عندما لا يدعمها جوالك.",
      },
    },
    {
      title: { en: "Smooth seeking", ar: "تقديم سلس" },
      body: {
        en: "Drag the progress bar and watch the picture move with your finger, or swipe horizontally on the screen to go forward and back.",
        ar: "اسحب شريط التقدّم وترى الصورة تتحرك مع إصبعك، أو اسحب أفقيًا على الشاشة للتقديم والإرجاع.",
      },
    },
    {
      title: { en: "Turn the screen off and the sound keeps going", ar: "أطفئ الشاشة والصوت يستمر" },
      body: {
        en: "A neat lock-screen widget with a frame from the video. Choose \"play/pause only\" to prevent seeking by mistake.",
        ar: "ويدجت أنيق على شاشة القفل بلقطة من الفيديو. اختر «تشغيل/إيقاف فقط» لمنع التقديم بالخطأ.",
      },
    },
    {
      title: { en: "Organised by folders", ar: "مرتّب بالمجلدات" },
      body: {
        en: "Just two pages: video and audio, each organised by folders. Create a folder, rename it, move files into it, or delete it. Show them as a grid or a list, and pinch with two fingers to resize the tiles.",
        ar: "صفحتان فقط: الفيديو والصوتيات، وكل منهما مرتّب بالمجلدات. أنشئ مجلدًا، غيّر اسمه، انقل إليه الملفات، أو احذفه. اعرضها كشبكة أو قائمة، وكبّر العناصر أو صغّرها بإصبعين.",
      },
    },
    {
      title: { en: "Every video remembers its position", ar: "كل فيديو يتذكّر موضعه" },
      body: {
        en: "You start from where you stopped, with a \"from the beginning\" button and a small progress bar on the thumbnail.",
        ar: "تبدأ من حيث توقفت، مع زر «من البداية»، وشريط تقدّم صغير على الصورة المصغرة.",
      },
    },
    {
      title: { en: "Full gestures", ar: "إيماءات كاملة" },
      body: {
        en: "Brightness and volume up to 200%, double tap to skip, free two-finger zoom, and a screen lock.",
        ar: "سطوع وصوت حتى 200%، ونقر مزدوج للقفز، وتكبير حر بإصبعين، وقفل للشاشة.",
      },
    },
    {
      title: { en: "Subtitles and audio tracks", ar: "ترجمة وصوتيات" },
      body: {
        en: "Choose the audio and subtitle track, or load .srt, .ass and .vtt files, and control the subtitle size, colour and background.",
        ar: "اختر مسار الصوت والترجمة، أو حمّل ‎.srt و‎.ass و‎.vtt، وتحكم بحجم الترجمة ولونها وخلفيتها.",
      },
    },
    {
      title: { en: "Plenty of options", ar: "خيارات كثيرة" },
      body: {
        en: "Speed from 0.25× to 4×, a sleep timer, repeat, a playlist, picture-in-picture, and a black AMOLED theme.",
        ar: "سرعة من 0.25× إلى 4×، ومؤقت نوم، وتكرار، وقائمة تشغيل، وصورة داخل صورة، وسمة سوداء AMOLED.",
      },
    },
    {
      title: { en: "Preview and screenshot", ar: "معاينة ولقطة شاشة" },
      body: {
        en: "A thumbnail above the progress bar while you drag, and a button to save a frame at the video's full resolution.",
        ar: "صورة مصغرة فوق شريط التقدم أثناء السحب، وزر لحفظ لقطة بدقة الفيديو الكاملة.",
      },
    },
    {
      title: { en: "Subtitle delay", ar: "تأخير الترجمة" },
      body: {
        en: "Adjust the subtitle timing from −10 to +10 seconds until it matches the speech.",
        ar: "اضبط توقيت الترجمة من −10 إلى +10 ثوانٍ حتى تتطابق مع الكلام.",
      },
    },
    {
      title: { en: "Music in the background", ar: "موسيقى في الخلفية" },
      body: {
        en: "An audio page organised by folders, with controls in the notification and on the headset, plus shuffle and repeat.",
        ar: "صفحة للصوتيات مرتّبة بالمجلدات، مع أزرار في الإشعار والسماعة، وخلط وتكرار.",
      },
    },
  ],
  screenshots: [],
  sections: [
    {
      title: { en: "Why Reel?", ar: "لماذا Reel؟" },
      intro: {
        en: "We collected the most common complaints from users of popular video players, and built the answer to each one:",
        ar: "جمعنا أكثر ما يشتكي منه مستخدمو مشغّلات الفيديو الشائعة، وبنينا الحل لكل شكوى:",
      },
      items: [
        {
          title: {
            en: "Annoying ads (banners, full screen, floating icons)",
            ar: "إعلانات مزعجة (لافتات، شاشة كاملة، أيقونات عائمة)",
          },
          body: {
            en: "Where it shows up: the free MX Player, KMPlayer, XPlayer. What Reel does: zero ads and zero trackers.",
            ar: "أين تظهر: MX Player المجاني، KMPlayer، XPlayer. ماذا يفعل Reel: صفر إعلانات وصفر أدوات تتبّع.",
          },
        },
        {
          title: {
            en: "\"EAC3/DTS audio format not supported\" and the video has no sound",
            ar: "«صيغة الصوت EAC3/DTS غير مدعومة» والفيديو بلا صوت",
          },
          body: {
            en: "Where it shows up: MX Player after the Dolby/DTS decoders were removed. What Reel does: the decoders are built in, with no extra packs.",
            ar: "أين تظهر: MX Player بعد إزالة محلّلات Dolby/DTS. ماذا يفعل Reel: المحلّلات مدمجة، بلا حزم إضافية.",
          },
        },
        {
          title: { en: "A crowded or complicated interface", ar: "واجهة مزدحمة أو معقّدة" },
          body: {
            en: "Where it shows up: VLC, mpv. What Reel does: just two tabs, video and music, and a single search.",
            ar: "أين تظهر: VLC، mpv. ماذا يفعل Reel: تبويبان فقط: الفيديو والموسيقى، وبحث واحد.",
          },
        },
        {
          title: { en: "Losing your place in a video", ar: "ضياع موضع المشاهدة" },
          body: {
            en: "Where it shows up: many players. What Reel does: automatic resume for every video.",
            ar: "أين تظهر: مشغّلات كثيرة. ماذا يفعل Reel: استئناف تلقائي لكل فيديو.",
          },
        },
        {
          title: { en: "Music stops when the screen turns off", ar: "الموسيقى تتوقف عند إطفاء الشاشة" },
          body: {
            en: "Where it shows up: players made for video. What Reel does: a real background music service.",
            ar: "أين تظهر: المشغّلات المخصّصة للفيديو. ماذا يفعل Reel: خدمة موسيقى حقيقية في الخلفية.",
          },
        },
      ],
    },
  ],
  install: [
    {
      title: { en: "Download", ar: "التحميل" },
      body: {
        en: "Tap the download button above from your phone.",
        ar: "اضغط زر التحميل أعلاه من جوالك.",
      },
    },
    {
      title: { en: "Open the file", ar: "فتح الملف" },
      body: {
        en: "Open the file, and if Android asks, allow \"installing from this source\".",
        ar: "افتح الملف، وإذا طلب أندرويد ذلك فاسمح بـ«التثبيت من هذا المصدر».",
      },
    },
    {
      title: { en: "Allow access", ar: "السماح بالوصول" },
      body: {
        en: "Open Reel and allow it to access your video and music.",
        ar: "افتح Reel واسمح له بالوصول إلى الفيديو والموسيقى.",
      },
    },
  ],
  notes: [
    {
      en: "Google Play Protect may show a warning because the app is not published on the store. The app contains no ads and sends no data about you or your phone. It uses the internet for two things only: to play a link you open yourself and, from version 1.1, to check ahmadnayfeh.com for a new version of the app (at most once a day, and when you tap \"Check for updates\"). An update is downloaded and installed only after you agree.",
      ar: "قد يعرض Google Play Protect تحذيرًا لأن التطبيق غير منشور في المتجر. التطبيق لا يحتوي إعلانات ولا يرسل أي بيانات عنك أو عن هاتفك. يستخدم الإنترنت لأمرين فقط: تشغيل رابط تفتحه أنت، والبحث في ahmadnayfeh.com عن إصدار جديد من التطبيق ابتداءً من الإصدار 1.1 (مرة واحدة في اليوم على الأكثر، وعندما تضغط «البحث عن تحديث»). لا يُنزَّل التحديث ولا يُثبَّت إلا بعد موافقتك.",
    },
  ],
}
