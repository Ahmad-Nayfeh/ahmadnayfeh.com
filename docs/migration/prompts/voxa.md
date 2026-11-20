# Move Voxa to ahmadnayfeh.com

Paste this whole message into the Claude Code session of the **Voxa** repository. Before you start, give that session access to the repository `Ahmad-Nayfeh/ahmadnayfeh.com` as well.

---

## Background

I moved my personal site and all my apps from `https://ahmad-nayfeh.github.io/` (and `https://ahmadnayfeh.vercel.app/`) to my own domain, **https://ahmadnayfeh.com**. The new site is one repository, `Ahmad-Nayfeh/ahmadnayfeh.com`, built with Next.js into plain files and published by GitHub Pages on every push to its `main` branch. Read its `README.md` first: it explains the folders and how an app publishes into it.

Your job in this session is the part of the move that lives inside Voxa.

**There are no users of Voxa yet except me.** So do not keep anything working at the old address and do not build any compatibility layer. Change the address everywhere, release once, and I will reinstall on my own devices. The old github.io address will be replaced by a single page that forwards every old link to the new site.

## New addresses for Voxa

| What | Address |
|---|---|
| App page (English) | `https://ahmadnayfeh.com/apps/voxa/` |
| App page (Arabic) | `https://ahmadnayfeh.com/ar/apps/voxa/` |
| The running web app | `https://ahmadnayfeh.com/apps/voxa/app/` |
| Android app | `https://ahmadnayfeh.com/apps/voxa/voxa.apk` |
| Release file | `https://ahmadnayfeh.com/apps/voxa/latest.json` |
| Intro video | `https://ahmadnayfeh.com/apps/voxa/media/voxa-intro.mp4` |
| My site (replaces every link to the old hub home or the Vercel portfolio) | `https://ahmadnayfeh.com/` |

## Where Voxa lives in the site repository

| Path in `Ahmad-Nayfeh/ahmadnayfeh.com` | What it is | Who writes it |
|---|---|---|
| `public/apps/voxa/app/` | The built web app (`index.html`, `boot.js`, `icon.svg`, `assets/`, `ffmpeg/`) | `scripts/publish-to-hub.sh` |
| `public/apps/voxa/voxa.apk` | The Android app | `scripts/publish-to-hub.sh` |
| `public/apps/voxa/latest.json` | The release file (below) | `scripts/publish-to-hub.sh` |
| `public/apps/voxa/media/` | The intro video, its Arabic captions and its poster | Replace by hand when the video changes |
| `content/apps/details/voxa.ts` | The text of the app's page in English and Arabic (shape: `content/apps/types.ts`) | Edit by hand when the app's features change |
| `public/images/apps/voxa/` | Screenshots shown on the page | Replace when screens change |
| `content/apps/index.ts` | The app's one-line entry in the apps list | Edit only this app's entry |

The old hub repository `Ahmad-Nayfeh/Ahmad-Nayfeh.github.io` is retired. Nothing is published there any more.

### The release file (`latest.json`)

Same shape as today. Only the address changes:

```json
{
  "versionCode": 18,
  "versionName": "1.0.18",
  "url": "https://ahmadnayfeh.com/apps/voxa/voxa.apk",
  "size": 4413084,
  "sha256": "<64 hex characters>"
}
```

- `versionCode` and `versionName` are the Android values of the published build.
- `url` is the full address of the file on the new domain.
- `size` is the file size in bytes; `sha256` is its SHA-256 in lowercase hex.

The site reads this file at build time to show the version and size on the app's page, so a release must never edit a version number or size anywhere else by hand.

## What has to change in Voxa

The addresses below are what I found in the published build (1.0.9; the constant names are from the minified bundle, so find the real ones in the source).

1. **The base address.** One constant holds `https://ahmad-nayfeh.github.io/voxa/` and is used for three things. Each needs its own new value, because the web app, the downloads and the page are no longer in one folder:
   - the update check `latest.json` -> `https://ahmadnayfeh.com/apps/voxa/latest.json`;
   - the Settings link "get the APK" -> `https://ahmadnayfeh.com/apps/voxa/voxa.apk`;
   - the Settings link "about" (was `about/`) -> the app's page, `https://ahmadnayfeh.com/apps/voxa/` (or `/ar/apps/voxa/` when the app's language is Arabic).
