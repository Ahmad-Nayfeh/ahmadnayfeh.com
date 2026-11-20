/**
 * The apps shown on the site. One entry per app; the page for each lives at /apps/<slug>/.
 * `thumb` is optional: an app without one shows its icon on a plain tile.
 */
import type { L10n } from "./types"
export type { L10n } from "./types"

export interface AppEntry {
  slug: string
  group: "android" | "browser"
  name: L10n
  kind: L10n
  desc: L10n
  icon: string
  thumb?: string
  /** Shadhra only: it has its own site and store listing. */
  flagship?: boolean
  site?: string
  play?: string
}

const img = (f: string) => `/images/apps/${f}`

export const apps: AppEntry[] = [
  {
    slug: "shadhra",
    group: "android",
    flagship: true,
    site: "https://shadhra.app",
    play: "https://play.google.com/store/apps/details?id=app.shadhra",
    name: { en: "Shadhra", ar: "شذرة" },
    kind: { en: "Web app · Android", ar: "تطبيق ويب · أندرويد" },
    desc: {
      en: "Keep the quotes that stop you and your reflections in one library, link them, and write essays and books from them.",
      ar: "احفظ الاقتباسات التي تستوقفك وتأمّلاتك في مكتبة واحدة، واربط بينها، واكتب منها مقالاتك وكتبك.",
    },
    icon: img("icons/shadhra.png"),
    thumb: img("shadhra-card.webp"),
  },
  {
    slug: "khatwa",
    group: "android",
    name: { en: "Khatwa", ar: "خطوة" },
    kind: { en: "Android app", ar: "تطبيق أندرويد" },
    desc: {
      en: "Counts your steps, locks your phone until you walk, and turns walking into a game.",
      ar: "يعدّ خطواتك، ويقفل جوالك حتى تمشي، ويحوّل المشي إلى لعبة.",
    },
    icon: img("icons/khatwa.png"),
    thumb: img("khatwa-card.webp"),
  },
  {
    slug: "marathon",
    group: "android",
    name: { en: "Reading Marathon", ar: "ماراثون القراءة" },
    kind: { en: "Android app", ar: "تطبيق أندرويد" },
    desc: {
      en: "Log your reading time in your own books with one tap, and read a shared book with your group, with points and a ranking.",
      ar: "سجّل وقت قراءتك في كتبك بلمسة، واقرأ كتاباً مشتركاً مع مجموعتك، بنقاط وترتيب.",
    },
    icon: img("icons/marathon.svg"),
    thumb: img("marathon-card.webp"),
  },
  {
    slug: "shasha",
    group: "android",
    name: { en: "Shasha", ar: "شاشة" },
    kind: { en: "Android TV · Android", ar: "أندرويد TV · أندرويد" },
    desc: {
      en: "Calm YouTube for the family TV and phone: no ads, with full protection for children.",
      ar: "يوتيوب هادئ لتلفاز البيت والجوال: بلا إعلانات، وبحماية كاملة للأطفال.",
    },
    icon: img("icons/shasha.png"),
    thumb: img("shasha-card.webp"),
  },
  {
    slug: "voxa",
    group: "browser",
    name: { en: "Voxa", ar: "Voxa" },
    kind: { en: "Web app · Android", ar: "تطبيق ويب · أندرويد" },
    desc: {
      en: "Turns voice notes, meetings, lectures and YouTube videos into text that shows who said what, with summary, translation and export.",
      ar: "يحوّل الملاحظات الصوتية والاجتماعات والمحاضرات ومقاطع يوتيوب إلى نص يبيّن من قال ماذا، مع تلخيص وترجمة وتصدير.",
    },
    icon: img("icons/voxa.svg"),
    thumb: img("voxa-shot.webp"),
  },
  {
    slug: "munazara",
    group: "browser",
    name: { en: "Munazara", ar: "مناظرة" },
    kind: { en: "Web app", ar: "تطبيق ويب" },
    desc: {
      en: "A structured debate between friends: every reply sits under the point it answers, and you see what is waiting on you and on your friend.",
      ar: "مناظرة منظّمة بين الأصدقاء: كل ردّ تحت النقطة التي يرد عليها، ويظهر ما ينتظر ردّك وردّ صاحبك.",
    },
    icon: img("icons/munazara.svg"),
    thumb: img("munazara-shot.webp"),
  },
  {
    slug: "grid-shift",
    group: "browser",
    name: { en: "Grid Shift", ar: "مناوبة الشبكة" },
    kind: { en: "Browser game", ar: "لعبة متصفح" },
    desc: {
      en: "Be the duty control engineer: locate the cable fault and restore power to customers safely.",
      ar: "كن مهندس التحكم المناوب: حدّد عطل الكابل، وأعِد الكهرباء للمشتركين بأمان.",
    },
    icon: img("icons/grid-shift.svg"),
    thumb: img("grid-shift-shot.webp"),
  },
  {
    slug: "reel",
    group: "android",
    name: { en: "Reel", ar: "Reel" },
    kind: { en: "Android app", ar: "تطبيق أندرويد" },
    desc: {
      en: "Ad-free video and music player that plays AC3 and DTS audio and remembers where you stopped.",
      ar: "مشغّل فيديو وموسيقى بلا إعلانات، يشغّل صوت AC3 وDTS ويتذكّر أين توقفت.",
    },
    icon: img("icons/reel.svg"),
  },
]

export const flagshipApp = apps.find((a) => a.flagship)!
export const otherApps = apps.filter((a) => !a.flagship)
