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

/**
 * Arabic display type. No metric fallback is generated (it would be the system Arial,
 * which would draw Latin names inside Arabic headings); Bricolage follows it in the stack.
 */
const alexandria = localFont({
  src: [{ path: "./font-files/alexandria-600-800.woff2", weight: "600 800", style: "normal" }],
  display: "swap",
  variable: "--font-arabic-display",
  adjustFontFallback: false,
})

/**
 * Arabic running text. The face is limited to Arabic letters (unicode-range), so in
 * the stack "Plex Arabic, Inter" Arabic is drawn by Plex Arabic and Latin letters and
 * digits by Inter. No metric fallback is generated for it: that fallback is the
 * system Arial, which would otherwise take the Latin letters before Inter does.
 * (next/font needs the range written out as a literal.)
 */
const plexArabic = localFont({
  src: [
    { path: "./font-files/plex-arabic-400.woff2", weight: "400", style: "normal" },
    { path: "./font-files/plex-arabic-500.woff2", weight: "500", style: "normal" },
    { path: "./font-files/plex-arabic-600.woff2", weight: "600", style: "normal" },
    { path: "./font-files/plex-arabic-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-arabic",
  adjustFontFallback: false,
  declarations: [{ prop: "unicode-range", value: "U+0600-06FF, U+0750-077F, U+0870-088E, U+0890-0891, U+0897-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC" }],
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
