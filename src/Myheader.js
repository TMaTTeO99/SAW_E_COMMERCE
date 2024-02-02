import './Style/StyleHeader.css'
import logo from './logo1.png'

export function MyHeader({className}) {

	/**
	 * Qui dovrò inserire tutta la logica del header per il trasferimento alle pagine successive,
	 * Comincio con il trasferimento alla pagina dei contenuti da uomo per provare
	 * Inizio a implementare il back-end nel fra tempo per il funzionamento.
	 */

	return (
		<div className={className}>

			<img className="logoHome" src={logo} alt='MyEcommerce'/>		
			<div id='sezioniID'>
						
				<div className='containerClothes' >
					<a className='clothesClass'>UOMO</a>
				</div>
				<div className='containerClothes'>
					<a className='clothesClass' >DONNA</a>
				</div>
				<div className='containerClothes'>
					<a className='clothesClass'>BAMBINI</a>
				</div>
			</div>
					
			<div id='searchDiv'>
				<input className="searchBarIn"type="text" placeholder="Prodotti e Brand" />
				<button className="searchBarBTN" type="button">Cerca</button>
			</div>	
			
			{/**
			 * qui devo inserire i componenti per il login 
			 */}

		</div>
	);
}