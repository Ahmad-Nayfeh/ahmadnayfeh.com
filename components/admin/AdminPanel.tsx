"use client"

import { useCallback, useEffect, useState } from "react"
import { ACTIONS_URL, KEY_NAME, checkKey, explain, getSettings, type RemoteSettings } from "@/lib/github"
import type { PostFile } from "@/lib/notebook-file"
import WriteTab from "./WriteTab"
import NotebookTab from "./NotebookTab"
import VisibilityTab from "./VisibilityTab"
import { field, hint, labelCls, panel, smallBtn, type AdminItem, type Status } from "./ui"

/**
 * The owner's control panel.
 *
 * Everything it changes is a file in this site's repository, written through GitHub's own API from
 * this browser with the owner's access key. The key is pasted once, kept only in this browser, and
 * sent only to GitHub. Each save starts the normal site build. Without a key that may write to the
 * repository the page shows nothing but the place to paste one.
 *
 * The wording is Arabic because the owner is the only user.
 */

type Tab = "write" | "notebook" | "visibility"
const TABS: { id: Tab; label: string }[] = [
  { id: "write", label: "كتابة" },
  { id: "notebook", label: "الدفتر" },
  { id: "visibility", label: "الظهور" },
]

/** An entry opened for editing: the file, its version, and what it holds. */
export interface Editing {
  path: string
  sha: string
  post: PostFile
}

