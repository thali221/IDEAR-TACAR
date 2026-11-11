// Service Worker básico para permitir caché y PWA offline en IDEAR TACAR
const CACHE_NAME = 'idear-tacar-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Manejo de peticiones de red normales
  if (event.request.method !== 'GET') return;
  
  // No interceptar peticiones a la API para mantener datos frescos
  if (event.request.url.includes('/api/')) return;

  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
