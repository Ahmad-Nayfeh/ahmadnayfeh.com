"use client"

import { useState, useEffect, type CSSProperties } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, FileDown, ArrowUpRight } from "lucide-react"
import ThemeToggle from "@/components/ThemeToggle"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { localePath, otherLocalePath, t, type Locale } from "@/i18n"

function isActivePath(pathname: string, path: string) {
  const p = pathname.endsWith("/") ? pathname : `${pathname}/`
  // The home link ("/" or "/ar/") is active only on the home page; the others also on their sub-pages.
  if (path === "/" || path === "/ar/") return p === path
  return p === path || p.startsWith(path)
}

/**
 * Site header. It sits on each page's blue opening block (white text) until
 * the visitor scrolls, then becomes a frosted bar with a border and a soft shadow.
 * On phones the menu is a panel that drops below the bar, over a dimmed page.
 */
export default function Navbar({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const d = t(locale)
  const home = localePath(locale, "/")
  // Every page opens with a blue block, so the header starts transparent on all of them.
  const onBrand = !scrolled && !isOpen

  const nav = [
    { name: d.nav.home, path: localePath(locale, "/") },
    { name: d.nav.apps, path: localePath(locale, "/apps/") },
    { name: d.nav.projects, path: localePath(locale, "/projects/") },
    { name: d.nav.notebook, path: localePath(locale, "/notebook/") },
    { name: d.nav.about, path: localePath(locale, "/about/") },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // While the menu is open: Escape closes it and the page behind does not scroll.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false)
    const wide = window.matchMedia("(min-width: 1024px)")
    const onWide = () => wide.matches && setIsOpen(false)
    const root = document.documentElement
    const before = root.style.overflowY
    root.style.overflowY = "hidden"
    window.addEventListener("keydown", onKey)
    wide.addEventListener("change", onWide)
    return () => {
      root.style.overflowY = before
      window.removeEventListener("keydown", onKey)
      wide.removeEventListener("change", onWide)
    }
  }, [isOpen])

  const langSwitch = (
    <a
      href={otherLocalePath(locale, pathname)}
      lang={locale === "en" ? "ar" : "en"}
      dir={locale === "en" ? "rtl" : "ltr"}
      aria-label={d.switchAria}
      className={cn(
        "press inline-flex h-10 items-center rounded-full border-[1.5px] px-4 text-[14.5px] font-medium",
        onBrand ? "border-white/55 text-white hover:border-white hover:bg-white/10" : "border-foreground/20 text-foreground hover:border-foreground",
      )}
    >
      {d.switchLabel}
    </a>
  )

  return (
    <header
      className={cn(
        "site-header sticky top-0 z-40 w-full",
        onBrand ? "on-brand bg-transparent text-white" : "is-solid text-foreground",
        isOpen && "!bg-background",
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between gap-4 px-5 md:px-10">
        {/* Start side: the wordmark with the page links right beside it, so the menu sits where
            reading starts (left in English, right in Arabic). The actions go to the far end. */}
        <div className="flex items-center gap-3 lg:gap-10">
          {/* Phones: the menu button comes first, on the reading side (left in English, right in Arabic). */}
          <button
            type="button"
            className={cn(
              "press relative inline-flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] lg:hidden",
              onBrand ? "border-white/55" : isOpen ? "border-foreground bg-foreground text-background" : "border-foreground/20",
            )}
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? d.menuClose : d.menuOpen}
          >
            <Menu size={18} className={cn("absolute transition duration-300", isOpen ? "rotate-90 scale-50 opacity-0" : "opacity-100")} />
            <X size={18} className={cn("absolute transition duration-300", isOpen ? "opacity-100" : "-rotate-90 scale-50 opacity-0")} />
          </button>
        <a href={home} dir="ltr" className="group text-[15px] font-bold tracking-tight">
          ahmadnayfeh
          <span className="opacity-60 transition-opacity group-hover:opacity-100">.com</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active = isActivePath(pathname, item.path)
            return (
              <a
                key={item.path}
                href={item.path}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "link-grow pb-1 text-[15px] font-medium",
                  onBrand ? (active ? "opacity-100" : "opacity-85 hover:opacity-100") : active ? "text-accent" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.name}
              </a>
            )
          })}
        </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {langSwitch}
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "press inline-flex h-10 items-center gap-2 rounded-full px-4 text-[14.5px] font-semibold",
              onBrand ? "bg-white text-brand hover:bg-white/90 dark:bg-[#8FA2FF] dark:text-[#0B0D14] dark:hover:bg-white" : "bg-foreground text-background hover:bg-brand hover:text-white",
            )}
          >
            <FileDown size={15} />
            {d.cv}
          </a>
          <ThemeToggle onBrand={onBrand} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          {langSwitch}
          <ThemeToggle onBrand={onBrand} />
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <button type="button" tabIndex={-1} aria-hidden onClick={() => setIsOpen(false)} className="menu-scrim absolute inset-x-0 top-full h-screen w-full cursor-default bg-[#0B0D14]/45 backdrop-blur-[2px]" />
          <nav
            id="mobile-nav"
            aria-label="Main"
            className="menu-panel absolute inset-x-0 top-full max-h-[calc(100dvh-72px)] overflow-y-auto rounded-b-[26px] border-t border-border bg-background shadow-[var(--shadow-lg)]"
          >
            <ul className="mx-auto w-full max-w-[1240px] px-5 pb-5 pt-1">
              {nav.map((item, i) => {
                const active = isActivePath(pathname, item.path)
                return (
                  <li key={item.path} style={{ "--i": i } as CSSProperties} className="border-b border-border">
                    <a href={item.path} aria-current={active ? "page" : undefined} className="group flex items-center gap-4 py-[15px]">
                      <span dir="ltr" className={cn("w-6 text-[12.5px] font-semibold tabular-nums", active ? "text-accent" : "text-muted-foreground")}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={cn("font-display flex-1 text-[1.7rem] leading-none rtl:leading-[1.35]", active && "text-accent")}>{item.name}</span>
                      <span className={cn("arrow-dot", active && "!border-brand !bg-brand !text-white")}>
                        <ArrowUpRight size={17} className="nudge rtl:-scale-x-100" />
                      </span>
                    </a>
                  </li>
                )
              })}
              <li style={{ "--i": nav.length } as CSSProperties} className="pt-5">
                <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                  <FileDown size={16} />
                  {d.cv}
                </a>
              </li>
              <li style={{ "--i": nav.length + 1 } as CSSProperties} className="pt-4 text-center">
                <a href={`mailto:${siteConfig.contact.email}`} dir="ltr" className="text-[14px] font-medium text-muted-foreground">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
