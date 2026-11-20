# Move Munazara to ahmadnayfeh.com

Paste this whole message into the Claude Code session of the **Munazara** repository. Before you start, give that session access to the repository `Ahmad-Nayfeh/ahmadnayfeh.com` as well.

---

## Background

I moved my personal site and all my apps from `https://ahmad-nayfeh.github.io/` (and `https://ahmadnayfeh.vercel.app/`) to my own domain, **https://ahmadnayfeh.com**. The new site is one repository, `Ahmad-Nayfeh/ahmadnayfeh.com`, built with Next.js into plain files and published by GitHub Pages on every push to its `main` branch. Read its `README.md` first: it explains the folders and how an app publishes into it.

Your job in this session is the part of the move that lives inside Munazara.

**There are no users of Munazara yet except me.** So do not keep anything working at the old address and do not build any compatibility layer. Change the address everywhere, release once, and I will reinstall on my own devices. The old github.io address will be replaced by a single page that forwards every old link to the new site.

## New addresses for Munazara

| What | Address |
|---|---|
| App page (English) | `https://ahmadnayfeh.com/apps/munazara/` |
| App page (Arabic) | `https://ahmadnayfeh.com/ar/apps/munazara/` |
| The running app | `https://ahmadnayfeh.com/apps/munazara/app/` |
| Explainer video | `https://ahmadnayfeh.com/apps/munazara/app/media/explainer.mp4` |
| My site (replaces every link to the old hub home or the Vercel portfolio) | `https://ahmadnayfeh.com/` |

## Where Munazara lives in the site repository

| Path in `Ahmad-Nayfeh/ahmadnayfeh.com` | What it is | Who writes it |
|---|---|---|
| `public/apps/munazara/app/` | The built app (everything `scripts/publish-to-hub.sh` used to copy) | This app's publish script |
| `content/apps/details/munazara.ts` | The text of the app's page in English and Arabic (shape: `content/apps/types.ts`) | Edit by hand when the app's features change |
| `public/images/apps/munazara/` | Screenshots shown on the page | Replace when screens change |
| `content/apps/index.ts` | The app's one-line entry in the apps list | Edit only this app's entry |

The old hub repository `Ahmad-Nayfeh/Ahmad-Nayfeh.github.io` is retired. Nothing is published there any more.


## What has to change in Munazara

1. **`scripts/publish-to-hub.sh`.** It copies the built files into the old hub's `munazara/` folder. Change it (and rename it if you like) so that it works on a checkout of `Ahmad-Nayfeh/ahmadnayfeh.com`, **empties and refills** `public/apps/munazara/app/` with the new build, runs `git pull --rebase`, commits only that folder and pushes to `main`. The app now runs one level deeper than before (`/apps/munazara/app/` instead of `/munazara/`). The build already uses relative paths (`./`), so it should run there unchanged; confirm it.
2. **The privacy text inside the app.** The "About and privacy" screen says, in Arabic, that the site is hosted on "GitHub Pages (ahmad-nayfeh.github.io)" and that GitHub logs visitor addresses; the English says "hosted on GitHub Pages". The site is still hosted on GitHub Pages, but at `ahmadnayfeh.com`. Rewrite the sentence in both languages so it is true: name the new address, and keep the statement about GitHub logging visitor IP addresses.
3. **Links out of the app.** Any link to the old hub, an "all apps" link or an author link goes to the app's page `https://ahmadnayfeh.com/apps/munazara/` (or `/ar/apps/munazara/`) or to `https://ahmadnayfeh.com/`.
4. **The explainer video captions.** The last caption line invites the viewer to try the app "from the Munazara page on Ahmad Nayfeh's apps site". Keep it if it is still accurate; fix it if it names the old address.
5. **Small leftovers.** The comment in `frame-guard.js` that mentions GitHub Pages; the README; the publish notes.
6. **Invite and share links.** They are built from the page's own address, so new links will carry the new address automatically. Nothing to change, but test it. Old links keep working because the old address forwards them with the part after `#`.
7. **Saved data.** Debates are stored in the browser (IndexedDB database `munazara`) and are tied to the address, so the new address starts empty. I accept that: there are no users. Do not build a migration.
8. **The app's page.** Read `content/apps/details/munazara.ts`. Its features and "why it was made" sections were written from the video captions, and the feature titles and the screenshot caption are not my own words. Correct anything inaccurate, in both languages. If you have real screenshots, add them under `public/images/apps/munazara/` and list them in `screenshots`. The debate etiquette text was left out of the page because it did not fit the page's shape; propose where it should go.

## Rules

- Show me your plan before you change anything, and wait for my go-ahead.
- In the site repository, change only this app's own paths listed above. Other Claude sessions push to that repository: always `git pull --rebase` right before you push, and push only to `main`.
- Do not hand-edit built files with hashed names.
- Search for the old addresses with these exact strings, across source, resources, build files, CI workflows, scripts and docs: `ahmad-nayfeh.github.io`, `github.io/munazara`, `ahmadnayfeh.vercel.app`.
- Tell me before anything that costs money or needs an account setting I must change by hand.
- If you are not sure about a fact, check it or say so. Do not guess.

## Safe order

1. Plan and my approval.
2. Change the texts and links, build.
3. Run the build locally from a sub-folder path (for example serve it at `/apps/munazara/app/`) and test (below).
4. Change the publish script and run it against the site repository.
5. Wait for the site's `deploy` workflow to finish, then test the live address.

## How to test

- `https://ahmadnayfeh.com/apps/munazara/app/` loads with no failed requests in the browser's network panel, online and then offline after one visit (the service worker).
- Installing it to the home screen works and opens at the right address.
- Create a debate and copy the invite link: it starts with `https://ahmadnayfeh.com/apps/munazara/app/#/j/`. Open it in a second browser and join.
- Paste an old-style link (`https://ahmad-nayfeh.github.io/munazara/#/j/...`) into the app's "paste a link" box: it still works, because only the part after `#` is read.
- The relay connections still open (the content security policy in `index.html` lists the six relay servers; make sure moving folders did not break it).
- The privacy screen names the new address in both languages.
- A search of the repository and of the built files finds none of the old address strings.

## Report back to me

1. Every file where you replaced an old address, with the old and new value.
2. What the app does now to find updates, and the exact address it reads.
3. What you published to the site repository (paths, version, size) and the commit.
4. What you tested, with the result of each test, and what you could not test.
5. Anything I must do by hand (console settings, reinstalling, store listings), written as steps.
6. Anything you found that looks wrong but is outside this task.
