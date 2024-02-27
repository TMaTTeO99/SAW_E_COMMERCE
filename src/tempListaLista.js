import { LoadingSpinnerList } from './LoadingSpinnerList';
import React, { useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {app} from './LoginModules/LoginConfig';
import { useState } from 'react';

export function ProductPreview({product}) {
	
	const [urlImage, setUrlImage] = useState(null);
	const [flagURL, setFlagUrl] = useState(false);
	
	const storage = getStorage(app);
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
			<div className="product-preview">
				<img className='imageProduct' src={urlImage}/>
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