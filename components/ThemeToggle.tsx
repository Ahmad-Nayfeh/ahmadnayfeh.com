"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

/** Light / dark switch. */
export default function ThemeToggle({ onBrand = false }: { onBrand?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => {
        // Colours cross-fade for a moment instead of snapping (see .theme-anim in globals.css).
        const root = document.documentElement
        root.classList.add("theme-anim")
        window.setTimeout(() => root.classList.remove("theme-anim"), 420)
        setTheme(isDark ? "light" : "dark")
      }}
      className={cn(
        "press group inline-flex h-10 w-10 items-center justify-center rounded-full border-[1.5px]",
        onBrand ? "border-white/55 text-white hover:border-white hover:bg-white/10" : "border-foreground/20 text-muted-foreground hover:border-foreground hover:text-foreground",
      )}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {mounted ? (
        <span className="inline-flex transition-transform duration-300 group-hover:rotate-[18deg]">
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </span>
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  )
}
