import errorImage from '../Images/Error.png';

import '../Style/Error.css';


import back from '../Images/back.png';
import { useNavigate } from 'react-router-dom';
export function Error({mex}) {

	const navigate = useNavigate();
	const handleBack = () => navigate('/');
	return (

		<div className='ERROR_DIV'>
			
		
			<div id='ERROR_DIV_INT'>

				<div id='divBackError'>
					<img src={back} id='backIDError' onClick={handleBack}/>
					<button onClick={handleBack}>BACK</button>
				</div>
				<div id='mex_content'>
					<img src={errorImage} className='ERROR_IM'/>
					<p>{mex}</p>
				</div>
			</div>
			
		</div>

	);

}