# ahmadnayfeh.com

Ahmad Nayfeh's site: the personal site, every app, the engineering projects and the notebook, in English and Arabic.

Hosted on GitHub Pages from this repository. Every push to `main` builds the site into plain files and publishes it (`.github/workflows/deploy.yml`).

## Addresses

| Address | What it is |
|---|---|
| `/` | Home |
| `/apps/` | All apps |
| `/apps/<app>/` | One page per app: what it does, screenshots, downloads, how it was built |
| `/apps/<app>/app/` | The running app, for apps that run in the browser |
| `/projects/`, `/projects/<name>/` | Engineering and research projects (no apps) |
| `/notebook/`, `/notebook/<title>/` | Everything written: articles, essays, reading notes |
| `/about/` | About, CV |
| `/ar/...` | The same pages in Arabic |

English is at the root and Arabic under `/ar/`. Pages are translated. Writings in the notebook are not: each stays in the language it was written in and carries a language label.

## Where things live

| Folder | Contents |
|---|---|
| `app/(en)/`, `app/(ar)/ar/` | The routes for each language. They are thin: each calls a view. |
| `components/views/` | One view per page type, used by both languages |
| `i18n/index.ts` | All interface wording in both languages |
| `content/apps/index.ts` | The list of apps (name, kind, one-line description, icon, picture) |
| `content/apps/details/<app>.ts` | The content of each app's page, in both languages |
| `content/projects/<name>.md` | A project write-up. `<name>.ar.md` beside it is the Arabic version. |
| `content/blog/<title>.mdx` | A notebook entry |
| `content/about/`, `content/home/` | About and home page content (`*.ar.*` are the Arabic versions) |
| `public/apps/<app>/` | Files an app offers: APKs, update files, guides, and the running browser app under `app/` |
| `public/images/apps/` | App icons, pictures and screenshots used by the site pages |
| `public/.well-known/assetlinks.json` | Lets Android open Reading Marathon invite links in the app |

## Publishing an app

Each app has its own private repository and a publish script that copies its built files here:

- downloads and update files go to `public/apps/<app>/` (for example `public/apps/shasha/latest.json`);
- a browser app's built files go to `public/apps/<app>/app/`.

The script must update from the remote first (`git pull --rebase`), touch only its own folder, and push to `main`. Do not hand-edit built files with hashed names.

The text and pictures of an app's page are not built files. They are in `content/apps/details/<app>.ts` and `public/images/apps/<app>/`. The version and size on the download buttons are read from `public/apps/<app>/latest.json` when the site builds, so a release does not need to edit the page.

## Adding a new app

1. Add an entry to `content/apps/index.ts`.
2. Add `content/apps/details/<app>.ts` (shape: `content/apps/types.ts`) and register it in `content/apps/details/index.ts`.
3. Put the icon in `public/images/apps/icons/` and screenshots in `public/images/apps/<app>/`.
4. Put the downloads in `public/apps/<app>/`.

## Adding a notebook entry

Add `content/blog/<title>.mdx` with this at the top:

```yaml
---
title: "..."
date: "2026-11-20"
tags: ["..."]
excerpt: "..."
language: "ar"   # "en" or "ar": the language it is written in
kind: "essay"    # "article", "essay" or "reading"
---
```

The notebook page shows the kind filter once more than one kind exists.

The same can be done from a phone with the admin page `/admin/` (next section).

## The admin page

`/admin/` is the owner's control panel. Its wording is Arabic. It is not linked from any page, it is not in the sitemap, and `robots.txt` asks search engines to skip it. Anyone can open the address, but without the owner's key it shows only the place to paste a key, and nothing can be saved.

**How it works.** The site has no server. The page runs in the browser and changes files in this repository through GitHub's own API. Each save is a normal commit to `main`, so the site rebuilds and the change is public about two minutes later. The line at the bottom of the page shows the result of the last save and links to the Actions page, where the build can be watched.

