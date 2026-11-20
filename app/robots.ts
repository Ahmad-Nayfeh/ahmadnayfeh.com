export const dynamic = "force-static"
import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"

export default function robots(): MetadataRoute.Robots {
  return {
    // The running browser apps and the private pages are not for search results.
    rules: { userAgent: "*", allow: "/", disallow: ["/apps/munazara/app/", "/apps/voxa/app/", "/apps/marathon/admin/", "/apps/marathon/join/", "/write/"] },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
