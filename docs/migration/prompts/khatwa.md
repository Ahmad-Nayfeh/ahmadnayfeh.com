# Move Khatwa to ahmadnayfeh.com

Paste this whole message into the Claude Code session of the **Khatwa** repository. Before you start, give that session access to the repository `Ahmad-Nayfeh/ahmadnayfeh.com` as well.

---

## Background

I moved my personal site and all my apps from `https://ahmad-nayfeh.github.io/` (and `https://ahmadnayfeh.vercel.app/`) to my own domain, **https://ahmadnayfeh.com**. The new site is one repository, `Ahmad-Nayfeh/ahmadnayfeh.com`, built with Next.js into plain files and published by GitHub Pages on every push to its `main` branch. Read its `README.md` first: it explains the folders and how an app publishes into it.

Your job in this session is the part of the move that lives inside Khatwa.

**There are no users of Khatwa yet except me.** So do not keep anything working at the old address and do not build any compatibility layer. Change the address everywhere, release once, and I will reinstall on my own devices. The old github.io address will be replaced by a single page that forwards every old link to the new site.

## New addresses for Khatwa

| What | Address |
|---|---|
| App page (English) | `https://ahmadnayfeh.com/apps/khatwa/` |
| App page (Arabic) | `https://ahmadnayfeh.com/ar/apps/khatwa/` |
| Download | `https://ahmadnayfeh.com/apps/khatwa/khatwa.apk` |
| Release file | `https://ahmadnayfeh.com/apps/khatwa/latest.json` |
| My site (replaces every link to the old hub home or the Vercel portfolio) | `https://ahmadnayfeh.com/` |

## Where Khatwa lives in the site repository

| Path in `Ahmad-Nayfeh/ahmadnayfeh.com` | What it is | Who writes it |
|---|---|---|
| `public/apps/khatwa/khatwa.apk` | The Android app. Fixed file name, no version in it. | This app's publish script |
| `public/apps/khatwa/latest.json` | The release file (below) | This app's publish script |
| `content/apps/details/khatwa.ts` | The text of the app's page in English and Arabic (shape: `content/apps/types.ts`) | Edit by hand when the app's features change |
| `public/images/apps/khatwa/` | Screenshots shown on the page | Replace when screens change |
| `content/apps/index.ts` | The app's one-line entry in the apps list | Edit only this app's entry |

The old hub repository `Ahmad-Nayfeh/Ahmad-Nayfeh.github.io` is retired. Nothing is published there any more.

### The release file (`latest.json`)

One file describes the current release. A first version of it is already there, written from the old 0.10.0 APK, but it has no `versionCode`. Your publish script must write the complete file:

```json
{
  "versionCode": 12,
  "versionName": "1.2.0",
  "url": "https://ahmadnayfeh.com/apps/khatwa/khatwa.apk",
  "size": 4413084,
  "sha256": "<64 hex characters>"
}
```

- `versionCode` and `versionName` are the Android values of the published build.
- `url` is the full address of the file on the new domain.
- `size` is the file size in bytes; `sha256` is its SHA-256 in lowercase hex.

The site reads this file at build time to show the version and size on the app's page, so a release must never edit a version number or size anywhere else by hand.

## What has to change in Khatwa

1. **Links inside the app.** Replace every old address. The app's page is `https://ahmadnayfeh.com/apps/khatwa/` (use the `/ar/` version where the app's language is Arabic). Any "made by" or author link goes to `https://ahmadnayfeh.com/`. Look in: string resources (both languages), About and Settings screens, share texts, group invite messages, the privacy or help links, and notification texts.
2. **Updating from inside the app.** I want every Android app of mine to update itself from inside the app, reading the new domain.
   - If Khatwa already checks for updates: point it at `https://ahmadnayfeh.com/apps/khatwa/latest.json`, make it download only from an address that starts with `https://ahmadnayfeh.com/apps/khatwa/`, and verify the `sha256` before installing.
   - If Khatwa has no update check: do not build one silently. Tell me that it has none, propose the smallest design that matches the release file above (how Shasha and Voxa do it: check on start or from Settings, show the new version, download, verify, hand over to the system installer), and wait for my approval.
3. **Groups.** If invite codes are shared as links or with a link to the app, that link must be the new page. If the app declares any web link it opens itself (an intent filter with a host), tell me: that needs a file on the site and is not set up for Khatwa today.
4. **The publish step.** Whatever publishes a release today (a script or a CI workflow that copied `khatwa-<version>.apk` into the old hub and edited the old page's version, size and SHA-256) must now:
   - copy the signed APK to `public/apps/khatwa/khatwa.apk` in the site repository;
   - write `public/apps/khatwa/latest.json`;
   - commit and push those two files to `main` of the site repository, after `git pull --rebase`;
   - stop touching the old hub repository and stop editing any page by hand.
5. **The app's page.** Read `content/apps/details/khatwa.ts` and compare it with the app as it is today. Fix anything that is out of date (features, steps, FAQ) in both languages, and replace screenshots that no longer match. The old QR code was removed from the page on purpose.
6. **Docs.** Update the repository's README and any release notes that name the old address.

## Rules

- Show me your plan before you change anything, and wait for my go-ahead.
- In the site repository, change only this app's own paths listed above. Other Claude sessions push to that repository: always `git pull --rebase` right before you push, and push only to `main`.
- Do not hand-edit built files with hashed names.
- Search for the old addresses with these exact strings, across source, resources, build files, CI workflows, scripts and docs: `ahmad-nayfeh.github.io`, `github.io/khatwa`, `ahmadnayfeh.vercel.app`.
- Tell me before anything that costs money or needs an account setting I must change by hand.
- If you are not sure about a fact, check it or say so. Do not guess.

## Safe order

1. Plan and my approval.
2. Change the addresses in the app and build a new version with a higher `versionCode`.
3. Install that build on a device and test it (below).
4. Publish it to the site repository with the new publish step.
5. Wait for the site's `deploy` workflow to finish, then check the live addresses.

## How to test

- `curl -sI https://ahmadnayfeh.com/apps/khatwa/khatwa.apk` returns 200, and the downloaded file's SHA-256 equals the one in `latest.json`.
- `curl -s https://ahmadnayfeh.com/apps/khatwa/latest.json` shows the version you published.
- `https://ahmadnayfeh.com/apps/khatwa/` shows that version and size, in English and at `/ar/apps/khatwa/`.
- A search of the built APK's resources and of the repository finds none of the old address strings.
- If the app has an update check: install the previous build, publish a newer one, and confirm the app finds, downloads, verifies and installs it.
- Every link inside the app opens a page on `ahmadnayfeh.com`.

## Report back to me

1. Every file where you replaced an old address, with the old and new value.
2. What the app does now to find updates, and the exact address it reads.
3. What you published to the site repository (paths, version, size) and the commit.
4. What you tested, with the result of each test, and what you could not test.
5. Anything I must do by hand (console settings, reinstalling, store listings), written as steps.
6. Anything you found that looks wrong but is outside this task.
