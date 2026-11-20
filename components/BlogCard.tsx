import { ArrowUpRight } from "lucide-react"
import type { Post } from "@/types"
import { localePath, t, type Locale } from "@/i18n"

function shortDate(dateString: string, lang: "en" | "ar") {
  const d = new Date(dateString)
  if (Number.isNaN(d.getTime())) return ""
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-u-nu-latn" : "en-US", { month: "short", year: "numeric" }).format(d)
}

/**
 * One notebook entry as a ruled row: date, title and summary, reading time.
 * The row is laid out in the piece's own language and direction, whatever the page language.
 */
export default function BlogCard({ post, headingLevel = 3, locale = "en" }: { post: Post; index?: number; headingLevel?: 2 | 3; locale?: Locale }) {
  const Heading = headingLevel === 2 ? "h2" : "h3"
  const foreign = post.lang !== locale
  return (
    <a
      href={localePath(locale, `/notebook/${post.slug}/`)}
      dir={post.lang === "ar" ? "rtl" : "ltr"}
      lang={post.lang}
      className="rule-row group grid grid-cols-1 gap-x-7 gap-y-2 py-6 md:grid-cols-[150px_minmax(0,1fr)_auto] md:items-baseline"
    >
      <span className="flex flex-wrap items-center gap-2">
        <time dateTime={post.date} className="label">
          {shortDate(post.date, post.lang)}
        </time>
        {foreign && (
          <span lang={locale} className="chip">
            {t(locale).notebookPage.langName[post.lang]}
          </span>
        )}
      </span>
      <div>
        <Heading className="font-display text-[1.4rem] leading-tight tracking-[-0.02em] transition-colors group-hover:text-accent md:text-[1.7rem] rtl:leading-[1.45]">
          {post.title}
        </Heading>
        {post.source && <p className="mt-1 text-[14.5px] font-medium text-accent">{post.source}</p>}
        {post.excerpt && <p className="mt-2 line-clamp-2 max-w-3xl text-[15.5px] leading-relaxed text-foreground/70">{post.excerpt}</p>}
        {post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {post.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <span className="hidden items-center gap-2 md:flex">
        <span className="label">{post.readTime}</span>
        <ArrowUpRight size={18} className="text-muted-foreground transition-colors group-hover:text-accent rtl:-scale-x-100" />
      </span>
    </a>
  )
}
