# Your steps, in order

Menu names on GitHub and Cloudflare change from time to time; if a name differs slightly, pick the closest one.

Nothing in steps 1 to 5 touches the old sites. They keep working until step 7.

## Step 1. Put the new site on the `main` branch

The site was built on a working branch. It goes live from `main`.

1. Open `https://github.com/Ahmad-Nayfeh/ahmadnayfeh.com/pull/new/claude/epic-feynman-hu09zj`.
2. Click **Create pull request**, then **Merge pull request**, then **Confirm merge**.

(Or tell Claude in the session that built the site: "merge the site into main".)

## Step 2. Turn on GitHub Pages for the new repository

1. Open `https://github.com/Ahmad-Nayfeh/ahmadnayfeh.com/settings/pages`.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open the **Actions** tab of the repository. A run named **deploy** should start (or click **deploy**, then **Run workflow**). Wait for the green tick. It takes a few minutes.

## Step 3. Point the domain at GitHub (Cloudflare)

1. Go to `dash.cloudflare.com`, open **Domains**, click **ahmadnayfeh.com**, then **DNS**, then **Records**.
2. Click **Add record** and add these five records. For every one, set **Proxy status** to **DNS only** (the grey cloud, not the orange one).

| Type | Name | Content |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `ahmad-nayfeh.github.io` |

Why "DNS only": GitHub issues the security certificate (the padlock) itself, and it cannot do that while Cloudflare stands in between.

## Step 4. Tell GitHub the domain

1. Back at `https://github.com/Ahmad-Nayfeh/ahmadnayfeh.com/settings/pages`.
2. Under **Custom domain**, type `ahmadnayfeh.com` and click **Save**.
3. Wait for the line **DNS check successful**. This can take from a minute to an hour.
4. Tick **Enforce HTTPS**. If the box is greyed out, the certificate is still being issued; come back in 15 to 60 minutes.

## Step 5. Look at the site and tell Claude

1. Open `https://ahmadnayfeh.com/` and `https://ahmadnayfeh.com/ar/`.
2. Tell Claude "the site is live". Claude then tests the live site (pages, downloads, the Android link file) and reports.

## Step 6. Two small settings

**The article drafts.** The portfolio repository drafts an article twice a month. That automation moved with the site.

1. Open `https://github.com/Ahmad-Nayfeh/ahmadnayfeh.com/settings/secrets/actions`.
2. Click **New repository secret**. Name: `GEMINI_API_KEY`. Value: the same key the old repository uses (from `https://aistudio.google.com/apikey`). Click **Add secret**.
3. In the old repository, open `https://github.com/Ahmad-Nayfeh/portfolio-website/actions`, click **notebook-draft** on the left, then the **...** button, then **Disable workflow**. Otherwise both repositories draft articles.

**Sign-in for the Reading Marathon admin page.**

1. Open `https://console.firebase.google.com/`, choose the project **reading-marathon-38b4f**.
2. **Authentication**, then **Settings**, then **Authorized domains**, then **Add domain**: `ahmadnayfeh.com`.

Voxa needs the same in its own Firebase project; the Voxa session will give you the exact steps (see its prompt).

## Step 7. Switch the old addresses over

Do this only after step 5 is confirmed.

**The old apps hub (github.io).** A single forwarding page is prepared on a side branch.

1. Open `https://github.com/Ahmad-Nayfeh/Ahmad-Nayfeh.github.io/pull/new/claude/epic-feynman-hu09zj`.
2. **Create pull request**, **Merge pull request**, **Confirm merge**.
3. From then on, `https://ahmad-nayfeh.github.io/anything` forwards to the matching page on the new site.

Before merging, make sure no app session has published something new to the old hub that is missing from the new site. If one has, tell Claude to run the copy script again (`scripts/sync-from-old-hub.sh`).

**The old portfolio (vercel.app).** A redirect file is prepared on a side branch.

1. Open `https://github.com/Ahmad-Nayfeh/portfolio-website/pull/new/claude/epic-feynman-hu09zj`.
2. **Create pull request**, **Merge pull request**, **Confirm merge**. Vercel rebuilds by itself.
3. From then on, `https://ahmadnayfeh.vercel.app/anything` forwards to the new site. You never need to open Vercel again. Keep the Vercel project for a few months so old links keep forwarding, then delete it.

## Step 8. The apps, one at a time

For each app, in this order: **Shadhra, Reel, Khatwa, Grid Shift, Munazara, Shasha, Reading Marathon, Voxa**.

1. Open that app's Claude Code session.
2. Give the session access to the repository `Ahmad-Nayfeh/ahmadnayfeh.com`.
3. Paste the whole content of `docs/migration/prompts/<app>.md`.
4. Approve its plan, let it work, read its report.
5. Reinstall the new build on your own devices.
6. Tick the app in `checklist.md`.

## Step 9. Tidy up (any time later)

- Update the link on your CV, LinkedIn and GitHub profile to `https://ahmadnayfeh.com`.
- Google Play, Shadhra's listing: set the developer website to `https://ahmadnayfeh.com`.
- Optional: add `ahmadnayfeh.com` to Google Search Console so the new address is indexed sooner.
