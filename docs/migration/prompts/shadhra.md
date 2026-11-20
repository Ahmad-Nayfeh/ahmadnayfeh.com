# List Shadhra on ahmadnayfeh.com

Paste this whole message into the Claude Code session of the **Shadhra** repository. Give that session access to the repository `Ahmad-Nayfeh/ahmadnayfeh.com` as well.

---

## Background

I moved my personal site and all my other apps from `https://ahmad-nayfeh.github.io/` (and `https://ahmadnayfeh.vercel.app/`) to my own domain, **https://ahmadnayfeh.com**. The new site is the repository `Ahmad-Nayfeh/ahmadnayfeh.com`; read its `README.md` first.

**Shadhra does not move.** It keeps its own domain, `https://shadhra.app`, and its Google Play listing. On the new site it is only listed, as the flagship app, with a short page that links out:

| What | Address |
|---|---|
| Shadhra's listing page (English) | `https://ahmadnayfeh.com/apps/shadhra/` |
| Shadhra's listing page (Arabic) | `https://ahmadnayfeh.com/ar/apps/shadhra/` |
| My site (replaces every link to the old hub or the Vercel portfolio) | `https://ahmadnayfeh.com/` |

Nothing of Shadhra is hosted on `ahmadnayfeh.com`, and nothing in this task may change how `shadhra.app` works.

## What to do

1. **Links from Shadhra to my old sites.** Search the web app, the backend, the Android app and the docs for `ahmad-nayfeh.github.io` and `ahmadnayfeh.vercel.app` (footer credit, About page, emails, store listing text kept in the repository, README). Replace each with `https://ahmadnayfeh.com/`, or with the listing page where the link is about Shadhra itself. If there are none, say so.
2. **The listing page's text.** In the site repository, read `content/apps/details/shadhra.ts` (shape: `content/apps/types.ts`) and Shadhra's entry in `content/apps/index.ts`. They were written from an older page and a write-up, not by this session. Compare them with Shadhra as it is today and correct them in English and Arabic: the headline, the introduction, the features, the questions, and the "how it was built" section (technology and highlights). Do not add claims about user numbers.
3. **The screenshots.** Six phone screenshots are in `public/images/apps/shadhra/`, plus the wide picture `public/images/apps/shadhra-card.webp` and the icon `public/images/apps/icons/shadhra.png`. Replace any that no longer match the app. One file is named `stats.webp` but shows the "talk to your library" screen; rename it and update the reference.
4. **Report only, do not build:** I may later want my site's notebook to show quotes, reflections and essays that I mark as public in Shadhra. Tell me whether Shadhra already has a way to read one user's public items from outside (a public profile page, a public API, an export), what it returns, and what the smallest safe addition would be if it does not.

## Rules

- Show me your plan before you change anything, and wait for my go-ahead.
- In the site repository, change only Shadhra's own paths named above. Other Claude sessions push there: `git pull --rebase` right before you push, and push only to `main`.
- Do not change anything about `shadhra.app`'s hosting, domain, sign-in or data.
- Tell me before anything that costs money or needs a setting I must change by hand (for example the developer website shown on Google Play).
- If you are not sure about a fact, check it or say so. Do not guess.

## How to test

- After the site's `deploy` workflow finishes, `https://ahmadnayfeh.com/apps/shadhra/` and `/ar/apps/shadhra/` show the corrected text and screenshots, and both buttons open `https://shadhra.app` and the Google Play listing.
- A search of the Shadhra repository finds none of the two old address strings.
- `https://shadhra.app` works exactly as before.

## Report back to me

1. Every place you replaced an old address, or a clear statement that there were none.
2. What you changed on the listing page, and why.
3. The answer to the report-only question in step 4.
4. Anything I must do by hand, written as steps.
5. What you tested and what you could not test.