export default function AdminPanel({ apps, projects }: { apps: AdminItem[]; projects: AdminItem[] }) {
  const [phase, setPhase] = useState<"loading" | "nokey" | "checking" | "ready">("loading")
  const [key, setKey] = useState<string | null>(null)
  /** True when a key is kept on this device, even one that GitHub has just refused. */
  const [stored, setStored] = useState(false)
  const [keyInput, setKeyInput] = useState("")
  const [keyError, setKeyError] = useState("")

  const [remote, setRemote] = useState<RemoteSettings | null>(null)
  /** Grows when the settings were read again from GitHub, so the Visibility form starts over from them. */
  const [settingsRound, setSettingsRound] = useState(0)
  /** Grows when a notebook file was saved, so the list is read again. */
  const [postsRound, setPostsRound] = useState(0)

  const [tab, setTab] = useState<Tab>("write")
  const [status, setStatus] = useState<Status | null>(null)
  const [editing, setEditing] = useState<Editing | null>(null)

  /** Asks GitHub whether the key may write here, then reads the current settings. */
  const verify = useCallback(async (value: string, remember: boolean) => {
    setPhase("checking")
    setKeyError("")
    try {
      await checkKey(value)
      const current = await getSettings(value)
      if (remember) {
        try {
          localStorage.setItem(KEY_NAME, value)
          setStored(true)
        } catch {
          /* storage blocked: the key works for this visit only */
        }
      }
      setRemote(current)
      setSettingsRound((n) => n + 1)
      setKey(value)
      setKeyInput("")
      setPhase("ready")
    } catch (e) {
      setKeyError(explain(e))
      setPhase("nokey")
    }
  }, [])

  useEffect(() => {
    let saved: string | null = null
    try {
      saved = localStorage.getItem(KEY_NAME)
    } catch {
      /* storage blocked: the key must be pasted each visit */
    }
    if (saved) {
      setStored(true)
      void verify(saved, false)
    } else {
      setPhase("nokey")
    }
  }, [verify])

  function forgetKey() {
    try {
      localStorage.removeItem(KEY_NAME)
    } catch {
      /* nothing stored */
    }
    setStored(false)
    setKey(null)
    setRemote(null)
    setEditing(null)
    setStatus(null)
    setKeyError("")
    setPhase("nokey")
  }

  function retryStored() {
    try {
      const saved = localStorage.getItem(KEY_NAME)
      if (saved) void verify(saved, false)
    } catch {
      /* nothing stored */
    }
  }

  if (phase === "loading" || phase === "checking") {
    return (
      <p role="status" className="py-10 text-[16px] text-muted-foreground">
        {phase === "checking" ? "أتحقق من المفتاح مع GitHub..." : "..."}
      </p>
    )
  }

  if (phase === "nokey" || !key || !remote) {
    return (
      <div className={panel}>
        <h2 className="font-display text-[1.5rem] leading-[1.4]" lang="ar">
          الصق مفتاحك
        </h2>
        <p className="mt-3 text-[16px] leading-[1.9] text-foreground/80">
          هذه اللوحة لك وحدك. الصق مفتاح GitHub الخاص بهذا الموقع مرة واحدة. يُحفظ في هذا المتصفح فقط، ولا يُرسل إلا إلى GitHub.
        </p>

        <label htmlFor="admin-key" className={`${labelCls} mt-6`}>
          المفتاح
        </label>
        <input
          id="admin-key"
          type="password"
          autoComplete="off"
          dir="ltr"
          value={keyInput}
          onChange={(e) => setKeyInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && keyInput.trim()) void verify(keyInput.trim(), true)
          }}
          className={field}
          placeholder="github_pat_..."
        />
        {keyError && (
          <p role="alert" className="mt-4 rounded-[14px] border border-destructive px-4 py-3 text-[15.5px] font-medium leading-[1.8] text-destructive">
            {keyError}
          </p>
        )}
        <div className="mt-5 flex flex-wrap gap-3">
          <button type="button" onClick={() => void verify(keyInput.trim(), true)} disabled={!keyInput.trim()} className="btn btn-primary disabled:opacity-50">
            احفظ المفتاح على هذا الجهاز
          </button>
          {stored && (
            <>
              <button type="button" onClick={retryStored} className="btn btn-ghost">
                جرّب المفتاح المحفوظ مرة أخرى
              </button>
              <button type="button" onClick={forgetKey} className="btn btn-ghost">
                انسَ المفتاح المحفوظ
              </button>
            </>
          )}
        </div>

        <h3 className="mt-9 text-[16px] font-semibold">كيف أنشئ المفتاح؟</h3>
        <ol className="mt-3 list-decimal space-y-2 ps-6 text-[15.5px] leading-[1.9] text-foreground/80">
          <li>
            افتح من الحاسوب:{" "}
            <a className="font-semibold text-accent underline" dir="ltr" href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noreferrer">
              github.com/settings/personal-access-tokens/new
            </a>
          </li>
          <li>
            في <span dir="ltr">Repository access</span> اختر <span dir="ltr">Only select repositories</span> ثم المستودع <span dir="ltr">ahmadnayfeh.com</span> وحده.
          </li>
          <li>
            في <span dir="ltr">Repository permissions</span> اجعل <span dir="ltr">Contents</span> على <span dir="ltr">Read and write</span>، واترك الباقي كما هو.
          </li>
          <li>
            اضغط <span dir="ltr">Generate token</span> وانسخ المفتاح (يبدأ بـ <span dir="ltr">github_pat_</span>) ثم الصقه هنا. يعرضه GitHub مرة واحدة فقط.
          </li>
        </ol>
        <p className={hint}>للمفتاح مدة صلاحية تختارها عند إنشائه. إذا انتهت أنشئ مفتاحاً جديداً بالخطوات نفسها.</p>
      </div>
    )
  }

  return (
    <div>
      <div role="tablist" aria-label="أقسام لوحة التحكم" className="grid grid-cols-3 gap-2">
        {TABS.map((x) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            id={`tab-${x.id}`}
            aria-selected={tab === x.id}
            aria-controls={`panel-${x.id}`}
            onClick={() => setTab(x.id)}
            className={`min-h-[54px] rounded-full border-[1.5px] px-3 text-[17px] font-semibold transition-colors ${
              tab === x.id ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
            }`}
          >
            {x.label}
          </button>
        ))}
      </div>

      <div className="pt-8">
        <div role="tabpanel" id="panel-write" aria-labelledby="tab-write" hidden={tab !== "write"}>
          <WriteTab
            keyValue={key}
            editing={editing}
            onStopEditing={() => setEditing(null)}
            onStatus={setStatus}
            onSaved={() => {
              setEditing(null)
              setPostsRound((n) => n + 1)
            }}
          />
        </div>
        <div role="tabpanel" id="panel-notebook" aria-labelledby="tab-notebook" hidden={tab !== "notebook"}>
          <NotebookTab
            keyValue={key}
            active={tab === "notebook"}
            round={postsRound}
            remote={remote}
            onRemote={setRemote}
            onStatus={setStatus}
            onEdit={(entry) => {
              setEditing(entry)
              setTab("write")
              window.scrollTo({ top: 0 })
            }}
          />
        </div>
        <div role="tabpanel" id="panel-visibility" aria-labelledby="tab-visibility" hidden={tab !== "visibility"}>
          <VisibilityTab
            keyValue={key}
            apps={apps}
            projects={projects}
            remote={remote}
            round={settingsRound}
            onRemote={(next, startOver) => {
              setRemote(next)
              if (startOver) setSettingsRound((n) => n + 1)
            }}
            onStatus={setStatus}
          />
        </div>
      </div>

      {/* The result of the last save. It stays at the bottom of the screen while the panel is in view. */}
      <div className="sticky bottom-0 z-10 -mx-5 mt-10 border-t border-border bg-background/95 px-5 py-3 backdrop-blur md:-mx-0 md:px-0">
        <p
          id="admin-status"
          role="status"
          aria-live="polite"
          data-tone={status?.tone ?? "idle"}
          className={`text-[15px] leading-[1.8] ${status?.tone === "error" ? "font-medium text-destructive" : status ? "text-foreground" : "text-muted-foreground"}`}
        >
          {!status && "لم تحفظ شيئاً بعد في هذه الزيارة."}
          {status?.tone === "error" && status.text}
          {status?.tone === "ok" && (
            <>
              <span className="lamp me-2 align-middle" aria-hidden />
              <strong className="font-semibold">{status.text}</strong> يظهر التغيير على الموقع خلال دقيقتين تقريباً.{" "}
              {status.link && (
                <>
                  <a className="font-semibold text-accent underline" href={status.link.href}>
                    {status.link.label}
                  </a>
                  {" · "}
                </>
              )}
              <a className="font-semibold text-accent underline" href={ACTIONS_URL} target="_blank" rel="noreferrer">
                تابع البناء في صفحة Actions
              </a>
            </>
          )}
        </p>
      </div>

      <div className="mt-6">
        <button type="button" onClick={forgetKey} className={smallBtn}>
          انسَ المفتاح على هذا الجهاز
        </button>
      </div>
    </div>
  )
}
