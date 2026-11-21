import type { CSSProperties, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { dirOf, otherLocale, type Locale } from "@/i18n"

/**
 * The blue block that opens every page. It slides under the site header,
 * which is transparent until the visitor scrolls. Its parts come in one after
 * the other (classes "enter" and "enter-side" in globals.css): the word in the
 * other script slides in, the title rises, then the lead and the buttons.
 */
const step = (n: number) => ({ "--enter": n }) as CSSProperties

export default function PageHeader({
  locale,
  title,
  other,
  eyebrow,
  lead,
  children,
  size = "lg",
  contentLang,
}: {
  locale: Locale
  title: ReactNode
  /** The same word in the other language, shown behind the title (section pages). */
  other?: string
  eyebrow?: ReactNode
  lead?: ReactNode
  children?: ReactNode
  size?: "lg" | "md"
  /** Set when the title is a writing that keeps its own language. */
  contentLang?: Locale
}) {
  const o = otherLocale(locale)
  return (
    <section className="brand-block -mt-[72px] pt-[72px]">
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-12 pt-10 md:px-10 md:pb-16 md:pt-14">
        {eyebrow && <div className="enter mb-5 text-[14.5px] font-medium text-white/75">{eyebrow}</div>}
        {other && (
          <div className="flex justify-end" aria-hidden>
            <span lang={o} dir={dirOf(o)} className="enter-side font-display block text-[clamp(1.9rem,7vw,5rem)] leading-[1.1] text-[#5873EA]">
              {other}
            </span>
          </div>
        )}
        <h1
          lang={contentLang}
          dir={contentLang ? dirOf(contentLang) : undefined}
          className={cn(
            "enter font-display text-balance rtl:leading-[1.25]",
            size === "lg" ? "text-[clamp(2.75rem,10vw,7.5rem)] leading-[0.92]" : "text-[clamp(2rem,5.2vw,3.75rem)] leading-[1.02]",
            other && "-mt-[0.04em] rtl:mt-0",
          )}
          style={step(1)}
        >
          {title}
        </h1>
        {lead && (
          <div dir={contentLang ? dirOf(contentLang) : undefined} className="enter" style={step(2)}>
            <div className="mt-7 max-w-[44rem] text-[1.1rem] leading-[1.6] text-white/90 md:text-[1.25rem]">{lead}</div>
          </div>
        )}
        {children && (
          <div className="enter mt-8" style={step(3)}>
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
