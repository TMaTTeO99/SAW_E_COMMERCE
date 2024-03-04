import { MyHeader } from './Myheader';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useRef, useEffect } from 'react';
import { LoginContext } from './MyContext';
import { getCards } from './Utils';
import {myDecipherData} from './Utils'; 
import {myCypherData} from './Utils';
import {upDateCard} from './Utils';
import {updateProduct} from './Utils';
import {uploadOrder} from './Utils';
import {motion} from 'framer-motion';
import back from './Images/back.png';
import './Style/StyleBuyProduct.css';
import './Style/StyleFormAddress.css';
import './Style/StyleListCards.css';

function hidenNumCard(data) {

	const tmp = [...myDecipherData(data)];

	if(tmp.length > 13){
		tmp[12] = 'x';
		tmp[13] = 'x';
		tmp[14] = 'x';
		tmp[15] = 'x';
		return tmp.join('');
	}
	tmp[9] = 'x';
	tmp[10] = 'x';
	tmp[11] = 'x';
	tmp[12] = 'x';
	return tmp.join('');
	
}
function hidenCode(data) {

	const tmp = [...myDecipherData(data)];

	if(tmp.length > 3) {
		tmp[0] = 'x';
		tmp[1] = 'x';
		tmp[2] = 'x';
		tmp[3] = 'x';
		return tmp.join('');
	} 
	tmp[0] = 'x';
	tmp[1] = 'x';
	tmp[2] = 'x';
	return tmp.join('');
	
}
function hidenData(data) {

	const tmp = [...myDecipherData(data)];

	tmp[0] = 'x';
	tmp[1] = 'x';
	tmp[3] = 'x';
	tmp[4] = 'x';
	return tmp.join('');
	
}

