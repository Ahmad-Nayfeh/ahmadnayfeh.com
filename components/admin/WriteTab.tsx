"use client"

import { useEffect, useState } from "react"
import { BLOG_DIR, GitHubError, explain, putFile } from "@/lib/github"
import { buildPostFile, draftFromPost, draftHasText, emptyDraft, fileSlug, type Draft, type Kind, type Lang } from "@/lib/notebook-file"
import type { Editing } from "./AdminPanel"
import { field, hint, labelCls, smallBtn, type Status } from "./ui"

const KINDS: { id: Kind; label: string; hint: string }[] = [
  { id: "essay", label: "مقال أو خاطرة", hint: "نص من كتابتك" },
  { id: "article", label: "مقال تقني", hint: "شرح أو تجربة هندسية" },
]

/** An unfinished new entry is kept on this device, so closing the page by mistake does not lose it. */
const DRAFT_NAME = "admin.draft"

function loadDraft(): Draft {
  try {
    const saved = JSON.parse(localStorage.getItem(DRAFT_NAME) ?? "null")
    // A draft kept before the "reading" kind was removed opens as an essay.
    if (saved && typeof saved === "object") return { ...emptyDraft(), ...saved, kind: saved.kind === "article" ? "article" : "essay", raw: false }
  } catch {
    /* nothing kept */
  }
  return emptyDraft()
}

