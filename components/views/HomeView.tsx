import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react"
import Hero from "@/components/home/Hero"
import WorkSection from "@/components/home/WorkSection"
import BiHeading from "@/components/BiHeading"
import { FlagshipRow } from "@/components/apps/AppRow"
import { getAllPosts, getAllProjects, getHomeContent, getRecentPosts, getWorkContent } from "@/lib/content"
import { apps, flagshipApp, otherApps } from "@/content/apps"
import { siteConfig, tierOf } from "@/config/site"
import { isHidden, settings } from "@/lib/settings"
import { localePath, otherLocale, t, type Locale } from "@/i18n"

const wrap = "mx-auto w-full max-w-[1240px] px-5 md:px-10"

/** The home page, in either language. */
export default async function HomeView({ locale }: { locale: Locale }) {
  const d = t(locale)
  const od = t(otherLocale(locale))
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight
  const [home, work, projects, posts, allPosts] = await Promise.all([
    getHomeContent(locale),
    getWorkContent(locale),
    getAllProjects(locale),
    getRecentPosts(settings.home.posts),
    getAllPosts(),
  ])

  // Research work first, then the smaller projects.
  const selected = [...projects.filter((p) => tierOf(p.category) === "research"), ...projects.filter((p) => tierOf(p.category) !== "research")].slice(0, settings.home.projects)
  // The home page shows a selection; /apps/, /projects/ and /notebook/ hold the full lists.
  const homeApps = settings.home.apps.map((slug) => otherApps.find((a) => a.slug === slug)).filter((a): a is NonNullable<typeof a> => !!a)
  const show = (section: string) => !isHidden("sections", section)
  const more = "group link-grow inline-flex items-center gap-2 pb-1.5 mb-1 text-[15px] font-semibold"

  return (
    <>
      <Hero content={home} locale={locale} />

      {/* The home page introduces and points the way. It does not repeat the lists of /apps/,
          /projects/ and /notebook/: one feature card, then three doors with names only. */}
      {(show("apps") || show("projects") || show("notebook")) && (
      <section id="explore" className={`${wrap} pt-20 md:pt-24`}>
        <BiHeading locale={locale} title={d.explore} other={od.explore} />
        {show("apps") && flagshipApp && <FlagshipRow app={flagshipApp} locale={locale} />}
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {show("apps") && (
            <a href={localePath(locale, "/apps/")} data-reveal className="app-card group flex flex-col p-7 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="label">{d.nav.apps}</span>
                <span dir="ltr" className="font-display text-[3.4rem] leading-[0.8] text-accent">{apps.length}</span>
              </div>
              <h3 className="font-display mt-6 text-[1.55rem] leading-tight rtl:leading-[1.55]">{d.apps.title}</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-muted-foreground">{d.apps.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2.5 border-t border-border pt-5">
                {homeApps.map((app) => (
                  <li key={app.slug} className="flex items-center gap-2 text-[14.5px] font-medium">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={app.icon} alt="" className="app-icon h-7 w-7" />
                    {app.name[locale]}
                  </li>
                ))}
              </ul>
              <span className={`${more} mt-auto self-start pt-7 text-accent`}>
                {d.apps.all} <Arrow size={16} className="nudge-x" />
              </span>
            </a>
          )}
          {show("projects") && (
            <a href={localePath(locale, "/projects/")} data-reveal className="app-card group flex flex-col p-7 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="label">{d.nav.projects}</span>
                <span dir="ltr" className="font-display text-[3.4rem] leading-[0.8] text-accent">{projects.length}</span>
              </div>
              <h3 className="font-display mt-6 text-[1.55rem] leading-tight rtl:leading-[1.55]">{d.projects.title}</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-muted-foreground">{d.projects.description}</p>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-5 text-[14.5px] font-medium">
                {selected.map((p) => (
                  <li key={p.slug}>{p.title}</li>
                ))}
              </ul>
              <span className={`${more} mt-auto self-start pt-7 text-accent`}>
                {d.projects.all} <Arrow size={16} className="nudge-x" />
              </span>
            </a>
          )}
          {show("notebook") && allPosts.length > 0 && (
            <a href={localePath(locale, "/notebook/")} data-reveal className="app-card group flex flex-col p-7 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="label">{d.nav.notebook}</span>
                <span dir="ltr" className="font-display text-[3.4rem] leading-[0.8] text-accent">{allPosts.length}</span>
              </div>
              <h3 className="font-display mt-6 text-[1.55rem] leading-tight rtl:leading-[1.55]">{d.notebook.title}</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-muted-foreground">{d.notebook.description}</p>
              {/* Writings keep their own language and direction. */}
              <ul className="mt-6 space-y-2.5 border-t border-border pt-5 text-[14.5px] font-medium">
                {posts.map((post) => (
                  <li key={post.slug} lang={post.lang} dir={post.lang === "ar" ? "rtl" : "ltr"}>
                    {post.title}
                  </li>
                ))}
              </ul>
              <span className={`${more} mt-auto self-start pt-7 text-accent`}>
                {d.notebook.all} <Arrow size={16} className="nudge-x" />
              </span>
            </a>
          )}
        </div>
      </section>
      )}

      {show("work") && work && <WorkSection work={work} locale={locale} compact />}

      {show("contact") && (
      <section id="contact" className="brand-block mt-20 md:mt-28">
        <div className={`${wrap} py-16 md:py-24`}>
          <h2 data-reveal className="font-display text-[clamp(2.3rem,7.2vw,5.6rem)] leading-[0.92] rtl:leading-[1.25]">{d.contact.title}</h2>
          <div data-reveal className="mt-8 grid grid-cols-1 items-end gap-x-14 gap-y-8 lg:grid-cols-[1.1fr_0.9fr]">
            <p className="max-w-[35rem] text-[1.1rem] leading-relaxed text-white/85 md:text-[1.2rem]">{d.contact.body}</p>
            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                dir="ltr"
                className="font-display text-[clamp(1.05rem,4.6vw,1.75rem)] tracking-[-0.02em] underline decoration-white/40 decoration-2 underline-offset-[6px] transition-[text-decoration-color] duration-200 hover:decoration-white whitespace-nowrap"
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
      )}
    </>
  )
}

function ContactLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="press group inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-white/50 px-4 py-2 text-[14px] font-semibold hover:border-white hover:bg-white/10"
    >
      {label} <ArrowUpRight size={14} className="nudge rtl:-scale-x-100" />
    </a>
  )
}
