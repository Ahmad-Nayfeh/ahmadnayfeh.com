# Move Shasha to ahmadnayfeh.com

Paste this whole message into the Claude Code session of the **Shasha** repository. Before you start, give that session access to the repository `Ahmad-Nayfeh/ahmadnayfeh.com` as well.

---

## Background

I moved my personal site and all my apps from `https://ahmad-nayfeh.github.io/` (and `https://ahmadnayfeh.vercel.app/`) to my own domain, **https://ahmadnayfeh.com**. The new site is one repository, `Ahmad-Nayfeh/ahmadnayfeh.com`, built with Next.js into plain files and published by GitHub Pages on every push to its `main` branch. Read its `README.md` first: it explains the folders and how an app publishes into it.

Your job in this session is the part of the move that lives inside Shasha.

**There are no users of Shasha yet except me.** So do not keep anything working at the old address and do not build any compatibility layer. Change the address everywhere, release once, and I will reinstall on my own devices. The old github.io address will be replaced by a single page that forwards every old link to the new site.

## New addresses for Shasha

| What | Address |
|---|---|
| App page (English) | `https://ahmadnayfeh.com/apps/shasha/` |
| App page (Arabic) | `https://ahmadnayfeh.com/ar/apps/shasha/` |
| TV app | `https://ahmadnayfeh.com/apps/shasha/shasha-tv.apk` |
| Phone app | `https://ahmadnayfeh.com/apps/shasha/shasha-mobile.apk` |
| Computer setup kit | `https://ahmadnayfeh.com/apps/shasha/shasha-setup.zip` |
| Guides | `https://ahmadnayfeh.com/apps/shasha/guide-ar.pdf`, `.../guide-en.pdf` |
| Release file (read by both apps) | `https://ahmadnayfeh.com/apps/shasha/latest.json` |
| My site (replaces every link to the old hub home or the Vercel portfolio) | `https://ahmadnayfeh.com/` |

## Where Shasha lives in the site repository

| Path in `Ahmad-Nayfeh/ahmadnayfeh.com` | What it is | Who writes it |
|---|---|---|
| `public/apps/shasha/shasha-tv.apk`, `shasha-mobile.apk`, `shasha-setup.zip`, `guide-ar.pdf`, `guide-en.pdf` | The downloads, under fixed names | `tools/publish-site.sh` |
| `public/apps/shasha/latest.json` | The release file (below) | `tools/publish-site.sh` |
| `content/apps/details/shasha.ts` | The text of the app's page in English and Arabic (shape: `content/apps/types.ts`) | Edit by hand when the app's features change |
| `public/images/apps/shasha/` | Screenshots shown on the page | Replace when screens change |
| `content/apps/index.ts` | The app's one-line entry in the apps list | Edit only this app's entry |

The old hub repository `Ahmad-Nayfeh/Ahmad-Nayfeh.github.io` is retired. Nothing is published there any more.

### The release file (`latest.json`)

Same shape as today, with three entries. Only the addresses change:

```json
{
  "tv":     { "versionCode": 1122, "versionName": "1.10.1", "url": "https://ahmadnayfeh.com/apps/shasha/shasha-tv.apk?v=1122", "sha256": "...", "size": 33340144, "notes": "..." },
  "mobile": { "versionCode": 1122, "versionName": "1.10.1", "url": "https://ahmadnayfeh.com/apps/shasha/shasha-mobile.apk?v=1122", "sha256": "...", "size": 4032234, "notes": "..." },
  "kit":    { "url": "https://ahmadnayfeh.com/apps/shasha/shasha-setup.zip?v=1122", "sha256": "...", "size": 57929732 },
  "published": "2026-11-07"
}
```

- `versionCode` and `versionName` are the Android values of the published build.
- `url` is the full address of the file on the new domain.
- `size` is the file size in bytes; `sha256` is its SHA-256 in lowercase hex.

The site reads this file at build time to show the version and size on the app's page, so a release must never edit a version number or size anywhere else by hand.

## What has to change in Shasha

