import React, { useContext } from 'react'
import {LoginContext} from './LoginContext';

export function Test() {

	const [myData, setmyData] = useContext(LoginContext);
	console.log(myData)
	return (
		<>
			<h1>Info utente che ha effettuato il login</h1>
			<ul>
				<li>{myData.user.displayName}</li>
				<li>{myData.user.email}</li>
				<li>{myData.user.photoURL}</li>	

			</ul>
		</>
		
	)

}