const CACHE = "my-cache-v1";

const precacheFiles = [ '/','/index.html'];

  
self.addEventListener("install", function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(precacheFiles);
    })
  );
});

//Attivo il service worker
/*self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});*/

//cache versioning
self.addEventListener("activate", event => {

  const currentCaches = [CACHE];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map( cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

//Se il recupero fallisce, cercherà la richiesta nella cache e
//la servirà prima da lì
self.addEventListener("fetch", function (event) { 

  //non gestisco le chiamate come login logout creazione profilo... per evitare errori di firebase sulla console
  if (event.request.url.indexOf('firestore.googleapis.com') !== -1) {
    return;
  }
  
  if (event.request.method !== "GET") return fetch(event.request);

  event.respondWith(
    fromCache(event.request).then(
      function (response) {      
      event.waitUntil(
        fetch(event.request)
          .then(function (response) {
            return updateCache(event.request, response);
          })
          .catch((err) => console.log(err)));
        return response;
      },

      function () {
        //La risposta non è stata trovata nella cacher
        return fetch(event.request)
          .then(function (response) {
            
            event.waitUntil(updateCache(event.request, response.clone()));
            return response;
          })
          .catch(function (error) {
            console.log("Richiesta fallita" + error);
          });
      }
    )
  );

});

function fromCache(request) {
  //Faccio un controllo per vedere se c’è nella cache
  //Se non c’è, restituisc0 la risposta
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status === 404) {
        return Promise.reject("no-match");
      }
      return matching;
    });
  });
}

function updateCache(request, response) {
  return caches.open(CACHE).then(function (cache) {
    return cache.put(request, response);
  });
} 