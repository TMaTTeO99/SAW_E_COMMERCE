import {NotProduct} from '../Messages/ErrorMessages';
import errorImage from '../Images/Error.png';
import '../Style/StyleNotProduct.css';

export function ListEmpty(){
	
	return (
		<div className='EmptyListProduct'>
			<h1 className='EmptyListProductMessage'>{NotProduct}</h1>
			<img className='SadFace' src={errorImage}/>
		</div>
	);
}