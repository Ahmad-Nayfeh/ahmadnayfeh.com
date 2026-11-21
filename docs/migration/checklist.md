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
| Publishing workflow (GitHub Pages) | Done. The site is live at `https://ahmadnayfeh.com` with HTTPS enforced |
| Live test of the site on the real domain | Done: pages, downloads, checksum, Android link file, `www` |
| Forwarding page for the old github.io address | Done, merged |
| Redirects for the old vercel.app address | Done, merged and tested on six old addresses |
| Article-draft automation | Switched off in both repositories, by your choice |
| Private writing page for publishing from the phone (`/write/`) | Set up on the laptop and the phone. A real test entry was published from it, appeared on the site, and was then removed |
| CV (`/resume.pdf`) | Regenerated with the new site address |
| GitHub profile page | Links and header picture point at the new site |

## Update of 2026-11-21 (read this first; it is newer than the table below)

The owner delegated the open decisions to the session doing the move. What changed since the table was written:

| App | Done on 2026-11-21 | Still open |
|---|---|---|
| **Voxa** | Firebase domain added and sign-in tested by the owner. Web app and signed Android app **1.0.19** published (same certificate as 1.0.17). | Owner installs 1.0.19 by hand once. The intro video still shows the old address in two scenes (the old address forwards). |
| **Khatwa** | In-app update built and merged (rules in `core`, 18 new tests, waits while the phone lock is active). Artifact retention 5 days. | First release with the updater (planned as 0.11.0 from the release workflow, once GitHub's storage figure has refreshed). Owner installs it by hand once. Not tested on a phone. |
| **Reel** | In-app update built and merged (14 new tests). The owner chose a new signing key stored in the repository, which he made private first (the old key was only on his computer). **1.1.0 (build 23)** published, signed with the new key. Hand-started release workflow added. Page sentence about network use reworded. | Owner uninstalls the old Reel and installs 1.1.0 once. `SITE_REPO_TOKEN` in `video-player` if releases should run from GitHub. No screenshots yet. |
| **Grid Shift** | The repository's own Pages address now only forwards to the game on this site. Explainer video's last scene shows the new address. Decision: the repository stays public (in-game document links need it). | Nothing required. |
| **Munazara** | "Fair-play charter" section added to the page. | Owner reinstalls to the home screen from the new address; real two-device sync not tested. |
| **Shasha** | Old artifacts deleted; mapping retention 30 days (inside `shasha#52`). CI on the pull request: tests and both builds pass, only the upload step failed on storage. | Merge `shasha#52` once uploads work again (this makes the signed release), then the owner reinstalls on TV and phone once. |
| **Shadhra** | `shadhra#470` (documentation) merged; site and API answered after the merge. | Newer screenshots for the page. |
| **Reading Marathon** | Old artifacts deleted; retention 5 days. `SITE_REPO_TOKEN` added by the owner (not yet exercised). | Unchanged: recover the Google account, find `marathon-release.jks`, add the signing and Firebase secrets, release, reinstall. |

Also: `video-player`, `reading-marathon` and `Repo-B` were public until 2026-11-21; the owner made them private that day. The three unreviewed article drafts in `portfolio-website` were closed, and `SITE_REPO_TOKEN` was added to
`khatwa` and `reading-marathon` by the owner (first real use will be Khatwa's next release).

## Per app

On 2026-11-20 the work inside each app was done from one session, on the branch `claude/epic-feynman-hu09zj` of each app's repository. Six of those branches are merged (Khatwa, Reel, Grid Shift, Munazara, Voxa, Reading Marathon). Two pull requests are open and wait for the owner: Shasha (`Ahmad-Nayfeh/shasha` #52, because merging it makes CI publish a signed release) and Shadhra (`Ahmad-Nayfeh/shadhra` #470, documentation only, left open because it is the live product's repository). Every app repository now holds its own record of the move: `docs/site-move.md` (Shadhra: `docs/site-listing.md`), with a pointer in `CLAUDE.md` or the project map. An app's own session can read that file and needs no explanation from you.

| App (repository) | Done | Waiting for you |
|---|---|---|
| **Shadhra** (`shadhra`) | No old address existed. Listing text corrected against the app. Record added. | Fresh screenshots. Check the developer website on Google Play. |
| **Reel** (`video-player`) | No old address existed. The published APK equals a build of the current source, so no release is needed. New publish script. Release file completed (versionCode 11). | Decide on an in-app updater (it has none). Screenshots for its page. |
| **Khatwa** (`khatwa`) | README links. Release workflow now publishes to the site. Release file completed (versionCode 110). No reinstall needed: the app itself never named the old address. | Add the secret `SITE_REPO_TOKEN`. Decide on an in-app updater (it has none). |
| **Grid Shift** (`Repo-A`) | Explainer link and in-game document links fixed. New build published to the site. New publish script. | Decide: keep or stop the second copy at `ahmad-nayfeh.github.io/Repo-A/`; whether to make the repository private (that kills the in-game document links); re-render the video's last scene. |
| **Munazara** (`Repo-B`) | Privacy text corrected. Last scene of the explainer re-rendered with the new address. New build published to the site. Page text corrected to the app's real button names. | Reinstall to the home screen from the new address. Try relay sync between two devices. Decide on adding the etiquette text to its page. |
| **Shasha** (`shasha`) | Update address moved in both apps; downloads accepted only from the new folder. Publish script rewritten. Guides and kit checked: they never named the old address. | Merge the branch (this makes CI build a signed release; three timing-sensitive tests are flaky and may need a re-run). Run the publish script. Reinstall once on the TV and the phone. |
| **Reading Marathon** (`reading-marathon`) | Invite-link host and path, invite builder, privacy link. Release workflow now publishes to the site. Site pages corrected (Google sign-in only; no badges). | **Find the signing keystore** (`marathon-release.jks`): the repository has no signing or Firebase secrets, so no release can be built from it yet. Recover the Google account, then the Firebase steps. Then release and reinstall. |
| **Voxa** (`voxa`) | All addresses, the update rule, the security policy and the Android updater moved. New web build (1.0.18) published to the site. Page text brought up to date. Publish script rewritten. | Firebase authorized domain added and Google sign-in tested by the owner on 2026-11-21. Still open: release a signed Android build and install it by hand once (the installed 1.0.17 looks for updates at the old address). |

## Known gaps and things to decide

- **Reading Marathon, Firebase access (blocked).** The Google account that owns the Firebase project `reading-marathon-38b4f` asks for a confirmation on an old phone that is no longer available, so `ahmadnayfeh.com` could not be added to the authorized domains. Until that account is recovered, Google sign-in on the admin page at the new address will not work. Everything else about Reading Marathon on the site is unaffected. Recovering the account (Google account recovery) comes before the Reading Marathon prompt, because that app's backend lives in the same project.

- **Reel has no picture or screenshots.** Its row and page show the icon only until its session adds them.
- **The old Vercel `/privacy` and `/terms` pages** describe an older, Google-Sheets version of Reading Marathon. `/privacy` now forwards to the current privacy page on the new site. `/terms` was not carried over and stays on Vercel. If a sign-in consent screen still links to either, tell Claude.
- **Installed copies of the apps** still contain the old address until each app's session ships a new build. With no users this only affects your own devices.
- **GitHub Actions artifact storage: cleaned on 2026-11-21.** It was full on 2026-11-20 and upload steps failed. A one-off job deleted the old artifacts: Khatwa 8,853 MB (451 files), Shasha 746 MB, Reading Marathon 503 MB, Voxa 68 MB. Shasha keeps the R8 mapping files of its newest three versions (39 MB). To stop it filling again, Khatwa and Reading Marathon now keep artifacts 5 days, and Shasha keeps mappings 30 days instead of 90 (inside `shasha#52`). Each repository's `CLAUDE.md` records this. The figure on `https://github.com/settings/billing` can take some hours to drop, so an upload can still fail today.
- **One token for the release workflows.** Khatwa and Reading Marathon publish to this site from GitHub Actions with a secret named `SITE_REPO_TOKEN`: a fine-grained token limited to this repository with Contents: Read and write. The same token can be used in both.
