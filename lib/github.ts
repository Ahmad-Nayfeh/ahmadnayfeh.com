/**
 * The few GitHub calls the admin page (/admin/) makes, from the owner's browser, with the owner's
 * access key. The key is sent only to https://api.github.com and is never logged or shown.
 */
import { parseSettings, serializeSettings, type SiteSettings } from "@/lib/settings-shape"

export const REPO = "Ahmad-Nayfeh/ahmadnayfeh.com"
export const BRANCH = "main"
export const ACTIONS_URL = `https://github.com/${REPO}/actions`
/** localStorage name of the key. The old /write/ page used the same name, so the key carries over. */
export const KEY_NAME = "write.key"
export const SETTINGS_PATH = "content/site-settings.json"
export const BLOG_DIR = "content/blog"

const API = `https://api.github.com/repos/${REPO}`

/** GitHub answered, but not with success. */
export class GitHubError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
  }
}

/** The settings file changed on GitHub since it was read. `fresh` is what it holds now. */
export class SettingsConflict extends Error {
  constructor(public fresh: RemoteSettings) {
    super("settings changed")
  }
}

export interface RemoteFile {
  path: string
  sha: string
  text: string
}

export interface RemoteSettings {
  sha: string
  /** The file as parsed JSON, kept so that unknown fields survive a save. */
  raw: unknown
  settings: SiteSettings
}

function toBase64(text: string) {
  const bytes = new TextEncoder().encode(text)
  let bin = ""
  bytes.forEach((b) => (bin += String.fromCharCode(b)))
  return btoa(bin)
}

function fromBase64(b64: string) {
  const bin = atob(b64.replace(/\s/g, ""))
  const bytes = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
  return new TextDecoder().decode(bytes)
}

const encodePath = (path: string) => path.split("/").map(encodeURIComponent).join("/")

async function call(key: string, path: string, init: { method?: string; body?: unknown } = {}) {
  const res = await fetch(`${API}${path}`, {
    method: init.method ?? "GET",
    // Always the current state: a remembered answer could carry an old version of a file.
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${key}`,
      Accept: "application/vnd.github+json",
      ...(init.body ? { "Content-Type": "application/json" } : {}),
    },
    body: init.body ? JSON.stringify(init.body) : undefined,
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new GitHubError(res.status, typeof data?.message === "string" ? data.message : "")
  return data
}

/** Checks that the key reaches this repository and may write to it. Throws GitHubError when it may not. */
export async function checkKey(key: string): Promise<void> {
  const repo = await call(key, "")
  if (!repo?.permissions?.push) throw new GitHubError(403, "read-only")
}

export async function getFile(key: string, path: string): Promise<RemoteFile> {
  const data = await call(key, `/contents/${encodePath(path)}?ref=${BRANCH}`)
  if (data?.encoding !== "base64" || typeof data.content !== "string") throw new GitHubError(415, "unreadable")
  return { path, sha: data.sha, text: fromBase64(data.content) }
}

/** The .mdx files of content/blog/. */
export async function listPostFiles(key: string): Promise<{ name: string; path: string; sha: string }[]> {
  const data = await call(key, `/contents/${BLOG_DIR}?ref=${BRANCH}`)
  if (!Array.isArray(data)) return []
  return data
    .filter((f) => f?.type === "file" && typeof f.name === "string" && f.name.endsWith(".mdx"))
    .map((f) => ({ name: f.name as string, path: f.path as string, sha: f.sha as string }))
}

/** Creates the file, or replaces it when `sha` (the version being replaced) is given. Returns the new sha. */
export async function putFile(key: string, path: string, text: string, message: string, sha?: string): Promise<string> {
  const data = await call(key, `/contents/${encodePath(path)}`, {
    method: "PUT",
    body: { message, content: toBase64(text), branch: BRANCH, ...(sha ? { sha } : {}) },
  })
  return data?.content?.sha ?? ""
}

export async function deleteFile(key: string, path: string, sha: string, message: string): Promise<void> {
  await call(key, `/contents/${encodePath(path)}`, { method: "DELETE", body: { message, sha, branch: BRANCH } })
}

/** The settings file as it is on GitHub now (not the copy the site was built with). */
export async function getSettings(key: string): Promise<RemoteSettings> {
  const file = await getFile(key, SETTINGS_PATH)
  let raw: unknown = {}
  try {
    raw = JSON.parse(file.text)
  } catch {
    /* a broken file is read as empty and is repaired by the next save */
  }
  return { sha: file.sha, raw, settings: parseSettings(raw) }
}

/**
 * Changes the settings file in one commit: reads the current file, applies `change` to it, writes it.
 * With `baseSha`, refuses when the file is no longer the version the user was looking at.
 * Throws SettingsConflict (with the current file) when someone else changed it first.
 */
export async function saveSettings(key: string, change: (current: SiteSettings) => SiteSettings, message: string, baseSha?: string): Promise<RemoteSettings> {
  const current = await getSettings(key)
  if (baseSha && current.sha !== baseSha) throw new SettingsConflict(current)
  const text = serializeSettings(change(current.settings), current.raw)
  try {
    const sha = (await putFile(key, SETTINGS_PATH, text, message, current.sha)) || (await getSettings(key)).sha
    const raw = JSON.parse(text)
    return { sha, raw, settings: parseSettings(raw) }
  } catch (e) {
    if (e instanceof GitHubError && (e.status === 409 || e.status === 422)) throw new SettingsConflict(await getSettings(key))
    throw e
  }
}

/** A plain Arabic sentence for a failed call. */
export function explain(e: unknown): string {
  if (e instanceof GitHubError) {
    if (e.status === 401) return "لم يقبل GitHub المفتاح. إمّا أنه غير صحيح أو أن مدته انتهت. أنشئ مفتاحاً جديداً والصقه."
    if (e.status === 403 && e.message === "read-only") return "هذا المفتاح يقرأ المستودع ولا يستطيع الكتابة فيه. يجب أن تكون صلاحية Contents هي Read and write."
    if (e.status === 403) return "رفض GitHub الطلب. قد لا يملك المفتاح صلاحية الكتابة، أو كثرت الطلبات فانتظر دقائق ثم أعد المحاولة."
    if (e.status === 404) return "لم يجد GitHub المطلوب. تأكد أن المفتاح أُنشئ للمستودع ahmadnayfeh.com."
    return `تعذّر إتمام الطلب (رمز GitHub ${e.status}).`
  }
  return "تعذّر الاتصال بـ GitHub. تحقق من الإنترنت ثم أعد المحاولة."
}
