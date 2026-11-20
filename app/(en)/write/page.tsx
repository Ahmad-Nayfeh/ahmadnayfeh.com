import type { Metadata } from "next"
import PageHeader from "@/components/PageHeader"
import WriteForm from "@/components/WriteForm"

export const metadata: Metadata = {
  title: "Write",
  robots: { index: false, follow: false },
}

/** Private page for publishing a notebook entry from any device. Useless without the owner's key. */
export default function WritePage() {
  return (
    <>
      <PageHeader locale="en" size="md" title="Write" lead="Publish a notebook entry from this device. It appears on the site about two minutes after you press Publish." />
      <div className="mx-auto w-full max-w-[860px] px-5 pb-24 pt-10 md:px-10 md:pt-14">
        <WriteForm />
      </div>
    </>
  )
}
