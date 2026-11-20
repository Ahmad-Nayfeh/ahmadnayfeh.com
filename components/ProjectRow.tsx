import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/types"
import { splitTitle } from "@/components/projects/projectName"
import { localePath, type Locale } from "@/i18n"

/** One project as a ruled row on the ink block: field, name and tagline, arrow. */
export default function ProjectRow({ project, locale }: { project: Project; locale: Locale }) {
  const { name, tagline } = splitTitle(project.title)
  return (
    <a
      href={localePath(locale, `/projects/${project.slug}/`)}
      dir="ltr"
      lang="en"
      className="group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-1 border-t border-white/25 py-5 last:border-b md:grid-cols-[230px_minmax(0,1fr)_auto] md:py-6"
    >
      <span className="col-span-2 text-[13.5px] text-white/55 md:col-span-1">{project.tags.slice(0, 2).join(" · ")}</span>
      <span>
        <span className="font-display block text-[1.35rem] leading-tight tracking-[-0.02em] transition-colors group-hover:text-[#8FA2FF] md:text-[1.65rem]">{name}</span>
        {tagline && <span className="mt-1 block text-[15px] text-white/65">{tagline}</span>}
      </span>
      <ArrowUpRight size={20} className="text-white/60 transition-colors group-hover:text-[#8FA2FF]" />
    </a>
  )
}
