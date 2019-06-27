// Actual service worker

const version = 'V0.01';
const staticCacheName = version + 'staticfiles';

addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(staticCacheName)
    .then( staticCache => {
      staticCache.addAll([
        // '/path/to/font.woff',
        // '/path/to/icon.svg'
      ]);
      return staticCache.addAll([
        // '/css/style.css',
        // '/path/to/javascript.js',
        // '/offline.html'
      ]);
    })
  );
});


addEventListener('activate', activateEvent => {
  activateEvent.waitUntil(
    caches.keys()
    .then( cacheNames => {
      return Promise.all(
        cacheNames.map( cacheName => {
          if (cacheName != staticCacheName) {
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then( () => {
      return clients.claim();
    })
  );
});


addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;
    fetchEvent.respondWith(
      // First look in the cache
      caches.match(request)
      .then( responseFromCache => {
         if (responseFromCache) {
           return responseFromCache;
      } // end if
      // Otherwise fetch from the network
      return fetch(request)
      .catch( error => {
      // Show a fallback page instead
        return caches.match('/offline.html');
      }); // end fetch catch and return
    }) // end match then
  ); // end respondWith
}); // end addEventListener
