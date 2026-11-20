import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react"
import Hero from "@/components/home/Hero"
import WorkSection from "@/components/home/WorkSection"
import BiHeading from "@/components/BiHeading"
import { AppRow, FlagshipRow } from "@/components/apps/AppRow"
import ProjectRow from "@/components/ProjectRow"
import BlogCard from "@/components/BlogCard"
import { getAllProjects, getHomeContent, getRecentPosts, getWorkContent } from "@/lib/content"
import { flagshipApp, otherApps } from "@/content/apps"
import { siteConfig, tierOf } from "@/config/site"
import { localePath, otherLocale, t, type Locale } from "@/i18n"

const wrap = "mx-auto w-full max-w-[1240px] px-5 md:px-10"

/** The home page, in either language. */
export default async function HomeView({ locale }: { locale: Locale }) {
  const d = t(locale)
  const od = t(otherLocale(locale))
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight
  const [home, work, projects, posts] = await Promise.all([
    getHomeContent(locale),
    getWorkContent(locale),
    getAllProjects(),
    getRecentPosts(3),
  ])

  // Apps have their own section; Projects shows the engineering and research work only.
  const selected = projects.filter((p) => tierOf(p.category) !== "products").slice(0, 4)
  const more = "inline-flex items-center gap-2 pb-2 text-[15px] font-semibold"

  return (
    <>
      <Hero content={home} locale={locale} />

      <section id="apps" className={`${wrap} scroll-mt-24 pt-20 md:pt-24`}>
        <BiHeading
          locale={locale}
          title={d.nav.apps}
          other={od.nav.apps}
          action={
            <a href={localePath(locale, "/apps/")} className={`${more} text-accent`}>
              {d.apps.all} <Arrow size={16} />
            </a>
          }
        />
        <FlagshipRow app={flagshipApp} locale={locale} />
        <div>
          {otherApps.map((app) => (
            <AppRow key={app.slug} app={app} locale={locale} />
          ))}
        </div>
      </section>

      {work && <WorkSection work={work} locale={locale} />}

      <section id="projects" className="ink-block mt-20 scroll-mt-24 md:mt-24">
        <div className={`${wrap} py-16 md:py-20`}>
          <BiHeading
            locale={locale}
            title={d.nav.projects}
            other={od.nav.projects}
            tone="onDark"
            action={
              <a href={localePath(locale, "/projects/")} className={`${more} text-[#8FA2FF]`}>
                {d.projects.all} <Arrow size={16} />
              </a>
            }
          />
          <div>
            {selected.map((p) => (
              <ProjectRow key={p.slug} project={p} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {posts.length > 0 && (
        <section id="notebook" className={`${wrap} scroll-mt-24 pt-20 md:pt-24`}>
          <BiHeading
            locale={locale}
            title={d.nav.notebook}
            other={od.nav.notebook}
            action={
              <a href={localePath(locale, "/notebook/")} className={`${more} text-accent`}>
                {d.notebook.all} <Arrow size={16} />
              </a>
            }
          />
          {/* Writings keep their own language and direction. */}
          <div dir="ltr" lang="en">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      <section id="contact" className="brand-block mt-20 scroll-mt-24 md:mt-28">
        <div className={`${wrap} py-16 md:py-24`}>
          <h2 className="font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.92] rtl:leading-[1.25]">{d.contact.title}</h2>
          <div className="mt-8 grid grid-cols-1 items-end gap-x-14 gap-y-8 lg:grid-cols-[1.1fr_0.9fr]">
            <p className="max-w-[35rem] text-[1.1rem] leading-relaxed text-white/85 md:text-[1.2rem]">{d.contact.body}</p>
            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                dir="ltr"
                className="font-display text-[clamp(1.05rem,4.6vw,1.75rem)] tracking-[-0.02em] underline decoration-white/40 decoration-2 underline-offset-[6px] hover:decoration-white whitespace-nowrap"
              >
                {siteConfig.contact.email}
              </a>
              <div className="flex flex-wrap gap-2.5">
                <ContactLink href={siteConfig.links.linkedin} label="LinkedIn" />
                <ContactLink href={siteConfig.links.github} label="GitHub" />
                <ContactLink href={siteConfig.resume} label={d.cv} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-white/50 px-4 py-2 text-[14px] font-semibold hover:border-white hover:bg-white/10"
    >
      {label} <ArrowUpRight size={14} className="rtl:-scale-x-100" />
    </a>
  )
}
