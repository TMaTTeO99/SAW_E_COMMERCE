//import '../Style/StyleDoLogin.css';
//import '../Style/TempForm.css';

import { motion } from 'framer-motion';
import {auth} from "../LoginModules/LoginConfig";
import {LoginContext} from '../LoginContext';
import { useContext, useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import {LeftColumn} from '../LoginModules/LoginBase';
import {ResetPassword} from '../LoginModules/ResetPassword';
import {adminEmail} from '../LoginModules/LoginConfig';
import { SelectOption } from './SelectOption';

export function ManageAccount() {
	
	const [selectOption, setselectOption] = useState(true);
	const [backBlurred, setBackBlurred] = useState(false);
	const [formResetPWD, setFormResetPWD] = useState(false);

	const navigate = useNavigate();


	const activeBlur = () => setBackBlurred(true);
	const deactiveBlur = () => setBackBlurred(false);
	const backHome = () => navigate('/');
	
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
						<SelectOption handlePassword={setViewRecuperaPWD}/>

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