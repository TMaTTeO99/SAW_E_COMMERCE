/**
 * Componente per poter recuperare
 * le info ricevute dopo che l utente ha effettuato il login dove è necessario
 */

import React from "react";
import {useState, useEffect} from "react";

const LoginContext = React.createContext();//creo il contesto


//componente che avvolgerà la mia app per poter passare i dati che ricevo dal login 
//nei livelli inferiori della gerarchia ad altre componenti
const MyProvider = ({children}) => {

	const [datalogin, setDataLogin] = useState({});
	
	//ad ogni avvio recupero i dati del login dal localstorage, al primo saranno vuoti
	//se pero l utente ricarica la pagina dopo il login deve rimanere loggato
	useEffect(() => {

		const savedData = localStorage.getItem("loginData");
		if(savedData) {
			setDataLogin(JSON.parse(savedData));
			console.log(JSON.stringify(datalogin) + "  <---- I dati setatto nel contesto");
		}
	}, []);
	
	return (
		<LoginContext.Provider value={[datalogin, setDataLogin]}>
			{children}
		</LoginContext.Provider>
	)

}

export {LoginContext, MyProvider};