import '../Style/StyleDoLogin.css';
import '../Style/TempForm.css';

import { motion } from 'framer-motion';
import {auth} from "./LoginConfig";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {LoginContext} from '../LoginContext';
import { useContext, useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import {MyFormLogin} from './MyFormLogin';
import {CreateAccount} from './CreateAccount';
import {LeftColumn, RightColumn} from './LoginBase';
import { ResetPassword } from './ResetPassword';



export function DoLogin({className}) {


	const [online, setOnline] = useState(navigator.onLine);

	const [backBlurred, setBackBlurred] = useState(false);//gestisco l attivazione della regola css per rendere lo sfondo sfocato 

	/**
	 * uso una variabile flag per capire da dove accedo al componente per la creazione dell account
	 * in modo che quando l utente usa il tasto back possa visualizzare il modulo precedente
	 * corretto.
	 * True indica che l utente accede alla creazione dell account dalla schermata di login con email
	 * e password, altrimenti accede dalla schermata di default, quella della scielta di come fare il login
	 */

	const [fromNavigation, setFromNavigation] = useState(true);

	const [optionLogin, setOptionLogin] = useState(true);
	const [formLogin, setFormLogin] = useState(false);
	const [formCreate, setFormCreate] = useState(false);
	const [formResetPWD, setFormResetPWD] = useState(false);
	const [dataLogin, setdataLogin] = useContext(LoginContext);
	

	const navigate = useNavigate();
	const rederict = '/test';

	/**
	 * uso google come provider per l autenticazione
	 */
	const provider = new GoogleAuthProvider();
	provider.addScope('profile');
	
	useEffect(() => {
		const updateOnlineStatus = () => {
		  setOnline(navigator.onLine);
		};
	
		window.addEventListener('online', updateOnlineStatus);
		window.addEventListener('offline', updateOnlineStatus);
	
		return () => {
		  window.removeEventListener('online', updateOnlineStatus);
		  window.removeEventListener('offline', updateOnlineStatus);
		};
	  }, []);


	//funzione per l autenticazione con google provider 
	function GoogleHandler() {	
	
		
		//effettuo il login tramite Oauth2
		
		if(online) {

			signInWithPopup(auth, provider)
			.then((result) => {

				//in caso si duccesso salvo nel contesto le info dell utente per poi poterle usare altrove
				//salvo i dati anche nello storage del browser per poter recuperare le info in caso di ricarica 
				//della pagina
				localStorage.setItem("loginData", JSON.stringify(result));
				setdataLogin({...result});
				navigate(rederict); // TODO: per ora solo modulo di test, da modificare.

			}).catch((errore) => {
				/**
				 * Caso in cui il log-in ha fallito faccio visualizzare all'utente un modulo di errore
				 */
				navigate('/Error_Login');
				setdataLogin({});// Setto il contesto del login con  un oggetto vuoto 
			});

		}
		else {
			navigate('/Error_Login');
			setdataLogin({});
		} 



	}
	

	/**
	 * funzione che nasconde il modulo per l opzione di accesso
	 * Viene richiamato quando un untente vuole accedere con email e password oppure 
	 * vuole creare un account
	 */
	const activeBlur = () => setBackBlurred(true);
	const deactiveBlur = () => setBackBlurred(false);

	const hiddenViewOptionLogin = () => { 
		setOptionLogin(false);
		setFormCreate(false);
		setFormResetPWD(false);
		setFormLogin(true);
		setFromNavigation(true);
	}
	//funzione che resetta la visibilità del modulo di default
	const setViewOptionLogin = () => {
		setOptionLogin(true);
		setFormLogin(false);
		setFormCreate(false);
		setFormResetPWD(false);
	}
	//funzione che setta la visibilità del modulo pre la creazione di un profilo
	const setviewCreate = () => {
		setFormCreate(true);
		setFormLogin(false);
		setOptionLogin(false);
		setFormResetPWD(false);
	}
	const setViewRecuperaPWD = () =>  {

		setFormCreate(false);
		setFormLogin(false);
		setOptionLogin(false);
		setFormResetPWD(true);

	}
	return (

		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}>	
			<div className='doLogin' >
			

				<LeftColumn backBlurred={backBlurred}/>
				
				{/**
				 * Riguardo faccio in modo che solo uno dei 3 componenti alla volta venga renderizzato in base a cosa
				 * fa l utente, di default sicccome viene renderizzato il modulo che fa scegliere con quale metodo ci si
				 * vuole autenticare
				 */}
				{optionLogin && 
					<RightColumn 
						GoogleHandler={GoogleHandler}
						EmailPasswordhandler={hiddenViewOptionLogin}
						ViewCreateAccount={setviewCreate}
						CheckBack={setFromNavigation}
					/>
				}
				{/**
				 * Caso in cui l utente vuole accedere con email e password
				 */} 

				{formLogin && 
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}>
					
						<MyFormLogin 
							handleBack={setViewOptionLogin}
							ViewCreateAccount={setviewCreate}
							ViewResetPassword={setViewRecuperaPWD}
							
							/>

					</motion.div>
				}
				{/**
				 * Caso in cui l utente vuole creare un profilo
				 */}
				{formCreate && 
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}>
						 
						{/**
						 * Se l utente accede alla creazione dell account dalla scelta del sign-in
						 * allora utilizzo setViewOptionLogin, altrimenti hiddenViewOptionLogin
						 * in questo modo posso ritornare alla schermrata corretta
						 */}
						<CreateAccount handleBack={
							fromNavigation ? hiddenViewOptionLogin : setViewOptionLogin
							}/>
					</motion.div>	
				}
				{formResetPWD && 
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}>
						<ResetPassword 
							handleBack={hiddenViewOptionLogin}
							BlurOn={activeBlur}
							BlurOff={deactiveBlur}
							backBlurred={backBlurred}/>

					</motion.div>
				}
			</div>
		</motion.div>
		
	);
}