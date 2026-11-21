import type React from "react"
import "@/app/globals.css"
import "katex/dist/katex.min.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Motion from "@/components/Motion"
import { ThemeProvider } from "@/components/theme-provider"
import { fontVariables } from "@/app/fonts"
import { dirOf, t, type Locale } from "@/i18n"

/** The whole page frame for one language: <html>, header, main, footer. */
export default function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const d = t(locale)
  return (
    <html lang={locale} dir={dirOf(locale)} suppressHydrationWarning className={fontVariables}>
      <head>
        <meta name="google-site-verification" content="TRmiP4XM7rQHNMBz7LJs_ZTRzVb46pLD0LJlJ-hz8QU" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <a
            href="#main"
            className="sr-only left-0 top-0 rtl:left-auto rtl:right-0 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
          >
            {d.skip}
          </a>
          <div className="relative flex min-h-screen flex-col">
            <Navbar locale={locale} />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer locale={locale} />
          </div>
          <Motion />
        </ThemeProvider>
      </body>
    </html>
  )
}
