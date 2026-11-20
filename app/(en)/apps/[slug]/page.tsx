import type { Metadata } from "next"
import { notFound } from "next/navigation"
import AppView from "@/components/views/AppView"
import { apps } from "@/content/apps"
import { appDetails } from "@/content/apps/details"

const locale = "en" as const
const prefix = ""

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const app = apps.find((a) => a.slug === slug)
  const detail = appDetails[slug]
  if (!app || !detail) return {}
  return {
    title: app.name[locale],
    description: app.desc[locale],
    alternates: { canonical: `${prefix}/apps/${slug}/`, languages: { en: `/apps/${slug}/`, ar: `/ar/apps/${slug}/` } },
    openGraph: { title: app.name[locale], description: app.desc[locale], images: app.thumb ? [app.thumb] : undefined },
  }
}

export default async function AppPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!apps.some((a) => a.slug === slug) || !appDetails[slug]) notFound()
  return <AppView slug={slug} locale={locale} />
}
