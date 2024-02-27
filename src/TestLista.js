import './Style/TestLista.css';
import { LoadingSpinnerList } from './LoadingSpinnerList';
import React, { useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {app} from './LoginModules/LoginConfig';
import { useState } from 'react';
import {ProductPreview} from './tempListaLista';

export const Carousel = ({ product }) => {

	const [currentIndex, setCurrentIndex] = useState(0);
	

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === product.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious}>&lt;</button>
      <div className="image-container">
        {product.map((image, index) => (
          
		<ProductPreview className={index === currentIndex ? 'active' : ''} key={index} product={image}/>
		/*
			
		  <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? 'active' : ''}
          />
			
		*/  
		
        ))}
      </div>
      <button onClick={goToNext}>&gt;</button>
    </div>
  );
};

