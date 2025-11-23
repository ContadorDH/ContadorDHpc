// sw.js
const CACHE_NAME = "ipuc-cache-v1";
const urlsToCache = [
  "contadorDHpc.html",
  "manifest.json",
  "icon-192.png",
  "icon-512.png"
];

// Instalar y cachear archivos
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Activar
self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

// Interceptar peticiones
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
