/**
 * How a notebook entry is turned into a file and read back, for the admin page (/admin/).
 *
 * The site itself reads the files in lib/content.ts (gray-matter, then the PostFrontmatter schema in
 * lib/schemas.ts). Everything here must stay compatible with that: the same field names, the same
 * defaults, and the same rule for the slug.
 */
import yaml from "js-yaml"

export type Kind = "article" | "essay" | "reading"
export type Lang = "ar" | "en"

/** What the writing form holds. */
export interface Draft {
  kind: Kind
  lang: Lang
  title: string
  /** Reading notes: the book and its author. */
  source: string
  /** Reading notes: the passage. */
  quote: string
  body: string
  summary: string
  /** Separated by commas. */
  tags: string
  date: string
  /**
   * True when the file was written by hand as MDX (components, HTML, math). Its text is then shown
   * and saved exactly as it is, without the escaping that plain writing gets.
   */
  raw: boolean
}

/** A file from content/blog/ as the admin page understands it. */
export interface PostFile {
  /** The address part: /notebook/<slug>/. */
  slug: string
  title: string
  date: string
  kind: Kind
  lang: Lang
  tags: string[]
  excerpt: string
  source: string
  /** The frontmatter as written, including fields the form does not edit. */
  data: Record<string, unknown>
  /** Everything after the frontmatter. */
  body: string
}

export function today() {
  const d = new Date()
  const p = (n: number) => String(n).padStart(2, "0")
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

export function emptyDraft(): Draft {
  return { kind: "reading", lang: "ar", title: "", source: "", quote: "", body: "", summary: "", tags: "", date: today(), raw: false }
}

/** A file name made of Latin letters and digits; Arabic titles get the kind and the time instead. */
export function fileSlug(title: string, kind: Kind, date: string) {
  const latin = title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 50)
  const d = new Date()
  const time = `${String(d.getHours()).padStart(2, "0")}${String(d.getMinutes()).padStart(2, "0")}`
  return `${date}-${latin.length >= 3 ? latin : `${kind}-${time}`}`
}

/**
 * The slug of an entry, exactly as lib/content.ts derives it: the `slug` field of the frontmatter
 * when it has one, otherwise the file name without ".mdx". This is the value that goes in
 * hidden.posts of content/site-settings.json.
 */
export function postSlug(fileName: string, frontmatterSlug?: unknown): string {
  return typeof frontmatterSlug === "string" && frontmatterSlug.length > 0 ? frontmatterSlug : fileName.replace(/\.mdx$/, "")
}

/** Applies a change to the text outside code blocks and inline code, line by line. */
function outsideCode(text: string, change: (part: string) => string, line: (l: string) => string): string {
  let fenced = false
  return text
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((l) => {
      if (/^\s*(```|~~~)/.test(l)) {
        fenced = !fenced
        return l
      }
      if (fenced) return l
      return line(
        l
          .split(/(`[^`]*`)/)
          .map((part, i) => (i % 2 === 1 ? part : change(part)))
          .join(""),
      )
    })
    .join("\n")
}

/**
 * The site reads entries as MDX, where "{", "}" and "<" start code. Plain writing
 * must not be read as code, so they are escaped outside code blocks and inline code.
 */
export function escapeForMdx(text: string): string {
  return outsideCode(
    text,
    (part) => part.replace(/([{}<])/g, "\\$1"),
    // A line that starts with these words would be read as a program statement.
    (l) => l.replace(/^(\s*)(import|export)(\s)/, (_m, a, w, b) => `${a}&#${w.charCodeAt(0)};${w.slice(1)}${b}`),
  )
}

