import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { AppEntry } from "@/content/apps"
import { localePath, t, type Locale } from "@/i18n"

function Thumb({ app, className }: { app: AppEntry; className: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[14px] border border-border bg-secondary ${className}`}>
      {app.thumb ? (
        <Image src={app.thumb} alt="" fill sizes="320px" className="object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
      ) : (
        <div className="app-tile flex h-full w-full items-center justify-center">
          <Image src={app.icon} alt="" width={56} height={56} className="h-14 w-14" />
        </div>
      )}
    </div>
  )
}

/** One app as a ruled row: icon, name and kind, one-line description, small picture. */
export function AppRow({ app, locale }: { app: AppEntry; locale: Locale }) {
  return (
    <a
      href={localePath(locale, `/apps/${app.slug}/`)}
      className="rule-row group grid grid-cols-[52px_minmax(0,1fr)] items-center gap-x-4 gap-y-3 py-5 md:grid-cols-[60px_minmax(0,1.1fr)_minmax(0,1.4fr)_220px] md:gap-x-7 md:py-6"
    >
      <Image src={app.icon} alt="" width={60} height={60} className="h-[52px] w-[52px] rounded-[14px] md:h-[60px] md:w-[60px]" />
      <h3 className="font-display text-[1.7rem] leading-none transition-colors group-hover:text-accent md:text-[2.35rem] rtl:leading-[1.35]">
        {app.name[locale]}
        <span className="mt-2 block font-sans text-[13.5px] font-medium tracking-normal text-muted-foreground rtl:font-arabic">{app.kind[locale]}</span>
      </h3>
      <p className="col-span-2 text-[15.5px] leading-relaxed text-foreground/75 md:col-span-1">{app.desc[locale]}</p>
      <Thumb app={app} className="col-span-2 hidden h-[112px] md:col-span-1 md:block" />
    </a>
  )
}

/** Shadhra: same row shape, set on the ink block with its two outside links. */
export function FlagshipRow({ app, locale }: { app: AppEntry; locale: Locale }) {
  const d = t(locale)
  return (
    <div className="ink-block mb-3 grid grid-cols-[52px_minmax(0,1fr)] items-center gap-x-4 gap-y-5 rounded-[22px] p-6 md:grid-cols-[60px_minmax(0,1.1fr)_minmax(0,1.4fr)_300px] md:gap-x-7 md:p-8">
      <Image src={app.icon} alt="" width={60} height={60} className="h-[52px] w-[52px] rounded-[14px] md:h-[60px] md:w-[60px]" />
      <div>
        <span className="mb-2.5 inline-block rounded-full bg-hot px-2.5 py-1 text-[12px] font-semibold text-white">{d.flagship.kicker}</span>
        <h3 className="font-display text-[2rem] leading-none md:text-[2.5rem] rtl:leading-[1.35]">
          <a href={localePath(locale, `/apps/${app.slug}/`)} className="hover:text-[#8FA2FF]">
            {app.name[locale]}
          </a>
        </h3>
        <p className="mt-2 text-[13.5px] font-medium text-white/60">{app.kind[locale]} · Google Play</p>
      </div>
      <div className="col-span-2 md:col-span-1">
        <p className="text-[15.5px] leading-relaxed text-white/80">{app.desc[locale]}</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          <a href={app.site} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13.5px] font-semibold text-[#0B0D14] hover:bg-[#8FA2FF]">
            {d.flagship.openSite} <ArrowUpRight size={14} className="rtl:-scale-x-100" />
          </a>
          <a href={app.play} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-white/40 px-4 py-2 text-[13.5px] font-semibold hover:border-white">
            {d.flagship.play} <ArrowUpRight size={14} className="rtl:-scale-x-100" />
          </a>
        </div>
      </div>
      <a href={app.site} target="_blank" rel="noopener noreferrer" aria-label={d.flagship.openSite} className="group col-span-2 block md:col-span-1">
        <div className="relative h-[170px] overflow-hidden rounded-[14px] md:h-[160px]">
          <Image src={app.thumb!} alt="" fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
        </div>
      </a>
    </div>
  )
}