1. **The update address in both apps.** The TV app and the phone app read `/shasha/latest.json` on the old address. Both must read `https://ahmadnayfeh.com/apps/shasha/latest.json`, and both must accept download addresses only when they start with `https://ahmadnayfeh.com/apps/shasha/`. Keep the SHA-256 check.
2. **Other links inside both apps.** App page: `https://ahmadnayfeh.com/apps/shasha/` (or `/ar/apps/shasha/`). Guides and kit: the addresses above. Author link: `https://ahmadnayfeh.com/`. Check Settings, About, the "install the phone app" screen, and any address shown as text or as a QR code on the TV (a QR that points at the old site must be regenerated; the pairing code between TV and phone is not affected).
3. **`tools/publish-site.sh`.** Today it copies the files into the old hub under fixed names, computes size and SHA-256, rewrites `latest.json`, and rewrites the values between the old page's `<!--@name-->` markers. Change it so that it:
   - works on a checkout of `Ahmad-Nayfeh/ahmadnayfeh.com` and writes to `public/apps/shasha/`;
   - writes `latest.json` with the new addresses;
   - **no longer rewrites any page**: the old HTML page is gone, and the new page reads version and size from `latest.json` when the site builds;
   - runs `git pull --rebase` before committing, commits only `public/apps/shasha/`, and pushes to `main`.
4. **The guides and the setup kit.** `guide-ar.pdf`, `guide-en.pdf` and the PDF inside `shasha-setup.zip` may print the old address or a QR code for it. I could not read the PDFs' text when I moved them. Check their sources, replace every old address, regenerate the PDFs and the kit, and publish them. Check the kit's scripts too (`tools/` for Windows, Mac and Linux) for any download address.
5. **The app's page.** Read `content/apps/details/shasha.ts` against both apps today and fix what is out of date, in both languages. Sizes shown on the download buttons now come from `latest.json`. Two sentences on the old page called the pairing code "رمز الاقتران QR"; the word QR was dropped from the new page, so restore it there if the pairing code really is a QR code.
6. **Docs.** Update the repository's README, the site-publishing notes and release notes that name the old address.

## Rules

- Show me your plan before you change anything, and wait for my go-ahead.
- In the site repository, change only this app's own paths listed above. Other Claude sessions push to that repository: always `git pull --rebase` right before you push, and push only to `main`.
- Do not hand-edit built files with hashed names.
- Search for the old addresses with these exact strings, across source, resources, build files, CI workflows, scripts and docs: `ahmad-nayfeh.github.io`, `github.io/shasha`, `ahmadnayfeh.vercel.app`.
- Tell me before anything that costs money or needs an account setting I must change by hand.
- If you are not sure about a fact, check it or say so. Do not guess.

## Safe order

1. Plan and my approval.
2. Change the update address and links in both apps; build both with a higher `versionCode`.
3. Regenerate the guides and the kit.
4. Change `tools/publish-site.sh` and run it once against the site repository.
5. Wait for the site's `deploy` workflow to finish, then install the new builds on the TV and the phone and test (below).

## How to test

- `curl -s https://ahmadnayfeh.com/apps/shasha/latest.json` lists the three entries with `ahmadnayfeh.com` addresses.
- Each of the three downloads returns 200 and its SHA-256 equals the value in `latest.json`.
- On the TV and on the phone: Settings, Check for updates reports "up to date" against the new address (check the request in the logs).
- Publish a build with a higher `versionCode` and confirm both apps find, download, verify and install it.
- The computer kit installs the TV app from a clean download.
- `https://ahmadnayfeh.com/apps/shasha/` and `/ar/apps/shasha/` show the published versions and sizes, and both guides open.
- A search of the repository, the built APKs' resources, the guides and the kit finds none of the old address strings.

## Report back to me

1. Every file where you replaced an old address, with the old and new value.
2. What the app does now to find updates, and the exact address it reads.
3. What you published to the site repository (paths, version, size) and the commit.
4. What you tested, with the result of each test, and what you could not test.
5. Anything I must do by hand (console settings, reinstalling, store listings), written as steps.
6. Anything you found that looks wrong but is outside this task.
