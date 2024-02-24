import { useNavigate } from 'react-router-dom';
import {LoginContext} from '../LoginContext';
import { useContext} from 'react';
import back from '../Images/back.png';
import {auth} from "../LoginModules/LoginConfig";
import { signOut } from 'firebase/auth';
import '../Style/Back.css';
import '../Style/StyleSelectOptionAccount.css';

export function SelectOption({handlePassword, handleDelate}) {

	const [dataLogin, setdataLogin] = useContext(LoginContext);

	const navigate = useNavigate();
	const handleBack = () => navigate('/');

	function doLogout() {
	
		signOut(auth).
		then(() => {
			console.log("logout fatto")
			setdataLogin({});
			localStorage.setItem("loginData", JSON.stringify({}));
			navigate('/');
		})
		.catch((error) => console.log("logout fallito: " + error));
	}

	return (

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
											
					</div>
					
				</div>

			</div>
		</>


	);



}