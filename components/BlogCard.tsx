import { ArrowUpRight } from "lucide-react"
import type { Post } from "@/types"

function shortDate(dateString: string) {
  const d = new Date(dateString)
  if (Number.isNaN(d.getTime())) return ""
  return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(d)
}

/** One notebook entry as a ruled row: date, title and summary, reading time. */
export default function BlogCard({ post, headingLevel = 3 }: { post: Post; index?: number; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3"
  return (
    <a
      href={`/notebook/${post.slug}/`}
      className="rule-row group grid grid-cols-1 gap-x-7 gap-y-2 py-6 md:grid-cols-[150px_minmax(0,1fr)_auto] md:items-baseline"
    >
      <time dateTime={post.date} className="label">
        {shortDate(post.date)}
      </time>
      <div>
        <Heading className="font-display text-[1.4rem] leading-tight tracking-[-0.02em] transition-colors group-hover:text-accent md:text-[1.7rem]">
          {post.title}
        </Heading>
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
        <ArrowUpRight size={18} className="text-muted-foreground transition-colors group-hover:text-accent" />
      </span>
    </a>
  )
}
