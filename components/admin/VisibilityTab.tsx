"use client"

import { useEffect, useMemo, useState } from "react"
import { SettingsConflict, explain, getSettings, saveSettings, type RemoteSettings } from "@/lib/github"
import { HOME_SECTIONS, MAX_HOME_COUNT, type SiteSettings } from "@/lib/settings-shape"
import { check, hint, labelCls, panel, smallBtn, type AdminItem, type Status } from "./ui"

const SECTION_LABEL: Record<(typeof HOME_SECTIONS)[number], string> = {
  apps: "التطبيقات",
  work: "العمل",
  projects: "المشاريع",
  notebook: "الدفتر",
  contact: "التواصل",
}

/** What this tab edits. Hidden notebook entries are not here: they are changed from the Notebook tab. */
interface Form {
  hiddenApps: string[]
  hiddenProjects: string[]
  hiddenSections: string[]
  homeApps: string[]
  homeProjects: number
  homePosts: number
}

const formOf = (s: SiteSettings): Form => ({
  hiddenApps: s.hidden.apps,
  hiddenProjects: s.hidden.projects,
  hiddenSections: s.hidden.sections,
  homeApps: s.home.apps,
  homeProjects: s.home.projects,
  homePosts: s.home.posts,
})

/** The hidden list to save: known items in the order of the page, then any slug this page does not know. */
function hiddenList(known: string[], hidden: string[]) {
  return [...known.filter((s) => hidden.includes(s)), ...hidden.filter((s) => !known.includes(s))]
}

