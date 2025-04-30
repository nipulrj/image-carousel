import React from 'react'
import { useState, useEffect } from 'react'
import { BiSolidLeftArrowCircle, BiSolidRightArrowCircle, } from 'react-icons/bi'
import './ImageCarousel.css'

const imageId = Math.random();

export const ImageCarousel = ({count}) => {
  const [imageCount, setImageCount] = useState(count);
  const [selectedImage, setImage] = useState(0)
  const carouselImages = [];
  for(var i = 0; i < imageCount; i++) {
    carouselImages.push('https://picsum.photos/seed/picsum'+imageId+'-'+i+'/800/600');
  }

  const nextImage = () => {
    {selectedImage === carouselImages.length - 1 ? setImage(0) : setImage(selectedImage + 1)};
  }

  const prevImage = () => {
    {selectedImage === 0 ? setImage(carouselImages.length - 1) : setImage(selectedImage - 1)};
  }

  useEffect(() => {
    const handleType = (event) => {
      if(event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
        prevImage();
      } else if(event.key === 'ArrowRight' || event.key === 'ArrowUp') {
        nextImage();
      }
    };
    document.addEventListener('keydown', handleType);
    return () => document.removeEventListener('keydown', handleType);
  }, [selectedImage]);

  const handleSubmitImageCount = () => {
    let input = document.getElementById('image-input');
    let imageCount = input.value;
    if(imageCount <= 50) {
      setImageCount(input.value);
    }
    if(selectedImage >= imageCount) {
      setImage(imageCount - 1);
    }
  }

  return (
    <div className='imageCarouselContainer'>
        <h1 className="text">Random Image Carousel Generator</h1>
        <h2 className="text">Refresh to have a New Set of Images</h2>
        <div className="imageFormContainer">
          <div className="imageForm">
            <p className='image-count-text'>Select Image Count (max - 50) :</p>
            <input id='image-input' className="image-count-input" placeholder=""></input>
          </div>
          <button className="image-count-button" onClick={handleSubmitImageCount}>Enter</button>
        </div>
        <BiSolidLeftArrowCircle className='arrow arrow-left' onClick={prevImage}></BiSolidLeftArrowCircle>
        {carouselImages.map((src, idx) => {
            return <img src={src} alt={'Image'+idx} key={idx} className={selectedImage === idx ? 'carouselImage' : 'carouselImage hidden'}></img>
        })}
         <BiSolidRightArrowCircle className='arrow arrow-right' onClick={nextImage}></BiSolidRightArrowCircle>
        <span className='buttons'>
            {carouselImages.map((_, idx) => {
                return <button className={selectedImage === idx ? 'button': 'button not-selected'} key={idx} onClick={() => setImage(idx)}></button>
            })}
        </span>
    </div>
  )
}

export default ImageCarousel