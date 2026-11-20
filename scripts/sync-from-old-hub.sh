#!/usr/bin/env bash
# One-off helper for the move from ahmad-nayfeh.github.io to ahmadnayfeh.com.
#
# Copies each app's downloads and running files from a checkout of the OLD hub
# repository into public/apps/, and points the copied update files and the
# Reading Marathon invite pages at the new address. Safe to run again: it
# replaces what it copied before. Once every app publishes here from its own
# repository, this script is no longer needed and can be deleted.
#
# Usage: scripts/sync-from-old-hub.sh /path/to/Ahmad-Nayfeh.github.io
set -euo pipefail

HUB="${1:?path to a checkout of the old hub repository}"
SITE="$(cd "$(dirname "$0")/.." && pwd)"
P="$SITE/public/apps"
NEW="https://ahmadnayfeh.com/apps"
OLD="https://ahmad-nayfeh.github.io"

sha() { sha256sum "$1" | cut -d' ' -f1; }
size() { stat -c%s "$1"; }

# A release file for an app that had none: version name, address, size and checksum.
release() { # slug file version
  printf '{\n  "versionName": "%s",\n  "url": "%s/%s/%s",\n  "size": %s,\n  "sha256": "%s"\n}\n' \
    "$3" "$NEW" "$1" "$2" "$(size "$P/$1/$2")" "$(sha "$P/$1/$2")" > "$P/$1/latest.json"
}

mkdir -p "$P"/{khatwa,reel,marathon,shasha,munazara,grid-shift/media,voxa/media,assets} "$SITE/public/.well-known"

# Android apps with one file each. The file name no longer carries the version.
for f in "$HUB"/khatwa/khatwa-*.apk; do v="${f##*khatwa-}"; cp "$f" "$P/khatwa/khatwa.apk"; release khatwa khatwa.apk "${v%.apk}"; done
for f in "$HUB"/reel/reel-*.apk; do v="${f##*reel-}"; cp "$f" "$P/reel/reel.apk"; release reel reel.apk "${v%.apk}"; done
for f in "$HUB"/marathon/reading-marathon-*.apk; do v="${f##*reading-marathon-}"; cp "$f" "$P/marathon/reading-marathon.apk"; release marathon reading-marathon.apk "${v%.apk}"; done

# Reading Marathon: invite, privacy and admin pages (plain files) and their shared styles.
rm -rf "$P/marathon/join" "$P/marathon/privacy" "$P/marathon/admin" "$P/marathon/img"
cp -r "$HUB/marathon/join" "$HUB/marathon/privacy" "$HUB/marathon/admin" "$HUB/marathon/img" "$P/marathon/"
rm -rf "$P/assets"; mkdir -p "$P/assets"
cp -r "$HUB/assets/fonts" "$HUB/assets/fonts.css" "$HUB/assets/site.css" "$HUB/assets/logo.svg" "$P/assets/"
sed -i \
  -e "s|$OLD/marathon/|$NEW/marathon/|g" \
  -e "s|location.origin + '/marathon/'|location.origin + '/apps/marathon/'|" \
  -e "s|intent://ahmad-nayfeh.github.io/marathon/join/|intent://ahmadnayfeh.com/apps/marathon/join/|" \
  -e "s|reading-marathon-[0-9.]*\.apk|reading-marathon.apk|g" \
  "$P/marathon/join/index.html" "$P/marathon/privacy/index.html" "$P/marathon/admin/index.html"
cp "$HUB/.well-known/assetlinks.json" "$SITE/public/.well-known/"

# Shasha: both apps, the computer kit, the guides and the update file.
cp "$HUB"/shasha/*.apk "$HUB"/shasha/*.zip "$HUB"/shasha/*.pdf "$HUB/shasha/latest.json" "$P/shasha/"
sed -i "s|$OLD/shasha/|$NEW/shasha/|g" "$P/shasha/latest.json"

# Browser apps run from /apps/<app>/app/.
rm -rf "$P/munazara/app"; mkdir -p "$P/munazara/app"; cp -r "$HUB/munazara/." "$P/munazara/app/"

rm -rf "$P/grid-shift/app"; mkdir -p "$P/grid-shift/app/about"
cp -r "$HUB/grid-shift/assets" "$HUB/grid-shift/index.html" "$P/grid-shift/app/"
cp "$HUB"/grid-shift/about/*.mp4 "$HUB"/grid-shift/about/*.vtt "$HUB/grid-shift/about/poster.jpg" "$P/grid-shift/media/"
# The game links to "about/#video"; its information page is now one level up.
cat > "$P/grid-shift/app/about/index.html" <<'HTML'
<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="robots" content="noindex">
<title>مناوبة الشبكة</title>
<meta http-equiv="refresh" content="0; url=../../#video">
<link rel="canonical" href="https://ahmadnayfeh.com/apps/grid-shift/">
</head><body><p><a href="../../#video">مناوبة الشبكة</a></p></body></html>
HTML

rm -rf "$P/voxa/app"; mkdir -p "$P/voxa/app"
( cd "$HUB/voxa" && for x in *; do case "$x" in about|voxa.apk|latest.json) ;; *) cp -r "$x" "$P/voxa/app/";; esac; done )
cp "$HUB/voxa/voxa.apk" "$HUB/voxa/latest.json" "$P/voxa/"
sed -i "s|$OLD/voxa/|$NEW/voxa/|g" "$P/voxa/latest.json"
cp "$HUB"/voxa/about/*.mp4 "$HUB"/voxa/about/*.vtt "$HUB/voxa/about/poster.jpg" "$P/voxa/media/"

echo "Copied from $HUB. Review with: git -C \"$SITE\" status --short public/"
