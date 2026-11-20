import localFont from "next/font/local"

/**
 * The fonts are stored in app/font-files/ and served by the site itself, so a
 * build never depends on fetching them from Google Fonts. All are under the
 * SIL Open Font License (see app/font-files/README.md).
 */

/** Latin running text. */
const inter = localFont({
  src: [{ path: "./font-files/inter-100-900.woff2", weight: "100 900", style: "normal" }],
  display: "swap",
  variable: "--font-sans",
})

/** Latin display type (names, headings). */
const bricolage = localFont({
  src: [{ path: "./font-files/bricolage-600-800.woff2", weight: "600 800", style: "normal" }],
  display: "swap",
  variable: "--font-display",
})

/** Arabic display type. */
const alexandria = localFont({
  src: [{ path: "./font-files/alexandria-600-800.woff2", weight: "600 800", style: "normal" }],
  display: "swap",
  variable: "--font-arabic-display",
})

/** Arabic running text. */
const plexArabic = localFont({
  src: [
    { path: "./font-files/plex-arabic-400.woff2", weight: "400", style: "normal" },
    { path: "./font-files/plex-arabic-500.woff2", weight: "500", style: "normal" },
    { path: "./font-files/plex-arabic-600.woff2", weight: "600", style: "normal" },
    { path: "./font-files/plex-arabic-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-arabic",
})

/** Article body. */
const plexSerif = localFont({
  src: [
    { path: "./font-files/plex-serif-400.woff2", weight: "400", style: "normal" },
    { path: "./font-files/plex-serif-500.woff2", weight: "500", style: "normal" },
    { path: "./font-files/plex-serif-600.woff2", weight: "600", style: "normal" },
    { path: "./font-files/plex-serif-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./font-files/plex-serif-500-italic.woff2", weight: "500", style: "italic" },
    { path: "./font-files/plex-serif-600-italic.woff2", weight: "600", style: "italic" },
  ],
  display: "swap",
  variable: "--font-serif",
})

/** Code. */
const plexMono = localFont({
  src: [
    { path: "./font-files/plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "./font-files/plex-mono-500.woff2", weight: "500", style: "normal" },
    { path: "./font-files/plex-mono-600.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-mono",
})

export const fontVariables = [inter, bricolage, alexandria, plexArabic, plexSerif, plexMono].map((f) => f.variable).join(" ")
