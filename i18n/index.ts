/**
 * Two languages: English at the root, Arabic under /ar/.
 * Interface text lives here. Writings (notebook entries) are never translated.
 */
export const locales = ["en", "ar"] as const
export type Locale = (typeof locales)[number]

export const dirOf = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr")

/** Site path for a locale. `path` starts and ends with "/" ("/", "/apps/"). */
export function localePath(locale: Locale, path: string): string {
  if (locale === "en") return path
  return path === "/" ? "/ar/" : `/ar${path}`
}

/** The same page in the other language. */
export function otherLocalePath(locale: Locale, pathname: string): string {
  const clean = pathname.endsWith("/") ? pathname : `${pathname}/`
  if (locale === "en") return clean === "/" ? "/ar/" : `/ar${clean}`
  const stripped = clean.replace(/^\/ar/, "")
  return stripped === "" ? "/" : stripped
}

const en = {
  brandRole: "Electrical Design Engineer",
  explore: "Explore",
  nav: { home: "Home", apps: "Apps", projects: "Projects", notebook: "Notebook", about: "About" },
  cv: "Download CV",
  cvShort: "CV",
  switchLabel: "العربية",
  switchAria: "عرض الموقع بالعربية",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  skip: "Skip to content",
  hero: { primary: "See the apps", secondary: "About me", glance: "At a glance", basedIn: "Based in", location: "Riyadh, Saudi Arabia" },
  flagship: {
    kicker: "Flagship · own site",
    status: "Live",
    where: "Own site · Google Play",
    openSite: "Open shadhra.app",
    play: "Google Play",
    more: "About Shadhra",
    facts: [
      { label: "Where it runs", value: "Web and Android" },
      { label: "Address", value: "shadhra.app" },
      { label: "Languages", value: "Arabic and English" },
    ],
  },
  apps: {
    kicker: "Apps",
    title: "Free apps, built end to end.",
    description: "Android apps and apps that run in the browser. Each one is designed, built and released by me.",
    all: "All apps",
    details: "Details",
  },
  appPage: {
    lead: "Free apps I designed, built and released: apps that sync between web and phone, Android apps, and apps that run in the browser.",
    sync: "Web and phone, in sync",
    syncNote: "A web app and a phone app that share one account, so your work follows you between devices.",
    android: "Android",
    browser: "In the browser",
    version: "Version",
    video: "Watch",
    features: "What it does",
    screens: "Screens",
    install: "Getting started",
    faq: "Questions",
    build: "How it was built",
    more: "More",
    allApps: "All apps",
    hostedElsewhere: "This app has its own site. Nothing is downloaded from here.",
  },
  projectsPage: {
    lead: "Engineering and research work: deep learning, signal processing and image processing, with measured results.",
    research: "Research and machine learning",
    lab: "Smaller projects",
    back: "All projects",
    date: "Date",
    role: "My role",
    result: "Result",
    tools: "Tools",
    links: "Links",
    live: "Live",
    source: "Source",
    newer: "Newer",
    older: "Older",
    english: "This write-up is in English.",
  },
  notebookPage: {
    lead: "Each piece stays in the language it was written in.",
    back: "Notebook",
    search: "Search",
    searchHint: "Title or summary",
    topics: "Topics",
    all: "All",
    clear: "Clear",
    none: "Nothing matches that filter.",
    entry: "entry",
    entries: "entries",
    /** The two groups of the notebook, and the label of one entry of each. */
    kinds: { article: "Technical articles", essay: "Essays" },
    kindOne: { article: "Technical article", essay: "Essay" },
    langName: { en: "English", ar: "Arabic" },
    keep: "Keep reading",
    contents: "On this page",
  },
  aboutPage: {
    lead: "Electrical design engineer in medium-voltage switchgear who builds AI-assisted tools and ships software products.",
    email: "Email me",
    timeline: "Timeline",
    work: "Work",
    education: "Education",
    skills: "Skills",
    languages: "Languages",
    present: "Present",
  },
  notFound: { title: "Page not found.", body: "This page doesn't exist. It may have been moved or removed.", home: "Back to home" },
  experience: { kicker: "Work", products: "Products" },
  projects: {
    kicker: "Projects",
    title: "Engineering and research work.",
    description: "Signal processing and machine learning work from my M.Sc. and independent study.",
    all: "All projects",
  },
  notebook: {
    kicker: "Notebook",
    title: "Experiments, written up.",
    description: "Articles with runnable code and measured results, on signals, images, and machine learning.",
    all: "All entries",
  },
  contact: {
    kicker: "Contact",
    title: "Let's talk.",
    rights: "All rights reserved.",
    body: "Open to conversations about switchgear engineering, design automation, and building software products. Email is the fastest way to reach me.",
  },
  footer: {
    siteOf: "Site of",
    blurb: "Electrical design engineer in medium-voltage switchgear. I build AI-assisted tools and ship software products.",
    contact: "Contact",
    location: "Location",
    links: "Links",
    updated: "Updated",
    pages: "Pages",
  },
}

