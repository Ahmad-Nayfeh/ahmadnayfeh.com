// Shasha: page data for /apps/shasha/, carried over from the app's original Arabic page.
import type { AppDetail } from "../types"

export const detail: AppDetail = {
  slug: "shasha",
  tagline: {
    en: "A calm YouTube for the family TV",
    ar: "يوتيوب هادئ لتلفاز البيت",
  },
  intro: {
    en: "A calm YouTube for the family TV: no ads, no sign-in, and full protection for children. Each child has a profile that shows only the channels you allow, with a daily time limit and set viewing hours. All of it is managed with the remote or from your phone.",
    ar: "يوتيوب هادئ لتلفاز البيت: بلا إعلانات ولا تسجيل دخول، وبحماية كاملة للأطفال. لكل طفل ملف لا يرى فيه إلا القنوات التي تسمح بها، بوقت يومي ومواعيد محددة. ويُدار كله بالريموت أو من جوالك.",
  },
  facts: [
    { en: "Free Android app", ar: "تطبيق أندرويد مجاني" },
    { en: "For TV and phone", ar: "للتلفاز والجوال" },
    { en: "Arabic and English", ar: "عربي وإنجليزي" },
    { en: "No ads, no sign-in", ar: "بلا إعلانات ولا تسجيل دخول" },
    { en: "No accounts, no tracking", ar: "لا حسابات ولا تتبّع" },
    { en: "TV: Android 7.1 or newer, and Fire TV", ar: "للتلفاز: أندرويد 7.1 فأحدث و Fire TV" },
    { en: "Phone: Android 8 or newer", ar: "للجوال: أندرويد 8 فأحدث" },
  ],
  downloads: [
    {
      label: { en: "Download the TV app (APK)", ar: "نزّل تطبيق التلفاز (APK)" },
      href: "shasha-tv.apk",
      kind: "apk",
      primary: true,
      version: "1.10.1",
      size: "31.8 MB",
      note: {
        en: "Google TV and Android TV (Android 7.1 or newer), and Amazon Fire TV (Fire OS 6 or newer)",
        ar: "Google TV و Android TV (أندرويد 7.1 فأحدث) و Amazon Fire TV (Fire OS 6 فأحدث)",
      },
    },
    {
      label: { en: "Download the phone app (APK)", ar: "نزّل تطبيق الجوال (APK)" },
      href: "shasha-mobile.apk",
      kind: "apk",
      version: "1.10.1",
      size: "3.8 MB",
      note: { en: "Android 8 or newer", ar: "أندرويد 8 فأحدث" },
    },
    {
      label: { en: "Setup kit (ZIP)", ar: "حقيبة التثبيت (ZIP)" },
      href: "shasha-setup.zip",
      kind: "zip",
      size: "55.2 MB",
      note: {
        en: "For the first install on a TV, from your computer",
        ar: "لأول تثبيت على التلفاز، من حاسوبك",
      },
    },
  ],
  features: [
    {
      title: { en: "No ads, and suggestions are up to you", ar: "بلا إعلانات، والاقتراحات بيدك" },
      body: {
        en: "The home screen shows the latest videos from your channels. Suggested videos and Shorts appear or stay hidden as you decide, for each profile.",
        ar: "الرئيسية فيها أحدث فيديوهات قنواتك. والمقترحة والقصيرة تظهر أو تختفي بقرارك، لكل ملف.",
      },
    },
    {
      title: { en: "Profiles for children", ar: "ملفات للأطفال" },
      body: {
        en: "A child sees only the channels you allow, and a built-in filter blocks inappropriate searches and results.",
        ar: "يرى الطفل القنوات التي تسمح بها فقط، وفلتر مدمج يحجب البحث والنتائج غير اللائقة.",
      },
    },
    {
      title: { en: "Limited time", ar: "وقت محدد" },
      body: {
        en: "Daily minutes and viewing hours for each child, with a warning before the time runs out.",
        ar: "دقائق يومية وساعات مشاهدة لكل طفل، وتنبيه قبل انتهاء الوقت.",
      },
    },
    {
      title: { en: "Serious mode", ar: "الوضع الجاد" },
      body: {
        en: "A video that starts is watched to the end, for children and for adults, and every change needs the parents' code.",
        ar: "الفيديو الذي يبدأ يُشاهَد حتى نهايته، للأطفال وللكبار، ورمز للوالدين لكل تغيير.",
      },
    },
    {
      title: { en: "Your phone as a remote, and as an app", ar: "الجوال ريموتاً، وتطبيقاً" },
      body: {
        en: "Send links and open up viewing time from your phone; whatever is sent waits for \"Accept / Reject\" on the screen. Or watch on the phone itself, with downloads and background playback.",
        ar: "أرسل الروابط وافتح الوقت من الجوال، وما يُرسل ينتظر «قبول / رفض» على الشاشة. أو شاهد على الجوال نفسه، مع التنزيل والتشغيل في الخلفية.",
      },
    },
    {
      title: { en: "Voice search, and skipping read-out sponsor spots", ar: "البحث بالصوت، وتخطّي الإعلانات المقروءة" },
      body: {
        en: "Search from the remote's microphone in Arabic or English. Sponsored segments inside a video are skipped automatically using SponsorBlock data.",
        ar: "من ميكروفون الريموت بالعربية أو الإنجليزية. والمقاطع الدعائية داخل الفيديو تُتخطّى وحدها ببيانات SponsorBlock.",
      },
    },
    {
      title: { en: "Sleep timer and black screen", ar: "مؤقت النوم والشاشة السوداء" },
      body: {
        en: "On the TV: play a video, choose a duration (20 minutes, for example), and turn off the picture while the sound continues. Playback stops by itself.",
        ar: "على التلفاز: شغّل فيديو، واختر مدة (مثلاً 20 دقيقة)، وأطفئ الصورة مع بقاء الصوت. ينتهي التشغيل وحده.",
      },
    },
  ],
  screenshots: [
    { src: "/images/apps/shasha/tv-home.webp", shape: "wide", caption: { en: "Home: the latest videos from your channels", ar: "الرئيسية: أحدث فيديوهات قنواتك" } },
    { src: "/images/apps/shasha/tv-profile-picker.webp", shape: "wide", caption: { en: "Who is watching now? Choosing a profile", ar: "من يشاهد الآن؟ اختيار الملف" } },
    { src: "/images/apps/shasha/tv-kids-allowed-channels.webp", shape: "wide", caption: { en: "The channels allowed for a child's profile", ar: "القنوات المسموحة لملف الطفل" } },
    { src: "/images/apps/shasha/tv-search-results.webp", shape: "wide", caption: { en: "Search results", ar: "نتائج البحث" } },
    { src: "/images/apps/shasha/tv-player-osd.webp", shape: "wide", caption: { en: "The player", ar: "المشغّل" } },
    { src: "/images/apps/shasha/tv-cast-request-overlay.webp", shape: "wide", caption: { en: "A request from the phone: accept or reject", ar: "طلب من الجوال: قبول أو رفض" } },
    { src: "/images/apps/shasha/tv-time-up.webp", shape: "wide", caption: { en: "Viewing time is up", ar: "انتهى وقت المشاهدة" } },
    { src: "/images/apps/shasha/tv-behavior-serious.webp", shape: "wide", caption: { en: "Serious mode settings", ar: "إعدادات الوضع الجاد" } },
    { src: "/images/apps/shasha/phone-home.webp", shape: "phone", caption: { en: "Home in the phone app", ar: "الرئيسية في تطبيق الجوال" } },
    { src: "/images/apps/shasha/phone-player.webp", shape: "phone", caption: { en: "The player in the phone app", ar: "المشغّل في تطبيق الجوال" } },
    { src: "/images/apps/shasha/phone-downloads.webp", shape: "phone", caption: { en: "Downloads in the phone app", ar: "التنزيلات في تطبيق الجوال" } },
    { src: "/images/apps/shasha/install-tv-build-7-presses.webp", shape: "wide", caption: { en: "TV install, step 2: press OK seven times on Android TV OS build", ar: "تثبيت التلفاز، الخطوة 2: اضغط OK سبع مرات على Android TV OS build" } },
    { src: "/images/apps/shasha/install-pc-run-script.webp", shape: "wide", caption: { en: "TV install, step 5: run the installer on the computer and type the TV's address", ar: "تثبيت التلفاز، الخطوة 5: تشغيل المثبّت على الحاسوب وكتابة عنوان التلفاز" } },
    { src: "/images/apps/shasha/install-tv-allow-debugging.webp", shape: "wide", caption: { en: "TV install, step 6: the Allow USB debugging prompt on the TV", ar: "تثبيت التلفاز، الخطوة 6: نافذة Allow USB debugging على التلفاز" } },
    { src: "/images/apps/shasha/install-pc-success.webp", shape: "wide", caption: { en: "TV install, step 7: the installer prints \"Done!\"", ar: "تثبيت التلفاز، الخطوة 7: المثبّت يكتب «تمّ!»" } },
  ],
  sections: [
    {
      title: { en: "Download Shasha", ar: "نزّل «شاشة»" },
      intro: {
        en: "Free. Once installed, each app updates itself with one press from inside it: Settings → Check for updates. Your data stays as it is.",
        ar: "مجاني. بعد التثبيت يتحدّث كل تطبيق بضغطة واحدة من داخله: «الإعدادات ← فحص التحديثات»، وتبقى بياناتك كما هي.",
      },
      items: [
        {
          title: { en: "The TV app", ar: "تطبيق التلفاز" },
          body: {
            en: "For Google TV and Android TV (Android 7.1 or newer) and Amazon Fire TV (Fire OS 6 or newer).",
            ar: "Google TV و Android TV (أندرويد 7.1 فأحدث) و Amazon Fire TV (Fire OS 6 فأحدث).",
          },
        },
        {
          title: { en: "The phone app", ar: "تطبيق الجوال" },
          body: {
            en: "Android 8 or newer. It works on its own without a TV: search, a full player, and downloading video or audio. Open this page on your phone, press the button, then follow the three steps. The phone app is for watching on the phone; controlling the TV is done from a page you open with the pairing code in Shasha's settings on the TV.",
            ar: "أندرويد 8 فأحدث. يعمل وحده بلا تلفاز: بحث، ومشغّل كامل، وتنزيل الفيديو أو الصوت. افتح هذه الصفحة على جوالك واضغط الزر، ثم اتبع ثلاث خطوات. تطبيق الجوال للمشاهدة على الجوال؛ أما التحكم في التلفاز فصفحة تفتحها من رمز الاقتران في إعدادات «شاشة» على التلفاز.",
          },
        },
        {
          title: { en: "The setup kit: first install on a TV?", ar: "حقيبة التثبيت: أول تثبيت على التلفاز؟" },
          body: {
            en: "A TV will not open the file by itself: download the setup kit to your computer. It contains the installer for Windows, Mac and Linux, the TV app, the phone app and the guide.",
            ar: "التلفاز لا يفتح الملف وحده: نزّل حقيبة التثبيت على حاسوبك، ففيها المثبّت لويندوز وماك ولينكس، وتطبيق التلفاز، وتطبيق الجوال، والدليل.",
          },
        },
      ],
    },
    {
      title: { en: "Installing on the phone (3 steps)", ar: "التثبيت على الجوال (3 خطوات)" },
      items: [
        {
          title: { en: "Download the file", ar: "نزّل الملف" },
          body: {
            en: "Use the \"Download the phone app\" button on this page, on the phone itself. (It is also in the \"Phone\" folder inside the setup kit.)",
            ar: "من زر «نزّل تطبيق الجوال» في هذه الصفحة، على جوالك نفسه. (وهو أيضاً في «مجلد Phone» داخل حقيبة التثبيت.)",
          },
        },
        {
          title: { en: "Open it", ar: "افتحه" },
          body: {
            en: "From the notification, the Files app or the browser. Android asks for your permission the first time: press \"Settings\", turn on the permission (Install unknown apps), then go back. This is normal for any app from outside the store, and happens only once.",
            ar: "من الإشعار أو تطبيق الملفات أو المتصفح. سيطلب أندرويد إذنك أول مرة: اضغط «الإعدادات» وفعّل السماح (Install unknown apps)، ثم ارجع. هذا طبيعي مع أي تطبيق من خارج المتجر، ومرة واحدة فقط.",
          },
        },
        {
          title: { en: "Install it", ar: "ثبّته" },
          body: {
            en: "Go back and press \"Install\", then \"Open\". It runs on Android 8 or newer.",
            ar: "ارجع واضغط «تثبيت»، ثم «فتح». يعمل على أندرويد 8 أو أحدث.",
          },
        },
        {
          title: { en: "Updating later", ar: "للتحديث لاحقاً" },
          body: {
            en: "Settings → Check for updates → download and install. The system may ask you to confirm with one press.",
            ar: "الإعدادات ← فحص التحديثات ← نزّل وثبّت. قد يطلب النظام تأكيدك بضغطة.",
          },
        },
      ],
    },
    {
      title: { en: "Which TVs suit Shasha?", ar: "أي تلفاز يناسب «شاشة»؟" },
      items: [
        {
          title: { en: "Works", ar: "يعمل" },
          body: {
            en: "Google TV and Android TV running Android 7.1 or newer, from any brand: Sony, TCL, Hisense, Philips and Xiaomi, plus Nvidia Shield, Chromecast with Google TV and Google TV Streamer, and projectors such as XGIMI and Nebula. Amazon Fire TV running Fire OS 6 or newer: Fire TV Stick, Fire TV Cube and Fire TV sets.",
            ar: "Google TV و Android TV بنظام أندرويد 7.1 أو أحدث، من أي ماركة: Sony و TCL و Hisense و Philips و Xiaomi، و Nvidia Shield و Chromecast with Google TV و Google TV Streamer، وأجهزة العرض مثل XGIMI و Nebula. و Amazon Fire TV بنظام Fire OS 6 أو أحدث: Fire TV Stick و Fire TV Cube وتلفازات Fire TV.",
          },
        },
        {
          title: { en: "Does not work", ar: "لا يعمل" },
          body: {
            en: "Samsung (Tizen) and LG (webOS), Roku and Apple TV. Fire TV devices running Vega OS (2025 and 2026 devices such as Fire TV Stick 4K Select), and old ones running Fire OS 5. TVs with their own non-Android system: Hisense (VIDAA), Philips (Titan OS) and Panasonic.",
            ar: "Samsung (Tizen) و LG (webOS)، و Roku و Apple TV. و Fire TV بنظام Vega OS (أجهزة 2025 و2026 مثل Fire TV Stick 4K Select)، والقديمة بنظام Fire OS 5. وتلفازات بنظام خاص غير أندرويد: Hisense (VIDAA) و Philips (Titan OS) و Panasonic.",
          },
        },
        {
          title: { en: "Your TV is not one of these?", ar: "تلفازك ليس منها؟" },
          body: {
            en: "A small device that plugs into an HDMI port is enough: Google TV Streamer, Chromecast with Google TV, Xiaomi TV Stick, Fire TV Stick 4K or Fire TV Cube. Look for Fire OS on the box: some 2025 and 2026 devices run Vega OS and do not work.",
            ar: "يكفي جهاز صغير يوصل بمنفذ HDMI: Google TV Streamer أو Chromecast with Google TV أو Xiaomi TV Stick أو Fire TV Stick 4K أو Fire TV Cube. ابحث عن Fire OS على الصندوق: بعض أجهزة 2025 و2026 بنظام Vega OS ولا تعمل.",
          },
        },
      ],
    },
    {
      title: { en: "Notes for Fire TV and older Android TV", ar: "ملاحظات لـ Fire TV و Android TV الأقدم" },
      items: [
        {
          title: { en: "Fire TV", ar: "Fire TV" },
          body: {
            en: "Developer options: Settings → My Fire TV → Developer options (if you cannot find them: About, then press OK seven times on the device name). Turn on ADB debugging; the address is under About → Network. On Fire OS 6 the installer turns on Apps from Unknown Sources by itself so that one-press updates work. Later you will find Shasha under Your Apps → See all.",
            ar: "خيارات المطوّر: Settings ← My Fire TV ← Developer options (إن لم تجدها: About، واضغط OK سبع مرات على اسم الجهاز). فعّل ADB debugging، والعنوان في About ← Network. وفي Fire OS 6 يفعّل المثبّت وحده Apps from Unknown Sources لتعمل التحديثات بضغطة واحدة. وتجد «شاشة» لاحقاً في Your Apps ← See all.",
          },
        },
        {
          title: { en: "Older Android TV, Philips and Nvidia Shield", ar: "Android TV الأقدم، و Philips، و Nvidia Shield" },
          body: {
            en: "Developer options are under Settings → Device Preferences → About (on Philips: All settings → Android settings → Device Preferences → About), and on Nvidia Shield turn on Network debugging as well. Some newer Google TV models have Wireless debugging only: there the installer asks for a 6-digit code shown on the TV. The details are in the guide.",
            ar: "خيارات المطوّر من Settings ← Device Preferences ← About (في Philips: All settings ← Android settings ← Device Preferences ← About)، وفي Nvidia Shield فعّل Network debugging أيضاً. وفي بعض موديلات Google TV الأحدث Wireless debugging فقط: وفيها يطلب المثبّت رمزاً من 6 أرقام يظهر على التلفاز. التفاصيل في الدليل.",
          },
        },
      ],
    },
    {
      title: { en: "The Shasha guide", ar: "دليل شاشة" },
      intro: {
        en: "With pictures: supported screens, installation, everyday use, parents, the phone app, updating and troubleshooting. The guide and the explainer video are also inside the app: Settings → Guide and video.",
        ar: "بالصور: الشاشات المدعومة، والتثبيت، والاستخدام، والوالدين، وتطبيق الجوال، والتحديث، وحل المشاكل. والدليل وفيديو الشرح موجودان أيضاً داخل التطبيق: «الإعدادات ← الدليل والفيديو».",
      },
      items: [
        {
          title: { en: "Shasha guide (Arabic)", ar: "دليل شاشة (عربي)" },
          body: { en: "PDF · 3.1 MB", ar: "PDF · 3.1 ميغابايت" },
        },
        {
          title: { en: "Shasha Guide (English)", ar: "Shasha Guide (English)" },
          body: { en: "PDF · 3.0 MB", ar: "PDF · 3.0 ميغابايت" },
        },
      ],
    },
  ],
  install: [
    {
      title: { en: "Download the setup kit (on the computer)", ar: "نزّل حقيبة التثبيت (الحاسوب)" },
      body: {
        en: "You need the TV and its remote, and a computer (Windows, Mac or Linux), both on the same home network; it takes about a quarter of an hour. Download the kit with the \"Setup kit\" button, then unzip it. Windows: right-click → Extract All. Mac: double-click. Keep the files together in the folder.",
        ar: "تحتاج التلفاز والريموت، وحاسوباً (ويندوز أو ماك أو لينكس)، والاثنان على شبكة البيت نفسها؛ ويأخذ نحو ربع ساعة. نزّل الحقيبة من زر «حقيبة التثبيت»، ثم فك الضغط. ويندوز: الزر الأيمن ← Extract All. ماك: انقر مرتين. واترك الملفات معاً في المجلد.",
      },
    },
    {
      title: { en: "Turn on developer options (on the TV)", ar: "فعّل خيارات المطوّر (التلفاز)" },
      body: {
        en: "Settings → System → About, then press OK seven times on Android TV OS build until \"You are now a developer!\" appears.",
        ar: "Settings ← System ← About، واضغط OK سبع مرات على Android TV OS build حتى تظهر You are now a developer!",
      },
    },
    {
      title: { en: "Allow installing from the computer (on the TV)", ar: "اسمح بالتثبيت من الحاسوب (التلفاز)" },
      body: {
        en: "Settings → System → Developer options → turn on USB debugging, and Network debugging if you find it.",
        ar: "Settings ← System ← Developer options ← فعّل USB debugging، و Network debugging إن وجدته.",
      },
    },
    {
      title: { en: "Find the TV's address (on the TV)", ar: "اعرف عنوان التلفاز (التلفاز)" },
      body: {
        en: "Settings → Network & Internet → your network's name → IP address (on a cable: Ethernet). Four numbers separated by dots, such as 192.168.1.50.",
        ar: "Settings ← Network & Internet ← اسم شبكتك ← IP address (وبالسلك: Ethernet). أربعة أرقام بينها نقاط، مثل 192.168.1.50.",
      },
    },
    {
      title: { en: "Run the installer (on the computer)", ar: "شغّل المثبّت (الحاسوب)" },
      body: {
        en: "Windows: double-click \"Windows - ثبّت شاشة\" (if a blue window appears, that is normal: More info → Run anyway). Mac: double-click \"Mac - ثبّت شاشة\" (if it does not open: System Settings → Privacy & Security → Open Anyway). Linux: run install-linux.sh. Then type the TV's address.",
        ar: "ويندوز: انقر مرتين على «Windows - ثبّت شاشة» (إن ظهرت نافذة زرقاء فهذا طبيعي: More info ← Run anyway). ماك: انقر مرتين على «Mac - ثبّت شاشة» (إن لم يفتح: System Settings ← Privacy & Security ← Open Anyway). لينكس: شغّل install-linux.sh. ثم اكتب عنوان التلفاز.",
      },
    },
    {
      title: { en: "Allow the computer (on the TV)", ar: "اسمح للحاسوب (التلفاز)" },
      body: {
        en: "\"Allow USB debugging?\" appears: tick \"Always allow from this computer\", then OK.",
        ar: "تظهر Allow USB debugging?: ضع علامة على Always allow from this computer ثم OK.",
      },
    },
    {
      title: { en: "Wait, the installer finishes by itself (on the computer)", ar: "انتظر، المثبّت يكمل وحده (الحاسوب)" },
      body: {
        en: "It prints the TV's name and model, installs Shasha and grants its permissions, asks whether to turn off the official YouTube app (y or n), then prints \"Done!\".",
        ar: "يكتب اسم التلفاز وطرازه، ويثبّت «شاشة» ويمنحه صلاحياته، ويسألك هل تطفئ يوتيوب الرسمي (y أو n)، ثم يكتب «تمّ!».",
      },
    },
    {
      title: { en: "First run (on the TV)", ar: "أول تشغيل (التلفاز)" },
      body: {
        en: "Shasha asks for the parents' code, then your profile, then your child's profile.",
        ar: "«شاشة» يطلب رمز الوالدين، ثم ملفك، ثم ملف طفلك.",
      },
    },
    {
      title: { en: "Link your phone, optional (on the phone)", ar: "اربط جوالك، اختياري (الجوال)" },
      body: {
        en: "In Shasha: Settings → Local server → Pairing code, then scan it with the phone's camera.",
        ar: "في «شاشة»: الإعدادات ← الخادم المحلي ← رمز الاقتران، وامسحه بكاميرا الجوال.",
      },
    },
  ],
  faq: [
    {
      q: { en: "Is the app free?", ar: "هل التطبيق مجاني؟" },
      a: {
        en: "Yes, with no ads, no subscriptions and no sign-in.",
        ar: "نعم، بلا إعلانات وبلا اشتراكات وبلا تسجيل دخول.",
      },
    },
    {
      q: { en: "My TV is a Samsung or an LG", ar: "تلفازي سامسونج أو إل جي" },
      a: {
        en: "Their system is not Android. You do not need to replace the TV: plug a small device running Google TV or Fire OS into an HDMI port, select that port with the Source button, and install Shasha on it as if it were the TV.",
        ar: "نظامهما ليس أندرويد. لا تحتاج أن تغيّر التلفاز: وصّل به جهازاً صغيراً بنظام Google TV أو Fire OS في منفذ HDMI، واختر منفذه بزر Source، وثبّت «شاشة» عليه كأنه التلفاز.",
      },
    },
    {
      q: { en: "How do I update?", ar: "كيف أحدّث؟" },
      a: {
        en: "From inside the app: Settings → Check for updates. One press downloads the latest version and installs it; the app closes for a moment and opens again. Or run the computer installer again with the newer file. Your data stays as it is.",
        ar: "من داخل التطبيق: «الإعدادات ← فحص التحديثات». ضغطة واحدة تنزّل أحدث إصدار وتثبّته، ويُغلق التطبيق لحظة ثم يُفتح من جديد. أو شغّل مثبّت الحاسوب من جديد بالملف الأحدث. بياناتك تبقى كما هي.",
      },
    },
    {
      q: { en: "Where is our data kept?", ar: "أين تُحفظ بياناتنا؟" },
      a: {
        en: "Everything is on the TV itself: profiles, allowed channels, history and settings. No accounts and no tracking.",
        ar: "كل شيء على التلفاز نفسه: الملفات والقنوات المسموحة والسجل والإعدادات. لا حسابات ولا تتبّع.",
      },
    },
    {
      q: { en: "Can I remove it?", ar: "هل أستطيع إزالته؟" },
      a: {
        en: "Yes: on the TV, Settings → Apps → Shasha → Uninstall (this erases all its data).",
        ar: "نعم: على التلفاز Settings ← Apps ← شاشة ← Uninstall (يمسح بياناته كلها).",
      },
    },
  ],
  notes: [
    {
      en: "Installation is done once only. After that the app updates from inside itself.",
      ar: "التثبيت مرة واحدة فقط. بعدها يتحدّث التطبيق من داخله.",
    },
    {
      en: "Last published: 2026-11-07. Each new version installs over the previous one, and your data and settings stay as they are.",
      ar: "آخر نشر: 2026-11-07. كل نسخة جديدة تُثبَّت فوق السابقة، وتبقى بياناتك وإعداداتك كما هي.",
    },
    {
      en: "Made by Ahmad Nayfeh. Sponsored segments are skipped using SponsorBlock data (sponsor.ajay.app).",
      ar: "صنعه أحمد نايفة. تخطّي المقاطع الدعائية ببيانات SponsorBlock (sponsor.ajay.app).",
    },
  ],
  links: [
    { label: { en: "Shasha guide (Arabic, PDF)", ar: "دليل شاشة (عربي، PDF)" }, href: "guide-ar.pdf" },
    { label: { en: "Shasha guide (English, PDF)", ar: "دليل شاشة (إنجليزي، PDF)" }, href: "guide-en.pdf" },
  ],
}
