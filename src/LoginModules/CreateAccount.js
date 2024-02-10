import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {LoginContext} from '../LoginContext';
import {auth} from "./LoginConfig";
import back from '../Images/back.png';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export function CreateAccount({handleBack}){

	const [dataLogin, setdataLogin] = useContext(LoginContext);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;
		
		
		createUserWithEmailAndPassword(auth, email, password)
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