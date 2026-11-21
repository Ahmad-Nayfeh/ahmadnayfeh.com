import type { Metadata } from "next"
import RedirectToAdmin from "@/components/admin/RedirectToAdmin"

export const metadata: Metadata = {
  title: "Write",
  robots: { index: false, follow: false },
}

/** The writing page is now a tab of /admin/. This address only sends old bookmarks there. */
export default function WritePage() {
  return <RedirectToAdmin />
}
