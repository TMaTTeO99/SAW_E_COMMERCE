import email from '../Images/email.png';
import google from '../Images/google.png';
import { Link} from 'react-router-dom'; 
import logo from '../Images/logo1.png';

export function RightColumn({GoogleHandler, EmailPasswordhandler, ViewCreateAccount, CheckBack}) {

	/**
	 * Funzione che viene richiamata quando un utente vuole creare un profilo
	 * dalla schermata di scielta del login, in tal caso setto la variabile flag che indica 
	 * che l utente renderizza il modulo di creazione del profilo direttamente dalla schermata di defult
	 * in questo modo cliccando il tasto back l utente viene riportato nel modulo corretto.
	 */
	const setViewFromDefult = () => {
		CheckBack(false); 
		ViewCreateAccount();//nascondo il modulo attuale e visualizzo quello edl sign-up
	}

	return (

		<div className='divLoginOption'>

			<div className='containerLoginType' >
				<h2 id='h2_2'>LOG-IN</h2>

				<div id='ContainerLogDiv'>		
					<div className='Login_class_1' onClick={GoogleHandler}>
						<img src={google} className='Link_' />
					</div>		
					<div className='Login_class_2' onClick={EmailPasswordhandler}>
						<img src={email} className='Link_' />
					</div>						
				</div>
				<Link id='create' onClick={setViewFromDefult}>Crea un account</Link>
			</div>
			

		</div>

	);

}


//modulo per renderizzare la parte sinistra della schermata
export function LeftColumn({backBlurred}) {
	
	return (
		<div className='divLogoImage' id={backBlurred ? 'blur-effect': 'null_ID'}>
			<div className='DivContainerLeftColumn'>
				<img className='logoHomeLogin' src={logo} alt='MyEcommerce'/>
				<h2 id='h2_1'>MY_E_COMMERCE</h2>
			</div>
		</div>
	);
}