/**
 * Shape of one app's page (/apps/<slug>/). Every visible string exists in
 * English and Arabic. Files an app offers for download live in
 * public/apps/<slug>/ and are published by that app's own repository.
 */
export type L10n = { en: string; ar: string }

export interface AppDownload {
  /** Button text, e.g. "Download the app (APK)". */
  label: L10n
  /**
   * Where the button goes. A path relative to /apps/<slug>/ ("khatwa-0.10.0.apk", "app/")
   * or a full https:// address.
   */
  href: string
  kind: "apk" | "zip" | "pdf" | "open" | "external"
  /** The main button is filled; the rest are outlined. Exactly one per app. */
  primary?: boolean
  /**
   * Which entry of public/apps/<slug>/latest.json describes this file: "." when the
   * file describes one release, or a key such as "tv" when it holds several.
   * When set, the version and size shown on the page come from latest.json at build
   * time, so a release never needs an edit here.
   */
  release?: string
  /** Fallbacks, used only when latest.json has no entry for this file. */
  version?: string
  /** Human-readable size, e.g. "4.4 MB". */
  size?: string
  /** One short line under the button, e.g. "Android 8 or newer". */
  note?: L10n
}

export interface AppTextItem {
  title: L10n
  body: L10n
}

export interface AppShot {
  /** Site path, e.g. "/images/apps/khatwa/home.webp". */
  src: string
  caption: L10n
  /** "phone" for tall phone screenshots, "wide" for TV, desktop or landscape pictures. */
  shape: "phone" | "wide"
}

export interface AppDetail {
  slug: string
  /** The page headline: what the app does for you, in a few words. */
  tagline: L10n
  /** One paragraph under the headline. */
  intro: L10n
  /** Short facts shown as chips: "Free", "Arabic and English", "Works offline". */
  facts: L10n[]
  downloads: AppDownload[]
  video?: { src: string; poster?: string; captions?: string; captionsLang?: "ar" | "en"; title: L10n }
  features: AppTextItem[]
  screenshots: AppShot[]
  /** Extra titled groups of items that the old page had beyond "features" (optional). */
  sections?: { title: L10n; intro?: L10n; items: AppTextItem[] }[]
  /** Install or getting-started steps, in order. */
  install?: AppTextItem[]
  faq?: { q: L10n; a: L10n }[]
  /** Small print: disclaimers and credits (map data, weather source, licences). */
  notes?: L10n[]
  /** Other pages or files of this app: privacy policy, guides. href as in AppDownload. */
  links?: { label: L10n; href: string }[]
  /** How it was built, for readers evaluating the work. */
  build?: { stack: string[]; body: L10n; highlights?: L10n[] }
}
