import { useNavigate } from 'react-router-dom';
import {LoginContext} from '../LoginContext';
import { useContext, useState} from 'react';
import back from '../Images/back.png';
import {auth} from "../LoginModules/LoginConfig";
import { signOut } from 'firebase/auth';
import {CreateAccount} from '../LoginModules/CreateAccount';
import '../Style/Back.css';
import '../Style/StyleSelectOptionAccount.css';

export function SelectOption({handlePassword, handleDelate}) {

	const {datalogin, setDataLogin, inputSearch, setinputSearch} = useContext(LoginContext);
	
	const [hidenOption, setHidenOption] = useState(false);
	
	const navigate = useNavigate();
	const handleBack = () => navigate('/');
	const handleBackCreate = () => setHidenOption(false);
	const setFormVisible = () =>  setHidenOption(true);
	const manageOrders = () => navigate('/MyOrders')

	async function doLogout() {
	
		await signOut(auth).
		then(() => {
			
			const log = {
				login : "no",
				data : {}
			};
			setDataLogin(log);
			localStorage.setItem("loginData", JSON.stringify(log));
			navigate('/');
		})
		.catch((error) => console.log("logout fallito: " + error));
	}

	return (

		<>
			{!hidenOption &&
			
			<>
			<div id='divBack'>
				<img src={back} id='backID' onClick={handleBack}/>
				<button onClick={handleBack}> BACK</button>
			</div>
			
			<div className='divAllDiv'>
				
				<div className='divContainer' >

					<h2 id='h2_2'>ACCOUNT</h2>

					<div id='DivContainerOption'>		

						<div className='recupero_class' onClick={handlePassword}>
							<p>RECUPERA PASSWORD</p>
						</div>						
						<div className='delate_class' onClick={handleDelate}>
							<p>ELIMINA ACCOUNT</p>
						</div>
						<div className='logout_class' onClick={doLogout}>
							<p>LOG-OUT</p>
						</div>
						<div className='logout_class' onClick={setFormVisible}>
							<p>AGGIUNGI CARTA</p>
						</div>
						<div className='logout_class' onClick={manageOrders}>
							<p>ORDINI EFFETTUATI</p>
						</div>
						{/*
							<div className='logout_class' onClick={''}>
							<p>ELIMINA CARTA</p>
						</div>
						*/}
								
											
					</div>
					
				</div>

			</div>
			</>
			}
			{hidenOption && 
				<CreateAccount handleBack={handleBackCreate}
							   onlyCardForm={true}
							   handleBackEmailCard={handleBackCreate}/>
			}
			
		</>


	);



}