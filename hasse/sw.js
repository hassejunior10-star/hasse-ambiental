'use strict';

const base = self.registration.scope;
const prefix = 'hasse-static-pwa:' + base + ':';
const version = prefix + '1';
const asURL = path => new URL(path, base).href;
const page = asURL('index.html');
const files = [
  'style.css', 'app.js', 'catalogo.js', 'pwa.js', 'manifest.json',
  'hasse-app-192.png', 'hasse-app-512.png', 'assets/logo.webp',
  'assets/folder.webp', 'assets/forest.jpg', 'assets/lucide.js',
  'assets/manrope.woff2', 'assets/playfair.woff2'
];
const fileURLs = new Set(files.map(asURL));
const entryURLs = new Set([base, page]);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(version);
    await cache.addAll([page, ...fileURLs].map(url => new Request(url, { cache: 'reload' })));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(prefix) && key !== version).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

// Apenas arquivos públicos do próprio app. Cadastros, anexos e links externos não entram neste cache.
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  url.search = '';
  url.hash = '';
  const nav = request.mode === 'navigate' && entryURLs.has(url.href);
  if (!nav && !fileURLs.has(url.href)) return;
  const key = nav ? page : url.href;
  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      if (response.ok && !response.redirected && response.type === 'basic') {
        const copy = response.clone();
        try { await (await caches.open(version)).put(key, copy); } catch (_) { /* O app segue disponível online. */ }
      }
      if (response.ok) return response;
      return (await (await caches.open(version)).match(key)) || response;
    } catch (_) {
      return (await (await caches.open(version)).match(key)) || Response.error();
    }
  })());
});
