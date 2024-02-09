import back from './back.png';
import './Style/TempForm.css';
import { auth } from './LoginConfig';
import { sendPasswordResetEmail } from 'firebase/auth';

export function ResetPassword({handleBack}) {

	function handleSubmit(e){

		e.preventDefault();
		const email = e.target.elements.email.value;

		sendPasswordResetEmail(auth, email)
		.then(() => {

		})
		.catch((error) => {
			alert(error.code);
		});


	}
	
	return (

		<div className='EmailFormTop_1'>
			
			<div id='divBack'>
				<img src={back} id='backID' onClick={handleBack}/>
				<button onClick={handleBack}> BACK</button>
			</div>

			<div className='EmailFormTop_2'>
				
				<div id='DivForm'>

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


	);



}