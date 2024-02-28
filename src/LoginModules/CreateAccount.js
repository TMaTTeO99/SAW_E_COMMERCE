import { useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {LoginContext} from '../LoginContext';
import {auth} from "./LoginConfig";
import back from '../Images/back.png';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {uploadCards} from '../FetchProducts';
import {checkCreditCardOnDB} from '../FetchProducts';
import '../Style/StyleFormCard.css';


function checkCreditCardFormat(cardNumber, expiryDate, cvv) {

	var regexNumeroCarta = /^[0-9]{13,16}$/;
    if (!regexNumeroCarta.test(cardNumber)) {
        return -1;
    }

    // Controllo della data di scadenza (formato MM/YY)
    var regexDataScadenza = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!regexDataScadenza.test(expiryDate)) {
        return -2;
    }

    // Controllo del CVV (3 o 4 numeri)
    var regexCvv = /^[0-9]{3,4}$/;
    if (!regexCvv.test(cvv)) {
        return -3;
    }

    // Se tutti i controlli passano, i dati sono validi
    return 0;

}
async function addAccount(email, password, setAddCard, setDataLogin) {

	
	return createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		//salvo i dati anche nello storage del browser per poter recuperare le info in caso di ricarica 
		//della pagina
		
		setAddCard(true);
		const log = {
			login : "si",
			data : userCredential
		};
		localStorage.setItem("loginData", JSON.stringify(log));
		setDataLogin(log);
		return true;
	})
	.catch(() => {return false;});
	
	
}



export function CreateAccount({handleBack}){

	const {datalogin, setDataLogin, inputSearch, setinputSearch} = useContext(LoginContext);
	const navigate = useNavigate();
	const [addCard, setAddCard] = useState(false);
	
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const sympleHandleBack = () => setAddCard(false); 

	const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');


    const handleSubmitCard = async (event) => {
        event.preventDefault();


		//qui devo fare il check dei dati
		//controllo prima la correttezza dei dati e poi controllo nel bd se la carta è gia presente
		switch(checkCreditCardFormat(cardNumber, expiryDate, cvv)){
			case -1:
				alert('ERRORE. Inserire Formato Numero Carta Corretto');
			break;
			case -2:
				alert('ERRORE. Inserire Formato Scadenza Corretto');
			break;
			case -3:
				alert('ERRORE. Inserire Formato CVV Corretto');
			break;
			case 0:
			
			//caso in cui i dati inseriti dall utente rispettano il formato
			
			const card = {
				numcard: cardNumber,
				scadenza: expiryDate,
				code: cvv,
				user: email,
				proprietario: cardHolderName
			}
			//controllo se la carta esiste nel db
			const flag = await checkCreditCardOnDB(card);
			
			if(flag !== -1) {
				if(await uploadCards(card, flag)){
					if(await addAccount(email, password, setAddCard, setDataLogin)) {
						navigate('/');
					}
					else alert('ERRORE. Impossibile Creare Profilo'); 
				}
				else alert('ERRORE. Impossibile Aggiungere Carta al Momento'); 
			}
			else alert('Carta Gia Esistente');

			break;
		}

		
    };

	const handleSubmit = (e) => {
		e.preventDefault();

		setEmail(e.target.elements.email.value);
		setPassword(e.target.elements.password.value);
		setAddCard(true);
		/*
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
		*/
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