import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { AppEntry } from "@/content/apps"
import { cn } from "@/lib/utils"
import { localePath, t, type Locale } from "@/i18n"

/**
 * The picture of an app on a tinted tile. An app without a picture gets a designed
 * tile: its icon, large, over a soft glow of its own colours.
 */
function Media({ app, className, sizes }: { app: AppEntry; className?: string; sizes: string }) {
  return (
    <div className={cn("app-media", className)}>
      {app.thumb ? (
        <Image src={app.thumb} alt="" fill sizes={sizes} className="zoom object-cover object-top" />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={app.icon} alt="" aria-hidden className="absolute h-[170%] w-auto max-w-none opacity-35 blur-3xl" />
          <Image src={app.icon} alt="" width={96} height={96} className="app-icon zoom relative h-24 w-24" />
        </div>
      )}
    </div>
  )
}

/** "Web app · Android" becomes one chip per platform. */
function Platforms({ kind, dark = false }: { kind: string; dark?: boolean }) {
  return (
    <span className="flex flex-wrap gap-1.5">
      {kind.split(" · ").map((k) => (
        <span key={k} className={dark ? "chip-on-dark !px-2.5 !py-[3px] !text-[12px]" : "chip"}>
          {k}
        </span>
      ))}
    </span>
  )
}

/**
 * One app as a card: a large picture first, then icon and name, one sentence, and the
 * platforms. One reading order, top to bottom. "wide" lays the picture beside the text
 * on larger screens (used for a card that would otherwise sit alone on its line).
 */
export function AppCard({ app, locale, wide = false }: { app: AppEntry; locale: Locale; wide?: boolean }) {
  const d = t(locale)
  return (
    <a
      href={localePath(locale, `/apps/${app.slug}/`)}
      data-reveal
      className={cn("app-card group flex flex-col", wide && "md:col-span-2 md:grid md:grid-cols-[1.15fr_1fr] md:items-stretch")}
    >
      <Media app={app} sizes={wide ? "(max-width: 768px) 100vw, 640px" : "(max-width: 768px) 100vw, 580px"} className={cn("aspect-[16/9]", wide && "md:aspect-auto md:min-h-[320px]")} />
      <div className={cn("flex flex-1 flex-col p-5 md:p-7", wide && "md:justify-center md:p-10")}>
        <div className="flex items-center gap-4">
          <Image src={app.icon} alt="" width={56} height={56} className="app-icon h-12 w-12 md:h-14 md:w-14" />
          <h3 className={cn("font-display flex-1 text-[1.65rem] leading-[1.05] transition-colors group-hover:text-accent md:text-[1.9rem] rtl:leading-[1.35]", wide && "md:text-[2.4rem]")}>
            {app.name[locale]}
          </h3>
        </div>
        <p className={cn("mt-4 text-[15.5px] leading-relaxed text-muted-foreground", wide && "md:text-[1.05rem]")}>{app.desc[locale]}</p>
        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <Platforms kind={app.kind[locale]} />
          <span className="inline-flex shrink-0 items-center gap-2 text-[14px] font-semibold text-accent">
            {d.apps.details}
            <span className="arrow-dot !h-9 !w-9" aria-hidden>
              <ArrowUpRight size={16} className="nudge rtl:-scale-x-100" />
            </span>
          </span>
        </div>
      </div>
    </a>
  )
}

/**
 * A grid of app cards: one column on phones, two on larger screens. With an odd
 * number of apps the first card is wide, so no card is left alone on a line.
 */
export function AppGrid({ apps, locale }: { apps: AppEntry[]; locale: Locale }) {
  const odd = apps.length % 2 === 1
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
      {apps.map((app, i) => (
        <AppCard key={app.slug} app={app} locale={locale} wide={odd && i === 0} />
      ))}
    </div>
  )
}

/** Shadhra: a full-width feature card on the ink block, with its two outside links. */
export function FlagshipRow({ app, locale }: { app: AppEntry; locale: Locale }) {
  const d = t(locale)
  return (
    <div
      data-reveal
      className="ink-block mb-5 grid grid-cols-1 items-center gap-x-10 gap-y-7 overflow-hidden rounded-[26px] p-6 shadow-[var(--shadow-lg)] md:mb-6 md:grid-cols-[1fr_1.05fr] md:p-10"
    >
      <div>
        <div className="flex items-center gap-4">
          <Image src={app.icon} alt="" width={64} height={64} className="app-icon h-14 w-14 md:h-16 md:w-16" />
          <span className="inline-block rounded-full bg-hot px-2.5 py-1 text-[12px] font-semibold text-white shadow-[0_6px_16px_-6px_hsl(14_100%_55%/0.8)]">{d.flagship.kicker}</span>
        </div>
        <h3 className="font-display mt-5 text-[2.4rem] leading-none md:text-[3.25rem] rtl:leading-[1.35]">
          <a href={localePath(locale, `/apps/${app.slug}/`)} className="transition-colors hover:text-[#8FA2FF]">
            {app.name[locale]}
          </a>
        </h3>
        <p className="mt-4 max-w-[30rem] text-[1.02rem] leading-relaxed text-white/80">{app.desc[locale]}</p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          <a href={app.site} target="_blank" rel="noopener noreferrer" className="press group inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-[#0B0D14] hover:bg-[#8FA2FF]">
            {d.flagship.openSite} <ArrowUpRight size={15} className="nudge rtl:-scale-x-100" />
          </a>
          <a href={app.play} target="_blank" rel="noopener noreferrer" className="press group inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-white/40 px-5 py-2.5 text-[14px] font-semibold hover:border-white hover:bg-white/10">
            {d.flagship.play} <ArrowUpRight size={15} className="nudge rtl:-scale-x-100" />
          </a>
        </div>
        <div className="mt-6">
          <Platforms kind={app.kind[locale]} dark />
        </div>
      </div>
      <a href={app.site} target="_blank" rel="noopener noreferrer" aria-label={d.flagship.openSite} className="group block">
        <div className="relative aspect-[1200/630] overflow-hidden rounded-[18px] shadow-[0_30px_60px_-30px_rgb(0_0_0/0.9)] ring-1 ring-white/15">
          <Image src={app.thumb!} alt="" fill sizes="(max-width: 768px) 100vw, 560px" className="object-cover transition duration-500 ease-out group-hover:scale-[1.045]" />
        </div>
      </a>
    </div>
  )
}
