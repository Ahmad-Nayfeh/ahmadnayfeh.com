import { siteConfig } from "@/config/site"
import { dirOf, localePath, otherLocale, ownerName, t, type Locale } from "@/i18n"

/** Closing band: the name in both scripts, the page links, and the outside links. */
export default function Footer({ locale }: { locale: Locale }) {
  const d = t(locale)
  const o = otherLocale(locale)
  const year = new Date().getFullYear()
  const nav = [
    { name: d.nav.home, path: localePath(locale, "/") },
    { name: d.nav.apps, path: localePath(locale, "/apps/") },
    { name: d.nav.projects, path: localePath(locale, "/projects/") },
    { name: d.nav.notebook, path: localePath(locale, "/notebook/") },
    { name: d.nav.about, path: localePath(locale, "/about/") },
  ]

  return (
    <footer className="ink-block">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-12 md:px-10 md:py-14">
        <div className="grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="font-display text-[2rem] leading-none rtl:leading-[1.3]">{ownerName[locale]}</div>
            <div className="mt-2">
              <span lang={o} dir={dirOf(o)} className="font-display inline-block text-[1.35rem] text-[#8FA2FF]">
                {ownerName[o]}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[14.5px] leading-relaxed text-white/65">{d.footer.blurb}</p>
          </div>
          <nav aria-label="Footer">
            <div className="text-[13px] text-white/55">{d.footer.pages}</div>
            <ul className="mt-3 space-y-2 text-[15px] font-medium">
              {nav.map((item) => (
                <li key={item.path}>
                  <a href={item.path} className="hover:text-[#8FA2FF]">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <div className="text-[13px] text-white/55">{d.footer.links}</div>
            <ul className="mt-3 space-y-2 text-[15px] font-medium">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} dir="ltr" className="hover:text-[#8FA2FF] [overflow-wrap:anywhere]">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#8FA2FF]">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#8FA2FF]">
                  GitHub
                </a>
              </li>
              <li>
                <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer" className="hover:text-[#8FA2FF]">
                  {d.cv}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/15 pt-5 text-[13px] text-white/50">
          © {year} {ownerName[locale]} · {d.hero.location}
        </p>
      </div>
    </footer>
  )
}
