import type { Metadata } from "next"
import AppsIndexView from "@/components/views/AppsIndexView"
import { t } from "@/i18n"

export const metadata: Metadata = {
  title: t("ar").nav.apps,
  description: t("ar").appPage.lead,
  alternates: { canonical: "/ar/apps/", languages: { en: "/apps/", ar: "/ar/apps/" } },
}

export default function AppsPage() {
  return <AppsIndexView locale="ar" />
}
