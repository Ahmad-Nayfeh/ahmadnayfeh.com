import { ArrowUp, ArrowUpRight, Mail } from "lucide-react"
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

  const link = "link-grow pb-0.5 text-white/90 hover:text-white"
  const out = [
    { name: "LinkedIn", href: siteConfig.links.linkedin },
    { name: "GitHub", href: siteConfig.links.github },
    { name: d.cv, href: siteConfig.resume },
  ]

  return (
    <footer className="ink-block relative overflow-hidden">
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-8 pt-14 md:px-10 md:pt-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-11 md:grid-cols-[1.3fr_0.7fr_0.9fr] md:gap-x-14">
          <div data-reveal className="col-span-2 md:col-span-1">
            <a href={localePath(locale, "/")} className="font-display block text-[clamp(2.2rem,6vw,3.25rem)] leading-none rtl:leading-[1.3]">
              {ownerName[locale]}
            </a>
            <div className="mt-2.5">
              <span lang={o} dir={dirOf(o)} className="font-display inline-block text-[clamp(1.45rem,4vw,2rem)] text-[#8FA2FF]">
                {ownerName[o]}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/70">{d.footer.blurb}</p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              dir="ltr"
              className="press group mt-6 inline-flex max-w-full items-center gap-2 rounded-full border-[1.5px] border-white/30 px-4 py-2.5 text-[14px] font-semibold hover:border-white hover:bg-white/10"
            >
              <Mail size={15} className="shrink-0" />
              <span className="[overflow-wrap:anywhere]">{siteConfig.contact.email}</span>
            </a>
          </div>
          <nav data-reveal aria-label="Footer">
            <div className="text-[13px] font-medium text-white/55">{d.footer.pages}</div>
            <ul className="mt-4 space-y-2.5 text-[15.5px] font-medium">
              {nav.map((item) => (
                <li key={item.path}>
                  <a href={item.path} className={link}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div data-reveal>
            <div className="text-[13px] font-medium text-white/55">{d.footer.links}</div>
            <ul className="mt-4 space-y-2.5 text-[15.5px] font-medium">
              {out.map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={`group inline-flex items-center gap-1.5 ${link}`}>
                    {item.name}
                    <ArrowUpRight size={14} className="nudge text-white/50 rtl:-scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-[13px] text-white/55">
          <p>
            © {year} {ownerName[locale]} · {d.hero.location}
          </p>
          <a href="#main" className="press group inline-flex items-center gap-2 rounded-full border border-white/25 py-1.5 pe-2 ps-3.5 font-medium text-white/80 hover:border-white hover:text-white">
            <span dir="ltr">ahmadnayfeh.com</span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <ArrowUp size={13} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
