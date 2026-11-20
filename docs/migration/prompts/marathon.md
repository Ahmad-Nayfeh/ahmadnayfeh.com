# Move Reading Marathon to ahmadnayfeh.com

Paste this whole message into the Claude Code session of the **Reading Marathon** repository. Before you start, give that session access to the repository `Ahmad-Nayfeh/ahmadnayfeh.com` as well.

---

## Background

I moved my personal site and all my apps from `https://ahmad-nayfeh.github.io/` (and `https://ahmadnayfeh.vercel.app/`) to my own domain, **https://ahmadnayfeh.com**. The new site is one repository, `Ahmad-Nayfeh/ahmadnayfeh.com`, built with Next.js into plain files and published by GitHub Pages on every push to its `main` branch. Read its `README.md` first: it explains the folders and how an app publishes into it.

Your job in this session is the part of the move that lives inside Reading Marathon.

**There are no users of Reading Marathon yet except me.** So do not keep anything working at the old address and do not build any compatibility layer. Change the address everywhere, release once, and I will reinstall on my own devices. The old github.io address will be replaced by a single page that forwards every old link to the new site.

## New addresses for Reading Marathon

| What | Address |
|---|---|
| App page (English) | `https://ahmadnayfeh.com/apps/marathon/` |
| App page (Arabic) | `https://ahmadnayfeh.com/ar/apps/marathon/` |
| Download | `https://ahmadnayfeh.com/apps/marathon/reading-marathon.apk` |
| Release file | `https://ahmadnayfeh.com/apps/marathon/latest.json` |
| Invite links | `https://ahmadnayfeh.com/apps/marathon/join/?code=XXXXXX` |
| Privacy policy | `https://ahmadnayfeh.com/apps/marathon/privacy/` |
| Admin page | `https://ahmadnayfeh.com/apps/marathon/admin/` |
| Android link file | `https://ahmadnayfeh.com/.well-known/assetlinks.json` |
| My site (replaces every link to the old hub home or the Vercel portfolio) | `https://ahmadnayfeh.com/` |

## Where Reading Marathon lives in the site repository

| Path in `Ahmad-Nayfeh/ahmadnayfeh.com` | What it is | Who writes it |
|---|---|---|
| `public/apps/marathon/reading-marathon.apk` | The Android app. Fixed file name. | This app's publish script |
| `public/apps/marathon/latest.json` | The release file (below) | This app's publish script |
| `public/apps/marathon/join/index.html` | The invite landing page (plain HTML) | Edit by hand |
| `public/apps/marathon/privacy/index.html` | The privacy policy (plain HTML) | Edit by hand |
| `public/apps/marathon/admin/` | The web admin page and `catalog.json` | Edit by hand |
| `public/.well-known/assetlinks.json` | Lets Android open invite links in the app | Edit only if the signing key changes |
| `content/apps/details/marathon.ts` | The text of the app's page in English and Arabic (shape: `content/apps/types.ts`) | Edit by hand when the app's features change |
| `public/images/apps/marathon/` | Screenshots shown on the page | Replace when screens change |
| `content/apps/index.ts` | The app's one-line entry in the apps list | Edit only this app's entry |

The old hub repository `Ahmad-Nayfeh/Ahmad-Nayfeh.github.io` is retired. Nothing is published there any more.

### The release file (`latest.json`)

One file describes the current release. A first version of it is already there, written from the old 0.1.0 APK, but it has no `versionCode`. Your publish script must write the complete file:

```json
{
  "versionCode": 12,
  "versionName": "1.2.0",
  "url": "https://ahmadnayfeh.com/apps/marathon/reading-marathon.apk",
  "size": 4413084,
  "sha256": "<64 hex characters>"
}
```

- `versionCode` and `versionName` are the Android values of the published build.
- `url` is the full address of the file on the new domain.
- `size` is the file size in bytes; `sha256` is its SHA-256 in lowercase hex.

The site reads this file at build time to show the version and size on the app's page, so a release must never edit a version number or size anywhere else by hand.

## What has to change in Reading Marathon

**Read this first.** At the time this was written I could not sign in to the Google account that owns the Firebase project `reading-marathon-38b4f` (it asks for a confirmation on a phone I no longer have). Before planning anything, ask me whether I have recovered that account. If I have not, limit the plan to what needs no Firebase console access, and list separately what has to wait.

