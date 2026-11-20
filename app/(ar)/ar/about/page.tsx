import type { Metadata } from "next"
import AboutView from "@/components/views/AboutView"
import { t } from "@/i18n"

export const metadata: Metadata = {
  title: t("ar").nav.about,
  description: t("ar").aboutPage.lead,
  alternates: { canonical: "/ar/about/", languages: { en: "/about/", ar: "/ar/about/" } },
}

export default function AboutPage() {
  return <AboutView locale="ar" />
}
