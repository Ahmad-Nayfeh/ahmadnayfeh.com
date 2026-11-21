"use client"

import { useEffect } from "react"

/** The writing page moved into the admin page. Old bookmarks of /write/ land here and are sent on. */
export default function RedirectToAdmin() {
  useEffect(() => {
    window.location.replace("/admin/")
  }, [])
  return (
    <div className="mx-auto w-full max-w-[860px] px-5 py-24 md:px-10">
      {/* Works without JavaScript too. */}
      <meta httpEquiv="refresh" content="0; url=/admin/" />
      <p className="text-[17px] leading-[1.9]" dir="rtl" lang="ar">
        انتقلت صفحة الكتابة إلى{" "}
        <a className="font-semibold text-accent underline" href="/admin/">
          لوحة التحكم
        </a>
        .
      </p>
      <p className="mt-2 text-[16px] text-muted-foreground">
        The writing page moved to{" "}
        <a className="font-semibold text-accent underline" href="/admin/">
          /admin/
        </a>
        .
      </p>
    </div>
  )
}
