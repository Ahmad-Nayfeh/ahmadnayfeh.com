/**
 * Owner-editable switches for the site. The file content/site-settings.json is changed from the
 * private admin page (/admin/), which commits it through the GitHub API; the site then rebuilds.
 *
 * hidden.apps / hidden.projects / hidden.posts: slugs that are left out of every list and get no page.
 * hidden.sections: home page sections to leave out: "apps", "work", "projects", "notebook", "contact".
 * home.apps: which apps the home page shows after the flagship, in this order.
 * home.projects / home.posts: how many the home page shows.
 *
 * Hiding removes an item from the built site only. The file and the item stay in the public repository.
 */
import raw from "@/content/site-settings.json"

export interface SiteSettings {
  hidden: { apps: string[]; projects: string[]; posts: string[]; sections: string[] }
  home: { apps: string[]; projects: number; posts: number }
}

const list = (v: unknown): string[] => (Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [])
const count = (v: unknown, fallback: number) => (typeof v === "number" && v >= 0 && v <= 12 ? Math.floor(v) : fallback)
const r = raw as { hidden?: Record<string, unknown>; home?: Record<string, unknown> }

export const settings: SiteSettings = {
  hidden: {
    apps: list(r.hidden?.apps),
    projects: list(r.hidden?.projects),
    posts: list(r.hidden?.posts),
    sections: list(r.hidden?.sections),
  },
  home: {
    apps: list(r.home?.apps),
    projects: count(r.home?.projects, 3),
    posts: count(r.home?.posts, 3),
  },
}

export const isHidden = (kind: "apps" | "projects" | "posts" | "sections", slug: string) => settings.hidden[kind].includes(slug)
