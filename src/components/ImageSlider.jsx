import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const autoPlayIntervalRef = useRef(null);
  const totalSlides = 3;
  const autoPlayDuration = 4000; // 4 seconds per slide

  const backgroundImages = [
    '/images/bg1.jpg',
    '/images/bg2.jpg', 
    '/images/bg3.jpg'
  ];

  const contentImages = [
    {
      src: '/images/ang.png',
      title: 'Angry Destiny',
      description: 'The Man of Steel himself! A symbol of hope and justice in the DC Universe. With incredible strength and unwavering moral compass, Superman represents the best of humanity.',
    },
    {
      src: '/images/hap.png',
      title: 'Happy Destiny',
      description: 'The classic hero in action! This iconic version of Superman has inspired generations with his dedication to truth, justice, and the American way.',
    },
    {
      src: '/images/sadd.png',
      title: 'Sad Destiny',
      description: 'Modern take on the legend! A contemporary interpretation that brings Superman into the 21st century while maintaining his core values and heroic spirit.',
    }
  ];

  useEffect(() => {
    autoPlayIntervalRef.current = setTimeout(() => {
      nextSlide();
    }, autoPlayDuration);

    return () => {
      if (autoPlayIntervalRef.current) {
        clearTimeout(autoPlayIntervalRef.current);
      }
    };
  }, [currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="image-slider-container">
      {/* Background Slider */}
      <div className="background-slider">
        {backgroundImages.map((bgImage, index) => (
          <div
            key={index}
            className={`bg-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="content-container">
        {/* Left Side - Description */}
        <div className="description-section">
          <div className="description-content">
            <h2 className="slide-title">
              {contentImages[currentSlide].title}
            </h2>
            <p className="slide-description">
              {contentImages[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Right Side - Image Slider */}
        <div className="image-section">
          <div className="image-slider">
            {contentImages.map((image, index) => (
              <div
                key={index}
                className={`content-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={image.src} alt={image.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
