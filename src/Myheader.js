import './Style/StyleHeader.css'
import { Link } from 'react-router-dom';
import {auth} from "./LoginConfig";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import logo from './logo1.png';
import {LoginContext} from './LoginContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


export function MyHeader({className}) {


	const rederict = '/test';

	const [dataLogin, setdataLogin] = useContext(LoginContext);
	const navigate = useNavigate();
	/**
	 * Comincio con la logica per il login
	 */
	
	const provider = new GoogleAuthProvider();

	function onClickLoginHandler() {

		signInWithPopup(auth, provider)
		.then((result) => {

			setdataLogin({...result});
			navigate(rederict);

		}).catch((errore) => {
			setdataLogin({});
		});

	}


	return (
		
		<div className={className}>
			
			<img className="logoHome" src={logo} alt='MyEcommerce'/>		
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
			 	<Link className='logIn' onClick={onClickLoginHandler}>LOG-IN</Link>
				{/**
				 * <Link className='signUp'>REGISTRAZIONE</Link>
				 */}
			</div>
		</div>
	);
}