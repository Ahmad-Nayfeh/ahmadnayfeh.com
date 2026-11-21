"use client"

import { useEffect, useState } from "react"
import { Search } from "lucide-react"
import BlogCard from "@/components/BlogCard"
import type { Post } from "@/types"
import { cn } from "@/lib/utils"
import { entriesLabel, t, type Locale } from "@/i18n"

type Kind = Post["kind"]
const KIND_ORDER: Kind[] = ["article", "essay"]

/**
 * The notebook list. The two kinds of writing, technical articles and essays, are
 * shown as two groups, each with its own heading and count; a group with nothing
 * in it is not shown. Filters: kind (shown only when both kinds exist), topic, and
 * a text search. The chosen topic is kept in the address (?tag=) so a filtered
 * list can be shared.
 */
export default function BlogGrid({ posts, locale }: { posts: Post[]; locale: Locale }) {
  const d = t(locale).notebookPage
  const [query, setQuery] = useState("")
  const [tag, setTagState] = useState<string | null>(null)
  const [kind, setKind] = useState<Kind | null>(null)

  useEffect(() => {
    setTagState(new URLSearchParams(window.location.search).get("tag"))
  }, [])

  const setTag = (next: string | null) => {
    setTagState(next)
    const url = new URL(window.location.href)
    if (next) url.searchParams.set("tag", next)
    else url.searchParams.delete("tag")
    window.history.replaceState(null, "", url)
  }

  const kinds = KIND_ORDER.filter((k) => posts.some((p) => p.kind === k))
  const inKind = posts.filter((p) => (kind ? p.kind === kind : true))
  const allTags = Array.from(new Set(inKind.flatMap((p) => p.tags))).sort()
  const q = query.trim().toLowerCase()
  const filtered = inKind.filter(
    (p) => (q === "" || p.title.toLowerCase().includes(q) || (p.excerpt ?? "").toLowerCase().includes(q)) && (tag ? p.tags.includes(tag) : true),
  )

  return (
    <div>
      {kinds.length > 1 && (
        <div className="mb-6 flex flex-wrap gap-2">
          <Pill active={kind === null} onClick={() => setKind(null)} big>
            {d.all}
          </Pill>
          {kinds.map((k) => (
            <Pill key={k} active={kind === k} onClick={() => setKind(k)} big>
              {d.kinds[k]}
            </Pill>
          ))}
        </div>
      )}

      <div className="panel mb-8 grid grid-cols-1 gap-6 p-5 md:grid-cols-[minmax(240px,320px)_1fr] md:p-6">
        <div>
          <label htmlFor="search-posts" className="label mb-2 block">
            {d.search}
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="search-posts"
              type="search"
              placeholder={d.searchHint}
              className="w-full rounded-full border border-border bg-background py-2.5 pe-4 ps-10 text-[15px] outline-none transition-[border-color,box-shadow] placeholder:text-muted-foreground/60 focus:border-accent focus:shadow-[0_0_0_4px_hsl(var(--accent)/0.15)]"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        {allTags.length > 0 && (
          <div>
            <div className="label mb-2">{d.topics}</div>
            <div className="flex flex-wrap gap-1.5">
              <Pill active={tag === null} onClick={() => setTag(null)}>
                {d.all}
              </Pill>
              {allTags.map((x) => (
                <Pill key={x} active={tag === x} onClick={() => setTag(x)}>
                  {x}
                </Pill>
              ))}
            </div>
          </div>
        )}
      </div>

      {(tag || query) && (
        <div className="mb-2 flex items-center justify-between">
          <span className="label">
            {entriesLabel(locale, filtered.length)}
            {tag ? ` · ${tag}` : ""}
          </span>
          <button
            type="button"
            onClick={() => {
              setTag(null)
              setQuery("")
            }}
            className="link-grow pb-0.5 text-[14px] font-semibold text-accent"
          >
            {d.clear}
          </button>
        </div>
      )}

      {filtered.length > 0 ? (
        KIND_ORDER.map((k) => {
          const items = filtered.filter((p) => p.kind === k)
          if (items.length === 0) return null
          const plain = !tag && !q
          return (
            <section key={k} id={k === "article" ? "articles" : "essays"} className="pt-10 first-of-type:pt-4 md:pt-14">
              <div className="flex items-baseline justify-between gap-6 pb-6">
                <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-none rtl:leading-[1.4]">{d.kinds[k]}</h2>
                <span className="label shrink-0">
                  {entriesLabel(locale, items.length)}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                {/* The newest entry of a group leads as a large card while the list is not filtered. */}
                {items.map((post, i) => (
                  <BlogCard key={post.slug} post={post} headingLevel={3} locale={locale} featured={plain && i === 0 && (k === "article" || items.length % 2 === 1)} />
                ))}
              </div>
            </section>
          )
        })
      ) : (
        <p className="panel py-16 text-center text-muted-foreground">{d.none}</p>
      )}
    </div>
  )
}

function Pill({ active, onClick, children, big }: { active: boolean; onClick: () => void; children: React.ReactNode; big?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "press rounded-full border font-medium",
        big ? "px-4 py-2 text-[14.5px]" : "px-3 py-1 text-[13px]",
        active ? "border-foreground bg-foreground text-background" : "border-border bg-background text-muted-foreground hover:border-foreground hover:text-foreground",
      )}
    >
      {children}
    </button>
  )
}
