import './Style/StyleDoLogin.css';
import './Style/TempForm.css';
import back from './back.png'
import logo from './logo1.png';
import email from './email.png'
import google from './google.png'
import { motion } from 'framer-motion';
import {auth} from "./LoginConfig";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {LoginContext} from './LoginContext';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';


//modulo per l inserimento di username e password

function CreateAccount({handleBack}){


	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;
		
		
		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			alert(userCredential.user.uid);
			alert("ok");
		})
		.catch((error) => {
			alert(error);
			alert(error.code);
		});
	};
	return (
		<div className='EmailFormTop_1'>
			
			<div id='divBack'>
				<img src={back} id='backID' onClick={handleBack}/>
				<button onClick={handleBack}> BACK</button>
			</div>

			<div className='EmailFormTop_2'>
				
				<h2 id='h2_2'>ISCRIVITI</h2>
		
				<div id='DivForm'>
		
					<form onSubmit={handleSubmit} id='formID'>
					  	
						<div className='PWD_EMAIL_div'>
							
							<div id='dive_mail'> 
								<h3>Email</h3>
								<input id='inEmail' type='email' name='email' required />
							</div>
							<div id='dive_pwd'>
								<h3>Password</h3>
								<input id='inPWD' type='password' name='password'  required />
							</div>
							<div id='dive_btn'>
								<button id='btnAccedi' type='submit'>Iscriviti</button>
							</div>
							
					  	</div>
					</form>
		
				</div>
			</div>	

		</div>
	);	

}


function MyFormLogin({handleBack, ViewCreateAccount, ViewResetPassword}) {

	const [dataLogin, setdataLogin] = useContext(LoginContext);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;
		
		
		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			setdataLogin(userCredential);
			navigate('/test');
		})
		.catch((error) => {
			alert(error);
			alert(error.code);
		});
	};

	function onLogin(){}
	function onForgotPassword() {}
	function GoogleHandler(){}

	return (

		<div className='EmailFormTop_1'>
			
			<div id='divBack'>
				<img src={back} id='backID' onClick={handleBack}/>
				<button onClick={handleBack}> BACK</button>
			</div>

			<div className='EmailFormTop_2'>
				
				<h2 id='h2_2'>LOG-IN</h2>
		
				<div id='DivForm'>
		
					<form onSubmit={handleSubmit} id='formID'>
					  	
						<div className='PWD_EMAIL_div'>
							
							<div id='dive_mail'> 
								<h3>Email</h3>
								<input id='inEmail' type='email' name='email' required />
							</div>
							<div id='dive_pwd'>
								<h3>Password</h3>
								<input id='inPWD' type='password' name='password'  required />
							</div>
							<div id='dive_btn'>
								<button id='btnAccedi' type='submit'>Accedi</button>
							</div>
							
					  	</div>
					</form>
		
				</div>
				<div className='extraOptions'>
				  <Link id='create' onClick={ViewCreateAccount}>Crea un account</Link>
				  <Link id='reset' onClick={ViewResetPassword}>Recupera la password</Link>
				</div>
			</div>	

		</div>
	  );

}


//modulo per renderizzare la parte destra della schermata
function RightColumn({GoogleHandler, EmailPasswordhandler}) {

	return (

		<div className='divLoginOption'>

			<div className='containerLoginType' >
				<h2 id='h2_2'>LOG-IN</h2>

				<div id='ContainerLogDiv'>		
					<div className='Login_class_1' onClick={GoogleHandler}>
						<img src={google} className='Link_' />
						<h3 className='h3'>Accedi con google</h3>
					</div>		
					<div className='Login_class_2' onClick={EmailPasswordhandler}>
						<img src={email} className='Link_' />
						<h3 className='h3'>Accedi con email e password</h3>
					</div>						
				</div>
			</div>
			{/**
			 * qui posso inserire una opzione di creazione dell account
			 */}

		</div>

	);

}


//modulo per renderizzare la parte sinistra della schermata
function LeftColumn() {
	
	return (
		<div className='divLogoImage'>
			<img className='logoHomeLogin' src={logo} alt='MyEcommerce'/>
			<h2 id='h2_1'>MY_E_COMMERCE</h2>
		</div>
	);
}

export function DoLogin({className}) {


	
	const [optionLogin, setOptionLogin] = useState(true);
	const [formLogin, setFormLogin] = useState(false);
	const [formCreate, setFormCreate] = useState(false);

	const [dataLogin, setdataLogin] = useContext(LoginContext);
	

	const navigate = useNavigate();
	const rederict = '/test';

	/**
	 * uso google come provider per l autenticazione
	 */
	const provider = new GoogleAuthProvider();

	provider.addScope('profile');
	
	function GoogleHandler() {	
	
		
		//effettuo il login tramite Oauth2
		signInWithPopup(auth, provider)
		.then((result) => {

			setdataLogin({...result});
			navigate(rederict);

		}).catch((errore) => {
			setdataLogin({});
		});

	}
	/*function EmailPasswordhandler() {
		signInWithEmailAndPassword(auth)
		.then((userCredential) => {

		})
		.catch((error) => {

		})
		
	}*/
	function hiddenViewOptionLogin() {
		setOptionLogin(false);
		setFormCreate(false);
		setFormLogin(true);	
	}
	function setViewOptionLogin() {
		setOptionLogin(true);
		setFormLogin(false);
		setFormCreate(false);
	}
	function setviewCreate() {
		setFormCreate(true);
		setFormLogin(false);
		setOptionLogin(false);
	}
	return (

		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}>	

			<div className='doLogin'>
			

				<LeftColumn/>
				 	
				{optionLogin && 
					<RightColumn 
						GoogleHandler={GoogleHandler}
						EmailPasswordhandler={hiddenViewOptionLogin}
					/>
				}
				{formLogin && 
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}>
					
						<MyFormLogin 
							handleBack={setViewOptionLogin}
							ViewCreateAccount={setviewCreate}
							
							/>

					</motion.div>
				}
				{formCreate && 
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}>
				
						<CreateAccount handleBack={hiddenViewOptionLogin}/>

					</motion.div>	
				}
			</div>
		</motion.div>
		
	);
}