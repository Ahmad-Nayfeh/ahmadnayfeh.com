"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Scroll reveal for the whole site. Renders nothing.
 *
 * Any element with a `data-reveal` attribute that starts below the fold is
 * hidden (class "reveal-wait") and fades up when it scrolls into view (class
 * "reveal-in", removed again when the transition ends). Elements that come
 * into view together are staggered.
 *
 * Without JavaScript, or with "reduce motion" switched on, this does nothing
 * and every element simply stays visible. The CSS is in app/globals.css.
 */
export default function Motion() {
  const pathname = usePathname()

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const fold = window.innerHeight * 0.94
    const waiting = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")).filter(
      (el) => el.getBoundingClientRect().top > fold,
    )
    if (waiting.length === 0) return
    for (const el of waiting) el.classList.add("reveal-wait")

    const timers: number[] = []
    const io = new IntersectionObserver(
      (entries) => {
        let step = 0
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          io.unobserve(el)
          const delay = Math.min(step++, 5) * 70
          el.style.setProperty("--reveal-delay", `${delay}ms`)
          el.classList.add("reveal-in")
          el.classList.remove("reveal-wait")
          timers.push(
            window.setTimeout(() => {
              el.classList.remove("reveal-in")
              el.style.removeProperty("--reveal-delay")
            }, delay + 620),
          )
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.01 },
    )
    for (const el of waiting) io.observe(el)

    return () => {
      io.disconnect()
      for (const id of timers) window.clearTimeout(id)
      for (const el of waiting) {
        el.classList.remove("reveal-wait", "reveal-in")
        el.style.removeProperty("--reveal-delay")
      }
    }
  }, [pathname])

  return null
}
