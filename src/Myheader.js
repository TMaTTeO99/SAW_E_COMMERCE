import './Style/StyleHeader.css'
import logo from './Images/logo1.png';
import profile from './Images/profilo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState} from 'react';


import {upload} from './FetchProducts';
import { fetchData } from './FetchProducts';
import { useContext} from 'react';
import {LoginContext} from './LoginContext';
//temp
import {catalogo} from "./TempDataProduct";
import { dictionary } from "./TempDataProduct";
import { productDictionary } from "./TempDataProduct";
import {getDictionary} from './FetchProducts';
//import { getURLs } from './FetchProducts';
//temp

export function MyHeader() {

	
	const [inputSearchValue, setSearchValue] = useState('');
	const {datalogin, setDataLogin, inputSearch, setinputSearch} = useContext(LoginContext);
	
	//in questo modo posso controllare la dimensione della
	//finestra su cui è visualizzata la pagina
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);


	const rederict = '/test';
	const navigate = useNavigate();

	const flagLogin = datalogin.login === "si" ? true : false;
	
	var textForUser = 'ACCEDI'; //testo da settare nell header 
  
  	//se l utente è loggato
  	if(datalogin.login === "si"){
  	  textForUser = datalogin.data.user.email.toString().split('@')[0];
  	}
	
	
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

	const onClicckHandlerProfile = () =>  flagLogin ? navigate('/ManageAccount') : navigate('/DoLogin');
	const onSubmitSearch = (event) => {

		event.preventDefault();
		var arrayInput = inputSearchValue.split(' ');
		localStorage.setItem("searchData", JSON.stringify(arrayInput));
		setinputSearch(arrayInput);
		navigate('/ProductSearched');
		
	}
	//temp
	/*const styleObject = {
		color: 'yellow',
		cursor: 'pointer',
	};*/
	//temp


	const soglia = 704;
	return (
		
		<>
		{ windowWidth > soglia ? 
			(<div className='headerClass'>
				
				{/*temp 
				
					<p style={styleObject} onClick={(e) => upload()}>UPLOAD-dizionario</p>
					
				*/}
					
				{/*temp */}
					
				{/*temp 
					<p style={styleObject} onClick={(e) => getDictionary()}>_____get-dizionario</p>
				*/}
					
				{/*temp */}
				
				<img className='logoHome' src={logo} alt='MyEcommerce' onClick={(e) => navigate('/')}/>		
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
						
					
				<form onSubmit={onSubmitSearch} id='searchDiv'>
					<input className="searchBarIn"type="text" placeholder="Prodotti" onChange={(e) => setSearchValue(e.target.value)}/>
					<button className="searchBarBTN" type='submit' >Cerca</button>
				</form>
					
				
				{/**
				 * Componenti per il login e la registrazione
				 */}
				<div className='DIVLogInSignUp'>
				 	<Link className='logIn' to={flagLogin ? '/' : '/DoLogin'}>{textForUser}</Link>
					<img className='imgProfile' src={profile} alt='profilo' onClick={onClicckHandlerProfile}/>
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
						 	<Link className='logIn' to={flagLogin ? '/' : '/DoLogin'} >{textForUser}</Link>
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

					<form onSubmit={onSubmitSearch} id='searchDiv'>
						<input className="searchBarIn"type="text" placeholder="Prodotti" onChange={(e) => setSearchValue(e.target.value)}/>
						<button className="searchBarBTN" type='submit' >Cerca</button>
					</form>
				</div>	
			)}
		</>	
	);
}