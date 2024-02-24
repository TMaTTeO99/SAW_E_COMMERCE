
/**
 * Modulo per la visualizzazione dei prodotti cercati dagli utenti
 */
import { ProductPreview } from "./Home";
import { useRef } from "react";
import { useEffect } from "react";
export function ProductSearched({searchedProducts}) {

	
	const speed = 4;
	const scrollContainer = useRef(null);

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
		<div className="product-list" ref={scrollContainer}>
			{searchedProducts.map((product, index) => (
				<ProductPreview key={index} product={product} />
			))}
		</div>
	);


}