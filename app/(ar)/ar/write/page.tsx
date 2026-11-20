import type { Metadata } from "next"
import PageHeader from "@/components/PageHeader"
import WriteForm from "@/components/WriteForm"

export const metadata: Metadata = {
  title: "اكتب",
  robots: { index: false, follow: false },
}

/** The private writing page, reached from the Arabic site. The form itself is the same. */
export default function WritePageArabic() {
  return (
    <>
      <PageHeader locale="ar" size="md" title="اكتب" lead="انشر نصاً في الدفتر من هذا الجهاز. يظهر في الموقع بعد نحو دقيقتين من الضغط على Publish." />
      <div className="mx-auto w-full max-w-[860px] px-5 pb-24 pt-10 md:px-10 md:pt-14" dir="ltr" lang="en">
        <WriteForm />
      </div>
    </>
  )
}
