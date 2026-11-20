# Checklist

Last updated: 2026-11-20. "Site" means the new repository `Ahmad-Nayfeh/ahmadnayfeh.com`.

## The shared site

| Item | State |
|---|---|
| Domain `ahmadnayfeh.com` bought (Cloudflare) | Done |
| New repository created | Done |
| New design, English and Arabic, light and dark | Done, on the working branch |
| Home, Apps, one page per app, Projects, Notebook, About | Done, in both languages |
| Project write-ups and About translated to Arabic | Done by Claude. **Waiting for you:** review the Arabic wording |
| App files copied under `/apps/` with the new addresses | Done (copy of the old hub as of 2026-11-20) |
| Publishing workflow (GitHub Pages) | Written. **Waiting for you:** steps 1 to 4 in `your-steps.md` |
| Live test of the site on the real domain | **Waiting for you** (step 5), then Claude tests |
| Forwarding page for the old github.io address | Prepared on a side branch. **Waiting for you:** step 7 |
| Redirects for the old vercel.app address | Prepared on a side branch. **Waiting for you:** step 7 |
| Article-draft automation secret | **Waiting for you:** step 6 |
| Private writing page for publishing from the phone (`/write/`) | Built. **Waiting for you:** create the key (step 9). Not yet tested against the real repository |

## Per app

"Copied" means the app's current files and a new page are on the site. "App session" means the work inside the app, started by pasting its prompt.

| App | On the new site | Waiting for the app's session | Waiting for you |
|---|---|---|---|
| **Shadhra** | Listed as the flagship; page links to shadhra.app and Google Play | Check links to the old sites; correct the listing text and screenshots | Paste the prompt. Later: developer website on Google Play |
| **Reel** | Page and APK copied; release file written | New address inside the app; update check (it may not have one); publish step; add screenshots (the page has none) | Paste the prompt; reinstall |
| **Khatwa** | Page with 9 screenshots, APK copied; release file written | New address inside the app; update check (it may not have one); publish step | Paste the prompt; reinstall |
| **Grid Shift** | Page with video; game copied to `/apps/grid-shift/app/` | Fix the "watch the explainer" link; fix or remove the dead source links; publish step | Paste the prompt |
| **Munazara** | Page with video; app copied to `/apps/munazara/app/` | Privacy text names the old address; publish step; review the page text | Paste the prompt |
| **Shasha** | Page with 15 screenshots; both apps, kit, guides and release file copied with new addresses | Update address in both apps; publish script; check and regenerate the guides and the kit | Paste the prompt; reinstall on the TV and the phone |
| **Reading Marathon** | Page; APK, invite page, privacy page, admin page and Android link file copied; invite page points at the new address | Invite-link host in the app; links; update check (it may not have one); publish step; fix two inconsistencies on the pages | Paste the prompt; add the Firebase authorized domain (step 6); reinstall |
| **Voxa** | Page with video; web app copied to `/apps/voxa/app/`; APK and release file (1.0.17) copied | Three addresses and the update rule in the app; security policy; sign-in origins; publish script; bring the page up to date | Paste the prompt; console steps the session gives you; reinstall |

## Known gaps and things to decide

- **Reel has no picture or screenshots.** Its row and page show the icon only until its session adds them.
- **The old Vercel `/privacy` and `/terms` pages** describe an older, Google-Sheets version of Reading Marathon. `/privacy` now forwards to the current privacy page on the new site. `/terms` was not carried over and stays on Vercel. If a sign-in consent screen still links to either, tell Claude.
- **Installed copies of the apps** still contain the old address until each app's session ships a new build. With no users this only affects your own devices.
- **Voxa was updated on the old hub while the move was in progress.** The site has the copy from 2026-11-20 (1.0.17). If Voxa publishes to the old hub again before its own session moves it, run `scripts/sync-from-old-hub.sh` again.
