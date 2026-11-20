import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { AppEntry } from "@/content/apps"
import { localePath, t, type Locale } from "@/i18n"

/** One app as a drawing-sheet card: kind, picture, icon and name, one-line description. */
export default function AppCard({ app, locale }: { app: AppEntry; locale: Locale }) {
  const d = t(locale)
  return (
    <a href={localePath(locale, `/apps/${app.slug}/`)} className="sheet sheet-hover group flex h-full flex-col">
      <div className="flex h-9 items-center justify-between border-b border-border px-4">
        <span className="label text-[9.5px]">{app.kind[locale]}</span>
        <span className="lamp scale-75" aria-hidden />
      </div>

      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-secondary">
        {app.thumb ? (
          <Image
            src={app.thumb}
            alt=""
            fill
            className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          />
        ) : (
          <div className="app-tile flex h-full w-full items-center justify-center">
            <Image src={app.icon} alt="" width={96} height={96} className="h-24 w-24" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          <Image src={app.icon} alt="" width={36} height={36} className="h-9 w-9 shrink-0" />
          <h3 className="text-[1.2rem] font-semibold leading-snug tracking-tight">
            <span className="redline">{app.name[locale]}</span>
          </h3>
        </div>
        <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">{app.desc[locale]}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="label text-[10.5px] group-hover:text-accent">{d.apps.details}</span>
          <ArrowUpRight size={17} className="shrink-0 text-muted-foreground transition-colors group-hover:text-accent rtl:-scale-x-100" />
        </div>
      </div>
    </a>
  )
}
