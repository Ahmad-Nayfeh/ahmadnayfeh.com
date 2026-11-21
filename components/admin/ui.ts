/** Shared looks and types of the admin page. Sizes are chosen for a thumb on a phone. */

export const field =
  "w-full rounded-[14px] border border-border bg-background px-4 py-3 text-[16px] outline-none transition-colors focus:border-foreground"
export const labelCls = "mb-2 block text-[15px] font-semibold"
export const hint = "mt-2 text-[14px] leading-relaxed text-muted-foreground"
export const smallBtn =
  "inline-flex min-h-[46px] items-center justify-center rounded-full border border-border px-4 text-[15px] font-semibold transition-colors hover:border-foreground disabled:opacity-40"
export const panel = "rounded-[22px] bg-card p-5 md:p-7"
export const check = "h-6 w-6 shrink-0 accent-[hsl(var(--brand))]"

/** The line shown after each save. */
export interface Status {
  tone: "ok" | "error"
  text: string
  /** A link that goes with the message, for example the saved entry. */
  link?: { href: string; label: string }
}

/** An app or a project the owner can hide. */
export interface AdminItem {
  slug: string
  name: string
  /** Shown first on the home page, always: it is not part of the home selection. */
  flagship?: boolean
}
