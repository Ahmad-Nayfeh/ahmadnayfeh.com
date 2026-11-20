import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/types"
import { splitTitle } from "@/components/projects/projectName"
import { cn } from "@/lib/utils"
import { localePath, type Locale } from "@/i18n"

/** One project as a ruled row: field, name and tagline, arrow. "dark" sits on the ink block. */
export default function ProjectRow({
  project,
  locale,
  tone = "dark",
  showExcerpt = false,
}: {
  project: Project
  locale: Locale
  tone?: "dark" | "light"
  showExcerpt?: boolean
}) {
  const { name, tagline } = splitTitle(project.title)
  const dark = tone === "dark"
  const ar = project.lang === "ar"
  return (
    <a
      href={localePath(locale, `/projects/${project.slug}/`)}
      dir={ar ? "rtl" : "ltr"}
      lang={ar ? "ar" : "en"}
      className={cn(
        "group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-1 py-5 md:grid-cols-[230px_minmax(0,1fr)_auto] md:py-6",
        dark ? "border-t border-white/25 last:border-b" : "rule-row",
      )}
    >
      <span dir="ltr" className={cn("col-span-2 text-[13.5px] md:col-span-1", ar && "text-end md:text-start", dark ? "text-white/55" : "text-muted-foreground")}>
        {project.tags.slice(0, 2).join(" · ")}
      </span>
      <span>
        <span
          className={cn(
            "font-display block text-[1.35rem] leading-tight tracking-[-0.02em] transition-colors md:text-[1.65rem] rtl:leading-[1.4]",
            dark ? "group-hover:text-[#8FA2FF]" : "group-hover:text-accent",
          )}
        >
          {name}
        </span>
        {tagline && <span className={cn("mt-1 block text-[15px]", dark ? "text-white/65" : "text-foreground/70")}>{tagline}</span>}
        {showExcerpt && project.excerpt && (
          <span className={cn("mt-2 block max-w-3xl text-[15px] leading-relaxed", dark ? "text-white/60" : "text-muted-foreground")}>{project.excerpt}</span>
        )}
      </span>
      <ArrowUpRight size={20} className={cn("transition-colors rtl:-scale-x-100", dark ? "text-white/60 group-hover:text-[#8FA2FF]" : "text-muted-foreground group-hover:text-accent")} />
    </a>
  )
}
