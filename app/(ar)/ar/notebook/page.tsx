import type { Metadata } from "next"
import NotebookIndexView from "@/components/views/NotebookIndexView"
import { t } from "@/i18n"

export const metadata: Metadata = {
  title: t("ar").nav.notebook,
  description: t("ar").notebook.description,
  alternates: { canonical: "/ar/notebook/", languages: { en: "/notebook/", ar: "/ar/notebook/" } },
}

export default function NotebookPage() {
  return <NotebookIndexView locale="ar" />
}
