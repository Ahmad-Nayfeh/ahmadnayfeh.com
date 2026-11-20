import type { Metadata } from "next"
import NotebookEntryView from "@/components/views/NotebookEntryView"
import { getAllPosts, getPostBySlug } from "@/lib/content"

const locale = "en" as const

export async function generateStaticParams() {
  return (await getAllPosts()).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  // A writing exists in one language only, so both addresses point at the same canonical page.
  const canonical = post.lang === "ar" ? `/ar/notebook/${slug}/` : `/notebook/${slug}/`
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: { images: post.coverImage ? [post.coverImage] : [] },
  }
}

export default async function NotebookEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <NotebookEntryView slug={slug} locale={locale} />
}
