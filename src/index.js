import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MyProvider} from './LoginContext';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
