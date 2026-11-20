import type { Metadata } from "next"
import AppsIndexView from "@/components/views/AppsIndexView"
import { t } from "@/i18n"

export const metadata: Metadata = {
  title: t("en").nav.apps,
  description: t("en").appPage.lead,
  alternates: { canonical: "/apps/", languages: { en: "/apps/", ar: "/ar/apps/" } },
}

export default function AppsPage() {
  return <AppsIndexView locale="en" />
}
