import React, { useRef, useEffect } from 'react';
import './Style/StyleHeader.css';
import './Style/StyleProducts.css';
import './Style/StyleFooter.css';
import { MyHeader } from './Myheader';
import { catalogo } from './TempDataProduct'; 

function ProductPreview({product, image}) {
	return (
		<div className="product-preview">
			<img className='imageProduct' src={image}/>
    	</div>
	);
}

export function Home() {

	const speed = 4;
	const pantaloniUomo = catalogo.uomo.pantaloni;
	const scrollContainer = useRef(null);//per evitare il re-rendering e poter effettuare lo scroll della lista

	const scroll = (scrollOffset) => {//funzione usata per navigare la lista

		if (scrollContainer.current) {

			scrollOffset *= speed; //aumento la dimensione dello scroll di 4 per velocizzare lo scorrimento
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

			<MyHeader/>	
		 
			<main className='mainclassnm'>

				<div className="product-list" ref={scrollContainer}>
					{pantaloniUomo.map((product, index) => {
						var path = process.env.PUBLIC_URL + "/" + product.url;
						return <ProductPreview key={index} product={product} image={path} />
					})}
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
