import Image from "next/image"
import { ArrowUpRight, Clock } from "lucide-react"
import type { Post } from "@/types"
import { cn } from "@/lib/utils"
import { localePath, t, type Locale } from "@/i18n"

function shortDate(dateString: string, lang: "en" | "ar") {
  const d = new Date(dateString)
  if (Number.isNaN(d.getTime())) return ""
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-u-nu-latn" : "en-US", { month: "short", year: "numeric" }).format(d)
}

/**
 * One notebook entry as a card: kind, date and reading time, then the title, a
 * short summary and the topics. "featured" is the large card used for the newest
 * entry: it also shows the cover picture.
 * The two kinds differ a little. A technical article is set in the display face
 * with its topics. An essay is more literary: a serif title (the Arabic text face
 * for Arabic), a longer summary, no cover and an accent line at the reading side.
 * The card is laid out in the piece's own language and direction, whatever the page language.
 */
export default function BlogCard({
  post,
  headingLevel = 3,
  locale = "en",
  featured = false,
}: {
  post: Post
  index?: number
  headingLevel?: 2 | 3
  locale?: Locale
  featured?: boolean
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3"
  const d = t(locale).notebookPage
  const foreign = post.lang !== locale
  const essay = post.kind === "essay"
  const cover = featured && !essay && post.coverImage && !post.coverImage.startsWith("/placeholder") ? post.coverImage : null
  return (
    <a
      href={localePath(locale, `/notebook/${post.slug}/`)}
      dir={post.lang === "ar" ? "rtl" : "ltr"}
      lang={post.lang}
      data-reveal
      className={cn("note-card group flex flex-col", essay && "note-card-essay", featured && "md:col-span-2", cover && "md:grid md:grid-cols-[1fr_1.1fr]")}
    >
      {cover && (
        <div className="note-cover relative aspect-[16/9] md:order-last md:aspect-auto md:min-h-[300px]">
          <Image src={cover} alt="" fill sizes="(max-width: 768px) 100vw, 600px" className="zoom object-contain p-3 md:p-5" />
        </div>
      )}
      <div className={cn("flex flex-1 flex-col p-6 md:p-7", featured && "md:p-10")}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-medium text-muted-foreground">
          <span lang={locale} className="rounded-full bg-accent/10 px-2.5 py-[3px] font-semibold text-accent">
            {d.kindOne[post.kind]}
          </span>
          <time dateTime={post.date}>{shortDate(post.date, post.lang)}</time>
          {post.readTime && (
            <span className="inline-flex items-center gap-1.5">
              <Clock size={13} aria-hidden />
              {post.readTime}
            </span>
          )}
          {foreign && (
            <span lang={locale} className="chip">
              {d.langName[post.lang]}
            </span>
          )}
        </div>
        <Heading
          className={cn(
            "mt-4 text-balance transition-colors group-hover:text-accent",
            essay
              ? "essay-title text-[1.6rem] leading-[1.25] md:text-[1.9rem] rtl:leading-[1.6]"
              : "font-display text-[1.45rem] leading-[1.18] tracking-[-0.02em] rtl:leading-[1.45]",
            !essay && (featured ? "md:text-[2.25rem] md:leading-[1.1]" : "md:text-[1.6rem]"),
            essay && featured && "md:text-[2.3rem]",
          )}
        >
          {post.title}
        </Heading>
        {post.excerpt && (
          <p
            className={cn(
              "mt-3 text-muted-foreground",
              essay ? "essay-summary line-clamp-4 text-[1.05rem] leading-[1.75] rtl:leading-[1.95]" : "line-clamp-2 text-[15.5px] leading-relaxed",
              featured && !essay && "md:line-clamp-3 md:text-[1.05rem]",
            )}
          >
            {post.excerpt}
          </p>
        )}
        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
          <span className="arrow-dot !h-9 !w-9" aria-hidden>
            <ArrowUpRight size={16} className="nudge rtl:-scale-x-100" />
          </span>
        </div>
      </div>
    </a>
  )
}
