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
	const [inputSearch, setinputSearch] = useState([]);
	const [productSelected, setproductSelected] = useState({});
	//ad ogni avvio recupero i dati del login dal localstorage, al primo saranno vuoti
	//se pero l utente ricarica la pagina dopo il login deve rimanere loggato
	
	
	useEffect(() => {

		const savedData = localStorage.getItem("loginData");
		if(savedData) {
			setDataLogin(JSON.parse(savedData));
		}
		const savedSearchData = localStorage.getItem("searchData");
		if(savedSearchData) {
			setinputSearch(JSON.parse(savedSearchData));
		}
		const savedProductSelected = localStorage.getItem("selectedProduct");
	
		if(savedProductSelected){
			setproductSelected(JSON.parse(savedProductSelected));
		}

	}, []);
	
	return (
		<LoginContext.Provider value={{datalogin, setDataLogin, inputSearch, setinputSearch, productSelected, setproductSelected}}>
			{children}
		</LoginContext.Provider>
	)

}

export {LoginContext, MyProvider};