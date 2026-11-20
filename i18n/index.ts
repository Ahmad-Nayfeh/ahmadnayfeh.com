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
  nav: { home: "الرئيسية", apps: "التطبيقات", projects: "المشاريع", notebook: "الدفتر", about: "نبذة" },
  cv: "السيرة الذاتية",
  cvShort: "السيرة",
  switchLabel: "English",
  switchAria: "View the site in English",
  menuOpen: "افتح القائمة",
  menuClose: "أغلق القائمة",
  skip: "انتقل إلى المحتوى",
  hero: { primary: "تصفّح التطبيقات", secondary: "نبذة عني", glance: "في لمحة", basedIn: "الإقامة", location: "الرياض، المملكة العربية السعودية" },
  flagship: {
    kicker: "المشروع الأبرز · موقع مستقل",
    status: "يعمل الآن",
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
  experience: { kicker: "العمل", products: "المنتجات" },
  projects: {
    kicker: "المشاريع",
    title: "أعمال هندسية وبحثية.",
    description: "أعمال في معالجة الإشارات وتعلّم الآلة، من دراسة الماجستير ومن دراستي الذاتية.",
    all: "كل المشاريع",
  },
  notebook: {
    kicker: "الدفتر",
    title: "تجارب مكتوبة.",
    description: "مقالات فيها شيفرة تعمل ونتائج مقيسة. كل مقال يبقى باللغة التي كُتب بها.",
    all: "كل المقالات",
  },
  contact: {
    kicker: "تواصل",
    title: "لنتحدّث.",
    rights: "جميع الحقوق محفوظة.",
    body: "أرحّب بالحديث عن هندسة القواطع الكهربائية، وأتمتة التصميم، وبناء المنتجات البرمجية. البريد الإلكتروني أسرع طريق إليّ.",
  },
  footer: {
    siteOf: "موقع",
    blurb: "مهندس تصميم كهربائي في قواطع الجهد المتوسط. أبني أدوات تعمل بالذكاء الاصطناعي وأُصدر منتجات برمجية.",
    contact: "تواصل",
    location: "الموقع",
    links: "روابط",
    updated: "آخر تحديث",
    pages: "الصفحات",
  },
}

export const dict: Record<Locale, Dict> = { en, ar }
export const otherLocale = (locale: Locale): Locale => (locale === "en" ? "ar" : "en")
export const t = (locale: Locale) => dict[locale]

/** "Ahmad Nayfeh" in each language. */
export const ownerName: Record<Locale, string> = { en: "Ahmad Nayfeh", ar: "أحمد نايفة" }
