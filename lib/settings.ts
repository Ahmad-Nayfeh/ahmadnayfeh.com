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
 *
 * The shape and the validation rules are in lib/settings-shape.ts, which the admin page also uses in
 * the browser. A new field must be added there (type, parseSettings) and described here.
 */
import raw from "@/content/site-settings.json"
import { parseSettings, type SiteSettings } from "@/lib/settings-shape"

export type { SiteSettings } from "@/lib/settings-shape"

export const settings: SiteSettings = parseSettings(raw)

export const isHidden = (kind: "apps" | "projects" | "posts" | "sections", slug: string) => settings.hidden[kind].includes(slug)
