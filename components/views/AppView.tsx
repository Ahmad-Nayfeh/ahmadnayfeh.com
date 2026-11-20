import Image from "next/image"
import { ArrowUpRight, Download, Play, ArrowRight, ArrowLeft } from "lucide-react"
import PageHeader from "@/components/PageHeader"
import BiHeading from "@/components/BiHeading"
import { AppRow } from "@/components/apps/AppRow"
import { apps } from "@/content/apps"
import { appDetails } from "@/content/apps/details"
import type { AppDownload, AppTextItem } from "@/content/apps/types"
import { formatSize, readRelease } from "@/lib/releases"
import { localePath, otherLocale, t, type Locale } from "@/i18n"

const wrap = "mx-auto w-full max-w-[1240px] px-5 md:px-10"

/** Files and the running app live at /apps/<slug>/ in both languages. */
function fileHref(slug: string, href: string) {
  return /^https?:\/\//.test(href) ? href : `/apps/${slug}/${href}`
}

function DownloadButton({ d, slug, locale }: { d: AppDownload; slug: string; locale: Locale }) {
  const external = d.kind === "external" || d.kind === "open"
  const Icon = d.kind === "open" ? Play : d.kind === "external" ? ArrowUpRight : Download
  // Version and size come from the app's latest.json when it has an entry for this file.
  const release = d.release ? readRelease(slug, d.release) : null
  const version = release?.versionName ?? d.version
  const size = release?.size ? formatSize(release.size) : d.size
  const meta = [version && `${t(locale).appPage.version} ${version}`, size].filter(Boolean).join(" · ")
  return (
    <div className="flex flex-col gap-1.5">
      <a
        href={fileHref(slug, d.href)}
        {...(d.kind === "external" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(!external ? { download: true } : {})}
        className={`btn ${d.primary ? "btn-on-brand" : "btn-on-brand-ghost"}`}
      >
        <Icon size={16} className={d.kind === "external" ? "rtl:-scale-x-100" : undefined} />
        {d.label[locale]}
      </a>
      {(meta || d.note) && (
        <span className="px-2 text-[13px] text-white/70">
          {meta && <span dir="ltr">{meta}</span>}
          {meta && d.note ? " · " : ""}
          {d.note?.[locale]}
        </span>
      )}
    </div>
  )
}

function Rows({ items, locale }: { items: AppTextItem[]; locale: Locale }) {
  return (
    <div>
      {items.map((it) => (
        <div key={it.title.en} className="rule-row grid grid-cols-1 gap-x-10 gap-y-2 py-5 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:py-6">
          <h3 className="font-display text-[1.35rem] leading-tight tracking-[-0.02em] md:text-[1.6rem] rtl:leading-[1.4]">{it.title[locale]}</h3>
          <p className="text-[16px] leading-relaxed text-foreground/75">{it.body[locale]}</p>
        </div>
      ))}
    </div>
  )
}

/** One app's page, in either language. */
export default function AppView({ slug, locale }: { slug: string; locale: Locale }) {
  const d = t(locale)
  const od = t(otherLocale(locale))
  const app = apps.find((a) => a.slug === slug)!
  const detail = appDetails[slug]
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight
  const phones = detail.screenshots.filter((s) => s.shape === "phone")
  const wides = detail.screenshots.filter((s) => s.shape === "wide")
  const others = apps.filter((a) => a.slug !== slug && !a.flagship).slice(0, 3)

  return (
    <>
      <PageHeader
        locale={locale}
        eyebrow={
          <a href={localePath(locale, "/apps/")} className="inline-flex items-center gap-2 hover:text-white">
            <Arrow size={14} className="-scale-x-100" /> {d.appPage.allApps}
          </a>
        }
        title={
          <span className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <Image src={app.icon} alt="" width={96} height={96} className="h-[0.86em] w-[0.86em] rounded-[0.2em] bg-white/10" />
            {app.name[locale]}
          </span>
        }
        lead={
          <>
            <span className="block text-[1.35rem] font-semibold leading-snug md:text-[1.6rem]">{detail.tagline[locale]}</span>
            <span className="mt-3 block">{detail.intro[locale]}</span>
          </>
        }
      >
        <div className="flex flex-wrap items-start gap-3">
          {detail.downloads.map((dl) => (
            <DownloadButton key={dl.href} d={dl} slug={slug} locale={locale} />
          ))}
        </div>
        <ul className="mt-7 flex flex-wrap gap-2">
          <li className="rounded-full bg-white/15 px-3 py-1 text-[13.5px] font-medium">{app.kind[locale]}</li>
          {detail.facts.map((f) => (
            <li key={f.en} className="rounded-full border border-white/30 px-3 py-1 text-[13.5px]">
              {f[locale]}
            </li>
          ))}
        </ul>
      </PageHeader>

      {detail.video && (
        <section id="video" className={`${wrap} scroll-mt-24 pt-14 md:pt-20`}>
          <BiHeading locale={locale} title={d.appPage.video} other={od.appPage.video} />
          <video
            controls
            preload="none"
            poster={detail.video.poster}
            className="aspect-video w-full rounded-[22px] border border-border bg-black"
            aria-label={detail.video.title[locale]}
          >
            <source src={detail.video.src} type="video/mp4" />
            {detail.video.captions && (
              <track kind="captions" src={detail.video.captions} srcLang={detail.video.captionsLang ?? "ar"} label={detail.video.captionsLang === "en" ? "English" : "العربية"} />
            )}
          </video>
          <p className="mt-3 text-[15px] text-muted-foreground">{detail.video.title[locale]}</p>
        </section>
      )}

      {detail.features.length > 0 && (
        <section id="features" className={`${wrap} scroll-mt-24 pt-16 md:pt-24`}>
          <BiHeading locale={locale} title={d.appPage.features} other={od.appPage.features} />
          <Rows items={detail.features} locale={locale} />
        </section>
      )}

      {detail.screenshots.length > 0 && (
        <section id="screens" className={`${wrap} scroll-mt-24 pt-16 md:pt-24`}>
          <BiHeading locale={locale} title={d.appPage.screens} other={od.appPage.screens} />
          {wides.length > 0 && (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {wides.map((s) => (
                <figure key={s.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.src} alt={s.caption[locale]} loading="lazy" className="w-full rounded-[18px] border border-border" />
                  <figcaption className="mt-2 text-[14.5px] text-muted-foreground">{s.caption[locale]}</figcaption>
                </figure>
              ))}
            </div>
          )}
          {phones.length > 0 && (
            <div className={`grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 ${wides.length > 0 ? "mt-8" : ""}`}>
              {phones.map((s) => (
                <figure key={s.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.src} alt={s.caption[locale]} loading="lazy" className="w-full rounded-[22px] border border-border" />
                  <figcaption className="mt-2 text-[14.5px] text-muted-foreground">{s.caption[locale]}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </section>
      )}

      {detail.sections?.map((sec) => (
        <section key={sec.title.en} className={`${wrap} pt-16 md:pt-24`}>
          <h2 className="font-display pb-3 text-[clamp(2rem,5vw,3.25rem)] leading-[1] rtl:leading-[1.35]">{sec.title[locale]}</h2>
          {sec.intro && <p className="max-w-[46rem] pb-7 text-[1.05rem] leading-relaxed text-foreground/75">{sec.intro[locale]}</p>}
          <Rows items={sec.items} locale={locale} />
        </section>
      ))}

      {detail.install && detail.install.length > 0 && (
        <section id="install" className={`${wrap} scroll-mt-24 pt-16 md:pt-24`}>
          <BiHeading locale={locale} title={d.appPage.install} other={od.appPage.install} />
          <ol className="grid grid-cols-1 gap-x-8 border-t-[1.5px] border-foreground md:grid-cols-2 lg:grid-cols-4">
            {detail.install.map((step, i) => (
              <li key={step.title.en} className="border-b border-border py-6">
                <div className="font-display text-[1.6rem] text-accent" dir="ltr">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-[1.15rem] font-semibold tracking-tight">{step.title[locale]}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{step.body[locale]}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {detail.faq && detail.faq.length > 0 && (
        <section id="faq" className={`${wrap} scroll-mt-24 pt-16 md:pt-24`}>
          <BiHeading locale={locale} title={d.appPage.faq} other={od.appPage.faq} />
          <div>
            {detail.faq.map((f) => (
              <details key={f.q.en} className="rule-row group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1.15rem] font-semibold tracking-tight md:text-[1.3rem] [&::-webkit-details-marker]:hidden">
                  {f.q[locale]}
                  <span aria-hidden className="font-display text-[1.6rem] leading-none text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-[52rem] pb-6 text-[16px] leading-relaxed text-foreground/75">{f.a[locale]}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {detail.build && (
        <section id="build" className="ink-block mt-16 md:mt-24">
          <div className={`${wrap} py-14 md:py-20`}>
            <BiHeading locale={locale} title={d.appPage.build} other={od.appPage.build} tone="onDark" />
            <div className="grid grid-cols-1 gap-x-14 gap-y-8 border-t border-white/25 pt-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-[1.1rem] leading-[1.7] text-white/85">{detail.build.body[locale]}</p>
                {detail.build.highlights && (
                  <ul className="mt-6 space-y-2.5">
                    {detail.build.highlights.map((h) => (
                      <li key={h.en} className="flex gap-3 text-[15.5px] leading-relaxed text-white/75">
                        <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8FA2FF]" />
                        {h[locale]}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <ul className="flex flex-wrap content-start gap-2" dir="ltr">
                {detail.build.stack.map((s) => (
                  <li key={s} className="rounded-full border border-white/30 px-3 py-1 text-[13.5px] font-medium">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {(detail.links?.length || detail.notes?.length) && (
        <section className={`${wrap} pt-14 md:pt-16`}>
          {detail.links && detail.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {detail.links.map((l) => (
                <a key={l.href} href={fileHref(slug, l.href)} className="btn btn-ghost !py-2.5 !text-[14.5px]">
                  {l.label[locale]} <ArrowUpRight size={15} className="rtl:-scale-x-100" />
                </a>
              ))}
            </div>
          )}
          {detail.notes && detail.notes.length > 0 && (
            <div className="mt-6 max-w-[56rem] space-y-2 text-[14px] leading-relaxed text-muted-foreground">
              {detail.notes.map((n) => (
                <p key={n.en}>{n[locale]}</p>
              ))}
            </div>
          )}
        </section>
      )}

      <section className={`${wrap} pb-20 pt-16 md:pb-28 md:pt-24`}>
        <BiHeading
          locale={locale}
          title={d.appPage.more}
          other={od.appPage.more}
          action={
            <a href={localePath(locale, "/apps/")} className="inline-flex items-center gap-2 pb-2 text-[15px] font-semibold text-accent">
              {d.appPage.allApps} <Arrow size={16} />
            </a>
          }
        />
        <div>
          {others.map((a) => (
            <AppRow key={a.slug} app={a} locale={locale} />
          ))}
        </div>
      </section>
    </>
  )
}
