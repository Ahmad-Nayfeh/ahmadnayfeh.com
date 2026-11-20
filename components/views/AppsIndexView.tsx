import PageHeader from "@/components/PageHeader"
import { AppRow, FlagshipRow } from "@/components/apps/AppRow"
import { flagshipApp, otherApps } from "@/content/apps"
import { otherLocale, t, type Locale } from "@/i18n"

/** The list of all apps, in either language. */
export default function AppsIndexView({ locale }: { locale: Locale }) {
  const d = t(locale)
  const od = t(otherLocale(locale))
  const groups = [
    { id: "android", title: d.appPage.android, items: otherApps.filter((a) => a.group === "android") },
    { id: "browser", title: d.appPage.browser, items: otherApps.filter((a) => a.group === "browser") },
  ]
  return (
    <>
      <PageHeader locale={locale} title={d.nav.apps} other={od.nav.apps} lead={d.appPage.lead} />
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-20 pt-12 md:px-10 md:pb-28 md:pt-16">
        <FlagshipRow app={flagshipApp} locale={locale} />
        {groups.map((g) => (
          <section key={g.id} id={g.id} className="scroll-mt-24 pt-12 md:pt-16">
            <h2 className="font-display pb-5 text-[clamp(1.75rem,4vw,2.5rem)] leading-none rtl:leading-[1.4]">{g.title}</h2>
            <div>
              {g.items.map((app) => (
                <AppRow key={app.slug} app={app} locale={locale} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
