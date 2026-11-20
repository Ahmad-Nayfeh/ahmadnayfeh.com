import type React from "react"
import type { Metadata, Viewport } from "next"
import SiteShell from "@/components/layout/SiteShell"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: "%s | Ahmad Nayfeh" },
  description: siteConfig.description,
  alternates: { languages: { en: "/", ar: "/ar/" } },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F3EE" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1622" },
  ],
}

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>
}
