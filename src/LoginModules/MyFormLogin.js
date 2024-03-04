import { useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {LoginContext} from '../MyContext';
import {auth} from "../MyConfig";
import back from '../Images/back.png';


export function MyFormLogin({handleBack, ViewCreateAccount, ViewResetPassword}) {

	const {datalogin, setDataLogin, inputSearch, setinputSearch} = useContext(LoginContext);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {

		e.preventDefault();
		const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;
		
		
		await signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			//salvo i dati anche nello storage del browser per poter recuperare le info in caso di ricarica 
			//della pagina
			const log = {
				login : "si",
				data : userCredential
			};
			localStorage.setItem("loginData", JSON.stringify(log));
			setDataLogin(log);

			// TODO: per ora solo modulo di test, da modificare.
			navigate('/');
			
		})
		.catch((error) => {
			
			switch(error.code) {
				case 'auth/invalid-credential':
					alert('Email o Password errate');
				break;
				default :
					navigate('/Error_Login');//rediriggo l utente verso il modulo di errore
				break;
			}
			
			
		});
	};

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
								<input id='inPWD' type='password' name='password'  required autoComplete='off' />
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