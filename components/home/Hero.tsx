import type { CSSProperties } from "react"
import type { HomeContent } from "@/types"
import { dirOf, localePath, otherLocale, ownerName, t, type Locale } from "@/i18n"

/**
 * The blue opening block: the name in both scripts (the page's language large and
 * white, the other one behind it), one sentence, two buttons, and three facts.
 */
const step = (n: number) => ({ "--enter": n }) as CSSProperties

export default function Hero({ content, locale }: { content: HomeContent; locale: Locale }) {
  const d = t(locale)
  const o = otherLocale(locale)

  return (
    <section className="brand-block -mt-[72px] pt-[72px]">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-10">
        <div className="pt-8 md:pt-12">
          <div className="flex justify-end" aria-hidden>
            <span
              lang={o}
              dir={dirOf(o)}
              className="enter-side font-display block text-[clamp(2.5rem,11.6vw,9.4rem)] leading-[1.05] text-[#5873EA]"
            >
              {ownerName[o]}
            </span>
          </div>
          <h1 style={step(1)} className="enter font-display -mt-[0.06em] text-[clamp(2.9rem,12.5vw,10rem)] leading-[0.9] rtl:mt-0 rtl:leading-[1.2]">
            {ownerName[locale]}
          </h1>
        </div>

        <div className="grid grid-cols-1 items-end gap-x-14 gap-y-8 pb-12 pt-9 md:pb-14 md:pt-11 lg:grid-cols-[1.1fr_0.9fr]">
          <p style={step(3)} className="enter max-w-[35rem] text-[1.15rem] leading-[1.55] md:text-[1.3rem]">{content.description}</p>
          <div style={step(4)} className="enter flex flex-wrap gap-3 lg:justify-end">
            <a href={localePath(locale, "/apps/")} className="btn btn-on-brand">
              {d.hero.primary}
            </a>
            <a href={localePath(locale, "/about/")} className="btn btn-on-brand-ghost">
              {d.hero.secondary}
            </a>
          </div>
        </div>
      </div>

      <div style={step(5)} className="enter brand-strip border-t border-white/15">
        <dl className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-x-10 px-5 md:grid-cols-3 md:px-10">
          {content.now.map((item) => (
            <div key={item.label} className="border-b border-white/15 py-4 last:border-b-0 md:border-b-0 md:py-5">
              <dt className="flex items-center gap-2 text-[13px] text-white/70">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#8FA2FF]" />
                {item.label}
              </dt>
              <dd className="mt-1 text-[14.5px] leading-snug">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
