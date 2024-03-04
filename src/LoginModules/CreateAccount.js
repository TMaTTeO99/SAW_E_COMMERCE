import { useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {LoginContext} from '../MyContext';
import {auth} from "../MyConfig";
import back from '../Images/back.png';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import {uploadCards} from '../Utils';
import {checkCreditCardOnDB} from '../Utils';
import { FormCarta } from './FormCarta';
import { signInWithEmailAndPassword } from 'firebase/auth';
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
	.then( async (userCredential) => {
		
		
		//devo fare il login 

		return await signInWithEmailAndPassword(auth, email, password)
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
		.catch((error) => {
			return false;
		});
		
	})
	.catch(() => {
		return false;
	});
	
	
}



export function CreateAccount({handleBackEmail, handleBackEmailCard, onlyCardForm}){

	const {datalogin, setDataLogin, inputSearch, setinputSearch} = useContext(LoginContext);
	const navigate = useNavigate();
	const [addCard, setAddCard] = useState(onlyCardForm);
	
	const [email, setEmail] = useState(Object.keys(datalogin).length !== 0 && datalogin.login === "si" ? datalogin.data.user.email : '');
	const [password, setPassword] = useState(Object.keys(datalogin).length !== 0 && datalogin.login === "si" ? datalogin.data.user.password : '');
	
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
				proprietario: cardHolderName,
				credit: "1000"
			}

			if(!onlyCardForm){
				
				if(await addAccount(email, password, setAddCard, setDataLogin)) {
					
					//controllo se la carta esiste nel db
					const flag = await checkCreditCardOnDB(card);
					if(flag !== -1) {

						if(await uploadCards(card, flag)){
							
							alert('Profilo Creato');
							navigate('/');

						}
						else alert('ERRORE. Impossibile Aggiungere Carta al Momento'); 
					
					}
					else alert('Carta Gia Esistente');
					
					
				}
				else alert('ERRORE. Impossibile Creare Profilo');
			}
			else {

				const flag = await checkCreditCardOnDB(card);
				if(flag !== -1) {

					if(await uploadCards(card, flag)){
						
						alert('Carta Di Credito Aggiunta');
						navigate('/');

					}
					else alert('ERRORE. Impossibile Aggiungere Carta al Momento'); 
				
				}
				else alert('Carta Gia Esistente');
				
			}
				
			break;
		}

		
    };

	const handleSubmit = (e) => {
		e.preventDefault();

		setEmail(e.target.elements.email.value);
		setPassword(e.target.elements.password.value);
		setAddCard(true);
		
	};
	return (
		<div className='EmailFormTop_1'>
			
			{!addCard &&
			<>
			<div id='divBack'>
				<img src={back} id='backID' onClick={handleBackEmail}/>
				<button onClick={handleBackEmail}> BACK</button>
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
			{addCard && <FormCarta 
				sympleHandleBack={onlyCardForm ? handleBackEmailCard : sympleHandleBack}
				handleSubmitCard={handleSubmitCard}
				cardNumber={cardNumber}
				setCardNumber={setCardNumber}
				expiryDate={expiryDate}
				setExpiryDate={setExpiryDate}
				cvv={cvv}
				setCvv={setCvv}
				cardHolderName={cardHolderName}
				setCardHolderName={setCardHolderName}
				/>} 
		</div>
	);	

}