import back from '../Images/back.png';
import '../Style/TempForm.css';
import { auth } from '../MyConfig';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { TestPopUp } from './PopUp';
import { useState } from 'react';

export function ResetPassword({handleBack, BlurOn, BlurOff, backBlurred}) {

	const [confirmEmail, setConfirmEmail] = useState(false);//uso uno stato per visualizzare il pop-up 
	const navigate = useNavigate();
	const resetPopUp = () => {//handler per chiudere la visualizzazione del pop-up
		
		BlurOff();
		setConfirmEmail(false);
		
	}

	function handleSubmit(e){

		//BlurOn();
		//setConfirmEmail(true);
		
		e.preventDefault();
		const email = e.target.elements.email.value;

		sendPasswordResetEmail(auth, email)
		.then(() => {

			BlurOn();
			setConfirmEmail(true);
		})
		.catch((error) => {
			navigate('Error_Reset');
			
		});
		
			

	}
	
	return (
		<>
		
			<div className='EmailFormTop_1' >
				
				<div id={backBlurred ? 'blur-effect': 'divBack'}>
					<img src={back} id='backID' onClick={handleBack}/>
					<button onClick={handleBack}>BACK</button>
				</div>
				
				<div className='EmailFormTop_2'>

					{confirmEmail && 
						<TestPopUp resetPopUp={resetPopUp} />
					}
					<div id={backBlurred ? 'DivFormBlur': 'DivForm'}>

						<form onSubmit={handleSubmit} id='formID'>
							
							<div className='PWD_EMAIL_div'>
								
								<div id='dive_mail'> 
									<h3>Email</h3>
									<input id='inEmail' type='email' name='email' required />
								</div>
								<div id='dive_btn'>
									<button id='btnAccedi' type='submit'>Recupera</button>
								</div>
								
							</div>
						</form>

					</div>

				</div>	
			</div>
			
		</>
	);

}