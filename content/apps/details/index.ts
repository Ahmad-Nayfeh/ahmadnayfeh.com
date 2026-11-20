import type { AppDetail } from "../types"
import { detail as khatwa } from "./khatwa"
import { detail as reel } from "./reel"
import { detail as marathon } from "./marathon"
import { detail as shadhra } from "./shadhra"
import { detail as shasha } from "./shasha"
import { detail as munazara } from "./munazara"
import { detail as voxa } from "./voxa"
import { detail as gridShift } from "./grid-shift"

/** Page content for each app, by slug. Add a new app here and in ../index.ts. */
export const appDetails: Record<string, AppDetail> = {
  khatwa,
  reel,
  marathon,
  shadhra,
  shasha,
  munazara,
  voxa,
  "grid-shift": gridShift,
}
