import PageHeader from "@/components/PageHeader"
import BlogGrid from "@/components/BlogGrid"
import { getAllPosts } from "@/lib/content"
import { otherLocale, t, type Locale } from "@/i18n"

/** Everything written, in two groups: technical articles and essays. Each piece keeps its own language. */
export default async function NotebookIndexView({ locale }: { locale: Locale }) {
  const d = t(locale)
  const od = t(otherLocale(locale))
  const posts = await getAllPosts()
  return (
    <>
      <PageHeader locale={locale} title={d.nav.notebook} other={od.nav.notebook} lead={`${d.notebook.description.split(". ")[0].replace(/\.$/, "")}. ${d.notebookPage.lead}`} />
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-20 pt-10 md:px-10 md:pb-28 md:pt-14">
        <BlogGrid posts={posts} locale={locale} />
      </div>
    </>
  )
}
