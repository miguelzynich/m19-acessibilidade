// Home.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';
const Home = () => {
  const imagens = [
    'https://placekitten.com/800/400',
    'https://placekitten.com/800/401',
    'https://placekitten.com/800/402',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
  };

  return (
    <div>
      <h2>Página Inicial</h2>
      <div className="carousel-container">
        <Slider {...settings}>
          {imagens.map((imagem, index) => (
            <div key={index}>
              <img src={imagem} alt={`Imagem ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
