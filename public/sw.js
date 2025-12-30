// Service Worker for 7K Portfolio
// Optimized for low-end devices and slow connections

const CACHE_VERSION = 'v1.1.0';
const CACHE_NAME = `7k-portfolio-${CACHE_VERSION}`;
const STATIC_CACHE = `7k-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `7k-dynamic-${CACHE_VERSION}`;
const IMAGE_CACHE = `7k-images-${CACHE_VERSION}`;

// Critical assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/favicon.png',
  '/images/main-background.svg',
];

// Image cache limit (to prevent memory issues on low-end devices)
const IMAGE_CACHE_LIMIT = 50;

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)),
      caches.open(DYNAMIC_CACHE),
      caches.open(IMAGE_CACHE),
    ])
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => {
            return name.startsWith('7k-') && 
              name !== STATIC_CACHE && 
              name !== DYNAMIC_CACHE && 
              name !== IMAGE_CACHE;
          })
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Limit cache size for memory efficiency
async function limitCacheSize(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length > maxItems) {
    await cache.delete(keys[0]);
    limitCacheSize(cacheName, maxItems);
  }
}

// Fetch event - optimized caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip chrome extension and other non-http(s) requests
  if (!url.protocol.startsWith('http')) return;

  // API calls - Network only, no caching (fresh data always)
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request).catch(() => new Response(
        JSON.stringify({ error: 'Offline' }), 
        { headers: { 'Content-Type': 'application/json' } }
      ))
    );
    return;
  }

  // Images - Cache first with network fallback (optimized for slow networks)
  if (url.pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|avif|ico)$/i)) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          
          return fetch(request).then((networkResponse) => {
            if (networkResponse.ok) {
              cache.put(request, networkResponse.clone());
              limitCacheSize(IMAGE_CACHE, IMAGE_CACHE_LIMIT);
            }
            return networkResponse;
          }).catch(() => {
            // Return placeholder for failed images
            return new Response('', { status: 404 });
          });
        });
      })
    );
    return;
  }

  // Static assets (CSS, JS, fonts) - Cache first, update in background
  if (url.pathname.match(/\.(css|js|woff|woff2|ttf|eot)$/i) || url.pathname.includes('/_next/static/')) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request).then((networkResponse) => {
          if (networkResponse.ok) {
            caches.open(STATIC_CACHE).then((cache) => {
              cache.put(request, networkResponse.clone());
            });
          }
          return networkResponse;
        });
        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // HTML pages - Network first with cache fallback
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(request).then((cachedResponse) => {
          return cachedResponse || caches.match('/');
        });
      })
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-messages') {
    event.waitUntil(syncMessages());
  }
});

async function syncMessages() {
  // Handle offline message sync when online
  console.log('[SW] Syncing offline messages...');
}

// Push notification handling
self.addEventListener('push', (event) => {
  const options = {
    icon: '/favicon.png',
    badge: '/favicon.png',
    vibrate: [100, 50, 100],
  };
  
  if (event.data) {
    const data = event.data.json();
    event.waitUntil(
      self.registration.showNotification(data.title || '7K Portfolio', {
        ...options,
        body: data.body,
      })
    );
  }
});

// Listen for messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  // Clear specific cache on demand
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.delete(event.data.cacheName || DYNAMIC_CACHE);
  }
});
