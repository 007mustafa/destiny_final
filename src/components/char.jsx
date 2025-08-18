// src/components/CharacterUniverse.jsx
import React from 'react';
import Slider from 'react-slick';
import './char.css'; // custom CSS for styling

const universeData = [
  {
    title: 'DC Universe',
    image: '/images/img1.jpeg',
  },
  {
    title: 'Marvel Universe',
    image: '/images/img2.jpeg',
  },
  {
    title: 'Anime Universe',
    image: '/images/sky.jpg',
  },
  {
    title: 'Fantasy World',
    image: '/images/sky2.jpg',
  },
  {
    title: 'Game Universe',
    image: '/images/img2.jpeg',
  },
];
 <section
      className="trending-section"
      style={{
        backgroundImage: `url('/images/sky.jpg')`, // background in public/images
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '60px 0',
      }}
    ></section>
    
const CharacterUniverse = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="universe-section">
      <h2 className="universe-title">Explore Character Universes</h2>
      <Slider {...settings}>
        {universeData.map((universe, index) => (
          <div key={index} className="universe-card">
            <img src={universe.image} alt={universe.title} />
            <div className="universe-overlay">
              <h3>{universe.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CharacterUniverse;
