import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { flagshipApp } from "@/content/apps"
import { localePath, t, type Locale } from "@/i18n"

/** Shadhra: the one project with its own domain and store listing, shown ahead of the other apps. */
export default function Flagship({ locale }: { locale: Locale }) {
  const d = t(locale)
  const app = flagshipApp

  return (
    <section id="flagship" className="border-y border-border bg-card/40">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
        <div className="mb-8 flex items-center gap-3">
          <span className="label">{d.flagship.kicker}</span>
          <span aria-hidden className="h-px flex-1 bg-border" />
          <span className="flex items-center gap-2">
            <span className="lamp scale-75" aria-hidden />
            <span className="label">{d.flagship.status}</span>
          </span>
        </div>

        <div className="sheet grid grid-cols-1 lg:grid-cols-12">
          <a
            href={app.site}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={d.flagship.openSite}
            className="group relative block aspect-[1200/630] overflow-hidden border-b border-border bg-secondary lg:col-span-7 lg:aspect-auto lg:min-h-[380px] lg:border-b-0 lg:border-e"
          >
            <Image
              src={app.thumb!}
              alt=""
              fill
              priority
              className="object-cover transition duration-500 group-hover:scale-[1.015]"
              sizes="(max-width: 1024px) 100vw, 720px"
            />
          </a>

          <div className="flex flex-col p-6 md:p-8 lg:col-span-5">
            <div className="flex items-center gap-4">
              <Image src={app.icon} alt="" width={56} height={56} className="h-14 w-14 border border-border" />
              <div>
                <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] leading-none rtl:leading-[1.3]">{app.name[locale]}</h2>
                <p className="label mt-2">{d.flagship.where}</p>
              </div>
            </div>

            <p className="mt-6 text-[1.075rem] leading-relaxed text-foreground/85">{app.desc[locale]}</p>

            <dl className="mt-6 grid grid-cols-1 border-t border-border sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {d.flagship.facts.map((f) => (
                <div key={f.label} className="border-b border-border py-3 sm:pe-4 lg:pe-0 xl:pe-4">
                  <dt className="label text-[9.5px]">{f.label}</dt>
                  <dd className="mt-1 text-[14px] font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <a href={app.site} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {d.flagship.openSite} <ArrowUpRight size={14} className="rtl:-scale-x-100" />
              </a>
              <a href={app.play} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                {d.flagship.play} <ArrowUpRight size={14} className="rtl:-scale-x-100" />
              </a>
            </div>
            <a href={localePath(locale, `/apps/${app.slug}/`)} className="redline mt-5 self-start text-[14px] font-medium text-muted-foreground">
              {d.flagship.more}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
