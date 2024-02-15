import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MyProvider} from './LoginContext';


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
else {
  //notificare all utente di cambiare browser
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyProvider>
      <App />
  </MyProvider>
  /**
    <React.StrictMode>
    per ora lascio qeusto commentato per non avere richiami multipli di usestate e useeffect
  </React.StrictMode>
*/
);


reportWebVitals();