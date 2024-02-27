/*const CACHE_NAME = 'my-cache-v1';

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

self.addEventListener('fetch', async event => {

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
  else if (
  isCrossOrigin(requestUrl) || requestUrl.pathname === '/favicon.ico' 
  || requestUrl.pathname === "/v1/accounts:signInWithPassword"
  || requestUrl.pathname === "/v1/accounts:signUp"
  ) {

  const body = await event.request.clone().text();
  const cacheUrl = new URL(event.request.url);
  cacheUrl.pathname = cacheUrl.pathname + body;
  
  const cacheRequest = new Request(cacheUrl.toString(), {
    headers: event.request.headers,
    method: "GET"
  });
  
  caches.match(cacheRequest).then(cacheR => {
    if(cacheR) {
      console.log("DATI DALLA CHACHE****************  ");
      return cacheR;
    }
    return fetch(event.request).then(response =>
      caches.open(CACHE_NAME).then(cache => {
        cache.put(cacheRequest, response.clone());
        return response;
      })
    );
  })
    
   
  //event.waitUntil(fetch(event.request));  
  
  return;
  }
  else {
    event.respondWith(caches.match(event.request));
    event.waitUntil(updateCache(event.request).then(refresh));
  }
  
});*/
/*
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
self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

//Se il recupero fallisce, cercherà la richiesta nella cache e
//la servirà prima da lì
self.addEventListener("fetch", function (event) { 


  if (event.request.url.indexOf('firestore.googleapis.com') !== -1) {
    console.log("event.request url " + event.request.url);
    return fetch(event.request)
    .then(resp => resp)
    .catch(err => console.log(err));
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
        //La risposta non è stata trovata nella cache, quindi la cerchiamo sul server
        return fetch(event.request)
          .then(function (response) {
            //Se la richiesta ha successo, la aggiungiamo o la aggiorniamo nella cache
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
  //Fa un controllo per vedere se c’è nella cache
  //Se non c’è, restituisce la risposta
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
} */