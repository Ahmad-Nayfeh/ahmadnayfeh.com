import type { Metadata } from "next"
import ProjectsIndexView from "@/components/views/ProjectsIndexView"
import { t } from "@/i18n"

export const metadata: Metadata = {
  title: t("en").nav.projects,
  description: t("en").projectsPage.lead,
  alternates: { canonical: "/projects/", languages: { en: "/projects/", ar: "/ar/projects/" } },
}

export default function ProjectsPage() {
  return <ProjectsIndexView locale="en" />
}