/** The reverse of escapeForMdx, to show a saved entry in the form the way it was typed. */
export function unescapeForMdx(text: string): string {
  return outsideCode(
    text,
    (part) => part.replace(/\\([{}<])/g, "$1"),
    (l) => l.replace(/^(\s*)&#(105|101);(mport|xport)(\s)/, (_m, a, code, rest, b) => `${a}${String.fromCharCode(Number(code))}${rest}${b}`),
  )
}

function quoteBlock(text: string) {
  return text
    .trim()
    .split("\n")
    .map((l) => `> ${l}`)
    .join("\n")
}

/** The text of the entry as typed: for a reading note, the passage as a quotation, then the comment. */
function plainBody(d: Draft): string {
  return d.kind === "reading" ? [d.quote.trim() && quoteBlock(d.quote), d.body.trim()].filter(Boolean).join("\n\n") : d.body.trim()
}

/** True when the form has enough to save. */
export function draftHasText(d: Draft): boolean {
  return d.title.trim().length > 0 && (d.raw ? d.body.trim().length > 0 : plainBody(d).length > 0)
}

function tagList(tags: string): string[] {
  return tags
    .split(/[,،]/)
    .map((x) => x.trim())
    .filter(Boolean)
}

/** The fields the form writes; any other field of an edited file is kept after them. */
const FORM_FIELDS = ["title", "slug", "date", "tags", "excerpt", "language", "kind", "source"]

/**
 * The whole file for a draft.
 * `slug` is written for a new entry (it equals the file name). When an existing file is edited,
 * `existing` is its frontmatter: its slug is kept as it was and its other fields are kept too.
 */
export function buildPostFile(d: Draft, opts: { slug?: string; existing?: Record<string, unknown> }): string {
  const existing = opts.existing ?? {}
  const slug = opts.slug ?? (typeof existing.slug === "string" && existing.slug ? existing.slug : undefined)
  const excerpt = (d.summary.trim() || (d.raw ? "" : (d.kind === "reading" && d.quote.trim() ? d.quote : d.body).trim().replace(/\s+/g, " ").slice(0, 180))).trim()
  const rest: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(existing)) if (!FORM_FIELDS.includes(k)) rest[k] = v
  const front = [
    "---",
    `title: ${JSON.stringify(d.title.trim())}`,
    ...(slug ? [`slug: ${JSON.stringify(slug)}`] : []),
    `date: ${JSON.stringify(d.date)}`,
    `tags: ${JSON.stringify(tagList(d.tags))}`,
    `excerpt: ${JSON.stringify(excerpt)}`,
    `language: ${JSON.stringify(d.lang)}`,
    `kind: ${JSON.stringify(d.kind)}`,
    ...(d.source.trim() ? [`source: ${JSON.stringify(d.source.trim())}`] : []),
    ...(Object.keys(rest).length ? [yaml.dump(rest, { lineWidth: -1 }).trimEnd()] : []),
    "---",
    "",
  ].join("\n")
  const body = d.raw ? d.body.replace(/\r\n/g, "\n").trimEnd() : escapeForMdx(plainBody(d))
  return `${front}${body}\n`
}

const str = (v: unknown, fallback = "") => (typeof v === "string" ? v : fallback)

/** Reads a file from content/blog/. Returns null when it has no usable frontmatter. */
export function parsePostFile(fileName: string, text: string): PostFile | null {
  const m = /^﻿?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(text)
  if (!m) return null
  let data: unknown
  try {
    data = yaml.load(m[1])
  } catch {
    return null
  }
  if (typeof data !== "object" || data === null || Array.isArray(data)) return null
  const fm = data as Record<string, unknown>
  const title = str(fm.title)
  if (!title) return null
  // An unquoted date is read by YAML as a date, not as text.
  const date = fm.date instanceof Date ? fm.date.toISOString().slice(0, 10) : str(fm.date)
  return {
    slug: postSlug(fileName, fm.slug),
    title,
    date,
    // The same defaults as PostFrontmatter in lib/schemas.ts.
    kind: fm.kind === "essay" || fm.kind === "reading" ? fm.kind : "article",
    lang: fm.language === "ar" ? "ar" : "en",
    tags: Array.isArray(fm.tags) ? fm.tags.filter((x): x is string => typeof x === "string") : [],
    excerpt: str(fm.excerpt),
    source: str(fm.source),
    data: fm,
    body: text.slice(m[0].length),
  }
}

/**
 * Fills the form from a saved file. When the text cannot be brought back to "as typed" and saved
 * again as exactly the same text, the draft is marked raw and the text is edited as it is.
 */
export function draftFromPost(post: PostFile): Draft {
  const saved = post.body.replace(/\r\n/g, "\n").trim()
  const base: Draft = {
    kind: post.kind,
    lang: post.lang,
    title: post.title,
    source: post.source,
    quote: "",
    body: "",
    summary: post.excerpt,
    tags: post.tags.join(post.lang === "ar" ? "، " : ", "),
    date: /^\d{4}-\d{2}-\d{2}$/.test(post.date) ? post.date : post.date.slice(0, 10),
    raw: false,
  }
  const typed = unescapeForMdx(saved)
  let draft: Draft = { ...base, body: typed }
  if (post.kind === "reading") {
    const lines = typed.split("\n")
    let n = 0
    while (n < lines.length && lines[n].startsWith(">")) n++
    draft = { ...base, quote: lines.slice(0, n).map((l) => l.replace(/^> ?/, "")).join("\n"), body: lines.slice(n).join("\n").trim() }
  }
  if (escapeForMdx(plainBody(draft)) === saved) return draft
  return { ...base, body: post.body, raw: true }
}
