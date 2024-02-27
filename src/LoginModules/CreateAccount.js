import { useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {LoginContext} from '../LoginContext';
import {auth} from "./LoginConfig";
import back from '../Images/back.png';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {uploadCards} from '../FetchProducts';
import '../Style/StyleFormCard.css';

export function CreateAccount({handleBack}){

	const {datalogin, setDataLogin, inputSearch, setinputSearch} = useContext(LoginContext);
	const navigate = useNavigate();
	const [addCard, setAddCard] = useState(false);
	
	const sympleHandleBack = () => setAddCard(false); 

	const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');

    const handleSubmitCard = (event) => {
        event.preventDefault();

		uploadCards({
			numcard: cardNumber,
			scadenza: expiryDate,
			code: cvv,
			proprietario: cardHolderName
		});

		console.log(cardNumber, expiryDate, cvv, cardHolderName);
		//navigate('/test');
    };

	const handleSubmit = (e) => {
		e.preventDefault();

		const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;
		
		
		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			//salvo i dati anche nello storage del browser per poter recuperare le info in caso di ricarica 
			//della pagina

			setAddCard(true);
			const log = {
				login : "si",
				data : userCredential
			};
			localStorage.setItem("loginData", JSON.stringify(log));
			setDataLogin(userCredential);
			
		})
		.catch((err) => {

			alert(err.code)
		
		});
	};
	return (
		<div className='EmailFormTop_1'>
			
			{!addCard &&
			<>
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
			</>
			}
			{addCard && 
			<>
				<div id='divBack'>
					<img src={back} id='backID' onClick={sympleHandleBack}/>
					<button onClick={handleBack}> BACK</button>
				</div>
				
				<div className='CardFormDiv'>

					<h2 id='h2_3'>ISCRIVITI</h2>
					
					<div className='DivFormCard'>
						
						<form onSubmit={handleSubmitCard} id='formCard'>
				
							<label className='LabelsCard'>
								Numero della carta:
								<div className='DivInputInner'>
									<input className='inputCard' type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />	
								</div>
								
							</label>
							<label className='LabelsCard'>
								Data di scadenza (MM/YY):
								<div className='DivInputInner'>
									<input className='inputCard' type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
								</div>
								
							</label>
							<label className='LabelsCard'>
								CVV:
								<div className='DivInputInner'>
									<input className='inputCard' type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
								</div>
							</label>
							<label className='LabelsCard'>
								Nome del titolare della carta:
								<div className='DivInputInner'>
									<input className='inputCard' type="text" value={cardHolderName} onChange={(e) => setCardHolderName(e.target.value)} required />
								</div>
							</label>
							<p id='buttonCard' onClick={handleSubmitCard}>Aggiungi carta</p>
						</form>

					</div>
				</div>
			</>
			}

		</div>
	);	

}