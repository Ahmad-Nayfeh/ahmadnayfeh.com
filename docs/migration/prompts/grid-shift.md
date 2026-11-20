# Move Grid Shift to ahmadnayfeh.com

Paste this whole message into the Claude Code session of the **Grid Shift** repository. Before you start, give that session access to the repository `Ahmad-Nayfeh/ahmadnayfeh.com` as well.

---

## Background

I moved my personal site and all my apps from `https://ahmad-nayfeh.github.io/` (and `https://ahmadnayfeh.vercel.app/`) to my own domain, **https://ahmadnayfeh.com**. The new site is one repository, `Ahmad-Nayfeh/ahmadnayfeh.com`, built with Next.js into plain files and published by GitHub Pages on every push to its `main` branch. Read its `README.md` first: it explains the folders and how an app publishes into it.

Your job in this session is the part of the move that lives inside Grid Shift.

**There are no users of Grid Shift yet except me.** So do not keep anything working at the old address and do not build any compatibility layer. Change the address everywhere, release once, and I will reinstall on my own devices. The old github.io address will be replaced by a single page that forwards every old link to the new site.

## New addresses for Grid Shift

| What | Address |
|---|---|
| App page (English) | `https://ahmadnayfeh.com/apps/grid-shift/` |
| App page (Arabic) | `https://ahmadnayfeh.com/ar/apps/grid-shift/` |
| The running game | `https://ahmadnayfeh.com/apps/grid-shift/app/` |
| Explainer video | `https://ahmadnayfeh.com/apps/grid-shift/media/grid-shift-explainer-ar.mp4` |
| My site (replaces every link to the old hub home or the Vercel portfolio) | `https://ahmadnayfeh.com/` |

## Where Grid Shift lives in the site repository

| Path in `Ahmad-Nayfeh/ahmadnayfeh.com` | What it is | Who writes it |
|---|---|---|
| `public/apps/grid-shift/app/` | The built game (the contents of `dist/`) | This game's publish script |
| `public/apps/grid-shift/media/` | The explainer video, its Arabic captions and its poster | Replace by hand when the video changes |
| `content/apps/details/grid-shift.ts` | The text of the app's page in English and Arabic (shape: `content/apps/types.ts`) | Edit by hand when the app's features change |
| `public/images/apps/grid-shift/` | Screenshots shown on the page | Replace when screens change |
| `content/apps/index.ts` | The app's one-line entry in the apps list | Edit only this app's entry |

The old hub repository `Ahmad-Nayfeh/Ahmad-Nayfeh.github.io` is retired. Nothing is published there any more.


## What has to change in Grid Shift

1. **The publish step.** The built game (`dist/`) was copied into the old hub's `grid-shift/` folder. It must now go to `public/apps/grid-shift/app/` in `Ahmad-Nayfeh/ahmadnayfeh.com`: empty and refill that folder, `git pull --rebase`, commit only that folder, push to `main`. The game now runs one level deeper (`/apps/grid-shift/app/`). The build uses relative paths and hash routes, so it should run there unchanged; confirm it.
2. **The link to the explainer.** The home screen has a "watch the explainer" link to `./about/#video`. The old `about/` page no longer exists: the game's information page is now `https://ahmadnayfeh.com/apps/grid-shift/`, one level **above** the game, and its video section is `#video`. Change the link to `../#video`. I put a small forwarding file at `public/apps/grid-shift/app/about/index.html` so the old link keeps working until then; your publish step empties the folder, which removes it, and that is intended once the link is fixed.
3. **The source links inside the game.** The game links to documents (`/docs/design/FIDELITY.md`, `/docs/VALIDATION.md`, `/docs/DECISIONS.md`, `/research/SOURCES.md`, `/research/SYNTHESIS.md`) under `https://github.com/ahmad-nayfeh/repo-a/blob/claude/new-session-k41b2n`. That looks like a placeholder repository and a working branch, and the real repository is private, so these links are almost certainly dead for players. Tell me what they should be: either point them at a public place, or remove them from the game.
4. **Other links out of the game.** Any link to the old hub or an author link goes to `https://ahmadnayfeh.com/apps/grid-shift/` (or `/ar/apps/grid-shift/`) or `https://ahmadnayfeh.com/`.
5. **The old about page's source.** If the repository holds the source of the old `about/` page, it is no longer published. Its text now lives in `content/apps/details/grid-shift.ts` in the site repository. Remove the old page from the publish step and say so in the README.
6. **Share links.** They are built from the page's own address, so new ones carry the new address automatically. Old ones are forwarded with the part after `#`.
7. **Saved progress.** Progress and best scores are in the browser's local storage (keys starting with `gs.`) and are tied to the address, so the new address starts empty. I accept that: there are no players yet. Do not build a migration.
8. **The game's page.** Read `content/apps/details/grid-shift.ts` against the game today and fix what is out of date, in both languages.

## Rules

- Show me your plan before you change anything, and wait for my go-ahead.
- In the site repository, change only this app's own paths listed above. Other Claude sessions push to that repository: always `git pull --rebase` right before you push, and push only to `main`.
- Do not hand-edit built files with hashed names.
- Search for the old addresses with these exact strings, across source, resources, build files, CI workflows, scripts and docs: `ahmad-nayfeh.github.io`, `github.io/grid-shift`, `ahmadnayfeh.vercel.app`.
- Tell me before anything that costs money or needs an account setting I must change by hand.
- If you are not sure about a fact, check it or say so. Do not guess.

## Safe order

1. Plan and my approval.
2. Fix the links, build.
3. Serve the build locally from a sub-folder path (for example `/apps/grid-shift/app/`) and test (below).
4. Change the publish step and run it against the site repository.
5. Wait for the site's `deploy` workflow to finish, then test the live address.

## How to test

- `https://ahmadnayfeh.com/apps/grid-shift/app/` loads with no failed requests, and every route works after a reload (`#/daily`, `#/training`, `#/play`, `#/tutorial`, `#/glossary`, `#/about`, `#/grading`).
- The "watch the explainer" link opens `https://ahmadnayfeh.com/apps/grid-shift/#video` and the video plays with captions.
- A share link made in the game starts with `https://ahmadnayfeh.com/apps/grid-shift/app/#/` and opens the same scenario in another browser.
- Play one lesson to the end and reload: progress is kept.
- A search of the repository and of the built files finds none of the old address strings.

## Report back to me

1. Every file where you replaced an old address, with the old and new value.
2. What the app does now to find updates, and the exact address it reads.
3. What you published to the site repository (paths, version, size) and the commit.
4. What you tested, with the result of each test, and what you could not test.
5. Anything I must do by hand (console settings, reinstalling, store listings), written as steps.
6. Anything you found that looks wrong but is outside this task.