export type Dict = typeof en

const ar: Dict = {
  brandRole: "مهندس تصميم كهربائي",
  explore: "تصفّح",
  nav: { home: "الرئيسية", apps: "التطبيقات", projects: "المشاريع", notebook: "الدفتر", about: "نبذة" },
  cv: "السيرة الذاتية",
  cvShort: "السيرة",
  switchLabel: "English",
  switchAria: "View the site in English",
  menuOpen: "افتح القائمة",
  menuClose: "أغلق القائمة",
  skip: "انتقل إلى المحتوى",
  hero: { primary: "تصفّح التطبيقات", secondary: "نبذة عني", glance: "لمحة سريعة", basedIn: "الإقامة", location: "الرياض، المملكة العربية السعودية" },
  flagship: {
    kicker: "المشروع الأبرز · موقع مستقل",
    status: "متاح الآن",
    where: "موقع مستقل · Google Play",
    openSite: "افتح shadhra.app",
    play: "Google Play",
    more: "عن شذرة",
    facts: [
      { label: "أين يعمل", value: "الويب وأندرويد" },
      { label: "العنوان", value: "shadhra.app" },
      { label: "اللغات", value: "العربية والإنجليزية" },
    ],
  },
  apps: {
    kicker: "التطبيقات",
    title: "تطبيقات مجانية، من الفكرة إلى الإصدار.",
    description: "تطبيقات أندرويد وتطبيقات تعمل في المتصفح. صمّمتُ كل واحد منها وبنيته وأصدرته بنفسي.",
    all: "كل التطبيقات",
    details: "التفاصيل",
  },
  appPage: {
    lead: "تطبيقات مجانية صمّمتها وبنيتها وأصدرتها: تطبيقات تتزامن بين الويب والجوال، وتطبيقات أندرويد، وتطبيقات تعمل في المتصفح.",
    sync: "ويب وجوال متزامنان",
    syncNote: "تطبيق ويب وتطبيق جوال بحساب واحد، فينتقل عملك معك من جهاز إلى آخر.",
    android: "أندرويد",
    browser: "في المتصفح",
    version: "الإصدار",
    video: "شاهد",
    features: "ماذا يقدّم",
    screens: "الشاشات",
    install: "طريقة البدء",
    faq: "أسئلة شائعة",
    build: "كيف بُني",
    more: "المزيد",
    allApps: "كل التطبيقات",
    hostedElsewhere: "لهذا التطبيق موقعه المستقل، ولا يُنزَّل شيء من هنا.",
  },
  projectsPage: {
    lead: "أعمال هندسية وبحثية في التعلّم العميق ومعالجة الإشارات ومعالجة الصور، بنتائج مقيسة.",
    research: "البحث وتعلّم الآلة",
    lab: "مشاريع أصغر",
    back: "كل المشاريع",
    date: "التاريخ",
    role: "دوري",
    result: "النتيجة",
    tools: "الأدوات",
    links: "روابط",
    live: "جرّبه",
    source: "الشيفرة المصدرية",
    newer: "الأحدث",
    older: "الأقدم",
    english: "هذا الشرح مكتوب بالإنجليزية.",
  },
  notebookPage: {
    lead: "كل نص يبقى باللغة التي كُتب بها.",
    back: "الدفتر",
    search: "بحث",
    searchHint: "العنوان أو الملخّص",
    topics: "المواضيع",
    all: "الكل",
    clear: "مسح",
    none: "لا توجد نتائج مطابقة.",
    entry: "نص",
    entries: "نصوص",
    kinds: { article: "مقالات تقنية", essay: "مقالات وخواطر" },
    kindOne: { article: "مقال تقني", essay: "مقال" },
    langName: { en: "بالإنجليزية", ar: "بالعربية" },
    keep: "تابع القراءة",
    contents: "في هذه الصفحة",
  },
  aboutPage: {
    lead: "مهندس تصميم كهربائي في قواطع الجهد المتوسط، يبني أدوات مدعومة بالذكاء الاصطناعي ويُصدر منتجات برمجية.",
    email: "راسلني",
    timeline: "المسيرة",
    work: "عمل",
    education: "تعليم",
    skills: "المهارات",
    languages: "اللغات",
    present: "حتى الآن",
  },
  notFound: { title: "الصفحة غير موجودة.", body: "هذه الصفحة غير موجودة. ربما نُقلت أو حُذفت.", home: "العودة إلى الرئيسية" },
  experience: { kicker: "العمل", products: "المنتجات" },
  projects: {
    kicker: "المشاريع",
    title: "أعمال هندسية وبحثية.",
    description: "أعمال في معالجة الإشارات وتعلّم الآلة، من دراسة الماجستير ومن تعلّمي الذاتي.",
    all: "كل المشاريع",
  },
  notebook: {
    kicker: "الدفتر",
    title: "تجارب موثّقة.",
    description: "مقالات فيها شيفرة قابلة للتشغيل ونتائج مقيسة، في الإشارات والصور وتعلّم الآلة.",
    all: "كل النصوص",
  },
  contact: {
    kicker: "تواصل",
    title: "لنتحدّث.",
    rights: "جميع الحقوق محفوظة.",
    body: "أرحّب بالحديث عن هندسة القواطع الكهربائية، وأتمتة التصميم، وبناء المنتجات البرمجية. البريد الإلكتروني أسرع وسيلة للتواصل معي.",
  },
  footer: {
    siteOf: "موقع",
    blurb: "مهندس تصميم كهربائي في قواطع الجهد المتوسط. أبني أدوات مدعومة بالذكاء الاصطناعي وأُصدر منتجات برمجية.",
    contact: "تواصل",
    location: "الإقامة",
    links: "روابط",
    updated: "آخر تحديث",
    pages: "الصفحات",
  },
}

export const dict: Record<Locale, Dict> = { en, ar }
export const otherLocale = (locale: Locale): Locale => (locale === "en" ? "ar" : "en")
export const t = (locale: Locale) => dict[locale]

/** "Ahmad Nayfeh" in each language. */
export const ownerName: Record<Locale, string> = { en: "Ahmad Nayfeh", ar: "أحمد نايفه" }

/**
 * "3 entries" in the page's language. Arabic counts need their own forms: one (نص واحد), two (نصّان),
 * three to ten with the plural (5 نصوص), and eleven to ninety-nine with the singular accusative (11 نصًّا), and hundreds with the singular (100 نص).
 */
export function entriesLabel(locale: Locale, n: number): string {
  if (locale !== "ar") return `${n} ${n === 1 ? "entry" : "entries"}`
  if (n === 0) return "لا نصوص"
  if (n === 1) return "نص واحد"
  if (n === 2) return "نصّان"
  const last = n % 100
  if (last >= 3 && last <= 10) return `${n} نصوص`
  if (last >= 11) return `${n} نصًّا`
  return `${n} نص` // 100, 101, 102, 200 ...
}
