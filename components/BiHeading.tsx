import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { dirOf, otherLocale, type Locale } from "@/i18n"

/**
 * Section heading in two scripts: the word in the page's language, large,
 * followed by the same word in the other language in the accent colour.
 */
export default function BiHeading({
  locale,
  title,
  other,
  action,
  as: Tag = "h2",
  className,
  tone = "default",
}: {
  locale: Locale
  title: string
  other: string
  action?: ReactNode
  as?: "h1" | "h2"
  className?: string
  /** "onDark" for headings placed on the ink or blue blocks. */
  tone?: "default" | "onDark"
}) {
  return (
    <div data-reveal className={cn("flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-7", className)}>
      <Tag className="font-display flex flex-wrap items-baseline gap-x-4 text-[clamp(2rem,5.6vw,3.8rem)] leading-[0.95] rtl:leading-[1.3]">
        {title}
      </Tag>
      {action}
    </div>
  )
}
