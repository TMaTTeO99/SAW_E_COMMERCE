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

			{/**
			 * Header della schermata home 
			 */}
			<MyHeader className={'headerClass'}/>	
				
			<main>

			</main>

			<footer>


			</footer>

		</div>
	);


}