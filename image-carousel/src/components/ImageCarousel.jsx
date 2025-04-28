import React from 'react'
import { useState } from 'react'
import { BiSolidLeftArrowCircle, BiSolidRightArrowCircle, } from 'react-icons/bi'
import './ImageCarousel.css'

const imageId = Math.random();

export const ImageCarousel = ({count}) => {
  const imageCount = count
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


  return (
    <div className='imageCarouselContainer'>
        <h1 className="text">Random Image Carousel Generator</h1>
        <h2 className="text">Refresh to have a New Set of Images</h2>
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