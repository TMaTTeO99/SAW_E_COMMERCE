import React, { useContext } from 'react'
import {LoginContext} from './LoginContext';

export function Test() {

	const {datalogin, setDataLogin, inputSearch, setinputSearch} = useContext(LoginContext);
	console.log(datalogin)
	if(Object.keys(datalogin).length === 0) {
		return <div> Loading...</div>
	}
	return (
		<>
			<h1>Info utente che ha effettuato il login</h1>
			<ul>
				<li>{datalogin.user.displayName}</li>
				<li>{datalogin.user.email}</li>
				<li>{datalogin.user.photoURL}</li>	

			</ul>
		</>
		
	)

}