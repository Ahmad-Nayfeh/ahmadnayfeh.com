import { Github, Linkedin, Mail, FileDown } from "lucide-react"
import { siteConfig } from "@/config/site"
import { localePath, ownerName, t, type Locale } from "@/i18n"

export default function Footer({ locale }: { locale: Locale }) {
  const d = t(locale)
  const year = new Date().getFullYear()
  const REV = new Intl.DateTimeFormat(locale === "ar" ? "ar-u-nu-latn" : "en-US", { month: "short", year: "numeric" }).format(new Date())
  const nav = [
    { name: d.nav.home, path: localePath(locale, "/") },
    { name: d.nav.apps, path: localePath(locale, "/apps/") },
    { name: d.nav.projects, path: localePath(locale, "/projects/") },
    { name: d.nav.notebook, path: localePath(locale, "/notebook/") },
    { name: d.nav.about, path: localePath(locale, "/about/") },
  ]
  return (
    <footer className="mt-12 border-t-[1.5px] border-foreground bg-card/80">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-10 md:px-8">
        {/* Title block */}
        <div className="grid grid-cols-2 border-[1.5px] border-foreground md:grid-cols-12 [&>div]:border-b [&>div]:border-e [&>div]:border-border">
          <div className="col-span-2 px-4 py-4 md:col-span-5 md:row-span-2">
            <div className="label text-[9.5px]">{d.footer.siteOf}</div>
            <div className="mt-1.5 text-2xl font-semibold tracking-tight">{ownerName[locale]}</div>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {d.footer.blurb}
            </p>
          </div>
          <div className="col-span-2 px-4 py-3 md:col-span-4">
            <div className="label text-[9.5px]">{d.footer.contact}</div>
            <a href={`mailto:${siteConfig.contact.email}`} className="redline mt-1 inline-flex items-center gap-2 text-[14px]">
              <Mail size={13} className="text-muted-foreground" />
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="px-4 py-3 md:col-span-3">
            <div className="label text-[9.5px]">{d.footer.location}</div>
            <div className="mt-1 text-[14px]">{d.hero.location}</div>
          </div>
          <div className="col-span-2 px-4 py-3 md:col-span-4">
            <div className="label text-[9.5px]">{d.footer.links}</div>
            <div className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1 text-[14px]">
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="redline inline-flex items-center gap-1.5">
                <Linkedin size={13} className="text-muted-foreground" /> LinkedIn
              </a>
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="redline inline-flex items-center gap-1.5">
                <Github size={13} className="text-muted-foreground" /> GitHub
              </a>
              <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer" className="redline inline-flex items-center gap-1.5">
                <FileDown size={13} className="text-muted-foreground" /> {d.cvShort}
              </a>
            </div>
          </div>
          <div className="px-4 py-3 md:col-span-3">
            <div className="label text-[9.5px]">{d.footer.updated}</div>
            <div className="mt-1 font-mono text-[13px]">{REV}</div>
          </div>
          <div className="col-span-2 px-4 py-3 md:col-span-12">
            <div className="label text-[9.5px]">{d.footer.pages}</div>
            <nav aria-label="Footer" className="mt-1.5 flex flex-wrap gap-x-6 gap-y-1 text-[14px]">
              {nav.map((item) => (
                <a key={item.path} href={item.path} className="redline">
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <p className="label mt-5 text-[10.5px]">
          © {year} {ownerName[locale]}
        </p>
      </div>
    </footer>
  )
}
