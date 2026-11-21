import { FileDown, Mail } from "lucide-react"
import PageHeader from "@/components/PageHeader"
import BiHeading from "@/components/BiHeading"
import MarkdownRenderer from "@/components/MarkdownRenderer"
import { getAboutContent } from "@/lib/content"
import { siteConfig } from "@/config/site"
import type { EducationItem, ExperienceItem } from "@/types"
import { otherLocale, ownerName, t, type Locale } from "@/i18n"

type Entry = { kind: "work" | "education"; title: string; org: string; location: string; start: string; end: string; description: string }

function toEntries(experience: ExperienceItem[], education: EducationItem[]): Entry[] {
  const work = experience.map((e) => ({ kind: "work" as const, title: e.title, org: e.company, location: e.location, start: String(e.startDate), end: String(e.endDate), description: e.description }))
  const edu = education.map((e) => ({ kind: "education" as const, title: e.degree, org: e.institution, location: e.location, start: String(e.startDate), end: String(e.endDate), description: e.description }))
  // Newest first; work before education within the same start year.
  return [...work, ...edu].sort((a, b) => {
    const diff = Number(b.start.slice(0, 4)) - Number(a.start.slice(0, 4))
    return diff !== 0 ? diff : a.kind === "work" ? -1 : 1
  })
}

function period(start: string, end: string, locale: Locale) {
  const fmt = (s: string) => {
    if (/^present$/i.test(s)) return t(locale).aboutPage.present
    if (/^\d{4}-\d{2}/.test(s)) {
      const d = new Date(`${s.slice(0, 7)}-01T00:00:00Z`)
      return new Intl.DateTimeFormat(locale === "ar" ? "ar-u-nu-latn" : "en-US", { month: "short", year: "numeric", timeZone: "UTC" }).format(d)
    }
    return s
  }
  return start === end ? fmt(start) : `${fmt(start)} – ${fmt(end)}`
}

const wrap = "mx-auto w-full max-w-[1240px] px-5 md:px-10"

/** About: story, timeline and skills, in either language. */
export default async function AboutView({ locale }: { locale: Locale }) {
  const d = t(locale)
  const od = t(otherLocale(locale))
  const about = await getAboutContent(locale)
  const entries = toEntries(about.experience, about.education)

  return (
    <>
      <PageHeader locale={locale} title={ownerName[locale]} other={ownerName[otherLocale(locale)]} lead={about.tagline}>
        <div className="flex flex-wrap gap-3">
          <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer" className="btn btn-on-brand">
            <FileDown size={16} /> {d.cv}
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} className="btn btn-on-brand-ghost">
            <Mail size={16} /> {d.aboutPage.email}
          </a>
        </div>
      </PageHeader>

      <section className={`${wrap} grid grid-cols-1 gap-x-14 gap-y-10 pt-14 md:pt-20 lg:grid-cols-[1.25fr_0.75fr]`}>
        <div className="about-story max-w-[44rem] text-[1.12rem] leading-[1.75]">
          <MarkdownRenderer content={about.bio} />
        </div>
        <dl data-reveal className="panel self-start p-7 lg:sticky lg:top-28">
          <div className="border-b border-border pb-4">
            <dt className="label">{d.hero.basedIn}</dt>
            <dd className="mt-1 text-[15.5px] font-medium">{d.hero.location}</dd>
          </div>
          <div className="pt-4">
            <dt className="label">{d.aboutPage.languages}</dt>
            <dd className="mt-1 text-[15.5px] font-medium">{about.languages.join(" · ")}</dd>
          </div>
        </dl>
      </section>

      <section className={`${wrap} pt-20 md:pt-24`}>
        <BiHeading locale={locale} title={d.aboutPage.timeline} other={od.aboutPage.timeline} />
        <ol>
          {entries.map((e) => (
            <li key={`${e.kind}-${e.title}-${e.start}`} data-reveal className="rule-row grid grid-cols-1 gap-x-10 gap-y-2 py-6 md:grid-cols-[200px_minmax(0,1fr)] md:py-7">
              <div>
                <div className="font-display text-[1.1rem] tracking-[-0.01em]">{period(e.start, e.end, locale)}</div>
                <div className={`mt-2 inline-flex items-center gap-2 text-[13.5px] font-semibold ${e.kind === "work" ? "text-accent" : "text-muted-foreground"}`}>
                  <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${e.kind === "work" ? "bg-accent" : "bg-muted-foreground/60"}`} />
                  {e.kind === "work" ? d.aboutPage.work : d.aboutPage.education}
                </div>
              </div>
              <div>
                <h3 className="font-display text-[1.4rem] leading-tight tracking-[-0.02em] md:text-[1.65rem] rtl:leading-[1.4]">{e.title}</h3>
                <p className="mt-1 text-[15.5px] font-medium text-foreground/75">
                  {e.org} · {e.location}
                </p>
                {e.description && <p className="mt-3 max-w-[52rem] text-[15.5px] leading-relaxed text-muted-foreground">{e.description}</p>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {about.skillGroups.length > 0 && (
        <section className="ink-block mt-20 md:mt-24">
          <div className={`${wrap} py-16 md:py-20`}>
            <BiHeading locale={locale} title={d.aboutPage.skills} other={od.aboutPage.skills} tone="onDark" />
            <div className="grid grid-cols-1 gap-x-12 gap-y-10 border-t border-white/25 pt-8 md:grid-cols-3">
              {about.skillGroups.map((g) => (
                <div key={g.name} data-reveal>
                  <h3 className="font-display text-[1.4rem] tracking-[-0.02em] text-[#8FA2FF]">{g.name}</h3>
                  <ul className="mt-4">
                    {g.items.map((item) => (
                      <li key={item} className="border-b border-white/15 py-3 text-[15.5px] leading-snug text-white/85">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
