import React, { useState } from 'react';
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const shiftLeft = () => {
    setCurrentIndex(currentIndex - 4 < 0 ? 0 : currentIndex - 4);
  };

  const shiftRight = () => {
    setCurrentIndex(
      currentIndex + 4 >= images.length ? currentIndex : currentIndex + 4
    );
  };

  // Calculate the visible images based on the currentIndex
  const visibleImages = images.slice(currentIndex, currentIndex + 4);

  
  let icoStyle = { fontWeight: "2rem" };
  return (

    
    <div className="image-slider">
  <button onClick={shiftLeft} className='leftBtn'><FaAngleLeft style={icoStyle}/></button>
      <div className="slider-images">
        {visibleImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
            className="slider-image"
          />
        ))}
      </div>
      
        
        <button onClick={shiftRight} className='rightBtn'><FaAngleRight style={icoStyle}/></button>
      
    </div>
  );
};

export default ImageSlider;
