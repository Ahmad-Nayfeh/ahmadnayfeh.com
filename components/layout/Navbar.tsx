"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, FileDown } from "lucide-react"
import ThemeToggle from "@/components/ThemeToggle"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { localePath, otherLocalePath, t, type Locale } from "@/i18n"

function isActivePath(pathname: string, path: string) {
  const p = pathname.endsWith("/") ? pathname : `${pathname}/`
  return p === path || p.startsWith(path)
}

/**
 * Site header. It sits on each page's blue opening block (white text) until
 * the visitor scrolls, then becomes a plain bar.
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

  const langSwitch = (
    <a
      href={otherLocalePath(locale, pathname)}
      lang={locale === "en" ? "ar" : "en"}
      dir={locale === "en" ? "rtl" : "ltr"}
      aria-label={d.switchAria}
      className={cn(
        "inline-flex h-10 items-center rounded-full border-[1.5px] px-4 text-[14.5px] font-medium transition-colors",
        onBrand ? "border-white/55 text-white hover:border-white hover:bg-white/10" : "border-border text-foreground hover:border-foreground",
      )}
    >
      {d.switchLabel}
    </a>
  )

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors duration-200",
        onBrand ? "bg-transparent text-white" : "border-b border-border bg-background/90 text-foreground backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between gap-4 px-5 md:px-10">
        <a href={home} dir="ltr" className="text-[15px] font-bold tracking-tight">
          ahmadnayfeh.com
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
                  "text-[15px] font-medium transition-opacity",
                  onBrand ? "opacity-85 hover:opacity-100" : active ? "text-accent" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.name}
              </a>
            )
          })}
          {langSwitch}
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex h-10 items-center gap-2 rounded-full px-4 text-[14.5px] font-semibold transition-colors",
              onBrand ? "bg-white text-brand hover:bg-white/90" : "bg-foreground text-background hover:bg-brand hover:text-white",
            )}
          >
            <FileDown size={15} />
            {d.cv}
          </a>
          <ThemeToggle onBrand={onBrand} />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          {langSwitch}
          <ThemeToggle onBrand={onBrand} />
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border-[1.5px]",
              onBrand ? "border-white/55" : "border-border",
            )}
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? d.menuClose : d.menuOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav id="mobile-nav" className="border-t border-border lg:hidden" aria-label="Main">
          <ul className="mx-auto w-full max-w-[1240px] px-5 py-2">
            {nav.map((item) => (
              <li key={item.path} className="border-b border-border">
                <a href={item.path} className="font-display block py-4 text-2xl">
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-4 text-base font-semibold">
                <FileDown size={16} className="text-accent" />
                {d.cv}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
