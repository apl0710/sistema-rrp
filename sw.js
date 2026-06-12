const CACHE_NAME = 'rrp-erp-v1';

// O que ele vai salvar no celular para abrir rápido
const urlsToCache = [
  './',
  './index.html',
  './logo_apl.png',
  './logoapp.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se já tem no celular, devolve rápido. Se não, baixa da net.
        return response || fetch(event.request);
      })
  );
});