export function BuyProduct() {
	
	
	const scrollContainer = useRef(null);

	const [idx, setIdx] = useState(-1);
	const [crdsHidden, setCrdsHidden] = useState([]);
	const [crds, setCrds] = useState([]);

	const [infoView, setinfoView] = useState(true);
	const [addressForm, setAddressForm] = useState(false);
	const product = JSON.parse(localStorage.getItem("selectedProduct"));
	
	const paese = useRef();
	const citta = useRef();
	const via = useRef();

	const navigate = useNavigate();
	const speed = 4;
	
	//const {datalogin, setDataLogin, inputSearch, setinputSearch} = useContext(LoginContext);
	const datalogin = JSON.parse(localStorage.getItem("loginData"));

	const handleBack = () => {
		setinfoView(true);
		setAddressForm(true);
	}
	const scroll = (scrollOffset) => {
		if (scrollContainer.current) {
			scrollOffset *= speed;
			scrollContainer.current.scrollBy({ top: 0, left: scrollOffset, behavior: "smooth" });
		}
	};
	const handleWheel = (e) => {
		if (e.deltaY) {
			e.preventDefault();
			scroll(e.deltaY);
		}
	};


	const buyProduct = () => {

		if(!datalogin || datalogin.login !== 'si') {navigate('/DoLogin');}
		setAddressForm(true);
	}
	const Buy = async () => {

		//controllo il saldo della carta
		
		if(idx > -1) {
			const saldo = myDecipherData(crds[idx].credit); 
		
			if(parseInt(product.prt.prezzo, 10) > parseInt(saldo, 10) ) {
				alert("Saldo Sulla Carta Insufficente");
				return;	
			}
			if(product.prt.quantita <= 0) {
				//qui devo visualizzare messaggio di non disponibilità
				alert("Prodotto Non Disponibile");
				return;
			}
			//sistemo i dati
			const credit = myDecipherData(crds[idx].credit);
			const newCredit = parseInt(credit, 10) - parseInt(product.prt.prezzo, 10);

			crds[idx].credit = myCypherData(newCredit.toString());

			//qui modifico i dati su firestore riguardo la carta di credito, 
			return await upDateCard(crds, datalogin.data.user.email)
				.then( async () => {


					//devo modificare i dati su firestore riguardo il prodotto
					if(await updateProduct(product.prt.prodotto , product.prt) === 0) {
						alert("Impossibile Effettuare ordine Al Momendo");	
						return -1;
					}
					else {
						alert("Ordine Effettuato");
						//qui devo aggiungere l ordine agli ordini dell utente
						//su firestore

						product.prt.url = product.url;
						const toUpLoad = {

							...product.prt,
							data: new Date().toLocaleDateString(),

						}
						


						if(await uploadOrder(product.prt, datalogin.data.user.email)) {
							console.log("Ordine Caricato");
						}
						else alert("IMPOSSIBILE CARICARE ORDINE");

						return 1;
					}

				})
				.catch(() => {
					alert("Transazione Fallita");
					return -2;
				});
			}
			alert("Selezionare Carta Di Credito");

	}
	const handleSubmitAddress = async (e) => {


		setinfoView(false);
		setAddressForm(false);
		const cardsUser = await getCards(datalogin.data.user.email);
		const hiddenCards = [];
		cardsUser.forEach((v) => {
			
			hiddenCards.push({
				numcard: hidenNumCard(v.numcard),
				code: hidenCode(v.code), 	 
				proprietario: myDecipherData(v.proprietario),
				scadenza: hidenData(v.scadenza),
				credit: v.credit	
			});

		})
		setCrds(cardsUser);
		setCrdsHidden(hiddenCards); 
		
		if (scrollContainer.current) {
			scrollContainer.current.addEventListener('wheel', handleWheel);
		}

	}
	
	useEffect(() => {
		
		return () => {
			if (scrollContainer.current) {
				scrollContainer.current.removeEventListener('wheel', handleWheel);
			}
		};
	}, []);
	
	return (

		<>
			<MyHeader/>
		
			<div className="BuyProductDiv">

				


				<div className="BuyProductDivImage">
					<img id='imgPrd' src={product.url}/>
				</div>
					{!infoView && 
					<div className='backContainer'>
						<div id='divBack'>
							<img src={back} id='backID' onClick={handleBack}/>
							<button onClick={handleBack}> BACK</button>
						</div>
					</div>
					}
				{infoView && 
				
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
					<div id='dive_btn' onClick={(e) => buyProduct()}>
						<button id='btnAccedi' onClick={(e) => buyProduct()}>Acquista</button>
					</div>
					
				</div>
				}
				{addressForm && 
					
					
              	
					<div id='FormAddress'>
		
					<motion.div
              			initial={{ opacity: 0 }}
              			animate={{ opacity: 1 }}
              			exit={{ opacity: 0 }}
              			transition={{ duration: 0.5 }}>


						<form  id='formIDAddress' onSubmit={(e) => handleSubmitAddress(e)}>

							<div className='divInputAddress'>


								<div id='divePaese'>
									<h3 className='h3AddForm'>Paese</h3>
									<input ref={paese} id='inPaese' name='paese' required />
								</div>
								<div id='diveCitta'>
									<h3 className='h3AddForm'>Città</h3>
									<input ref={citta} id='inCittà'  name='citta' required />
								</div>
								<div id='divVia'> 
									<h3 className='h3AddForm'>Via</h3>
									<input ref={via} id='inVia' name='via' required />
								</div>
								<div id='dive_btn'>
									<button id='btnAccedi' type='submit'>Inserisci</button>
								</div>

						  	</div>
						</form>
					
						</motion.div>
					</div>
				}
				{!infoView && 

					//qui inserisco anche il tasto back
					<>
					<div id='prova_1'>

						<motion.div
              			initial={{ opacity: 0 }}
              			animate={{ opacity: 1 }}
              			exit={{ opacity: 0 }}
              			transition={{ duration: 0.5 }}>
						
						<div className="scrolling-list" ref={scrollContainer}>

							{crdsHidden.map((item, index) => (
							  <div key={index} className="list-item">

								<div className={ idx === index ? "ColorCard-selected" : "ColorCard"} 
								   onClick={(e) => setIdx(index)}  >
									<h3>{"CARD: " + index}</h3>	
									<p className='dataCard'>{item.numcard}</p>
									<p className='dataCard'>{item.code}</p>
									<p className='dataCard'>{item.scadenza}</p>
									<p className='dataCard'>{item.proprietario}</p>
								</div>
							  </div>
							))}
						</div>
							
						</motion.div>

						<div className='FinalBuyButtonDiv' onClick={(e) => Buy()}>
							<h2 className='FinalBuyButton' >Effettua pagamento</h2>
						</div>
					
					</div>

					
					</>
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