2. **The rule that restricts updates.** The update check accepts a release only if its `url` starts with `https://ahmad-nayfeh.github.io/voxa/`. This is a second, separate copy of the old address. Change it to `https://ahmadnayfeh.com/apps/voxa/`. Check the Android side too (the native updater plugin and any allow-list in the Capacitor or Android configuration): it may hold its own copy.
3. **The content security policy** in `index.html`: `connect-src` lists `https://ahmad-nayfeh.github.io`. Replace it with `https://ahmadnayfeh.com`. On the web the release file is same-origin, but inside the Android app the page is served from the app's own local address, so the new domain must be listed for the update check to work there.
4. **Sign-in and sync.** Google sign-in and cloud sync are now enabled (they were added after the build I inspected). The web app will now run at a new origin, `https://ahmadnayfeh.com`. Work out exactly what must allow that origin, and give me the steps for anything in a console:
   - Firebase Authentication, authorized domains: add `ahmadnayfeh.com`;
   - the Google sign-in OAuth client: authorized JavaScript origins and redirect addresses, if the web sign-in uses them;
   - any API key restricted by website address;
   - any server-side rule, function or allow-list that names the old address (CORS, App Check, the admin panel).
   Leave the old address in place in those consoles until the new one is confirmed working; I will remove it afterwards.
5. **`scripts/publish-to-hub.sh`.** Change it (and rename it if you like) so that it works on a checkout of `Ahmad-Nayfeh/ahmadnayfeh.com` and:
   - empties and refills `public/apps/voxa/app/` with the web build;
   - copies the signed APK to `public/apps/voxa/voxa.apk`;
   - writes `public/apps/voxa/latest.json` with the new address;
   - no longer publishes the old `about/` page: its text now lives in `content/apps/details/voxa.ts` in the site repository, and the video is in `public/apps/voxa/media/`;
   - runs `git pull --rebase`, commits only `public/apps/voxa/`, pushes to `main`.
   The web app now runs one level deeper (`/apps/voxa/app/`). The build uses relative paths, loads ffmpeg from a path relative to the page, and uses hash routes, so it should run there unchanged; confirm it, including the 30 MB `ffmpeg-core.wasm`.
6. **The admin panel** (added recently): check every address it uses or shows.
7. **Saved data in the browser.** The web library is stored in the browser (IndexedDB database `voxa`, plus `voxa.lang` and `voxa.theme` in local storage) and is tied to the address, so the web app starts empty at the new address. I accept that: I am the only user, and sync now covers signed-in data. Do not build a migration; just confirm that signing in at the new address brings the synced library back.
8. **The app's page.** Read `content/apps/details/voxa.ts` against the app today (it was written from the older page, before sign-in and sync) and bring it up to date in both languages. The captions of the seven screenshots are not my own words; correct them. Version and size on the page come from `latest.json`.
9. **Docs.** Update the README, the publishing notes and release notes that name the old address.

## Rules

- Show me your plan before you change anything, and wait for my go-ahead.
- In the site repository, change only this app's own paths listed above. Other Claude sessions push to that repository: always `git pull --rebase` right before you push, and push only to `main`.
- Do not hand-edit built files with hashed names.
- Search for the old addresses with these exact strings, across source, resources, build files, CI workflows, scripts and docs: `ahmad-nayfeh.github.io`, `github.io/voxa`, `ahmadnayfeh.vercel.app`.
- Tell me before anything that costs money or needs an account setting I must change by hand.
- If you are not sure about a fact, check it or say so. Do not guess.

## Safe order

1. Plan and my approval.
2. You give me the console steps; I add `ahmadnayfeh.com` in Firebase and Google Cloud. Nothing is removed yet.
3. Change the addresses, the update rule and the security policy; build the web app and an Android build with a higher `versionCode`.
4. Serve the web build locally from a sub-folder path (for example `/apps/voxa/app/`) and test it; install the Android build and test it (below).
5. Change the publish script and run it against the site repository.
6. Wait for the site's `deploy` workflow to finish, then test the live addresses, including sign-in.
7. After I confirm, I remove the old address from the consoles.

## How to test

- `https://ahmadnayfeh.com/apps/voxa/app/` loads with no failed or blocked requests in the browser console (the security policy reports blocks there), and a transcription that needs ffmpeg runs.
- Google sign-in works at the new address and the synced library appears.
- `curl -s https://ahmadnayfeh.com/apps/voxa/latest.json` shows the published version with an `ahmadnayfeh.com` address, and the APK's SHA-256 equals the value in it.
- On Android: Settings, Check for updates reads the new address (check the logs). Then publish a build with a higher `versionCode` and confirm the app finds it, downloads it, verifies the checksum and installs it.
- A release file whose `url` points anywhere else is refused.
- The Settings links open `ahmadnayfeh.com` pages.
- `https://ahmadnayfeh.com/apps/voxa/` and `/ar/apps/voxa/` show the published version and size, and the video plays.
- A search of the repository, the web build and the APK's assets finds none of the old address strings.

## Report back to me

1. Every file where you replaced an old address, with the old and new value.
2. What the app does now to find updates, and the exact address it reads.
3. What you published to the site repository (paths, version, size) and the commit.
4. What you tested, with the result of each test, and what you could not test.
5. Anything I must do by hand (console settings, reinstalling, store listings), written as steps.
6. Anything you found that looks wrong but is outside this task.
