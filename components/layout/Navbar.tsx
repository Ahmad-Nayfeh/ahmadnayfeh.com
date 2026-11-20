"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, ChevronUp, FileDown, Languages } from "lucide-react"
import ThemeToggle from "@/components/ThemeToggle"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { localePath, otherLocalePath, ownerName, t, type Locale } from "@/i18n"

function isActivePath(pathname: string, path: string, home: string) {
  const p = pathname.endsWith("/") ? pathname : `${pathname}/`
  return path === home ? p === home : p === path || p.startsWith(path)
}

export default function Navbar({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const d = t(locale)
  const home = localePath(locale, "/")

  const nav = [
    { name: d.nav.apps, path: localePath(locale, "/apps/") },
    { name: d.nav.projects, path: localePath(locale, "/projects/") },
    { name: d.nav.notebook, path: localePath(locale, "/notebook/") },
    { name: d.nav.about, path: localePath(locale, "/about/") },
  ]
  const switchHref = otherLocalePath(locale, pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const langSwitch = (
    <a
      href={switchHref}
      lang={locale === "en" ? "ar" : "en"}
      dir={locale === "en" ? "rtl" : "ltr"}
      aria-label={d.switchAria}
      className="inline-flex h-9 items-center gap-1.5 border border-border px-2.5 text-[13px] font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
    >
      <Languages size={14} aria-hidden />
      {d.switchLabel}
    </a>
  )

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors duration-200",
        scrolled || isOpen ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between px-5 md:px-8">
        <a href={home} className="group flex items-center gap-3" aria-label={ownerName[locale]}>
          <span
            aria-hidden
            dir="ltr"
            className="flex h-9 w-9 items-center justify-center border-[1.5px] border-foreground font-mono text-[13px] font-semibold tracking-tight transition-colors group-hover:border-accent group-hover:text-accent"
          >
            AN
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight">{ownerName[locale]}</span>
            <span className="label mt-1 text-[9.5px]">{d.brandRole}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active = isActivePath(pathname, item.path, home)
            return (
              <a
                key={item.path}
                href={item.path}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative flex items-baseline gap-1.5 px-3 py-2 text-[13.5px] font-medium transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.name}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-3 -bottom-[13px] h-[2px] origin-left bg-accent transition-transform duration-300 rtl:origin-right",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </a>
            )
          })}
          <span aria-hidden className="mx-3 h-5 w-px bg-border" />
          <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2 px-3.5 py-2">
            <FileDown size={13} />
            {d.cv}
          </a>
          <span className="me-2">{langSwitch}</span>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          {langSwitch}
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center border border-border"
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? d.menuClose : d.menuOpen}
          >
            {isOpen ? <ChevronUp size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav id="mobile-nav" className="border-t border-border lg:hidden" aria-label="Main">
          <ul className="mx-auto w-full max-w-[1240px] px-5 py-3">
            {nav.map((item) => {
              const active = isActivePath(pathname, item.path, home)
              return (
                <li key={item.path} className="border-b border-border">
                  <a href={item.path} aria-current={active ? "page" : undefined} className="flex items-baseline gap-3 py-3.5 text-base font-medium">
                    <span className={active ? "text-foreground" : "text-muted-foreground"}>{item.name}</span>
                  </a>
                </li>
              )
            })}
            <li>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3.5 text-base font-medium text-muted-foreground"
              >
                <FileDown size={15} className="text-accent" />
                {d.cv}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
