import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getPreview } from './Utils';
import {MyProvider} from './MyContext';
import { initializeFirestore, persistentLocalCache } from "firebase/firestore";
import { app } from './MyConfig';

export const Key = 'akasdbieubc37yASDBANDS2939834sfew9203LHGKPRTK80329dvsjkdfòwbfòoo2382rfosen182398ueodnqoqporj392ur32';


/**
 * Registro il mio serviceWorker
 */


if('serviceWorker' in navigator) {

  navigator.serviceWorker.register('./service-worker.js')
  .then((serviceWorker) => {
    console.log("Service worker registrato");
  })
  .catch((error) => {
    console.log("Errore registrazione ServiceWorker: ", error);
  });
  navigator.serviceWorker.ready.then(function (registration) {
    console.log("Service Worker Ready");    
  });

}

// Inizializza Firebase per settare il cacheing
initializeFirestore(app, {
	localCache: persistentLocalCache(),
});


if(!("Notification" in window)){
  alert("Il Browser Non Supporta Le Notifiche");
}
else if(Notification.permission !== 'denied') {
  Notification.requestPermission().then((permession) => {
    if(permession === 'granted') {
      const notification = new Notification("Benvenuto Nel Mio E-commerce", {
        icon:'../public/icons/logo1_p.png'
      });
    }
  })
}




const root = ReactDOM.createRoot(document.getElementById('root'));
const previewData = await getPreview(); 


root.render(
  <MyProvider>
      <App dataHome={previewData}/>
  </MyProvider>
);

reportWebVitals();