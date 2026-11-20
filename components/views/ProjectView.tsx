import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react"
import PageHeader from "@/components/PageHeader"
import ProjectRow from "@/components/ProjectRow"
import MarkdownRenderer from "@/components/MarkdownRenderer"
import { getProjectBySlug, getAllProjects } from "@/lib/content"
import { hasLink, splitTitle } from "@/components/projects/projectName"
import { tierOf } from "@/config/site"
import { localePath, t, type Locale } from "@/i18n"

/** Project write-ups start with their own "# Title"; the page header already shows it. */
function stripLeadingH1(md: string) {
  return md.replace(/^\s*#\s+[^\n]+\n/, "")
}

function longDate(dateString: string, locale: Locale) {
  const d = new Date(dateString)
  if (Number.isNaN(d.getTime())) return ""
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-u-nu-latn" : "en-US", { month: "long", year: "numeric" }).format(d)
}

/** One project's page, in either language. */
export default async function ProjectView({ slug, locale }: { slug: string; locale: Locale }) {
  const d = t(locale)
  const project = await getProjectBySlug(slug, locale)
  if (!project) notFound()

  const all = await getAllProjects(locale)
  const idx = all.findIndex((p) => p.slug === project.slug)
  const prev = idx > 0 ? all[idx - 1] : null
  const next = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null
  const related = all.filter((p) => p.slug !== project.slug && tierOf(p.category) === tierOf(project.category)).slice(0, 3)

  const lang: Locale = project.lang === "ar" ? "ar" : "en"
  const { name, tagline } = splitTitle(project.title)
  const hasCover = project.coverImage && !project.coverImage.startsWith("/placeholder")
  const Back = locale === "ar" ? ArrowRight : ArrowLeft
  const facts: { label: string; value: React.ReactNode }[] = [{ label: d.projectsPage.date, value: longDate(project.date, locale) }]
  if (project.role) facts.push({ label: d.projectsPage.role, value: project.role })
  if (project.result) facts.push({ label: d.projectsPage.result, value: project.result })

  return (
    <>
      <PageHeader
        locale={locale}
        size="md"
        contentLang={lang}
        eyebrow={
          <a href={localePath(locale, "/projects/")} className="inline-flex items-center gap-2 hover:text-white">
            <Back size={14} /> {d.projectsPage.back}
          </a>
        }
        title={name}
        lead={
          <span lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} className="block">
            {tagline && <span className="block text-[1.3rem] font-semibold leading-snug md:text-[1.5rem]">{tagline}</span>}
            {project.excerpt && <span className="mt-3 block">{project.excerpt}</span>}
          </span>
        }
      >
        <div className="flex flex-wrap gap-3">
          {hasLink(project.liveDemoUrl) && (
            <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-on-brand">
              {project.linkLabel ?? d.projectsPage.live} <ArrowUpRight size={16} className="rtl:-scale-x-100" />
            </a>
          )}
          {hasLink(project.githubLink) && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-on-brand-ghost">
              <Github size={16} /> {d.projectsPage.source}
            </a>
          )}
        </div>
        <ul className="mt-7 flex flex-wrap gap-2" dir="ltr">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-white/30 px-3 py-1 text-[13.5px]">
              {tag}
            </li>
          ))}
        </ul>
      </PageHeader>

      <div className="mx-auto w-full max-w-[1240px] px-5 pb-20 md:px-10 md:pb-28">
        <dl className="grid grid-cols-1 gap-x-10 border-b-[1.5px] border-foreground md:grid-cols-3">
          {facts.map((f) => (
            <div key={f.label} className="py-5">
              <dt className="label">{f.label}</dt>
              <dd className="mt-1 text-[15.5px] leading-snug" lang={f.label === d.projectsPage.date ? undefined : lang}>
                {f.value}
              </dd>
            </div>
          ))}
        </dl>

        {project.highlights.length > 0 && (
          <ul className="grid grid-cols-1 gap-x-10 pt-6 md:grid-cols-2" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 border-b border-border py-3 text-[15.5px] leading-relaxed">
                <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {hasCover && (
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[22px] border border-border bg-card">
            <Image src={project.coverImage} alt="" fill className="object-cover" priority sizes="(max-width: 1240px) 100vw, 1240px" />
          </div>
        )}

        <article className="mx-auto mt-12 max-w-[820px] md:mt-16" dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
          {project.content && (
            <div className="project-prose-container">
              <MarkdownRenderer content={stripLeadingH1(project.content)} />
            </div>
          )}
        </article>

        {(prev || next) && (
          <nav aria-label={d.nav.projects} className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2">
            {prev ? (
              <a href={localePath(locale, `/projects/${prev.slug}/`)} className="group rounded-[18px] bg-card p-6 transition-colors hover:bg-secondary">
                <span className="label">{d.projectsPage.newer}</span>
                <span className="font-display mt-2 block text-[1.3rem] leading-tight tracking-[-0.02em] group-hover:text-accent" lang={prev.lang === "ar" ? "ar" : "en"}>
                  {splitTitle(prev.title).name}
                </span>
              </a>
            ) : (
              <span />
            )}
            {next && (
              <a href={localePath(locale, `/projects/${next.slug}/`)} className="group rounded-[18px] bg-card p-6 text-end transition-colors hover:bg-secondary">
                <span className="label">{d.projectsPage.older}</span>
                <span className="font-display mt-2 block text-[1.3rem] leading-tight tracking-[-0.02em] group-hover:text-accent" lang={next.lang === "ar" ? "ar" : "en"}>
                  {splitTitle(next.title).name}
                </span>
              </a>
            )}
          </nav>
        )}

        {related.length > 0 && (
          <section className="mt-16">
            {related.map((p) => (
              <ProjectRow key={p.slug} project={p} locale={locale} tone="light" />
            ))}
          </section>
        )}
      </div>
    </>
  )
}
