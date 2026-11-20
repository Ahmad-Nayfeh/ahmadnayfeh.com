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
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] transition-colors",
        onBrand ? "border-white/55 text-white hover:border-white hover:bg-white/10" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
      )}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {mounted ? isDark ? <Sun size={16} /> : <Moon size={16} /> : <span className="h-4 w-4" />}
    </button>
  )
}
