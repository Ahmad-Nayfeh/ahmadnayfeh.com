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

The text and pictures of an app's page are not built files. They are in `content/apps/details/<app>.ts` and `public/images/apps/<app>/`. When a release changes a version number or file size shown on the page, update that file in the same push.

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

The same can be done from a phone with the private page `/write/`, which saves this file through GitHub using the owner's access key (see `docs/migration/your-steps.md`, step 9).

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
