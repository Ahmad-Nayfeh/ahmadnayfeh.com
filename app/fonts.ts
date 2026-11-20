import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono, IBM_Plex_Sans_Arabic } from "next/font/google"

const plexSans = IBM_Plex_Sans({ subsets: ["latin"], display: "swap", weight: ["400", "500", "600", "700"], variable: "--font-sans" })
const plexSerif = IBM_Plex_Serif({ subsets: ["latin"], display: "swap", weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-serif" })
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], display: "swap", weight: ["400", "500", "600"], variable: "--font-mono" })
const plexArabic = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], display: "swap", weight: ["400", "500", "600", "700"], variable: "--font-arabic" })

export const fontVariables = `${plexSans.variable} ${plexSerif.variable} ${plexMono.variable} ${plexArabic.variable}`
