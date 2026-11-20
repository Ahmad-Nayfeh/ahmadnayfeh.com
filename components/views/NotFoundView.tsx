import PageHeader from "@/components/PageHeader"
import { localePath, t, type Locale } from "@/i18n"

export default function NotFoundView({ locale }: { locale: Locale }) {
  const d = t(locale)
  return (
    <>
      <PageHeader locale={locale} eyebrow="404" title={d.notFound.title} lead={d.notFound.body}>
        <a href={localePath(locale, "/")} className="btn btn-on-brand">
          {d.notFound.home}
        </a>
      </PageHeader>
      <div className="h-24" />
    </>
  )
}
