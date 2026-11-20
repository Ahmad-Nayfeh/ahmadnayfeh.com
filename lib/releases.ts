import fs from "fs"
import path from "path"

export interface Release {
  versionName?: string
  versionCode?: number
  url?: string
  size?: number
  sha256?: string
}

/**
 * Reads public/apps/<slug>/latest.json, the file each app's publish script writes
 * and the installed apps read to find updates. `key` is "." when the file describes
 * one release, or the name of an entry ("tv", "mobile", "kit") when it holds several.
 */
export function readRelease(slug: string, key: string): Release | null {
  const file = path.join(process.cwd(), "public", "apps", slug, "latest.json")
  if (!fs.existsSync(file)) return null
  try {
    const data = JSON.parse(fs.readFileSync(file, "utf8"))
    const entry = key === "." ? data : data?.[key]
    return entry && typeof entry === "object" ? (entry as Release) : null
  } catch {
    return null
  }
}

/** File size the way the pages show it, e.g. "4.2 MB". */
export function formatSize(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}
