
/**
 * Modulo per la visualizzazione dei prodotti cercati dagli utenti
 */
import { ProductPreview } from "./Home";
import { useRef, useState, useEffect } from "react";
import {motion} from 'framer-motion';
import { MyHeader } from './Myheader';
import { fetchData } from './FetchProducts';
import { LoginContext } from "./LoginContext";
import { useContext , useReducer} from "react";
import { ListEmpty } from "./ErrorModules/ListEmptyModule";

import {useNavigate } from 'react-router-dom';

export function ProductSearched({textForUser}) {

	

	const {datalogin, setDataLogin, inputSearch, setinputSearch} = useContext(LoginContext);
	
	const [scarpe, setScarpe] = useState([]);
	const [maglie, setMaglie] = useState([]);
	const [pantaloni, setPantaloni] = useState([]);
	
	const [isEmpty, setIsEmpty] = useState(false);
	
	const speed = 4;

	//const scrollContainer = useRef(null);

	const scrollContainerScarpe = useRef(null);
	const scrollContainerMaglie = useRef(null);
	const scrollContainerPantaloni = useRef(null);
	
	var listScarpe = [];
	var listMaglie = [];
	var listPantaloni = [];

	const navigate = useNavigate();


	useEffect(() => {
		currentFetchData();
	}, [inputSearch])
	
	
	const currentFetchData = async () => {

		//recupero i dati che l utente ha inserito precedentemente 
		//in modo da effettuare la ricarica della pagina correttamente 
		//nel caso in cui l utente ricarichi la pagina magari per errore
		var dataForFetch = JSON.parse(localStorage.getItem("searchData"));
		var fetchResult = await fetchData(dataForFetch);

		if(fetchResult.length === 0) {
			setIsEmpty(true);
		}
		else {
			//se la lista di prodotti non è vuota inserisco i prodotti in array separati 
			fetchResult.forEach((obj) => {
				
				const pdt = obj.prodotto;
				switch(pdt) {
					case 'scarpe':
						listScarpe.push(obj);
						break;
					case 'maglie':
						listMaglie.push(obj);
						break;
					case 'pantaloni':
						listPantaloni.push(obj);
						break;
				}
			});
			setScarpe(listScarpe);
			setMaglie(listMaglie);
			setPantaloni(listPantaloni);
		}
		

	}	
	
	useEffect(() => {
		
		const handleBack = (e) => {
			e.preventDefault();
			navigate('/');
		};
		window.addEventListener('popstate', handleBack);

	}, []);
	
	const scroll = (scrollOffset, ref) => {
		if (ref.current) {
			scrollOffset *= speed;
			ref.current.scrollBy({ top: 0, left: scrollOffset, behavior: "smooth" });
		}
	};
	useEffect(() => {
		
		const handleWheelscarpe = (e) => {
			if (e.deltaY) {
				e.preventDefault();
				scroll(e.deltaY, scrollContainerScarpe);
			}
		};
		const handleWheelmaglie = (e) => {
			if (e.deltaY) {
				e.preventDefault();
				scroll(e.deltaY, scrollContainerMaglie);
			}
		};
		const handleWheelpant = (e) => {
			if (e.deltaY) {
				e.preventDefault();
				scroll(e.deltaY, scrollContainerPantaloni);
			}
		};

		if (scrollContainerScarpe.current) {
			scrollContainerScarpe.current.addEventListener('wheel', handleWheelscarpe);
		}
		if (scrollContainerMaglie.current) {
			scrollContainerMaglie.current.addEventListener('wheel', handleWheelmaglie);
		}
		if (scrollContainerPantaloni.current) {
			scrollContainerPantaloni.current.addEventListener('wheel', handleWheelpant);
		}

		return () => {

			if (scrollContainerScarpe.current) {
				scrollContainerScarpe.current.removeEventListener('wheel', handleWheelscarpe);
			}
			if (scrollContainerMaglie.current) {
				scrollContainerMaglie.current.removeEventListener('wheel', handleWheelmaglie);
			}
			if (scrollContainerPantaloni.current) {
				scrollContainerPantaloni.current.removeEventListener('wheel', handleWheelpant);
			}
		};
	}, []);



	return (
	<>
		{/**
		 * Qui comincio con il rendering condizionale:
		 * Prima cosa devo controllare che ListData non sia vuoto altrimenti devo 
		 * renderizzare un componente che  indica che non ci sono i prodotti cercati
		 */}		  
		
		{isEmpty && 
			<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}>
				<MyHeader textForUser={textForUser}/>
				<ListEmpty/>
			</motion.div>
		}
		{!isEmpty && 
			<>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}>
					<MyHeader textForUser={textForUser}/>
				</motion.div>
				<>
					<div className="product-list" ref={scrollContainerMaglie}>
						{maglie.map((product, index) => (
							<ProductPreview key={index} product={product} />
						))}
					</div>
				</> 
				<>
					<div className="product-list" ref={scrollContainerScarpe}>
							
						{scarpe.map((product, index) => (
							<ProductPreview key={index} product={product} />
						))}
					</div>
				</> 
				<>
					<div className="product-list" ref={scrollContainerPantaloni}>
						{pantaloni.map((product, index) => (
							<ProductPreview key={index} product={product} />	
						))}
					</div>
				</>
			</>
		}
	</>
	);
}