"use client"

import { useEffect, useState } from "react"

/**
 * The owner's writing page.
 *
 * It saves one file, content/blog/<name>.mdx, to this site's repository through
 * GitHub's own API, using a personal access key that the owner pastes once and
 * that is kept only in this browser. Saving the file starts the normal site
 * build, so the piece is public a couple of minutes later. Without a key that
 * has write access to the repository, nothing here can be saved.
 */

const REPO = "Ahmad-Nayfeh/ahmadnayfeh.com"
const BRANCH = "main"
const API = `https://api.github.com/repos/${REPO}`
const KEY_NAME = "write.key"

type Kind = "article" | "essay" | "reading"
type Lang = "ar" | "en"

const KINDS: { id: Kind; label: string; hint: string }[] = [
  { id: "reading", label: "Reading note", hint: "A passage from a book, with your comment" },
  { id: "essay", label: "Essay", hint: "A piece of your own writing" },
  { id: "article", label: "Article", hint: "A technical article" },
]

function today() {
  const d = new Date()
  const p = (n: number) => String(n).padStart(2, "0")
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

/** A file name made of Latin letters and digits; Arabic titles get the kind and the time instead. */
function fileSlug(title: string, kind: Kind, date: string) {
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
 * The site reads entries as MDX, where "{", "}" and "<" start code. Plain writing
 * must not be read as code, so they are escaped outside code blocks and inline code.
 */
export function escapeForMdx(text: string): string {
  let fenced = false
  return text
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => {
      if (/^\s*(```|~~~)/.test(line)) {
        fenced = !fenced
        return line
      }
      if (fenced) return line
      const safe = line
        .split(/(`[^`]*`)/)
        .map((part, i) => (i % 2 === 1 ? part : part.replace(/([{}<])/g, "\\$1")))
        .join("")
      // A line that starts with these words would be read as a program statement.
      return safe.replace(/^(\s*)(import|export)(\s)/, (_m, a, w, b) => `${a}&#${w.charCodeAt(0)};${w.slice(1)}${b}`)
    })
    .join("\n")
}

function quoteBlock(text: string) {
  return text
    .trim()
    .split("\n")
    .map((l) => `> ${l}`)
    .join("\n")
}

function toBase64(text: string) {
  const bytes = new TextEncoder().encode(text)
  let bin = ""
  bytes.forEach((b) => (bin += String.fromCharCode(b)))
  return btoa(bin)
}

const field = "w-full rounded-[14px] border border-border bg-background px-4 py-3 text-[16px] outline-none transition-colors focus:border-foreground"
const labelCls = "mb-2 block text-[14px] font-semibold"

export default function WriteForm() {
  const [key, setKey] = useState<string | null>(null)
  const [ready, setReady] = useState(false)
  const [keyInput, setKeyInput] = useState("")
  const [keyError, setKeyError] = useState("")
  const [checking, setChecking] = useState(false)

  const [kind, setKind] = useState<Kind>("reading")
  const [lang, setLang] = useState<Lang>("ar")
  const [title, setTitle] = useState("")
  const [source, setSource] = useState("")
  const [quote, setQuote] = useState("")
  const [body, setBody] = useState("")
  const [summary, setSummary] = useState("")
  const [tags, setTags] = useState("")
  const [date, setDate] = useState(today())

  const [state, setState] = useState<"idle" | "saving" | "done" | "error">("idle")
  const [message, setMessage] = useState("")
  const [published, setPublished] = useState<{ slug: string; lang: Lang } | null>(null)

  useEffect(() => {
    try {
      setKey(localStorage.getItem(KEY_NAME))
    } catch {
      /* storage blocked: the key must be pasted each visit */
    }
    setReady(true)
  }, [])

  async function saveKey() {
    const value = keyInput.trim()
    if (!value) return
    setChecking(true)
    setKeyError("")
    try {
      const res = await fetch(API, { headers: { Authorization: `Bearer ${value}`, Accept: "application/vnd.github+json" } })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(res.status === 401 ? "GitHub did not accept this key." : `GitHub answered ${res.status}.`)
      if (!data?.permissions?.push) throw new Error("This key can read the repository but cannot write to it. It needs Contents: Read and write.")
      try {
        localStorage.setItem(KEY_NAME, value)
      } catch {
        /* keep it for this visit only */
      }
      setKey(value)
      setKeyInput("")
    } catch (e) {
      setKeyError(e instanceof Error ? e.message : "Could not check the key.")
    } finally {
      setChecking(false)
    }
  }

  function forgetKey() {
    try {
      localStorage.removeItem(KEY_NAME)
    } catch {
      /* nothing stored */
    }
    setKey(null)
  }

  async function publish(e: React.FormEvent) {
    e.preventDefault()
    if (!key) return
    const text = kind === "reading" ? [quote.trim() && quoteBlock(quote), body.trim()].filter(Boolean).join("\n\n") : body.trim()
    if (!title.trim() || !text) {
      setState("error")
      setMessage(kind === "reading" ? "Add a title and the passage." : "Add a title and the text.")
      return
    }
    const excerpt = (summary.trim() || (kind === "reading" ? quote : body).trim().replace(/\s+/g, " ").slice(0, 180)).trim()
    const tagList = tags
      .split(/[,،]/)
      .map((x) => x.trim())
      .filter(Boolean)
    const slug = fileSlug(title, kind, date)
    const front = [
      "---",
      `title: ${JSON.stringify(title.trim())}`,
      `slug: ${JSON.stringify(slug)}`,
      `date: ${JSON.stringify(date)}`,
      `tags: ${JSON.stringify(tagList)}`,
      `excerpt: ${JSON.stringify(excerpt)}`,
      `language: ${JSON.stringify(lang)}`,
      `kind: ${JSON.stringify(kind)}`,
      ...(source.trim() ? [`source: ${JSON.stringify(source.trim())}`] : []),
      "---",
      "",
    ].join("\n")
    const file = `${front}${escapeForMdx(text)}\n`

    setState("saving")
    setMessage("")
    try {
      const res = await fetch(`${API}/contents/content/blog/${slug}.mdx`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${key}`, Accept: "application/vnd.github+json", "Content-Type": "application/json" },
        body: JSON.stringify({ message: `Notebook: ${title.trim()}`, content: toBase64(file), branch: BRANCH }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        if (res.status === 401) throw new Error("GitHub no longer accepts the key on this device. Remove it and paste a new one.")
        if (res.status === 422) throw new Error("An entry with this name already exists today. Change the title slightly and publish again.")
        throw new Error(data?.message ? `GitHub: ${data.message}` : `GitHub answered ${res.status}.`)
      }
      setPublished({ slug, lang })
      setState("done")
      setTitle("")
      setQuote("")
      setBody("")
      setSummary("")
    } catch (err) {
      setState("error")
      setMessage(err instanceof Error ? err.message : "Could not publish.")
    }
  }

  if (!ready) return null

  if (!key) {
    return (
      <div className="rounded-[22px] bg-card p-6 md:p-8">
        <h2 className="font-display text-[1.6rem] tracking-[-0.02em]">This device has no key yet</h2>
        <p className="mt-3 text-[15.5px] leading-relaxed text-foreground/75">
          Only the owner can publish. Paste your GitHub access key for this site once; it is kept in this browser only and is sent only to GitHub.
        </p>
        <label htmlFor="write-key" className={`${labelCls} mt-6`}>
          Access key
        </label>
        <input id="write-key" type="password" autoComplete="off" dir="ltr" value={keyInput} onChange={(e) => setKeyInput(e.target.value)} className={field} placeholder="github_pat_..." />
        {keyError && <p className="mt-3 text-[14.5px] font-medium text-destructive">{keyError}</p>}
        <button type="button" onClick={saveKey} disabled={checking || !keyInput.trim()} className="btn btn-primary mt-5 disabled:opacity-50">
          {checking ? "Checking..." : "Save key on this device"}
        </button>
      </div>
    )
  }

  const dir = lang === "ar" ? "rtl" : "ltr"
  return (
    <form onSubmit={publish} className="space-y-7">
      <fieldset>
        <legend className={labelCls}>Kind</legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {KINDS.map((k) => (
            <label key={k.id} className={`cursor-pointer rounded-[14px] border p-4 transition-colors ${kind === k.id ? "border-foreground bg-card" : "border-border hover:border-foreground"}`}>
              <input type="radio" name="kind" value={k.id} checked={kind === k.id} onChange={() => setKind(k.id)} className="sr-only" />
              <span className="block text-[15.5px] font-semibold">{k.label}</span>
              <span className="mt-1 block text-[13.5px] text-muted-foreground">{k.hint}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className={labelCls}>Written in</legend>
        <div className="flex gap-2">
          {(["ar", "en"] as Lang[]).map((l) => (
            <label key={l} className={`cursor-pointer rounded-full border px-5 py-2 text-[15px] font-medium transition-colors ${lang === l ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"}`}>
              <input type="radio" name="lang" value={l} checked={lang === l} onChange={() => setLang(l)} className="sr-only" />
              {l === "ar" ? "العربية" : "English"}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="write-title" className={labelCls}>
          Title
        </label>
        <input id="write-title" dir={dir} lang={lang} value={title} onChange={(e) => setTitle(e.target.value)} className={field} />
      </div>

      {kind === "reading" && (
        <>
          <div>
            <label htmlFor="write-source" className={labelCls}>
              Book and author
            </label>
            <input id="write-source" dir={dir} lang={lang} value={source} onChange={(e) => setSource(e.target.value)} className={field} />
          </div>
          <div>
            <label htmlFor="write-quote" className={labelCls}>
              The passage
            </label>
            <textarea id="write-quote" dir={dir} lang={lang} rows={6} value={quote} onChange={(e) => setQuote(e.target.value)} className={`${field} leading-[1.9]`} />
          </div>
        </>
      )}

      <div>
        <label htmlFor="write-body" className={labelCls}>
          {kind === "reading" ? "Your comment (optional)" : "Text"}
        </label>
        <textarea id="write-body" dir={dir} lang={lang} rows={kind === "reading" ? 5 : 16} value={body} onChange={(e) => setBody(e.target.value)} className={`${field} leading-[1.9]`} />
        <p className="mt-2 text-[13.5px] text-muted-foreground">Leave an empty line between paragraphs. Markdown works: **bold**, ## heading, - list.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="write-tags" className={labelCls}>
            Topics, separated by commas (optional)
          </label>
          <input id="write-tags" dir={dir} lang={lang} value={tags} onChange={(e) => setTags(e.target.value)} className={field} />
        </div>
        <div>
          <label htmlFor="write-date" className={labelCls}>
            Date
          </label>
          <input id="write-date" type="date" dir="ltr" value={date} onChange={(e) => setDate(e.target.value)} className={field} />
        </div>
      </div>

      {kind !== "reading" && (
        <div>
          <label htmlFor="write-summary" className={labelCls}>
            One-line summary (optional)
          </label>
          <input id="write-summary" dir={dir} lang={lang} value={summary} onChange={(e) => setSummary(e.target.value)} className={field} />
        </div>
      )}

      {state === "error" && <p className="rounded-[14px] border border-destructive px-4 py-3 text-[15px] font-medium text-destructive">{message}</p>}
      {state === "done" && published && (
        <p className="rounded-[14px] bg-card px-4 py-3 text-[15px] leading-relaxed">
          Published. It will be at{" "}
          <a className="font-semibold text-accent underline" href={`${published.lang === "ar" ? "/ar" : ""}/notebook/${published.slug}/`}>
            {published.lang === "ar" ? "/ar" : ""}/notebook/{published.slug}/
          </a>{" "}
          in about two minutes.
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
        <button type="submit" disabled={state === "saving"} className="btn btn-primary disabled:opacity-50">
          {state === "saving" ? "Publishing..." : "Publish"}
        </button>
        <button type="button" onClick={forgetKey} className="text-[14px] font-medium text-muted-foreground underline">
          Remove the key from this device
        </button>
      </div>
    </form>
  )
}
