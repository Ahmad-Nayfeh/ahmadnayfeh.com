import type { Metadata } from "next"
import NotebookIndexView from "@/components/views/NotebookIndexView"
import { t } from "@/i18n"

export const metadata: Metadata = {
  title: t("en").nav.notebook,
  description: t("en").notebook.description,
  alternates: { canonical: "/notebook/", languages: { en: "/notebook/", ar: "/ar/notebook/" } },
}

export default function NotebookPage() {
  return <NotebookIndexView locale="en" />
}
