// components/Carousel.js

import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 // Change slide every 3 seconds (adjust timing as needed)
  };

  return (
    <div className="carousel-container">
      
    </div>
  );
};

export default Carousel;
