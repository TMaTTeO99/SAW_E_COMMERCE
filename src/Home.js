import './Style/StyleHeader.css';
import './Style/StyleProducts.css';
import './Style/StyleFooter.css';
import { LoadingSpinnerList } from './LoadingSpinnerList';
import React, { useRef, useEffect } from 'react';
import { MyHeader } from './Myheader';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {app} from './LoginModules/LoginConfig';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function ProductPreview({product, nav}) {
	
	const [urlImage, setUrlImage] = useState(null);
	const [flagURL, setFlagUrl] = useState(false);
	
	const storage = getStorage(app);
	
	const handleClick = (product, urlImage) => {
		//prima di andare nell altro modulo setto i dati
		
		const prod = {prt: product ,url: urlImage};	
		localStorage.setItem("selectedProduct", JSON.stringify(prod));
		nav('/BuyProduct');
	}
	
	useEffect(() => {
		
	var imageRef = ref(storage, product.url);
		
		getDownloadURL(imageRef)
		.then((url) => {
			
			setUrlImage(url);
			setFlagUrl(true);
		})
		.catch((error) => {
			console.log("imageRef : " + imageRef);
			console.log(error);
		});
	}, [product]);

	if(flagURL){
		return (
			<div className="product-preview" onClick={(e) => handleClick(product, urlImage)}>
				<img className='imageProduct' src={urlImage} />
				<div className='divDescrizione'>
					<p className='descrizione'>{product.description[4] + " " + product.genere + " " + product.description[2]} </p>
					<p className='prezzo'>{"Prezzo: " + product.prezzo} </p>
				</div>
				
			</div>
		);
	}
	else {
		return (
			<div className="product-preview">
				<LoadingSpinnerList/>
			</div>
		);
	}
}



export function Home({dataPreview}) {
	
	const speed = 4;
	const scrollContainer = useRef(null);

	const navigate = useNavigate();

	const scroll = (scrollOffset) => {
		if (scrollContainer.current) {
			scrollOffset *= speed;
			scrollContainer.current.scrollBy({ top: 0, left: scrollOffset, behavior: "smooth" });
		}
	};

	useEffect(() => {
		const handleWheel = (e) => {
			if (e.deltaY) {
				e.preventDefault();
				scroll(e.deltaY);
			}
		};

		if (scrollContainer.current) {
			scrollContainer.current.addEventListener('wheel', handleWheel);
		}

		return () => {
			if (scrollContainer.current) {
				scrollContainer.current.removeEventListener('wheel', handleWheel);
			}
		};
	}, []);

	return (
		<div id="Home_id">
			<MyHeader />	
			<main className='mainclassnm'>
				
				<div className="product-list" ref={scrollContainer}>
					{dataPreview.map((product, index) => (
						<ProductPreview key={index} product={product} nav={navigate} />
					))}
				</div>
			</main>
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
		</div>
	);
}
