/**
 * Componente per renderizzare la pagina home
 * 
 * 
 */

import React from 'react'
import './Style/StyleHeader.css'
import { MyHeader } from './Myheader';


export function Home() {

	return (
		<div id="Home_id">

			<MyHeader className={'headerClass'}/>	
				
			<main>

			</main>
			<footer>


			</footer>

		</div>
	);


}