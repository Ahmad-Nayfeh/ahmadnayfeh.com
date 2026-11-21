import type { Metadata } from "next"
import PageHeader from "@/components/PageHeader"
import AdminPanel from "@/components/admin/AdminPanel"
import { allApps } from "@/content/apps"
import { listProjectsForAdmin } from "@/lib/content"

export const metadata: Metadata = {
  title: "لوحة التحكم",
  robots: { index: false, follow: false },
}

/**
 * The owner's control panel: write and edit notebook entries, and choose what the site shows.
 * It is not linked from anywhere and is useless without the owner's key (see components/admin/AdminPanel.tsx).
 * The lists of apps and projects are taken here, when the site is built, hidden ones included.
 */
export default function AdminPage() {
  const apps = allApps.map((a) => ({ slug: a.slug, name: a.name.ar, flagship: !!a.flagship }))
  const projects = listProjectsForAdmin()
  return (
    <>
      <PageHeader locale="en" size="md" contentLang="ar" title="لوحة التحكم" lead="اكتب في الدفتر، وعدّل نصوصك، واختر ما يظهر في الموقع. كل حفظ يظهر على الموقع بعد دقيقتين تقريباً." />
      <div dir="rtl" lang="ar" className="mx-auto w-full max-w-[860px] px-5 pb-16 pt-8 md:px-10 md:pt-12">
        <AdminPanel apps={apps} projects={projects} />
      </div>
    </>
  )
}