**The key.** A fine-grained GitHub token for this repository only, with Contents set to Read and write (steps: `docs/migration/your-steps.md`, step 9). It is pasted once per device. The page first asks GitHub whether the key can write to this repository, and only then keeps it, in the browser's localStorage under the name `write.key`. This is the same name the old `/write/` page used, so a key saved there still works. The key is sent only to `https://api.github.com`. It is never shown and never logged. The button "انسَ المفتاح على هذا الجهاز" removes it from the device. The old addresses `/write/` and `/ar/write/` now only send the visitor to `/admin/`.

**What each tab writes.**

| Tab | What it does | File it writes |
|---|---|---|
| كتابة (Write) | A new notebook entry: kind, language, title, text, summary, topics, date. Also used to edit an entry opened from the next tab. | `content/blog/<date>-<name>.mdx` |
| الدفتر (Notebook) | Lists every entry as it is on GitHub now, newest first. Edit saves the same file. Hide and Show change one line of the settings file. Delete removes the file after a confirmation. | the entry's file, or `hidden.posts` in `content/site-settings.json` |
| الظهور (Visibility) | Shows or hides each app, each project and each home page section. Chooses which apps the home page shows and in what order, and how many projects and notebook entries it shows. One save button. | `content/site-settings.json` |

The settings file is always read from GitHub before it is changed, not taken from the copy inside the built site. If it changed in the meantime (for example from another device), the page does not save. It reads the file again, shows the new values and asks the owner to review and save again. The fields of the file are described at the top of `lib/settings.ts`.

An entry written by hand as MDX (with pictures, formulas or components) is opened in the editor as it is and saved as it is. Plain writing typed in the form is escaped so that characters such as `{` and `<` are not read as code.

**Hiding is not secrecy.** Hiding removes an item from the built site only. The file stays in this public repository and anyone can read it there, and so does its history after a delete. The files of a running browser app under `public/apps/<app>/` also stay published when the app is hidden. Do not use hiding to keep something secret.

**Where the code is.**

| File | Contents |
|---|---|
| `app/(en)/admin/page.tsx` | The page. It collects the list of apps and projects when the site is built. |
| `components/admin/` | The panel and its three tabs |
| `lib/github.ts` | The GitHub calls |
| `lib/notebook-file.ts` | How an entry becomes a file and is read back. Must stay compatible with `lib/content.ts` and `lib/schemas.ts`. The slug of an entry is the `slug` field of its header, or the file name without `.mdx` when it has none, the same rule as `lib/content.ts`. |
| `lib/settings-shape.ts` | The shape and validation of the settings file, shared by the build and the page |

**Testing it without touching GitHub.** Never test with a real key. Build the site, serve `out/` locally, and drive the page with Playwright while every request to `https://api.github.com/**` is answered by the test itself:

```bash
pnpm build
```

```bash
cd out && python3 -m http.server 4173
```

```js
await context.route("https://api.github.com/**", (route) => {
  // Answer as GitHub would: GET /repos/<owner>/<repo> gives { permissions: { push: true } },
  // GET /contents/<path> gives { sha, encoding: "base64", content },
  // PUT and DELETE give 200, or 409 to act out "the file changed".
  // route.request().postDataJSON().content, decoded from base64, is the file the page would save.
})
await context.addInitScript(() => localStorage.setItem("write.key", "github_pat_FAKE"))
```

The cases worth covering: no key, a refused key (401), a good key, the list of entries, a new entry, editing, deleting, saving the settings (compare the decoded JSON exactly), and the 409 case.

## Working on the site

```bash
pnpm install
```

```bash
pnpm dev
```

```bash
pnpm build
```

`pnpm build` writes the finished site to `out/`.

## Notebook drafts (switched off)

`scripts/notebook/` holds a script that drafts an article from a recent paper and opens a pull request for review. Its scheduled workflow was removed in November 2026 because the drafts were not being reviewed. To bring it back, restore `.github/workflows/notebook-draft.yml` from the repository history and add the repository secret `GEMINI_API_KEY`. Rules for articles: `content/blog/STYLE.md`.
