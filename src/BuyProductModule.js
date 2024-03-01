import { MyHeader } from './Myheader';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { LoginContext } from './LoginContext';
import './Style/StyleBuyProduct.css';
import './Style/StyleFormAddress.css';



export function BuyProduct() {
	
	const {datalogin, setDataLogin, inputSearch, setinputSearch} = useContext(LoginContext);
	
	const [addressForm, setAddressForm] = useState(false);
	const product = JSON.parse(localStorage.getItem("selectedProduct"));
	const navigate = useNavigate();
	const BuyProduct = () => {

		//qui devo per prima cosa controllare 
		//se l utente ha fatto il login
		if(datalogin.login !== 'si') {navigate('/DoLogin');}
		
		//se l utente ha fatto il login
		//visualizzo form per l inserimento dei dati 
		//riguardanti indirizzo nazione ecc per la spedizione
		setAddressForm(true);
	}
	
	return (

		<>
			<MyHeader/>
		
			<div className="BuyProductDiv">



				<div className="BuyProductDivImage">
					<img id='imgPrd' src={product.url}/>
				</div>

				<div className="BuyProductDivOption">

					<h2 className='h2BuyProduct'>descrizione</h2>
					
					<div className='Caratteristiche'>
						{product.prt.description.map((val, idx) => {
							return <p className='Pdesc'  key={idx}>{idx !== 3 && val}</p>
						})}
					</div>
					<h2 className='h2BuyProduct'>Informazioni</h2>

					<div id='divDataProduct'>
						<p className='pByuPr'>{"Disponibile: " + product.prt.disp}</p>
						<p className='pByuPr'>{"Quantità: " + product.prt.quantita}</p>
						<p className='pByuPr'>{(product.prt.description[4] === "scarpe" || 
												product.prt.description[4] === "pantaloni") ? 
												"Numero: " + product.prt.description[3] 
												: 
												product.prt.description[4] === "maglie" ? 
												"Taglia: " + product.prt.description[3]
												:
												"Taglia: Non disponibile"}</p>						
						<p className='pByuPr'>{"Prezzo: " + product.prt.prezzo}</p>
					</div>
					<div className='BuyButtonDiv' onClick={(e) => BuyProduct()}>
						<h2 className='BuyButton' >Acquista</h2>
					</div>
					
				</div>
				{addressForm && 
					
					<div id='FormAddress'>
		
						<form  id='formIDAddress'>

							<div className='divInputAddress'>


								<div id='divePaese'>
									<h3 className='h3AddForm'>Paese</h3>
									<input id='inPaese' required />
								</div>
								<div id='diveCitta'>
									<h3 className='h3AddForm'>Città</h3>
									<input id='inCittà' required />
								</div>
								<div id='divVia'> 
									<h3 className='h3AddForm'>Via</h3>
									<input id='inVia' required />
								</div>
								<div id='dive_btnAddress'>
									<h2 id='btnInsertAddress' type='submit'>Inserisci</h2>
								</div>

						  	</div>
						</form>
		
					</div>
				}

			</div>
			<footer>
					<p>Get connected with us on social networks:</p>
       				 <p href="#">Facebook</p>
       				 <p href="#">Twitter</p>
       				 <p href="#">Instagram</p>
       				 <p>Company name</p>
       				 <p>PISA, PI 56127, IT</p>
       				 <p>info@example.com</p>
       				 <p>+ 01 234 567 88</p>
       				 <p>+ 01 234 567 89</p>
       		 		 <p>&copy; 2024 Copyright: MyWebsite.com</p>
			</footer>
		</>

	);

}