const CACHE_NAME = 'my-cache-v1';

//dati dda cacheare
const urlsToCache = [
  '/',
  '/index.html',
];


//aggiornamento della cache
function updateCache() {


}
//refresh della cache
function refresh() {


}





self.addEventListener('install', event => {
  console.log("installing service worker");
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        cache.addAll(urlsToCache)
        .then(() => self.skipWaiting());
      })
  );
});

self.addEventListener('activate', event => {
	console.log('active');
  event.waitUntil(self.clients.claim());
});


self.addEventListener('fetch', event => {

  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});