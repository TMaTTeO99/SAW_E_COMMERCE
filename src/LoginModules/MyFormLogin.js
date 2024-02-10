
import { useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {LoginContext} from '../LoginContext';
import {auth} from "./LoginConfig";
import back from '../Images/back.png';


export function MyFormLogin({handleBack, ViewCreateAccount, ViewResetPassword}) {

	const [dataLogin, setdataLogin] = useContext(LoginContext);
	const navigate = useNavigate();

	const handleSubmit = (e) => {

		e.preventDefault();
		const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;
		
		
		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			//salvo i dati anche nello storage del browser per poter recuperare le info in caso di ricarica 
			//della pagina
			localStorage.setItem("loginData", JSON.stringify(userCredential));
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