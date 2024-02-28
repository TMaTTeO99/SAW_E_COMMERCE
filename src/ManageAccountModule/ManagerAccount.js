//import '../Style/StyleDoLogin.css';
//import '../Style/TempForm.css';

import { motion } from 'framer-motion';
import { getAuth, deleteUser } from 'firebase/auth';
import {auth} from "../LoginModules/LoginConfig";
import { onAuthStateChanged } from 'firebase/auth';
import {LoginContext} from '../LoginContext';
import { useContext, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import {LeftColumn} from '../LoginModules/LoginBase';
import {ResetPassword} from '../LoginModules/ResetPassword';
import { SelectOption } from './SelectOption';
import {deleteAllCard} from '../FetchProducts';

export function ManageAccount() {
	
	const [selectOption, setselectOption] = useState(true);
	const [backBlurred, setBackBlurred] = useState(false);
	const [formResetPWD, setFormResetPWD] = useState(false);
	const {datalogin, setDataLogin, inputSearch, setinputSearch} = useContext(LoginContext);
	const navigate = useNavigate();


	const activeBlur = () => setBackBlurred(true);
	const deactiveBlur = () => setBackBlurred(false);
	

	const delateAccount = async () => {
		const confirmDelete = window.confirm("Sei sicuro di voler eliminare il tuo account?\nI dati relativi alle carte di credito saranno eliminati");
  		if (confirmDelete) {
    		
			//qui devo eliminare i dati su firestore che riguardano le carte di credito
			
			if(getAuth().currentUser !== null) {

				const resultDelateCards = await deleteAllCard(datalogin.data.user.email);

				deleteUser(getAuth().currentUser)
				.then(() => {
					const log = {
						login : "no",
						data : {}
					};
					localStorage.setItem("loginData", JSON.stringify(log));
					setDataLogin(log);

					alert('Profilo cancellato con successo');
					navigate('/');
				})
				.catch((err) => {
					alert('Impossibile cancellare profilo');
					console.log(err);
				});
			}

  		}
	}
	const setViewRecuperaPWD = () =>  {

		setselectOption(false);
		setFormResetPWD(true);

	}
	function handleBackFromReset() {
		setselectOption(true);
		setFormResetPWD(false);
	}
	return (

		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}>	
			<div className='doLogin' >
				<LeftColumn />
				
				{/**
				 * Colonna di destra che mi fa effettuare le operazioni per la gestine
				 * dell account:
				 *  1) recupero della password
				 * 	2) eliminazione dell account
				 * 	3) logout
				 * 
				 */}

				{/**
				 * Qui inserisco l opzione di scelta per le diverse operazioni
				 */}
				{selectOption && 

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}>
						<SelectOption handlePassword={setViewRecuperaPWD}
										handleDelate={delateAccount}/>

					</motion.div>

				}

				{formResetPWD && 
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}>
						<ResetPassword 
							handleBack={handleBackFromReset}
							BlurOn={activeBlur}
							BlurOff={deactiveBlur}
							backBlurred={backBlurred}/>

					</motion.div>
				}
							
			</div>
		</motion.div>

	);


}