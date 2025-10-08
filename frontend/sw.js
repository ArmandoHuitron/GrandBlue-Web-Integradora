const CACHE_NAME = 'app-shell';
const urlsToCache = [
  '/frontend/index.html',
  '/frontend/register.html',
  '/frontend/dashboard.html',
  '/frontend/dashboard.css',
  '/frontend/dashboard.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
