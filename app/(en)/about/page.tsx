import type { Metadata } from "next"
import AboutView from "@/components/views/AboutView"
import { t } from "@/i18n"

export const metadata: Metadata = {
  title: t("en").nav.about,
  description: t("en").aboutPage.lead,
  alternates: { canonical: "/about/", languages: { en: "/about/", ar: "/ar/about/" } },
}

export default function AboutPage() {
  return <AboutView locale="en" />
}
