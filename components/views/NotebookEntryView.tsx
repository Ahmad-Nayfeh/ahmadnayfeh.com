import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import PageHeader from "@/components/PageHeader"
import RelatedPosts from "@/components/RelatedPosts"
import TableOfContents from "@/components/TableOfContents"
import MdxRenderer from "@/components/MdxRenderer"
import { getPostBySlug, getRelatedPosts } from "@/lib/content"
import { extractHeadings } from "@/lib/utils"
import { localePath, ownerName, t, type Locale } from "@/i18n"

/** Hand-written posts start with their own "# Title"; the page header already shows it. */
function stripLeadingH1(md: string) {
  return md.replace(/^\s*#\s+[^\n]+\n/, "")
}

function longDate(dateString: string, lang: Locale) {
  const d = new Date(dateString)
  if (Number.isNaN(d.getTime())) return ""
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-u-nu-latn" : "en-US", { day: "numeric", month: "long", year: "numeric" }).format(d)
}

/** One notebook entry. The page frame follows the site language; the piece keeps its own. */
export default async function NotebookEntryView({ slug, locale }: { slug: string; locale: Locale }) {
  const d = t(locale)
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const related = await getRelatedPosts(post, 3)
  const toc = post.content ? extractHeadings(post.content) : []
  const hasCover = post.coverImage && !post.coverImage.startsWith("/placeholder")
  const Back = locale === "ar" ? ArrowRight : ArrowLeft
  const dir = post.lang === "ar" ? "rtl" : "ltr"

  return (
    <>
      <PageHeader
        locale={locale}
        size="md"
        contentLang={post.lang}
        eyebrow={
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href={localePath(locale, "/notebook/")} className="link-grow inline-flex items-center gap-2 pb-0.5 hover:text-white">
              <Back size={14} /> {d.notebookPage.back}
            </a>
            <span aria-hidden className="opacity-40">
              /
            </span>
            <span>{d.notebookPage.kindOne[post.kind]}</span>
            <span aria-hidden className="opacity-40">
              /
            </span>
            <time dateTime={post.date}>{longDate(post.date, locale)}</time>
            <span aria-hidden className="opacity-40">
              /
            </span>
            <span lang={post.lang} dir={dir}>{post.readTime}</span>
          </span>
        }
        title={post.title}
        lead={
          post.excerpt ? (
            <span lang={post.lang} dir={dir} className="block">
              {post.excerpt}
            </span>
          ) : undefined
        }
      >
        {post.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2" dir={dir}>
            {post.tags.map((tag) => (
              <li key={tag}>
                <a
                  href={`${localePath(locale, "/notebook/")}?tag=${encodeURIComponent(tag)}`}
                  className="chip-on-dark !font-normal"
                >
                  {tag}
                </a>
              </li>
            ))}
          </ul>
        )}
      </PageHeader>

      <div className="mx-auto w-full max-w-[1240px] px-5 pb-20 md:px-10 md:pb-28">
        <article lang={post.lang} dir={dir}>
          {hasCover && (
            <div className="media-tile relative mx-auto mt-10 aspect-[16/9] max-w-[1080px] !rounded-[22px]">
              <Image src={post.coverImage} alt="" fill className="object-contain p-2" priority sizes="(max-width: 1080px) 100vw, 1080px" />
            </div>
          )}

          <div className="mx-auto mt-12 grid max-w-[1080px] grid-cols-1 gap-x-12 xl:grid-cols-[minmax(0,760px)_240px] xl:justify-center">
            <div className="article-body min-w-0">{post.content && <MdxRenderer source={stripLeadingH1(post.content)} />}</div>
            <div className="hidden xl:block">
              <TableOfContents headings={toc} />
            </div>
          </div>

          <p className="label mx-auto mt-16 max-w-[1080px] border-t border-border pt-6">
            {ownerName[post.lang]} · {longDate(post.date, post.lang)}
          </p>
        </article>

        {related.length > 0 && (
          <section className="mx-auto mt-20 max-w-[1080px]">
            <h2 data-reveal className="font-display pb-5 text-[clamp(1.75rem,4vw,2.5rem)] leading-none rtl:leading-[1.4]">{d.notebookPage.keep}</h2>
            <RelatedPosts posts={related} locale={locale} />
          </section>
        )}
      </div>
    </>
  )
}
