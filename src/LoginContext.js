/**
 * Componente per poter recuperare
 * le info ricevute dopo che l utente ha effettuato il login dove è necessario
 */

import React from "react";
import {useState} from "react";

const LoginContext = React.createContext();//creo il contesto


//componente che avvolgerà la mia app per poter passare i dati che ricevo dal login 
//nei livelli inferiori della gerarchia ad altre componenti
const MyProvider = ({children}) => {

	const [datalogin, setDataLogin] = useState({});
	return (
		<LoginContext.Provider value={[datalogin, setDataLogin]}>
			{children}
		</LoginContext.Provider>
	)

}

export {LoginContext, MyProvider};