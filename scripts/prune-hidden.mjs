// Runs after `next build`. For every app the owner has hidden (content/site-settings.json,
// hidden.apps), it removes from the built site what a visitor could still open by typing the
// address: the running browser app (app/), its media and its guides.
//
// It keeps what an already installed Android app needs: latest.json and the files it points to
// (the APKs and the setup kit), and Reading Marathon's invite and privacy pages, which the
// installed app opens. Nothing links to those once the app's page is gone.
//
// Hiding never deletes anything from the repository; it only changes what is published.
import { existsSync, readFileSync, readdirSync, rmSync } from "node:fs"
import { join } from "node:path"

const root = process.cwd()
const out = join(root, "out", "apps")
let hidden = []
try {
  const s = JSON.parse(readFileSync(join(root, "content", "site-settings.json"), "utf8"))
  hidden = Array.isArray(s?.hidden?.apps) ? s.hidden.apps.filter((x) => typeof x === "string" && /^[a-z0-9-]+$/.test(x)) : []
} catch {
  console.log("prune-hidden: no readable settings file, nothing removed")
}

for (const slug of hidden) {
  const dir = join(out, slug)
  if (!existsSync(dir)) continue
  const removed = []
  for (const name of readdirSync(dir)) {
    const drop = name === "app" || name === "media" || name === "admin" || name === "img" || name.endsWith(".pdf")
    if (!drop) continue
    rmSync(join(dir, name), { recursive: true, force: true })
    removed.push(name)
  }
  console.log(`prune-hidden: ${slug}: removed ${removed.length ? removed.join(", ") : "nothing"}`)
}
