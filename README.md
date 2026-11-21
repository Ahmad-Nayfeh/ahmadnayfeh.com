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
| `/notebook/`, `/notebook/<title>/` | Everything written, in two groups: technical articles and essays |
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
kind: "essay"    # "article" (a technical article) or "essay" (one of the owner's own essays)
---
```

There are exactly two kinds. The notebook page shows them as two groups, "Technical articles" and "Essays", each with its own heading and count. A group with no entries is not shown, and the filter (All, Technical articles, Essays) appears once both kinds exist. The home page shows the latest entries of either kind, each with its kind on the card. Entries are never translated: each keeps its own language and direction.

An older third kind, `reading` (a passage from a book with a comment), was removed in November 2026: the site is for the owner's own writing, not for quotations. A file that still says `kind: "reading"` does not break the build. It is read as an essay (`lib/schemas.ts` for the site, `lib/notebook-file.ts` for the admin page), and its old `source` field is ignored.

The same can be done from a phone with the admin page `/admin/` (next section).

## The admin page

`/admin/` is the owner's control panel. Its wording is Arabic. It is not linked from any page, it is not in the sitemap, and `robots.txt` asks search engines to skip it. Anyone can open the address, but without the owner's key it shows only the place to paste a key, and nothing can be saved.

**How it works.** The site has no server. The page runs in the browser and changes files in this repository through GitHub's own API. Each save is a normal commit to `main`, so the site rebuilds and the change is public about two minutes later. The line at the bottom of the page shows the result of the last save and links to the Actions page, where the build can be watched.

**The key.** A fine-grained GitHub token for this repository only, with Contents set to Read and write (steps: `docs/migration/your-steps.md`, step 9). It is pasted once per device. The page first asks GitHub whether the key can write to this repository, and only then keeps it, in the browser's localStorage under the name `write.key`. This is the same name the old `/write/` page used, so a key saved there still works. The key is sent only to `https://api.github.com`. It is never shown and never logged. The button "انسَ المفتاح على هذا الجهاز" removes it from the device. The old addresses `/write/` and `/ar/write/` now only send the visitor to `/admin/`.

**What each tab writes.**

| Tab | What it does | File it writes |
|---|---|---|
| كتابة (Write) | A new notebook entry: kind (essay or technical article; essay is the default), language, title, text, summary, topics, date. Also used to edit an entry opened from the next tab. | `content/blog/<date>-<name>.mdx` |
| الدفتر (Notebook) | Lists every entry as it is on GitHub now, newest first. Edit saves the same file. Hide and Show change one line of the settings file. Delete removes the file after a confirmation. | the entry's file, or `hidden.posts` in `content/site-settings.json` |
| الظهور (Visibility) | Shows or hides each app, each project and each home page section. Chooses which apps the home page shows and in what order, and how many projects and notebook entries it shows. One save button. | `content/site-settings.json` |

The settings file is always read from GitHub before it is changed, not taken from the copy inside the built site. If it changed in the meantime (for example from another device), the page does not save. It reads the file again, shows the new values and asks the owner to review and save again. The fields of the file are described at the top of `lib/settings.ts`.

An entry written by hand as MDX (with pictures, formulas or components) is opened in the editor as it is and saved as it is. Plain writing typed in the form is escaped so that characters such as `{` and `<` are not read as code.

**Hiding is not secrecy.** Hiding removes an item from the built site only. The file stays in this public repository and anyone can read it there, and so does its history after a delete. When an app is hidden, its page and row disappear and `scripts/prune-hidden.mjs` (run by `pnpm build` after `next build`) also removes its running browser app (`app/`), its media and its guides from the built site, so the direct address stops working too. It keeps `latest.json` and the files it points to, and Reading Marathon's invite and privacy pages, because an installed Android app still needs them.

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

## Design

The look is called "Two Scripts": one blue (cobalt `#1B3BDB`), ink (`#0B0D14`) and white, large display type in Bricolage Grotesque with the same word in Arabic in Alexandria beside it, and a blue block at the top of every page. The colours and primitives are in `app/globals.css`, the fonts in `app/fonts.ts`.

### The polish pass (November 2026)

The owner liked the colours but said the site felt "primitive" and "crowded", and that it had no motion. The pass kept the identity and changed these things:

| What | Before | Now | Why |
|---|---|---|---|
| Lists | Apps, projects and writings were all the same ruled rows, with four columns per row and a heavy rule between every row | Each kind of content has its own layout (below) | Sections are told apart at a glance, and each item has one reading order |
| Apps | Row with a small picture, hidden on phones | Cards in a grid (one column on phones, two on larger screens). The picture leads, then icon and name, one sentence, platform chips and "Details". Shadhra is a full-width feature card above the grid. An app without a picture shows its icon on a tile tinted with its own colours | The screenshots are the best material the apps have |
| Projects | Row with small tags | A numbered index: a large number, the field, the name, one or two lines. The arrow appears on hover | Projects have no pictures, so type carries them |
| Notebook | Row | Cards, in two groups: technical articles and essays. The newest article is a large card with its cover. Essay cards are more literary (serif title, longer summary) | The two kinds of writing are different things |
| Blue blocks | Flat blue, the same in both themes | Light theme: bright cobalt with a darker corner. Dark theme: deep navy with a cobalt glow. Both have a faint drafting grid, a little grain and a soft glow | Depth, and the theme switch is now visible on the first screen |
| Arabic text | Paragraphs, menus and buttons fell back to a system font (Arial or Tahoma) | IBM Plex Sans Arabic everywhere, Inter for Latin letters and digits | See "Fonts" below |
| Header | Plain bar after scrolling | Clear on the blue block, then a frosted bar with a border and a soft shadow. The current page is underlined | |
| Phone menu | Pushed the page down | A panel that drops over a dimmed page, with numbered links. Escape or a tap outside closes it | |
| Buttons, chips, links | Colour change only | Buttons lift on hover and press in; arrows move a little; underlines grow from the reading side | |
| Rules | Heavy ink rule between every row | Hairlines between rows; one strong rule where a list begins | Less noise |
| Depth | None | Three soft shadows (`--shadow-sm`, `--shadow-md`, `--shadow-lg`), tinted tiles behind pictures, rounded corners on pictures and code in writings | |
| Footer | Three short lists | Name in both scripts, email button, links with arrows, back-to-top | |
| Focus | Blue ring everywhere | Blue ring on white, white ring on the blue and ink blocks | It was invisible on blue |

