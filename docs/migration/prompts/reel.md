# Move Reel to ahmadnayfeh.com

Paste this whole message into the Claude Code session of the **Reel** repository. Before you start, give that session access to the repository `Ahmad-Nayfeh/ahmadnayfeh.com` as well.

---

## Background

I moved my personal site and all my apps from `https://ahmad-nayfeh.github.io/` (and `https://ahmadnayfeh.vercel.app/`) to my own domain, **https://ahmadnayfeh.com**. The new site is one repository, `Ahmad-Nayfeh/ahmadnayfeh.com`, built with Next.js into plain files and published by GitHub Pages on every push to its `main` branch. Read its `README.md` first: it explains the folders and how an app publishes into it.

Your job in this session is the part of the move that lives inside Reel.

**There are no users of Reel yet except me.** So do not keep anything working at the old address and do not build any compatibility layer. Change the address everywhere, release once, and I will reinstall on my own devices. The old github.io address will be replaced by a single page that forwards every old link to the new site.

## New addresses for Reel

| What | Address |
|---|---|
| App page (English) | `https://ahmadnayfeh.com/apps/reel/` |
| App page (Arabic) | `https://ahmadnayfeh.com/ar/apps/reel/` |
| Download | `https://ahmadnayfeh.com/apps/reel/reel.apk` |
| Release file | `https://ahmadnayfeh.com/apps/reel/latest.json` |
| My site (replaces every link to the old hub home or the Vercel portfolio) | `https://ahmadnayfeh.com/` |

## Where Reel lives in the site repository

| Path in `Ahmad-Nayfeh/ahmadnayfeh.com` | What it is | Who writes it |
|---|---|---|
| `public/apps/reel/reel.apk` | The Android app. Fixed file name, no version in it. | This app's publish script |
| `public/apps/reel/latest.json` | The release file (below) | This app's publish script |
| `content/apps/details/reel.ts` | The text of the app's page in English and Arabic (shape: `content/apps/types.ts`) | Edit by hand when the app's features change |
| `public/images/apps/reel/` | Screenshots shown on the page | Replace when screens change |
| `content/apps/index.ts` | The app's one-line entry in the apps list | Edit only this app's entry |

The old hub repository `Ahmad-Nayfeh/Ahmad-Nayfeh.github.io` is retired. Nothing is published there any more.

### The release file (`latest.json`)

One file describes the current release. A first version of it is already there, written from the old 1.0.0 APK, but it has no `versionCode`. Your publish script must write the complete file:

```json
{
  "versionCode": 12,
  "versionName": "1.2.0",
  "url": "https://ahmadnayfeh.com/apps/reel/reel.apk",
  "size": 4413084,
  "sha256": "<64 hex characters>"
}
```

- `versionCode` and `versionName` are the Android values of the published build.
- `url` is the full address of the file on the new domain.
- `size` is the file size in bytes; `sha256` is its SHA-256 in lowercase hex.

The site reads this file at build time to show the version and size on the app's page, so a release must never edit a version number or size anywhere else by hand.

## What has to change in Reel

1. **Links inside the app.** Replace every old address. The app's page is `https://ahmadnayfeh.com/apps/reel/` (use the `/ar/` version where the app's language is Arabic). Any author link goes to `https://ahmadnayfeh.com/`. Look in string resources, About and Settings screens, and share texts.
2. **Updating from inside the app.** I want every Android app of mine to update itself from inside the app, reading the new domain.
   - If Reel already checks for updates: point it at `https://ahmadnayfeh.com/apps/reel/latest.json`, make it download only from an address that starts with `https://ahmadnayfeh.com/apps/reel/`, and verify the `sha256` before installing.
   - If Reel has no update check: do not build one silently. Tell me, propose the smallest design that matches the release file above, and wait for my approval.
3. **The publish step.** Whatever publishes a release today (it copied `reel-<version>.apk` into the old hub, with a `?v=` number on the page link) must now copy the signed APK to `public/apps/reel/reel.apk`, write `public/apps/reel/latest.json`, and push those two files to `main` of the site repository after `git pull --rebase`. It must stop touching the old hub repository.
4. **The app's page.** Read `content/apps/details/reel.ts` and compare it with the app today; fix what is out of date in both languages. The page has **no screenshots** because the old page had none: add four to six phone screenshots under `public/images/apps/reel/` and list them in the `screenshots` field with a caption in both languages. Also add a wide picture for the apps list: save it as `public/images/apps/reel-card.webp` (about 1200 by 630) and set `thumb: img("reel-card.webp")` on Reel's entry in `content/apps/index.ts`. The page's "Why Reel?" section names other players (MX Player, KMPlayer, XPlayer, VLC, mpv); keep it factual.
5. **Docs.** Update the repository's README and release notes that name the old address.

## Rules

- Show me your plan before you change anything, and wait for my go-ahead.
- In the site repository, change only this app's own paths listed above. Other Claude sessions push to that repository: always `git pull --rebase` right before you push, and push only to `main`.
- Do not hand-edit built files with hashed names.
- Search for the old addresses with these exact strings, across source, resources, build files, CI workflows, scripts and docs: `ahmad-nayfeh.github.io`, `github.io/reel`, `ahmadnayfeh.vercel.app`.
- Tell me before anything that costs money or needs an account setting I must change by hand.
- If you are not sure about a fact, check it or say so. Do not guess.

## Safe order

1. Plan and my approval.
2. Change the addresses in the app and build a new version with a higher `versionCode`.
3. Install and test it.
4. Publish it to the site repository with the new publish step, together with the screenshots and page fixes.
5. Wait for the site's `deploy` workflow to finish, then check the live addresses.

## How to test

- `curl -sI https://ahmadnayfeh.com/apps/reel/reel.apk` returns 200, and the file's SHA-256 equals the one in `latest.json`.
- `https://ahmadnayfeh.com/apps/reel/` and `/ar/apps/reel/` show the published version, the size and the new screenshots.
- A search of the repository and of the built APK's resources finds none of the old address strings.
- If the app has an update check: confirm an older build finds, downloads, verifies and installs the newer one.

## Report back to me

1. Every file where you replaced an old address, with the old and new value.
2. What the app does now to find updates, and the exact address it reads.
3. What you published to the site repository (paths, version, size) and the commit.
4. What you tested, with the result of each test, and what you could not test.
5. Anything I must do by hand (console settings, reinstalling, store listings), written as steps.
6. Anything you found that looks wrong but is outside this task.
