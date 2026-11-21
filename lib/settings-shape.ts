/**
 * The shape and the validation rules of content/site-settings.json, with nothing else in the file,
 * so the same rules are used when the site is built (lib/settings.ts) and in the browser by the
 * admin page, which reads the current file from GitHub. See lib/settings.ts for what each field means.
 */

export interface SiteSettings {
  hidden: { apps: string[]; projects: string[]; posts: string[]; sections: string[] }
  home: { apps: string[]; projects: number; posts: number }
}

/** The home page sections that can be left out. */
export const HOME_SECTIONS = ["apps", "work", "projects", "notebook", "contact"] as const

/** The largest number of projects or posts the home page shows. */
export const MAX_HOME_COUNT = 12

const list = (v: unknown): string[] => (Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [])
const count = (v: unknown, fallback: number) => (typeof v === "number" && v >= 0 && v <= MAX_HOME_COUNT ? Math.floor(v) : fallback)
const record = (v: unknown): Record<string, unknown> => (typeof v === "object" && v !== null && !Array.isArray(v) ? (v as Record<string, unknown>) : {})

/** Reads a settings file leniently: a missing or wrong field takes its default. */
export function parseSettings(raw: unknown): SiteSettings {
  const hidden = record(record(raw).hidden)
  const home = record(record(raw).home)
  return {
    hidden: { apps: list(hidden.apps), projects: list(hidden.projects), posts: list(hidden.posts), sections: list(hidden.sections) },
    home: { apps: list(home.apps), projects: count(home.projects, 3), posts: count(home.posts, 3) },
  }
}

/**
 * The text of the settings file for these settings. Fields of the old file that this code
 * does not know are kept as they were.
 */
export function serializeSettings(next: SiteSettings, previousRaw?: unknown): string {
  const prev = record(previousRaw)
  const clean = parseSettings(next)
  const out = {
    ...prev,
    hidden: { ...record(prev.hidden), ...clean.hidden },
    home: { ...record(prev.home), ...clean.home },
  }
  return `${JSON.stringify(out, null, 2)}\n`
}