/** The writing form: a new notebook entry, or an existing one opened from the Notebook tab. */
export default function WriteTab({
  keyValue,
  editing,
  onStopEditing,
  onSaved,
  onStatus,
}: {
  keyValue: string
  editing: Editing | null
  onStopEditing: () => void
  onSaved: () => void
  onStatus: (s: Status) => void
}) {
  const [draft, setDraft] = useState<Draft>(emptyDraft)
  const [saving, setSaving] = useState(false)
  const [problem, setProblem] = useState("")
  const set = <K extends keyof Draft>(name: K, value: Draft[K]) => setDraft((d) => ({ ...d, [name]: value }))

  // Opening an entry fills the form from it; leaving it brings back the unfinished new entry.
  useEffect(() => {
    setDraft(editing ? draftFromPost(editing.post) : loadDraft())
    setProblem("")
  }, [editing])

  useEffect(() => {
    if (editing) return
    try {
      localStorage.setItem(DRAFT_NAME, JSON.stringify(draft))
    } catch {
      /* storage blocked */
    }
  }, [draft, editing])

  async function save(e: React.FormEvent) {
    e.preventDefault()
    if (!draftHasText(draft)) {
      setProblem("اكتب العنوان والنص.")
      return
    }
    const title = draft.title.trim()
    setSaving(true)
    setProblem("")
    try {
      let slug: string
      if (editing) {
        await putFile(keyValue, editing.path, buildPostFile(draft, { existing: editing.post.data }), `Notebook: edit ${title}`, editing.sha)
        slug = editing.post.slug
      } else {
        slug = fileSlug(title, draft.kind, draft.date)
        await putFile(keyValue, `${BLOG_DIR}/${slug}.mdx`, buildPostFile(draft, { slug }), `Notebook: ${title}`)
        try {
          localStorage.removeItem(DRAFT_NAME)
        } catch {
          /* storage blocked */
        }
      }
      onStatus({
        tone: "ok",
        text: editing ? "حُفظ التعديل." : "نُشر النص.",
        link: { href: `${draft.lang === "ar" ? "/ar" : ""}/notebook/${slug}/`, label: "صفحة النص" },
      })
      setDraft(emptyDraft())
      onSaved()
    } catch (err) {
      let text = explain(err)
      if (err instanceof GitHubError && (err.status === 409 || err.status === 422)) {
        text = editing
          ? "تغيّر هذا الملف على GitHub بعد أن فتحته، فلم أحفظ. انسخ نصك، ثم افتح الملف من جديد من تبويب «الدفتر»."
          : "يوجد نص بهذا الاسم في هذا التاريخ. غيّر العنوان قليلاً ثم انشر."
      }
      setProblem(text)
      onStatus({ tone: "error", text })
    } finally {
      setSaving(false)
    }
  }

  const dir = draft.lang === "ar" ? "rtl" : "ltr"
  return (
    <form onSubmit={save} className="space-y-7">
      {editing && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-[16px] border-[1.5px] border-foreground px-4 py-3">
          <p className="text-[15.5px] leading-[1.8]">
            تعدّل الآن: <strong dir="auto">{editing.post.title}</strong>
          </p>
          <button type="button" onClick={onStopEditing} className={smallBtn}>
            اترك التعديل
          </button>
        </div>
      )}

      <fieldset>
        <legend className={labelCls}>النوع</legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {KINDS.map((k) => (
            <label
              key={k.id}
              className={`cursor-pointer rounded-[14px] border-[1.5px] p-4 transition-colors ${draft.kind === k.id ? "border-foreground bg-card" : "border-border hover:border-foreground"}`}
            >
              <input type="radio" name="kind" value={k.id} checked={draft.kind === k.id} onChange={() => set("kind", k.id)} className="sr-only" />
              <span className="block text-[16px] font-semibold">{k.label}</span>
              <span className="mt-1 block text-[14px] text-muted-foreground">{k.hint}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className={labelCls}>لغة النص</legend>
        <div className="flex gap-2">
          {(["ar", "en"] as Lang[]).map((l) => (
            <label
              key={l}
              className={`inline-flex min-h-[48px] cursor-pointer items-center rounded-full border-[1.5px] px-6 text-[16px] font-medium transition-colors ${
                draft.lang === l ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
              }`}
            >
              <input type="radio" name="lang" value={l} checked={draft.lang === l} onChange={() => set("lang", l)} className="sr-only" />
              {l === "ar" ? "العربية" : "English"}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="admin-title" className={labelCls}>
          العنوان
        </label>
        <input id="admin-title" dir={dir} lang={draft.lang} value={draft.title} onChange={(e) => set("title", e.target.value)} className={field} />
      </div>

      <div>
        <label htmlFor="admin-body" className={labelCls}>
          النص
        </label>
        <textarea
          id="admin-body"
          dir={draft.raw ? "ltr" : dir}
          lang={draft.lang}
          rows={16}
          value={draft.body}
          onChange={(e) => set("body", e.target.value)}
          className={`${field} leading-[1.9] ${draft.raw ? "font-mono text-[14.5px]" : ""}`}
        />
        {draft.raw ? (
          <p className={hint}>هذا النص مكتوب بصيغة MDX (فيه صور أو معادلات أو عناصر خاصة)، فيُعرض هنا ويُحفظ كما هو تماماً. عدّل الكلمات وحدها ولا تغيّر الرموز.</p>
        ) : (
          <p className={hint}>
            اترك سطراً فارغاً بين الفقرات. تعمل صيغة Markdown: <bdi>**غامق**</bdi>، <bdi>## عنوان</bdi>، <bdi>- قائمة</bdi>.
          </p>
        )}
      </div>

      <div>
        <label htmlFor="admin-summary" className={labelCls}>
          ملخص في سطر (اختياري)
        </label>
        <input id="admin-summary" dir={dir} lang={draft.lang} value={draft.summary} onChange={(e) => set("summary", e.target.value)} className={field} />
        <p className={hint}>يظهر تحت العنوان في قائمة الدفتر. إن تركته فارغاً أُخذ من أول النص.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="admin-tags" className={labelCls}>
            المواضيع، بينها فواصل (اختياري)
          </label>
          <input id="admin-tags" dir={dir} lang={draft.lang} value={draft.tags} onChange={(e) => set("tags", e.target.value)} className={field} />
        </div>
        <div>
          <label htmlFor="admin-date" className={labelCls}>
            التاريخ
          </label>
          <input id="admin-date" type="date" dir="ltr" required value={draft.date} onChange={(e) => set("date", e.target.value)} className={field} />
        </div>
      </div>

      {problem && (
        <p role="alert" className="rounded-[14px] border border-destructive px-4 py-3 text-[15.5px] font-medium leading-[1.8] text-destructive">
          {problem}
        </p>
      )}

      <button type="submit" disabled={saving} className="btn btn-primary w-full disabled:opacity-50 sm:w-auto">
        {saving ? "أحفظ..." : editing ? "احفظ التعديل" : "انشر"}
      </button>
    </form>
  )
}