export default function VisibilityTab({
  keyValue,
  apps,
  projects,
  remote,
  round,
  onRemote,
  onStatus,
}: {
  keyValue: string
  apps: AdminItem[]
  projects: AdminItem[]
  remote: RemoteSettings
  round: number
  onRemote: (next: RemoteSettings, startOver: boolean) => void
  onStatus: (s: Status) => void
}) {
  const [form, setForm] = useState<Form>(() => formOf(remote.settings))
  const [saving, setSaving] = useState(false)
  const [reading, setReading] = useState(false)
  const [notice, setNotice] = useState("")

  // Start over from the file whenever it was read again from GitHub.
  useEffect(() => {
    setForm(formOf(remote.settings))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round])

  const dirty = useMemo(() => JSON.stringify(form) !== JSON.stringify(formOf(remote.settings)), [form, remote])
  const homeChoices = apps.filter((a) => !a.flagship)
  const nameOf = (slug: string) => apps.find((a) => a.slug === slug)?.name ?? slug

  const toggle = (name: "hiddenApps" | "hiddenProjects" | "hiddenSections", slug: string, visible: boolean) =>
    setForm((f) => ({ ...f, [name]: visible ? f[name].filter((s) => s !== slug) : [...f[name], slug] }))

  function move(slug: string, by: -1 | 1) {
    setForm((f) => {
      const list = [...f.homeApps]
      const i = list.indexOf(slug)
      const j = i + by
      if (i < 0 || j < 0 || j >= list.length) return f
      ;[list[i], list[j]] = [list[j], list[i]]
      return { ...f, homeApps: list }
    })
  }

  async function reread() {
    setReading(true)
    setNotice("")
    try {
      onRemote(await getSettings(keyValue), true)
      setNotice("قرأت الإعدادات من جديد من GitHub.")
    } catch (e) {
      setNotice(explain(e))
    } finally {
      setReading(false)
    }
  }

  async function save() {
    setSaving(true)
    setNotice("")
    try {
      const next = await saveSettings(
        keyValue,
        (cur) => ({
          hidden: {
            apps: hiddenList(apps.map((a) => a.slug), form.hiddenApps),
            projects: hiddenList(projects.map((p) => p.slug), form.hiddenProjects),
            // Not edited here: keep what GitHub has now.
            posts: cur.hidden.posts,
            sections: hiddenList([...HOME_SECTIONS], form.hiddenSections),
          },
          home: { apps: form.homeApps, projects: form.homeProjects, posts: form.homePosts },
        }),
        "Site settings: what is shown",
        remote.sha,
      )
      onRemote(next, true)
      onStatus({ tone: "ok", text: "حُفظت إعدادات الظهور." })
    } catch (e) {
      const text =
        e instanceof SettingsConflict
          ? "تغيّر ملف الإعدادات على GitHub من جهاز آخر بعد أن فتحت هذه الصفحة، فلم أحفظ شيئاً. قرأته من جديد وهذه محتوياته الآن: راجع الاختيارات ثم اضغط «حفظ»."
          : explain(e)
      if (e instanceof SettingsConflict) onRemote(e.fresh, true)
      onStatus({ tone: "error", text })
    } finally {
      setSaving(false)
    }
  }

  const row = "flex min-h-[54px] cursor-pointer items-center gap-3 border-t border-border py-2 text-[16.5px] first:border-t-0"
  const heading = "text-[18px] font-semibold"

  return (
    <div className="space-y-6">
      <p className="rounded-[16px] border border-border px-4 py-3 text-[15px] leading-[1.9] text-foreground/80">
        <strong className="font-semibold text-foreground">للعلم:</strong> الإخفاء يزيل العنصر من الموقع فقط. عند إخفاء تطبيق تختفي صفحته ونسخته العاملة في المتصفح، ويبقى ملف التحديث وملف التثبيت حتى لا تنقطع التحديثات عن التطبيق المثبّت. وملفات العنصر تبقى في مستودع GitHub العام ويستطيع أي أحد أن يراها هناك، فالإخفاء ليس وسيلة لحفظ سرّ.
      </p>

      <section className={panel} data-group="apps">
        <h3 className={heading}>التطبيقات</h3>
        <p className={hint}>العلامة تعني أن التطبيق ظاهر. التطبيق المخفي لا يظهر في أي قائمة ولا تبقى له صفحة.</p>
        <div className="mt-3">
          {apps.map((a) => (
            <label key={a.slug} className={row}>
              <input type="checkbox" className={check} data-slug={a.slug} checked={!form.hiddenApps.includes(a.slug)} onChange={(e) => toggle("hiddenApps", a.slug, e.target.checked)} />
              <span dir="auto">{a.name}</span>
              {form.hiddenApps.includes(a.slug) && <span className="chip ms-auto">مخفي</span>}
            </label>
          ))}
        </div>
      </section>

      <section className={panel} data-group="projects">
        <h3 className={heading}>المشاريع</h3>
        <div className="mt-3">
          {projects.map((p) => (
            <label key={p.slug} className={row}>
              <input type="checkbox" className={check} data-slug={p.slug} checked={!form.hiddenProjects.includes(p.slug)} onChange={(e) => toggle("hiddenProjects", p.slug, e.target.checked)} />
              <span dir="auto">{p.name}</span>
              {form.hiddenProjects.includes(p.slug) && <span className="chip ms-auto">مخفي</span>}
            </label>
          ))}
        </div>
      </section>

      <section className={panel} data-group="sections">
        <h3 className={heading}>أقسام الصفحة الرئيسية</h3>
        <div className="mt-3">
          {HOME_SECTIONS.map((s) => (
            <label key={s} className={row}>
              <input type="checkbox" className={check} data-slug={s} checked={!form.hiddenSections.includes(s)} onChange={(e) => toggle("hiddenSections", s, e.target.checked)} />
              <span>{SECTION_LABEL[s]}</span>
              {form.hiddenSections.includes(s) && <span className="chip ms-auto">مخفي</span>}
            </label>
          ))}
        </div>
      </section>

      <section className={panel} data-group="home">
        <h3 className={heading}>تطبيقات الصفحة الرئيسية</h3>
        <p className={hint}>
          {apps.find((a) => a.flagship) ? `«${apps.find((a) => a.flagship)?.name}» يظهر أولاً دائماً. ` : ""}
          بعده تظهر هذه التطبيقات بهذا الترتيب. بقية التطبيقات تبقى في صفحة التطبيقات.
        </p>
        <ol className="mt-3" data-testid="home-apps">
          {form.homeApps.map((slug, i) => (
            <li key={slug} data-slug={slug} className="flex min-h-[58px] items-center gap-2 border-t border-border py-2 text-[16.5px] first:border-t-0">
              <span className="w-6 text-muted-foreground">{i + 1}</span>
              <span dir="auto" className="flex-1">
                {nameOf(slug)}
              </span>
              <button type="button" aria-label={`ارفع ${nameOf(slug)}`} disabled={i === 0} onClick={() => move(slug, -1)} className={`${smallBtn} w-[46px] px-0`}>
                ↑
              </button>
              <button type="button" aria-label={`أنزل ${nameOf(slug)}`} disabled={i === form.homeApps.length - 1} onClick={() => move(slug, 1)} className={`${smallBtn} w-[46px] px-0`}>
                ↓
              </button>
              <button type="button" aria-label={`أزل ${nameOf(slug)} من الصفحة الرئيسية`} onClick={() => setForm((f) => ({ ...f, homeApps: f.homeApps.filter((s) => s !== slug) }))} className={smallBtn}>
                أزل
              </button>
            </li>
          ))}
        </ol>
        {form.homeApps.length === 0 && <p className="mt-3 text-[15px] text-muted-foreground">لا تطبيقات مختارة.</p>}
        {homeChoices.some((a) => !form.homeApps.includes(a.slug)) && (
          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-4">
            <span className="text-[15px] text-muted-foreground">أضف:</span>
            {homeChoices
              .filter((a) => !form.homeApps.includes(a.slug))
              .map((a) => (
                <button key={a.slug} type="button" data-add={a.slug} onClick={() => setForm((f) => ({ ...f, homeApps: [...f.homeApps, a.slug] }))} className={smallBtn}>
                  + <span dir="auto" className="ms-1">{a.name}</span>
                </button>
              ))}
          </div>
        )}

        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5">
          {(
            [
              ["homeProjects", "عدد المشاريع"],
              ["homePosts", "عدد نصوص الدفتر"],
            ] as const
          ).map(([name, label]) => (
            <div key={name}>
              <label htmlFor={`admin-${name}`} className={labelCls}>
                {label}
              </label>
              <select id={`admin-${name}`} value={form[name]} onChange={(e) => setForm((f) => ({ ...f, [name]: Number(e.target.value) }))} className="h-[52px] w-full rounded-[14px] border border-border bg-background px-4 text-[17px]">
                {Array.from({ length: MAX_HOME_COUNT + 1 }, (_, n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <p className={hint}>كم مشروعاً وكم نصاً تعرض الصفحة الرئيسية (من 0 إلى {MAX_HOME_COUNT}).</p>
      </section>

      {notice && (
        <p className="rounded-[14px] border border-border px-4 py-3 text-[15.5px] leading-[1.8]">
          {notice}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => void save()} disabled={saving || !dirty} className="btn btn-primary min-w-[9rem] disabled:opacity-50">
          {saving ? "أحفظ..." : "حفظ"}
        </button>
        <button type="button" onClick={() => void reread()} disabled={saving || reading} className="btn btn-ghost">
          {reading ? "أقرأ..." : "اقرأ من GitHub من جديد"}
        </button>
        <span className="text-[15px] text-muted-foreground">{dirty ? "لديك تغييرات لم تُحفظ." : "لا تغييرات."}</span>
      </div>
    </div>
  )
}
