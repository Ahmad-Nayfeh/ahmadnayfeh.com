// Voxa: page data for /apps/voxa/. First carried over from the app's original Arabic information
// page; revised on 2026-11-20 against the app's source (sign-in, sync, cloud allowances, in-app updates).
import type { AppDetail } from "../types"

export const detail: AppDetail = {
  slug: "voxa",
  tagline: {
    en: "Turn audio into text",
    ar: "حوّل الصوت إلى نص",
  },
  intro: {
    en: "WhatsApp voice notes, meetings, lectures and YouTube clips become organised text that shows who said what, with summaries, translation and export. It works without an account; signing in syncs your library between the browser and the Android app.",
    ar: "ملاحظات واتساب الصوتية، الاجتماعات، المحاضرات ومقاطع يوتيوب تصير نصاً منظّماً يبيّن من قال ماذا، مع تلخيص وترجمة وتصدير. يعمل بلا حساب، وتسجيل الدخول يزامن مكتبتك بين المتصفح وتطبيق أندرويد.",
  },
  facts: [
    { en: "Free app", ar: "تطبيق مجاني" },
    { en: "Browser and Android", ar: "للمتصفح وأندرويد" },
    { en: "Arabic and English", ar: "عربي وإنجليزي" },
    { en: "Works without an account", ar: "يعمل بلا حساب" },
    { en: "Optional sign-in and sync", ar: "تسجيل دخول ومزامنة اختياريان" },
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
      version: "1.0.17",
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
        en: "A summary with the key points and tasks, line-by-line translation, and you can ask the recording any question and get an answer from its content, with the times it refers to as links that jump to the audio.",
        ar: "ملخص بأهم النقاط والمهام، ترجمة سطراً بسطر، واسأل التسجيل أي سؤال فتأتيك الإجابة من محتواه، مع الأوقات التي تستند إليها كروابط تنقلك إلى الصوت.",
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
    {
      title: { en: "One library on the browser and the phone", ar: "مكتبة واحدة على المتصفح والهاتف" },
      body: {
        en: "Sign in with Google or with an e-mail and password, and your library, its audio and your keys follow you between the website and the Android app. Signing in is optional.",
        ar: "سجّل الدخول بحساب Google أو ببريد وكلمة مرور، فتنتقل معك مكتبتك وصوتها ومفاتيحك بين الموقع وتطبيق أندرويد. تسجيل الدخول اختياري.",
      },
    },
  ],
  screenshots: [
    {
      src: "/images/apps/voxa/transcript.webp",
      caption: { en: "The transcript: each line with its speaker and its time, and the line being played highlighted", ar: "النص: كل سطر باسم متحدثه وتوقيته، والسطر الجاري تشغيله مظلَّل" },
      shape: "phone",
    },
    {
      src: "/images/apps/voxa/summary.webp",
      caption: { en: "The summary tab: a short summary, then the key points", ar: "تبويب الملخص: خلاصة قصيرة ثم أهم النقاط" },
      shape: "phone",
    },
    {
      src: "/images/apps/voxa/ask.webp",
      caption: { en: "The Ask tab: a question about the recording, answered with the times it refers to", ar: "تبويب «اسأل»: سؤال عن التسجيل وإجابة تذكر الأوقات التي تستند إليها" },
      shape: "phone",
    },
    {
      src: "/images/apps/voxa/transcribe.webp",
      caption: { en: "Transcription: choose files, record with the microphone, or paste a YouTube link", ar: "تفريغ صوتي: اختر ملفات، أو سجّل بالميكروفون، أو الصق رابط يوتيوب" },
      shape: "phone",
    },
    {
      src: "/images/apps/voxa/library.webp",
      caption: { en: "The library: search in titles and texts, and filter by tool", ar: "المكتبة: بحث في العناوين والنصوص، وتصفية بحسب الأداة" },
      shape: "phone",
    },
    {
      src: "/images/apps/voxa/export.webp",
      caption: { en: "Export: Word, PDF, TXT, SRT or VTT, with or without timestamps and speaker names", ar: "التصدير: Word أو PDF أو TXT أو SRT أو VTT، مع التوقيت وأسماء المتحدثين أو بدونهما" },
      shape: "phone",
    },
    {
      src: "/images/apps/voxa/card.webp",
      caption: { en: "The same transcript on a computer screen, with the tools in the side menu", ar: "النص نفسه على شاشة الحاسوب، والأدوات في القائمة الجانبية" },
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
    {
      title: { en: "Sign in if you want sync (optional)", ar: "سجّل الدخول إن أردت المزامنة (اختياري)" },
      body: {
        en: "In \"Settings\", continue with Google or use an e-mail and password, then sign in with the same account on your other device. In the Android app, Google sign-in opens your phone's browser and one tap brings you back to the app.",
        ar: "من «الإعدادات» تابع بحساب Google أو استخدم بريداً وكلمة مرور، ثم سجّل الدخول بالحساب نفسه على جهازك الآخر. في تطبيق أندرويد يفتح تسجيل الدخول بحساب Google متصفح هاتفك، ثم تعود إلى التطبيق بضغطة.",
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
        en: "On your device. The audio is sent straight from your device to the speech service (Google's, with your own key) to be transcribed. If you sign in, a copy of your library and your keys is also stored in the app's cloud database so your account can reach them from your other devices.",
        ar: "على جهازك. الصوت يُرسل مباشرة من جهازك إلى خدمة التفريغ (خدمة Google بمفتاحك الخاص). وإذا سجّلت الدخول تُحفظ أيضاً نسخة من مكتبتك ومفاتيحك في قاعدة بيانات التطبيق السحابية ليصل إليها حسابك من أجهزتك الأخرى.",
      },
    },
    {
      q: { en: "What about privacy?", ar: "ماذا عن الخصوصية؟" },
      a: {
        en: "On the free plan, Google may use the content you send to improve its products, so do not upload confidential recordings. If you sign in, your synced library is stored in a cloud database run by the app's developer, who can access it as its administrator; your keys there can be read by your account only.",
        ar: "في الخطة المجانية قد تستخدم Google المحتوى المرسل لتحسين منتجاتها، فلا ترفع تسجيلات سرّية. وإذا سجّلت الدخول تُحفظ مكتبتك المتزامنة في قاعدة بيانات سحابية يديرها مطوّر التطبيق ويستطيع الوصول إليها بصفته مشرفاً عليها؛ أما مفاتيحك فيها فلا يقرؤها إلا حسابك.",
      },
    },
    {
      q: { en: "Do I need an account?", ar: "هل أحتاج إلى حساب؟" },
      a: {
        en: "No. Without an account everything stays on the device you use, and each device has its own library. Signing in, with Google or an e-mail and password, adds sync between the website and the Android app.",
        ar: "لا. بلا حساب يبقى كل شيء على الجهاز الذي تستخدمه، ولكل جهاز مكتبته. تسجيل الدخول، بحساب Google أو ببريد وكلمة مرور، يضيف المزامنة بين الموقع وتطبيق أندرويد.",
      },
    },
    {
      q: { en: "Is there a limit on cloud storage?", ar: "هل للتخزين السحابي حدّ؟" },
      a: {
        en: "Yes. Each account has an allowance for synced audio and for synced text, set by the app's administrator. Audio is uploaded as a small compressed copy. When the audio allowance is full, the oldest cloud copies of audio are removed first, and the administrator may also set an age after which cloud audio is removed. Your texts are not removed automatically, and the device that made a recording keeps its audio.",
        ar: "نعم. لكل حساب حدّ للصوت المتزامن وحدّ للنصوص المتزامنة يحدّدهما مشرف التطبيق. يُرفع الصوت نسخةً مضغوطة صغيرة. إذا امتلأ حدّ الصوت تُحذف أقدم النسخ السحابية من الصوت أولاً، وقد يحدّد المشرف عمراً يُحذف بعده الصوت السحابي. نصوصك لا تُحذف تلقائياً، والجهاز الذي سجّل المقطع يحتفظ بصوته.",
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
        en: "The app checks for a newer version when it opens and offers to download and install it; Android asks you to confirm. You can also check from \"Settings\". If that does not work, download the latest APK file from this page and install it over the old one. Your data stays.",
        ar: "يتحقق التطبيق من وجود نسخة أحدث عند فتحه ويعرض تنزيلها وتثبيتها، ويطلب أندرويد موافقتك. ويمكنك التحقق أيضاً من «الإعدادات». إن لم ينجح ذلك فحمّل ملف APK الأحدث من هذه الصفحة وثبّته فوق القديم، وتبقى بياناتك.",
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
