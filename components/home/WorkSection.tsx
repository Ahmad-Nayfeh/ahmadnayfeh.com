import BiHeading from "@/components/BiHeading"
import type { WorkContent } from "@/types"
import { otherLocale, t, type Locale } from "@/i18n"

/** Current job in brief: role, products, what the work involves, and the automation side. */
export default function WorkSection({ work, locale }: { work: WorkContent; locale: Locale }) {
  const d = t(locale)
  return (
    <section id="work" className="mx-auto w-full max-w-[1240px] scroll-mt-24 px-5 pt-20 md:px-10 md:pt-24">
      <BiHeading locale={locale} title={d.experience.kicker} other={t(otherLocale(locale)).experience.kicker} />

      <div className="grid grid-cols-1 gap-x-14 gap-y-6 border-t-[1.5px] border-foreground pt-7 lg:grid-cols-[1fr_1.15fr]">
        <h3 className="font-display text-[1.7rem] leading-tight tracking-[-0.02em] md:text-[2.1rem] rtl:leading-[1.4]">{work.title}</h3>
        <div>
          <p className="text-[1.05rem] leading-relaxed text-foreground/80">{work.intro}</p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {work.products.map((p) => (
              <span key={p} className="chip !text-foreground/80">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ol className="mt-10 grid grid-cols-1 gap-x-8 md:grid-cols-4">
        {work.steps.map((step, i) => (
          <li key={step.title} className="border-t border-border py-5">
            <div className="font-display text-[1.05rem] text-accent" dir="ltr">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h4 className="mt-1.5 text-[1.15rem] font-semibold tracking-tight">{step.title}</h4>
            <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{step.detail}</p>
          </li>
        ))}
      </ol>

      {work.automation && (
        <p className="mt-6 max-w-4xl rounded-[18px] bg-card px-6 py-5 text-[1.05rem] leading-relaxed text-foreground/90">{work.automation}</p>
      )}
    </section>
  )
}
