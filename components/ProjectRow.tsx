import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/types"
import { splitTitle } from "@/components/projects/projectName"
import { cn } from "@/lib/utils"
import { localePath, type Locale } from "@/i18n"

/**
 * One project as a line of a numbered index: a large number, then the field,
 * the name and one or two lines of text. Projects have no pictures, so the
 * number carries the row. The arrow appears on hover (it is always shown on
 * touch screens). "dark" sits on the ink block.
 */
export default function ProjectRow({
  project,
  locale,
  tone = "dark",
  showExcerpt = false,
  index,
}: {
  project: Project
  locale: Locale
  tone?: "dark" | "light"
  showExcerpt?: boolean
  /** Position in the list, shown as 01, 02... */
  index?: number
}) {
  const { name, tagline } = splitTitle(project.title)
  const dark = tone === "dark"
  const ar = project.lang === "ar"
  const line = tagline || (showExcerpt ? "" : project.excerpt)
  return (
    <a
      href={localePath(locale, `/projects/${project.slug}/`)}
      dir={ar ? "rtl" : "ltr"}
      lang={ar ? "ar" : "en"}
      data-reveal
      className={cn(
        "index-row row-hover group grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-4 gap-y-3 py-7 md:items-start md:grid-cols-[112px_minmax(0,1fr)_auto] md:gap-x-8 md:py-9",
        dark && "index-row-dark row-hover-dark",
      )}
    >
      <span dir="ltr" className={cn("index-num font-display md:row-span-2", dark ? "text-[#8FA2FF]" : "text-accent")}>
        {index !== undefined ? String(index + 1).padStart(2, "0") : "→"}
      </span>
      <span dir="ltr" className={cn("text-[13px] font-medium", ar && "text-end md:text-start", dark ? "text-white/60" : "text-muted-foreground")}>
        {project.tags.slice(0, 2).join(" · ")}
      </span>
      <span className="reveal-arrow hidden md:col-start-3 md:row-span-2 md:row-start-1 md:inline-flex md:self-center" aria-hidden>
        <span className={cn("arrow-dot", dark && "arrow-dot-dark")}>
          <ArrowUpRight size={18} className="nudge rtl:-scale-x-100" />
        </span>
      </span>
      <span className="col-span-2 md:col-span-1 md:col-start-2">
        <span
          className={cn(
            "font-display block text-[1.5rem] leading-[1.15] tracking-[-0.02em] transition-colors md:text-[2.1rem] rtl:leading-[1.4]",
            dark ? "group-hover:text-[#8FA2FF]" : "group-hover:text-accent",
          )}
        >
          {name}
        </span>
        {line && <span className={cn("mt-2 line-clamp-3 max-w-3xl text-[15.5px] leading-relaxed md:line-clamp-2 md:text-[1.05rem]", dark ? "text-white/70" : "text-foreground/75")}>{line}</span>}
        {showExcerpt && project.excerpt && (
          <span className={cn("mt-2 line-clamp-3 max-w-3xl text-[15px] leading-relaxed md:line-clamp-2", dark ? "text-white/55" : "text-muted-foreground")}>{project.excerpt}</span>
        )}
      </span>
    </a>
  )
}
