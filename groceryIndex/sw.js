// Keeps the page available with no signal. Serves the saved copy first and refreshes it in the background.
const CACHE = "gi-v3";

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const hit = await cache.match(req, { ignoreSearch: true });
      const net = fetch(req)
        .then(res => {
          // Only keep real copies of this page, never a login redirect.
          if (res.ok && res.type === "basic" && !res.redirected) cache.put(req, res.clone());
          return res;
        })
        .catch(() => null);
      if (hit) return hit;
      const res = await net;
      return res || new Response("Offline and not saved yet. Open this page once with signal.", { status: 503 });
    })
  );
});
