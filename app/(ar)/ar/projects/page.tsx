import type { Metadata } from "next"
import ProjectsIndexView from "@/components/views/ProjectsIndexView"
import { t } from "@/i18n"

export const metadata: Metadata = {
  title: t("ar").nav.projects,
  description: t("ar").projectsPage.lead,
  alternates: { canonical: "/ar/projects/", languages: { en: "/projects/", ar: "/ar/projects/" } },
}

export default function ProjectsPage() {
  return <ProjectsIndexView locale="ar" />
}
