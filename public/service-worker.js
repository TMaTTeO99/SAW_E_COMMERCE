const CACHE_NAME = 'my-cache-v1';

const urlsToCache = [
  '/',
  '/index.html',
];

//funzioni di supporto per poter leggere i dati in base al tipo di dato
function cleanDataType(dataType) {

  return dataType.split(" ")[0].replace(";", "");

}	  

function selectDataReturn(dataType, response) {
  
  const cleanedDataType = cleanDataType(dataType);

  
  switch(cleanedDataType) {

    case 'text/html':
    case 'text/javascript':
    case 'application/javascript':
      return response.text();
    break;

    case 'application/json':
    case 'application/manifest+json':
      return response.json();
    break;

    case 'text/css':
    case 'image/png':
    case 'image/jpeg':
      return response.blob();
    break;
    default:
      
      console.log("IL TIPO NON é FRA QUELLI PREVISTI --> " + cleanedDataType);
      break;

  }

}

//aggiornamento della cache
async function updateCache(request) {
  return await fetch(request.url)
    .then(
      response => 
        caches.open(CACHE_NAME)
          .then(cache => cache.put(request, response.clone()))
          .then(() => response)
    )
    .catch((error) => {
      console.log(request + " " + request.url);
  
      console.log(error);
    });
}
//refresh della cache
function refresh(response) {

  const dataType = response.headers.get('content-type');
  return selectDataReturn(dataType, response)
        .then(resp => {
          self.clients.matchAll().then(clients => {
              clients.forEach(client => {
                client.postMessage(
                  JSON.stringify({...response})
                );
              });
           });
        return resp.data;  
    });
       
}

self.addEventListener('install', event => {
    //nella fase di installazione salvo i dati in cache
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

function isCrossOrigin(requestUrl) {
  
  return requestUrl.origin !== location.origin;
}

self.addEventListener('fetch', event => {

  //non faccio cacheing delle cross origin in modo da essere eseguite normalmente
  const requestUrl = new URL(event.request.url);

  if (requestUrl.pathname.startsWith('/v0/b/')) {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            // Se l'immagine è nella cache, restituiscila
            return cachedResponse;
          }

          // Altrimenti, effettua una richiesta di rete e memorizza la risposta nella cache
          return fetch(event.request).then(response =>
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, response.clone());

              return response;
            })
          );
        })
    );
  }
  else if (isCrossOrigin(requestUrl) || requestUrl.pathname === '/favicon.ico' || requestUrl.pathname === "/v1/accounts:signInWithPassword"
  || requestUrl.pathname === "/v1/accounts:signUp") {
  
    event.waitUntil(fetch(event.request));  
    return;
  }
  else {
    event.respondWith(caches.match(event.request))
    event.waitUntil(updateCache(event.request).then(refresh))
 
  }
  
});