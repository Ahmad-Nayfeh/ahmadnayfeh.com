import { ArrowRight, ArrowLeft, Mail, Linkedin, Github, FileDown } from "lucide-react"
import Hero from "@/components/home/Hero"
import Flagship from "@/components/home/Flagship"
import WorkSection from "@/components/home/WorkSection"
import SectionHeader from "@/components/drawing/SectionHeader"
import AppCard from "@/components/apps/AppCard"
import ProjectCard from "@/components/ProjectCard"
import BlogCard from "@/components/BlogCard"
import { getAllProjects, getHomeContent, getRecentPosts, getWorkContent } from "@/lib/content"
import { otherApps } from "@/content/apps"
import { siteConfig, tierOf } from "@/config/site"
import { localePath, t, type Locale } from "@/i18n"

/** The home page, in either language. */
export default async function HomeView({ locale }: { locale: Locale }) {
  const d = t(locale)
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight
  const [home, work, projects, posts] = await Promise.all([
    getHomeContent(locale),
    getWorkContent(locale),
    getAllProjects(),
    getRecentPosts(3),
  ])

  // Apps have their own section; Projects shows the engineering and research work only.
  const selected = projects.filter((p) => tierOf(p.category) !== "products").slice(0, 3)
  const moreLink = "redline inline-flex items-center gap-2 label !text-foreground"

  return (
    <>
      <Hero content={home} locale={locale} />

      <Flagship locale={locale} />

      <section id="apps" className="mx-auto w-full max-w-[1240px] scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          kicker={d.apps.kicker}
          title={d.apps.title}
          description={d.apps.description}
          action={
            <a href={localePath(locale, "/apps/")} className={moreLink}>
              {d.apps.all} <Arrow size={13} />
            </a>
          }
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherApps.slice(0, 6).map((app) => (
            <AppCard key={app.slug} app={app} locale={locale} />
          ))}
        </div>
      </section>

      {work && (
        <div className="border-y border-border bg-card/40">
          <WorkSection work={work} locale={locale} />
        </div>
      )}

      <section id="projects" className="mx-auto w-full max-w-[1240px] scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          kicker={d.projects.kicker}
          title={d.projects.title}
          description={d.projects.description}
          action={
            <a href={localePath(locale, "/projects/")} className={moreLink}>
              {d.projects.all} <Arrow size={13} />
            </a>
          }
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {selected.map((p) => (
            <ProjectCard key={p.slug} project={p} locale={locale} />
          ))}
        </div>
      </section>

      {posts.length > 0 && (
        <section id="notebook" className="border-y border-border bg-card/40">
          <div className="mx-auto w-full max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
            <SectionHeader
              kicker={d.notebook.kicker}
              title={d.notebook.title}
              description={d.notebook.description}
              action={
                <a href={localePath(locale, "/notebook/")} className={moreLink}>
                  {d.notebook.all} <Arrow size={13} />
                </a>
              }
            />
            {/* Writings keep their own language and direction. */}
            <div className="border-t-[1.5px] border-foreground" dir="ltr" lang="en">
              {posts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="contact" className="mx-auto w-full max-w-[1240px] scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
        <SectionHeader kicker={d.contact.kicker} title={d.contact.title} />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <p className="text-[1.15rem] leading-relaxed text-foreground/85 lg:col-span-5">{d.contact.body}</p>
          <div className="lg:col-span-7">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="group flex items-center justify-between gap-4 border-[1.5px] border-foreground bg-card px-5 py-5 transition-colors hover:border-accent md:px-7 md:py-6"
            >
              <span className="flex items-center gap-4">
                <Mail size={20} className="text-accent" />
                <span dir="ltr" className="text-[15px] font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-lg md:text-2xl">
                  {siteConfig.contact.email}
                </span>
              </span>
              <Arrow size={20} className="shrink-0" />
            </a>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <ContactLink href={siteConfig.links.linkedin} icon={<Linkedin size={15} />} label="LinkedIn" arrow={<Arrow size={14} />} />
              <ContactLink href={siteConfig.links.github} icon={<Github size={15} />} label="GitHub" arrow={<Arrow size={14} />} />
              <ContactLink href={siteConfig.resume} icon={<FileDown size={15} />} label={d.cv} arrow={<Arrow size={14} />} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactLink({ href, icon, label, arrow }: { href: string; icon: React.ReactNode; label: string; arrow: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between border border-border bg-card px-4 py-3 text-[14px] font-medium transition-colors hover:border-foreground"
    >
      <span className="flex items-center gap-2.5 text-muted-foreground">
        {icon}
        <span className="text-foreground">{label}</span>
      </span>
      <span className="text-muted-foreground">{arrow}</span>
    </a>
  )
}
