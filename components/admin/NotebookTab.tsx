"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { GitHubError, SettingsConflict, deleteFile, explain, getFile, listPostFiles, saveSettings, type RemoteSettings } from "@/lib/github"
import { parsePostFile, type PostFile } from "@/lib/notebook-file"
import type { Editing } from "./AdminPanel"
import { smallBtn, type Status } from "./ui"

interface Entry {
  name: string
  path: string
  sha: string
  /** null when the file could not be understood. */
  post: PostFile | null
}

const KIND_LABEL = { essay: "مقال أو خاطرة", article: "مقال تقني" } as const
const CHANGED = "تغيّر ملف الإعدادات على GitHub للتو من جهاز آخر، فقرأته من جديد ولم أغيّر شيئاً. اضغط مرة أخرى."

/** Every file of content/blog/, newest first: edit, hide or show, delete. */
export default function NotebookTab({
  keyValue,
  active,
  round,
  remote,
  onRemote,
  onStatus,
  onEdit,
}: {
  keyValue: string
  active: boolean
  round: number
  remote: RemoteSettings
  onRemote: (next: RemoteSettings) => void
  onStatus: (s: Status) => void
  onEdit: (entry: Editing) => void
}) {
  const [entries, setEntries] = useState<Entry[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [problem, setProblem] = useState("")
  const [busy, setBusy] = useState("")
  const [confirming, setConfirming] = useState("")
  const loadedRound = useRef(-1)

  const load = useCallback(async () => {
    setLoading(true)
    setProblem("")
    try {
      const files = await listPostFiles(keyValue)
      const out: Entry[] = []
      // A few at a time, so a long notebook does not open dozens of connections at once.
      for (let i = 0; i < files.length; i += 6) {
        const part = await Promise.all(
          files.slice(i, i + 6).map(async (f) => {
            const file = await getFile(keyValue, f.path)
            return { name: f.name, path: f.path, sha: file.sha, post: parsePostFile(f.name, file.text) }
          }),
        )
        out.push(...part)
      }
      out.sort((a, b) => (Date.parse(b.post?.date ?? "") || 0) - (Date.parse(a.post?.date ?? "") || 0) || a.name.localeCompare(b.name))
      setEntries(out)
    } catch (e) {
      setProblem(explain(e))
    } finally {
      setLoading(false)
    }
  }, [keyValue])

  // Read the list when the tab is opened, and again after a file was saved.
  useEffect(() => {
    if (!active || loadedRound.current === round) return
    loadedRound.current = round
    void load()
  }, [active, round, load])

  async function toggleHidden(entry: Entry) {
    if (!entry.post) return
    const slug = entry.post.slug
    const hide = !remote.settings.hidden.posts.includes(slug)
    setBusy(entry.path)
    try {
      const next = await saveSettings(
        keyValue,
        (cur) => ({ ...cur, hidden: { ...cur.hidden, posts: hide ? [...cur.hidden.posts.filter((s) => s !== slug), slug] : cur.hidden.posts.filter((s) => s !== slug) } }),
        `Notebook: ${hide ? "hide" : "show"} ${slug}`,
      )
      onRemote(next)
      onStatus({ tone: "ok", text: hide ? "أُخفي النص." : "عاد النص إلى الظهور." })
    } catch (e) {
      if (e instanceof SettingsConflict) {
        onRemote(e.fresh)
        onStatus({ tone: "error", text: CHANGED })
      } else onStatus({ tone: "error", text: explain(e) })
    } finally {
      setBusy("")
    }
  }

  async function remove(entry: Entry) {
    setBusy(entry.path)
    setConfirming("")
    try {
      await deleteFile(keyValue, entry.path, entry.sha, `Notebook: delete ${entry.post?.title ?? entry.name}`)
      setEntries((list) => list?.filter((x) => x.path !== entry.path) ?? null)
      onStatus({ tone: "ok", text: "حُذف النص." })
      // A deleted entry no longer needs its line in the hidden list.
      const slug = entry.post?.slug
      if (slug && remote.settings.hidden.posts.includes(slug)) {
        try {
          onRemote(await saveSettings(keyValue, (cur) => ({ ...cur, hidden: { ...cur.hidden, posts: cur.hidden.posts.filter((s) => s !== slug) } }), `Notebook: forget deleted ${slug}`))
        } catch (e) {
          if (e instanceof SettingsConflict) onRemote(e.fresh)
        }
      }
    } catch (e) {
      const changed = e instanceof GitHubError && (e.status === 409 || e.status === 422 || e.status === 404)
      onStatus({ tone: "error", text: changed ? "تغيّر هذا الملف على GitHub، فلم أحذفه. قرأت القائمة من جديد." : explain(e) })
      if (changed) void load()
    } finally {
      setBusy("")
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[15.5px] leading-[1.8] text-foreground/80">كل نصوص الدفتر كما هي الآن على GitHub، الأحدث أولاً.</p>
        <button type="button" onClick={() => void load()} disabled={loading} className={smallBtn}>
          {loading ? "أقرأ..." : "حدّث القائمة"}
        </button>
      </div>

      {problem && (
        <p role="alert" className="mt-5 rounded-[14px] border border-destructive px-4 py-3 text-[15.5px] font-medium leading-[1.8] text-destructive">
          {problem}
        </p>
      )}
      {!entries && loading && <p className="mt-6 text-[15.5px] text-muted-foreground">أقرأ النصوص من GitHub...</p>}
      {entries && entries.length === 0 && <p className="mt-6 text-[15.5px] text-muted-foreground">لا توجد نصوص بعد.</p>}

      {entries && entries.length > 0 && (
        <ul className="mt-6" data-testid="post-list">
          {entries.map((entry) => {
            const post = entry.post
            const hidden = !!post && remote.settings.hidden.posts.includes(post.slug)
            const working = busy === entry.path
            return (
              <li key={entry.path} data-file={entry.name} className="rule-row py-5">
                <h3 dir="auto" lang={post?.lang} className={`text-[18px] font-semibold leading-[1.6] ${hidden ? "text-muted-foreground" : ""}`}>
                  {post?.title ?? entry.name}
                </h3>
                {post ? (
                  <p className="mt-2 flex flex-wrap items-center gap-2 text-[14px] text-muted-foreground">
                    <span dir="ltr">{post.date}</span>
                    <span className="chip">{KIND_LABEL[post.kind]}</span>
                    <span className="chip">{post.lang === "ar" ? "عربي" : "إنجليزي"}</span>
                    {hidden ? (
                      <span className="chip !border-foreground bg-foreground !text-background">
                        مخفي
                      </span>
                    ) : (
                      <span className="chip">ظاهر</span>
                    )}
                  </p>
                ) : (
                  <p className="mt-2 text-[14.5px] text-destructive">تعذّرت قراءة رأس هذا الملف. عدّله من GitHub مباشرة.</p>
                )}

                {confirming === entry.path ? (
                  <div role="alertdialog" aria-label="تأكيد الحذف" className="mt-4 rounded-[16px] border-[1.5px] border-destructive p-4">
                    <p className="text-[15.5px] font-medium leading-[1.8]">
                      هل تريد حذف «<span dir="auto">{post?.title ?? entry.name}</span>» نهائياً من الموقع؟
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button type="button" onClick={() => void remove(entry)} className={`${smallBtn} border-destructive bg-destructive text-white hover:border-destructive`}>
                        نعم، احذفه
                      </button>
                      <button type="button" onClick={() => setConfirming("")} className={smallBtn}>
                        تراجع
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post && (
                      <>
                        <button type="button" disabled={working} onClick={() => onEdit({ path: entry.path, sha: entry.sha, post })} className={smallBtn}>
                          تعديل
                        </button>
                        <button type="button" disabled={working} onClick={() => void toggleHidden(entry)} className={smallBtn}>
                          {working ? "..." : hidden ? "إظهار" : "إخفاء"}
                        </button>
                      </>
                    )}
                    <button type="button" disabled={working} onClick={() => setConfirming(entry.path)} className={`${smallBtn} text-destructive`}>
                      حذف
                    </button>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
