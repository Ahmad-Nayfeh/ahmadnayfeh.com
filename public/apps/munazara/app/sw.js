// Service worker generated at build time (vite.config.ts injects the asset list).
const VERSION = 'mwzh0ejo';
const ASSETS = ["./","./assets/index-CFuvT4dO.js","./assets/index-s7zR5Gr0.css","./index.html","./manifest.webmanifest","./icon.svg","./icon-192.png","./icon-512.png","./frame-guard.js","./fonts/plex-arabic-arabic-400.woff2","./fonts/plex-arabic-arabic-600.woff2","./fonts/plex-arabic-latin-400.woff2","./fonts/plex-arabic-latin-600.woff2"];
const CACHE = `munazara-${VERSION}`;
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('munazara-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  const isPage = req.mode === 'navigate';
  if (isPage) {
    // pages: network first (updates show at once), cached copy when offline
    e.respondWith(fetch(req).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req)));
});
