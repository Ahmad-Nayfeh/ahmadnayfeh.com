import { Inter, Bricolage_Grotesque, Alexandria, IBM_Plex_Serif, IBM_Plex_Mono, IBM_Plex_Sans_Arabic } from "next/font/google"

/** Latin running text. */
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" })
/** Latin display type (names, headings). */
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], display: "swap", weight: ["600", "700", "800"], variable: "--font-display" })
/** Arabic display type. */
const alexandria = Alexandria({ subsets: ["arabic"], display: "swap", weight: ["600", "700", "800"], variable: "--font-arabic-display" })
/** Arabic running text. */
const plexArabic = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], display: "swap", weight: ["400", "500", "600", "700"], variable: "--font-arabic" })
/** Article body and code. */
const plexSerif = IBM_Plex_Serif({ subsets: ["latin"], display: "swap", weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-serif" })
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], display: "swap", weight: ["400", "500", "600"], variable: "--font-mono" })

export const fontVariables = [inter, bricolage, alexandria, plexArabic, plexSerif, plexMono].map((f) => f.variable).join(" ")
