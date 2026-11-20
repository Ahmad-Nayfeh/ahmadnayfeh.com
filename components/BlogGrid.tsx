"use client"

import { useEffect, useState } from "react"
import { Search } from "lucide-react"
import BlogCard from "@/components/BlogCard"
import type { Post } from "@/types"
import { cn } from "@/lib/utils"
import { t, type Locale } from "@/i18n"

type Kind = Post["kind"]

/**
 * The notebook list with its filters: kind of writing (shown only when more than
 * one kind exists), topic, and a text search. The chosen topic is kept in the
 * address (?tag=) so a filtered list can be shared.
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

  const kinds = Array.from(new Set(posts.map((p) => p.kind)))
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

      <div className="mb-8 grid grid-cols-1 gap-6 rounded-[18px] bg-card p-5 md:grid-cols-[minmax(240px,320px)_1fr] md:p-6">
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
              className="w-full rounded-full border border-border bg-background py-2.5 pe-4 ps-10 text-[15px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
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

      <div className="mb-3 flex items-center justify-between">
        <span className="label">
          <span dir="ltr">{filtered.length}</span> {filtered.length === 1 ? d.entry : d.entries}
          {tag ? ` · ${tag}` : ""}
        </span>
        {(tag || query) && (
          <button
            type="button"
            onClick={() => {
              setTag(null)
              setQuery("")
            }}
            className="text-[14px] font-semibold text-accent"
          >
            {d.clear}
          </button>
        )}
      </div>

      <div>
        {filtered.length > 0 ? (
          filtered.map((post) => <BlogCard key={post.slug} post={post} headingLevel={2} locale={locale} />)
        ) : (
          <p className="rule-row py-16 text-center text-muted-foreground">{d.none}</p>
        )}
      </div>
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
        "rounded-full border font-medium transition-colors",
        big ? "px-4 py-2 text-[14.5px]" : "px-3 py-1 text-[13px]",
        active ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
      )}
    >
      {children}
    </button>
  )
}
