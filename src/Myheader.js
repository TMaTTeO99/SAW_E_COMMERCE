import './Style/StyleHeader.css'
import logo from './Images/logo1.png';
import profile from './Images/profilo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export function MyHeader({className}) {


	const rederict = '/test';
	const navigate = useNavigate();

	function onClicckHandlerProfile() {
		//qui devo navigare in un componente per vedere le info sul profilo
		//navigate('/DoLogin');
	}


	return (
		
		<div className={className}>
			
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
		</div>
	);
}