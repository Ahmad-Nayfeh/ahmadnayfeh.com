import PageHeader from "@/components/PageHeader"
import { AppRow, FlagshipRow } from "@/components/apps/AppRow"
import { flagshipApp, otherApps } from "@/content/apps"
import { otherLocale, t, type Locale } from "@/i18n"

/** The list of all apps, in either language. */
export default function AppsIndexView({ locale }: { locale: Locale }) {
  const d = t(locale)
  const od = t(otherLocale(locale))
  const groups = [
    { id: "sync", title: d.appPage.sync, note: d.appPage.syncNote, items: otherApps.filter((a) => a.group === "sync") },
    { id: "android", title: d.appPage.android, note: "", items: otherApps.filter((a) => a.group === "android") },
    { id: "browser", title: d.appPage.browser, note: "", items: otherApps.filter((a) => a.group === "browser") },
  ]
  const head = "font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-none rtl:leading-[1.4]"
  return (
    <>
      <PageHeader locale={locale} title={d.nav.apps} other={od.nav.apps} lead={d.appPage.lead} />
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-20 pt-12 md:px-10 md:pb-28 md:pt-16">
        {groups.map((g, i) => {
          // The flagship (Shadhra) opens the first group: it is the same kind of app, at another scale.
          const lead = i === 0 ? flagshipApp : undefined
          if (!lead && g.items.length === 0) return null
          return (
            <section key={g.id} id={g.id} className={`scroll-mt-24 ${i === 0 ? "" : "pt-12 md:pt-16"}`}>
              <h2 className={`${head} ${g.note ? "pb-3" : "pb-5"}`}>{g.title}</h2>
              {g.note && <p className="max-w-[40rem] pb-6 text-[1.02rem] leading-relaxed text-muted-foreground">{g.note}</p>}
              {lead && <FlagshipRow app={lead} locale={locale} />}
              <div>
                {g.items.map((app) => (
                  <AppRow key={app.slug} app={app} locale={locale} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </>
  )
}