1. **Invite links (the important one).** The app (package `com.readingmarathon.app`) opens invite links itself.
   - In the Android manifest, the intent filter for invite links must declare host `ahmadnayfeh.com` and the path prefix `/apps/marathon/join`, with `android:autoVerify="true"`. Remove the old host `ahmad-nayfeh.github.io`.
   - Wherever the app builds an invite link to share, it must produce `https://ahmadnayfeh.com/apps/marathon/join/?code=XXXXXX`.
   - Wherever the app reads an incoming link, it must accept the new host and path.
   - The link file is already on the new site. Check that the SHA-256 fingerprint inside `public/.well-known/assetlinks.json` (`54:D1:D9:FC:58:0C:20:AF:E1:4C:DA:D4:F0:11:B6:30:2F:00:23:B0:BF:F8:BA:C6:9D:36:BD:92:3B:42:2F:15`) is the fingerprint of the key that signs the release build. If it is not, tell me before changing anything.
   - I already updated the landing page `public/apps/marathon/join/index.html` to the new host and path. Read it and confirm it matches what the app expects.
2. **Other links inside the app.** Privacy policy: `https://ahmadnayfeh.com/apps/marathon/privacy/`. App page: `https://ahmadnayfeh.com/apps/marathon/` (or `/ar/apps/marathon/`). Author link: `https://ahmadnayfeh.com/`. The old Vercel site also had `/privacy` and `/terms` pages; if the app or its sign-in consent screen links to those, tell me exactly where.
3. **Sign-in.** The Android app's Google sign-in does not depend on the site address. The **web admin page** does: it signs in with Firebase (project `reading-marathon-38b4f`) from the page's own address. I have to add `ahmadnayfeh.com` to that project's authorized domains by hand; put that in your report as a step for me, and check the admin page's code for any other place that names the old address.
4. **Updating from inside the app.** I want every Android app of mine to update itself from inside the app, reading the new domain.
   - If Reading Marathon already checks for updates: point it at `https://ahmadnayfeh.com/apps/marathon/latest.json`, download only from an address that starts with `https://ahmadnayfeh.com/apps/marathon/`, and verify the `sha256` before installing.
   - If it has no update check: do not build one silently. Tell me, propose the smallest design that matches the release file above, and wait for my approval.
5. **The publish step.** It must copy the signed APK to `public/apps/marathon/reading-marathon.apk`, write `public/apps/marathon/latest.json`, and push those two files to `main` of the site repository after `git pull --rebase`. It must stop touching the old hub repository.
6. **Pages that disagree with each other.** While moving the pages I found these; correct them so they match what the app really does:
   - the invite page says sign-in is "with a Google account or without an account", while the main page says Google sign-in only;
   - the apps list entry (`content/apps/index.ts`) and the invite page mention "badges", which the main page never mentions.
   Then read `content/apps/details/marathon.ts` against the app today and fix what is out of date, in both languages. Two screenshots exist that the page does not show (`activity.webp`, `sign-in.webp` in the old image folder); add them if they are still accurate.
7. **Docs.** Update the repository's README and release notes that name the old address.

## Rules

- Show me your plan before you change anything, and wait for my go-ahead.
- In the site repository, change only this app's own paths listed above. Other Claude sessions push to that repository: always `git pull --rebase` right before you push, and push only to `main`.
- Do not hand-edit built files with hashed names.
- Search for the old addresses with these exact strings, across source, resources, build files, CI workflows, scripts and docs: `ahmad-nayfeh.github.io`, `github.io/marathon`, `ahmadnayfeh.vercel.app`.
- Tell me before anything that costs money or needs an account setting I must change by hand.
- If you are not sure about a fact, check it or say so. Do not guess.

## Safe order

1. Plan and my approval.
2. I add `ahmadnayfeh.com` to the Firebase authorized domains (you tell me the steps).
3. Change the manifest, the link building and reading, and the other addresses; build a new version with a higher `versionCode`.
4. Install it and test invite links end to end (below).
5. Publish it to the site repository with the new publish step.
6. Wait for the site's `deploy` workflow to finish, then check the live addresses.

## How to test

- `curl -s https://ahmadnayfeh.com/.well-known/assetlinks.json` returns the file with the right package name and fingerprint, with content type `application/json` and no redirect.
- With the new build installed: `adb shell pm get-app-links com.readingmarathon.app` shows `ahmadnayfeh.com` as `verified`. If it does not, run `adb shell pm verify-app-links --re-verify com.readingmarathon.app` and check again.
- `adb shell am start -a android.intent.action.VIEW -d "https://ahmadnayfeh.com/apps/marathon/join/?code=ABC123"` opens the app on the join screen with that code.
- Create an invite in the app and check that the shared text contains the new address.
- Open an invite link on a phone without the app: the landing page shows the code and the download button, and the download works.
- The admin page at `https://ahmadnayfeh.com/apps/marathon/admin/` signs in (after I add the authorized domain).
- A search of the repository and of the built APK's resources finds none of the old address strings.

## Report back to me

1. Every file where you replaced an old address, with the old and new value.
2. What the app does now to find updates, and the exact address it reads.
3. What you published to the site repository (paths, version, size) and the commit.
4. What you tested, with the result of each test, and what you could not test.
5. Anything I must do by hand (console settings, reinstalling, store listings), written as steps.
6. Anything you found that looks wrong but is outside this task.
