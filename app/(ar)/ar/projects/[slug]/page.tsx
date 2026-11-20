import type { Metadata } from "next"
import ProjectView from "@/components/views/ProjectView"
import { getAllProjects, getProjectBySlug } from "@/lib/content"
import { splitTitle } from "@/components/projects/projectName"

const locale = "ar" as const

export async function generateStaticParams() {
  return (await getAllProjects()).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug, locale)
  if (!project) return {}
  return {
    title: splitTitle(project.title).name,
    description: project.excerpt,
    alternates: { canonical: `/ar/projects/${slug}/`, languages: { en: `/projects/${slug}/`, ar: `/ar/projects/${slug}/` } },
    openGraph: { images: project.coverImage ? [project.coverImage] : [] },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ProjectView slug={slug} locale={locale} />
}
