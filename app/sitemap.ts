export const dynamic = "force-static"
import type { MetadataRoute } from "next"
import { getAllPosts, getAllProjects } from "@/lib/content"
import { apps } from "@/content/apps"
import { siteConfig } from "@/config/site"

/** Every page in both languages. A notebook entry is listed once, in its own language. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, posts] = await Promise.all([getAllProjects(), getAllPosts()])
  const base = siteConfig.url
  const now = new Date()
  const both = (path: string, priority: number, lastModified: Date = now) =>
    ["", "/ar"].map((prefix) => ({ url: `${base}${prefix}${path}`, lastModified, changeFrequency: "monthly" as const, priority }))

  return [
    ...both("/", 1),
    ...both("/apps/", 0.9),
    ...apps.flatMap((a) => both(`/apps/${a.slug}/`, 0.8)),
    ...both("/projects/", 0.8),
    ...projects.flatMap((p) => both(`/projects/${p.slug}/`, 0.6, new Date(p.date))),
    ...both("/notebook/", 0.7),
    ...posts.map((p) => ({
      url: `${base}${p.lang === "ar" ? "/ar" : ""}/notebook/${p.slug}/`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...both("/about/", 0.7),
    { url: `${base}/apps/marathon/privacy/`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.2 },
  ]
}
