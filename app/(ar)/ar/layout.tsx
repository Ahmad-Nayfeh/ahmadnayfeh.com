import type React from "react"
import type { Metadata, Viewport } from "next"
import SiteShell from "@/components/layout/SiteShell"
import { siteConfig } from "@/config/site"

const title = "أحمد نايفه | مهندس تصميم كهربائي وبرمجيات"
const description = "مهندس تصميم كهربائي في قواطع الجهد المتوسط، يبني أدوات مدعومة بالذكاء الاصطناعي ويُصدر تطبيقات كاملة."

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: title, template: "%s | أحمد نايفه" },
  description,
  alternates: { languages: { en: "/", ar: "/ar/" } },
  openGraph: { title, description, url: `${siteConfig.url}/ar/`, siteName: "أحمد نايفه", type: "website", locale: "ar" },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F3EE" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1622" },
  ],
}

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="ar">{children}</SiteShell>
}
