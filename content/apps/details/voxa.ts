// Voxa: page data for /apps/voxa/, carried over from the app's original Arabic information page.
import type { AppDetail } from "../types"

export const detail: AppDetail = {
  slug: "voxa",
  tagline: {
    en: "Turn audio into text",
    ar: "حوّل الصوت إلى نص",
  },
  intro: {
    en: "WhatsApp voice notes, meetings, lectures and YouTube clips become organised text that shows who said what, with summaries, translation and export.",
    ar: "ملاحظات واتساب الصوتية، الاجتماعات، المحاضرات ومقاطع يوتيوب تصير نصاً منظّماً يبيّن من قال ماذا، مع تلخيص وترجمة وتصدير.",
  },
  facts: [
    { en: "Free app", ar: "تطبيق مجاني" },
    { en: "Browser and Android", ar: "للمتصفح وأندرويد" },
    { en: "Arabic and English", ar: "عربي وإنجليزي" },
    { en: "Needs a free Gemini key from Google", ar: "يحتاج مفتاح Gemini مجانياً من Google" },
  ],
  downloads: [
    {
      kind: "open",
      primary: true,
      href: "app/",
      label: { en: "Open Voxa in the browser", ar: "افتح التطبيق في المتصفح" },
    },
    {
      kind: "apk",
      href: "voxa.apk",
      release: ".",
      label: { en: "Download the Android app (APK)", ar: "حمّل تطبيق أندرويد (APK)" },
      version: "1.0.9",
      size: "14.8 MB",
      note: { en: "Android 7 or newer", ar: "أندرويد 7 فأحدث" },
    },
  ],
  video: {
    src: "/apps/voxa/media/voxa-intro.mp4",
    poster: "/apps/voxa/media/poster.jpg",
    captions: "/apps/voxa/media/voxa-intro.ar.vtt",
    captionsLang: "ar",
    title: { en: "Voxa in two minutes", ar: "Voxa في دقيقتين" },
  },
  features: [
    {
      title: { en: "Any audio or video", ar: "أي صوت أو فيديو" },
      body: {
        en: "A file in any common format, several files at once, a microphone recording, a YouTube link, or a direct share from WhatsApp on Android.",
        ar: "ملف بأي صيغة شائعة، عدة ملفات معاً، تسجيل بالميكروفون، رابط يوتيوب، أو مشاركة مباشرة من واتساب على أندرويد.",
      },
    },
    {
      title: { en: "Who said what", ar: "من قال ماذا" },
      body: {
        en: "It tells the speakers apart. Name each speaker once and the name is applied to the whole text.",
        ar: "يميّز المتحدثين، وتسمّي كل متحدث مرة واحدة فيُطبَّق الاسم على النص كله.",
      },
    },
    {
      title: { en: "Timestamps that take you to the audio", ar: "توقيت ينقلك إلى الصوت" },
      body: {
        en: "Tap the timestamp of any line to play the audio from there, edit the text with a tap, and search inside it and across your whole library.",
        ar: "اضغط على توقيت أي سطر ليبدأ الصوت منه، وعدّل النص بنقرة، وابحث داخله وفي مكتبتك كلها.",
      },
    },
    {
      title: { en: "Summary, translation and questions", ar: "تلخيص وترجمة وأسئلة" },
      body: {
        en: "A summary with the key points and tasks, line-by-line translation, and you can ask the recording any question and get an answer from its content.",
        ar: "ملخص بأهم النقاط والمهام، ترجمة سطراً بسطر، واسأل التسجيل أي سؤال فتأتيك الإجابة من محتواه.",
      },
    },
    {
      title: { en: "Export", ar: "تصدير" },
      body: {
        en: "Word, PDF and TXT, plus SRT and VTT video subtitle files, with or without timestamps and speaker names.",
        ar: "Word و PDF و TXT، وملفات ترجمة الفيديو SRT و VTT، مع التوقيت وأسماء المتحدثين أو بدونهما.",
      },
    },
    {
      title: { en: "Other tools", ar: "أدوات أخرى" },
      body: {
        en: "Extract text from images and PDF files, turn text into speech, and convert audio and video with a converter that runs on your device.",
        ar: "استخراج النص من الصور وملفات PDF، تحويل النص إلى كلام، ومحوّل للصوت والفيديو يعمل على جهازك.",
      },
    },
  ],
  screenshots: [
    {
      src: "/images/apps/voxa/transcript.webp",
      caption: { en: "The transcript, with speaker names and timestamps", ar: "النص بأسماء المتحدثين والتوقيت" },
      shape: "phone",
    },
    {
      src: "/images/apps/voxa/summary.webp",
      caption: { en: "A summary with the key points", ar: "ملخص بأهم النقاط" },
      shape: "phone",
    },
    {
      src: "/images/apps/voxa/ask.webp",
      caption: { en: "Ask the recording a question", ar: "اسأل التسجيل أي سؤال" },
      shape: "phone",
    },
    {
      src: "/images/apps/voxa/transcribe.webp",
      caption: { en: "Transcription: a file, a recording or a link", ar: "تفريغ صوتي: ملف أو تسجيل أو رابط" },
      shape: "phone",
    },
    {
      src: "/images/apps/voxa/library.webp",
      caption: { en: "Your library, with search", ar: "مكتبتك مع البحث" },
      shape: "phone",
    },
    {
      src: "/images/apps/voxa/export.webp",
      caption: { en: "Export to Word, PDF, TXT, SRT and VTT", ar: "تصدير إلى Word و PDF و TXT و SRT و VTT" },
      shape: "phone",
    },
    {
      src: "/images/apps/voxa/card.webp",
      caption: { en: "Voxa on a computer screen", ar: "Voxa على شاشة الحاسوب" },
      shape: "wide",
    },
  ],
  install: [
    {
      title: { en: "Open Voxa", ar: "افتح Voxa" },
      body: {
        en: "Straight in the browser, or download the APK file and open it on Android. If you are asked to \"allow installing from this source\", allow it.",
        ar: "في المتصفح مباشرة، أو حمّل ملف APK وافتحه على أندرويد. إن طُلب «السماح بالتثبيت من هذا المصدر» فاسمح به.",
      },
    },
    {
      title: { en: "Add the free Gemini key", ar: "أضف مفتاح Gemini المجاني" },
      body: {
        en: "Create it at aistudio.google.com/apikey with a Google account, no card needed, then paste it in \"Settings\" and press \"Save and test\".",
        ar: "أنشئه من aistudio.google.com/apikey بحساب Google، بلا بطاقة، ثم الصقه في «الإعدادات» واضغط «حفظ واختبار».",
      },
    },
    {
      title: { en: "Upload your first recording", ar: "ارفع أول تسجيل" },
      body: {
        en: "In \"Transcription\", choose a file or record, and keep the app open until it finishes. On Android: in WhatsApp, press and hold the voice note, then Share, then Voxa.",
        ar: "من «تفريغ صوتي» اختر ملفاً أو سجّل، وأبقِ التطبيق مفتوحاً حتى يكتمل. على أندرويد: من واتساب اضغط مطولاً على الملاحظة الصوتية ← مشاركة ← Voxa.",
      },
    },
  ],
  faq: [
    {
      q: { en: "Is it free?", ar: "هل هو مجاني؟" },
      a: {
        en: "Yes. The app is free and runs on your own Google key within the free daily quota. If the quota runs out, it comes back the next day.",
        ar: "نعم. التطبيق مجاني، ويعمل بمفتاحك الخاص من Google ضمن الحصة المجانية اليومية. إذا انتهت الحصة تعود في اليوم التالي.",
      },
    },
    {
      q: { en: "Where are my recordings and texts kept?", ar: "أين تُحفظ تسجيلاتي ونصوصي؟" },
      a: {
        en: "On your device. The app has no server of its own: the audio is sent straight from your device to Google's service to be transcribed.",
        ar: "على جهازك. لا يوجد خادم خاص بالتطبيق: الصوت يُرسل مباشرة من جهازك إلى خدمة Google لتفريغه.",
      },
    },
    {
      q: { en: "What about privacy?", ar: "ماذا عن الخصوصية؟" },
      a: {
        en: "On the free plan, Google may use the content you send to improve its products, so do not upload confidential recordings.",
        ar: "في الخطة المجانية قد تستخدم Google المحتوى المرسل لتحسين منتجاتها، فلا ترفع تسجيلات سرّية.",
      },
    },
    {
      q: { en: "Does it support Arabic dialects?", ar: "هل يدعم اللهجات العربية؟" },
      a: {
        en: "It accepts Arabic in its dialects and English. Accuracy varies with the dialect and how clear the recording is. You can edit any line after transcription.",
        ar: "يقبل العربية بلهجاتها والإنجليزية، وتختلف الدقة بحسب اللهجة ووضوح التسجيل. يمكنك تعديل أي سطر بعد التفريغ.",
      },
    },
    {
      q: { en: "Is there a file size limit?", ar: "هل للملف حدّ أقصى؟" },
      a: {
        en: "Long recordings are split automatically, and if the work is interrupted it resumes from where it stopped. Very large videos are faster on a computer than on a phone.",
        ar: "التسجيلات الطويلة تُقسَّم تلقائياً، وإن انقطع العمل يُستكمل من حيث توقف. مقاطع الفيديو الكبيرة جداً أسرع على الحاسوب منها على الهاتف.",
      },
    },
    {
      q: { en: "How do I update the Android app?", ar: "كيف أحدّث تطبيق أندرويد؟" },
      a: {
        en: "Download the latest APK file from this page and install it over the old one. Your data stays.",
        ar: "حمّل ملف APK الأحدث من هذه الصفحة وثبّته فوق القديم، وتبقى بياناتك.",
      },
    },
  ],
  notes: [
    {
      en: "Everything runs inside the browser or the app, and your library is kept on your device even without an account.",
      ar: "كل شيء يعمل داخل المتصفح أو التطبيق، ومكتبتك محفوظة على جهازك حتى بلا حساب.",
    },
    {
      en: "The pictures and video on this page show the real app with sample content for illustration.",
      ar: "الصور والفيديو في هذه الصفحة تعرض التطبيق الحقيقي مع محتوى تجريبي للتوضيح.",
    },
  ],
  links: [
    {
      label: { en: "Create a free Gemini key (Google AI Studio)", ar: "أنشئ مفتاح Gemini المجاني (Google AI Studio)" },
      href: "https://aistudio.google.com/apikey",
    },
  ],
}
