import PageHeader from "@/components/PageHeader"
import ProjectRow from "@/components/ProjectRow"
import { getAllProjects } from "@/lib/content"
import { tierOf } from "@/config/site"
import { otherLocale, t, type Locale } from "@/i18n"

/** Engineering and research projects, in either language. Apps are listed under /apps/. */
export default async function ProjectsIndexView({ locale }: { locale: Locale }) {
  const d = t(locale)
  const od = t(otherLocale(locale))
  const projects = await getAllProjects(locale)
  const groups = [
    { id: "research", title: d.projectsPage.research, items: projects.filter((p) => tierOf(p.category) === "research") },
    { id: "lab", title: d.projectsPage.lab, items: projects.filter((p) => tierOf(p.category) === "lab") },
  ]
  return (
    <>
      <PageHeader locale={locale} title={d.nav.projects} other={od.nav.projects} lead={d.projectsPage.lead} />
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-20 md:px-10 md:pb-28">
        {groups.map((g) =>
          g.items.length === 0 ? null : (
            <section key={g.id} id={g.id} className="scroll-mt-24 pt-12 md:pt-16">
              <h2 className="font-display pb-5 text-[clamp(1.75rem,4vw,2.5rem)] leading-none rtl:leading-[1.4]">{g.title}</h2>
              <div>
                {g.items.map((p) => (
                  <ProjectRow key={p.slug} project={p} locale={locale} tone="light" showExcerpt />
                ))}
              </div>
            </section>
          ),
        )}
      </div>
    </>
  )
}
