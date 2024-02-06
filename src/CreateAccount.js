import back from './back.png'
export function CreateAccount(){


	function handleSubmit() {
		/**
		 * Qui faccio le chiamate per iscrivermi
		 */

	}
	function handleBack(){}

	
		
	
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
								<button id='btnAccedi' type='submit'>Accedi</button>
							</div>
							
					  	</div>
					</form>
		
				</div>
			</div>	

		</div>
	);	

}