Useful classes (all in `app/globals.css`): `brand-block`, `ink-block`, `btn` and its variants, `chip`, `chip-on-dark`, `app-card`, `note-card`, `index-row`, `rule-row`, `row-hover`, `arrow-dot`, `media-tile`, `shot`, `app-icon`, `panel`, `link-grow`, `press`, `nudge`, `nudge-x`.

Right-to-left: use logical properties (`ps-`, `pe-`, `start-`, `end-`, `border-s`). Arrows that point sideways get `rtl:-scale-x-100`. Movements that have a direction multiply by `var(--flip)`, which is `-1` on Arabic pages.

### Fonts

`<body>` has the Tailwind class `font-sans`, which resolves to the variable `--font-text`. That variable is set by language in `app/globals.css`: Inter for Latin text; IBM Plex Sans Arabic, then Inter, for anything inside `[lang="ar"]` or `[dir="rtl"]`. The Arabic face is limited to Arabic letters with `unicode-range` (`app/fonts.ts`), so Latin words and digits inside Arabic text are drawn by Inter. Headings use `font-display`: Bricolage Grotesque for Latin, Alexandria for Arabic. English islands inside Arabic pages (`lang="en"`) go back to Inter and Bricolage.

Before this, `font-sans` pointed straight at Inter, which has no Arabic letters, so the browser picked a system font for Arabic.

### Motion

Everything is CSS plus one small client component. No animation library is used.

| Motion | How |
|---|---|
| Scroll reveal | `components/Motion.tsx`, rendered once in `SiteShell`. See below. |
| Entrance of the blue block | CSS classes `enter` (fade and rise) and `enter-side` (the word in the other script slides in). The order is set with the variable `--enter` (0, 1, 2...), 80 ms apart. Used in `PageHeader` and `Hero`. |
| Hover and press | CSS only: `btn`, `press`, `app-card`, `note-card`, `row-hover`, `arrow-dot`, `nudge`, `link-grow`, zoom of pictures with class `zoom`. Hover effects are inside `@media (hover: hover)` so they do not stick on touch screens. |
| Header on scroll | `Navbar` adds `is-solid` after 24 px; `.site-header` has the transition. |
| Theme switch | `ThemeToggle` adds `theme-anim` to `<html>` for 420 ms, which cross-fades colours. The colours of the blue block are registered custom properties (`@property --bb-base` and others) so its gradient fades too. |
| In-page links | `scroll-behavior: smooth` with `scroll-padding-top: 88px`, so the target stops below the header. |
| Between pages | `@view-transition { navigation: auto; }`: a short cross-fade in browsers that support it. Others load the page as usual. |
| Ambient | The glow on the blue block drifts very slowly. Nothing else loops. |

**How scroll reveal works.** Elements are marked with the attribute `data-reveal`. When a page loads, `Motion.tsx` looks at every marked element. Those already on screen are left alone. Those below the fold get the class `reveal-wait` (invisible, 22 px lower). An `IntersectionObserver` watches them; when one comes into view it loses `reveal-wait` and gets `reveal-in` (the transition), which is removed again about 0.6 s later. Elements that come into view together are staggered by 70 ms each.

**The rules.**

- Nothing is hidden by CSS alone. The hidden state exists only as the class `reveal-wait`, and only the helper adds it. Without JavaScript every element is visible.
- With "reduce motion" switched on, the helper does nothing, the entrance classes and the page cross-fade are off, and the old global rule cuts any remaining animation to nothing.
- Only `opacity`, `transform` and `translate` are animated, so the layout never shifts.
- Nothing lasts longer than about 0.6 s.

**Adding reveal to a new component.** Put `data-reveal` on the element that should fade up:

```tsx
<li data-reveal className="...">...</li>
```

That is all. Do not add `opacity-0` or any hidden state yourself. For the opening block of a new page type, use `PageHeader`, or give the parts `className="enter"` and `style={{ "--enter": 2 } as CSSProperties}`.

**Checking it.** Build, serve `out/`, and with Playwright: scroll and count `.reveal-wait` (it must reach 0 at the end of the page); load with `reducedMotion: "reduce"` and with `javaScriptEnabled: false` and check that no marked element has opacity below 1; check `document.documentElement.scrollWidth <= innerWidth` at 390 px on every page type in both languages.

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
