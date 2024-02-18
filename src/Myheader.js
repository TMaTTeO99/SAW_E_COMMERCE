import './Style/StyleHeader.css'
import logo from './Images/logo1.png';
import profile from './Images/profilo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState} from 'react';

//import temporanei quelli giu
import {auth} from "./LoginModules/LoginConfig";
import { signOut } from 'firebase/auth';

export function MyHeader() {


	//in questo modo posso controllare la dimensione della
	//finestra su cui è visualizzata la pagina
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const rederict = '/test';
	const navigate = useNavigate();


	useEffect(() => {
		const handleResize = () => {
		  setWindowWidth(window.innerWidth);
		};
	
		window.addEventListener('resize', handleResize);
	
		// Pulizia dell'evento quando il componente viene smontato
		return () => {
		  window.removeEventListener('resize', handleResize);
		};
	}, []);

	/**
	 * Funzione di logout temporanea
	 */
	function doLogout() {
		signOut(auth).
		then(() => console.log("logout fatto"))
		.catch((error) => console.log("logout fallito"));
	}

	function onClicckHandlerProfile() {
		//qui devo navigare in un componente per vedere le info sul profilo
		navigate('/DoLogin');
	}

	const soglia = 704;
	return (
		
		<>
		{ windowWidth > soglia ? 
			(<div className='headerClass'>
				
				{/**
				 * Bottone di test per il logout
				 */}
				 <button onClick={doLogout}>LOGOUT</button>

				<img className='logoHome' src={logo} alt='MyEcommerce'/>		
				<div id='sezioniID'>
							
					<div className='containerClothes' >
						<Link className='clothesClass' onClick={() => navigate(rederict)}>UOMO</Link>
					</div>
					<div className='containerClothes'>
						<Link className='clothesClass' onClick={() => navigate(rederict)}>DONNA</Link>
					</div>
					<div className='containerClothes'>
						<Link className='clothesClass' onClick={() => navigate(rederict)} >BAMBINI</Link>
					</div>
				</div>
						
				<div id='searchDiv'>
					<input className="searchBarIn"type="text" placeholder="Prodotti e Brand" />
					<button className="searchBarBTN" type="button">Cerca</button>
				</div>	
				
				{/**
				 * Componenti per il login e la registrazione
				 */}
				<div className='DIVLogInSignUp'>
				 	<Link className='logIn' to={'/DoLogin'} >ACCEDI</Link>
					<img className='imgProfile' src={profile} alt='profilo' onClick={onClicckHandlerProfile}/>
					{/**
					 * <Link className='signUp'>REGISTRAZIONE</Link>
					 */}
				</div>
			</div>)
			: 
			(
				<div className='headerClass'>
					
					<div>
						<img className='logoHome' src={logo} alt='MyEcommerce'/>		

						{/**
						 * Componenti per il login e la registrazione
						 */}
						<div className='DIVLogInSignUp'>
						 	<Link className='logIn' to={'/DoLogin'} >ACCEDI</Link>
							<img className='imgProfile' src={profile} alt='profilo' onClick={onClicckHandlerProfile}/>
						</div>
					</div>
					<div id='sezioniID'>

						<div className='containerClothes' >
							<Link className='clothesClass' onClick={() => navigate(rederict)}>UOMO</Link>
						</div>
						<div className='containerClothes'>
							<Link className='clothesClass' onClick={() => navigate(rederict)}>DONNA</Link>
						</div>
						<div className='containerClothes'>
							<Link className='clothesClass' onClick={() => navigate(rederict)} >BAMBINI</Link>
						</div>
					</div>

					<div id='searchDiv'>
						<input className="searchBarIn"type="text" placeholder="Prodotti e Brand" />
						<button className="searchBarBTN" type="button">Cerca</button>
					</div>	
				</div>	
			)}
		</>	
	);
}