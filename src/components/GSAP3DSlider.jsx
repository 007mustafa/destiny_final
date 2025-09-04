import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import './GSAP3DSlider.css';

const slideData = [
  {
    image: "/images/bg1.jpg",
    title: "Cosmic Adventure",
    description: "Embark on an epic journey through the stars and discover the mysteries of the universe."
  },
  {
    image: "/images/bg2.jpg", 
    title: "Galactic Warriors",
    description: "Join the battle for justice across distant galaxies with legendary heroes."
  },
  {
    image: "/images/bg3.jpg",
    title: "Space Odyssey",
    description: "Explore uncharted territories and encounter alien civilizations beyond imagination."
  },
  {
    image: "/images/bg4.jpg",
    title: "Stellar Legends",
    description: "Witness the rise of cosmic champions in this breathtaking space saga."
  },
  {
    image: "/images/dc.jpg",
    title: "Heroic Destiny",
    description: "Unleash your inner hero and save the world from ultimate destruction."
  },
];

const Char = () => {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const total = slideData.length;
  const autoplayRef = useRef(null);

  // GSAP animation for positioning
  const updateSlides = (index) => {
    const slides = sliderRef.current.children;

    gsap.to(slides, {
      duration: 0.8,
      ease: "power3.inOut",
      x: (i) => (i - index) * 300,
      z: (i) => -Math.abs(i - index) * 200,
      rotationY: (i) => (i - index) * -30,
      scale: (i) => (i === index ? 1 : 0.8),
      opacity: (i) => (i === index ? 1 : 0.6),
      transformOrigin: "50% 50%",
    });
  };

  // Run GSAP every time `current` changes
  useEffect(() => {
    updateSlides(current);
  }, [current]);

  // Autoplay with GSAP timeline
  useEffect(() => {
    autoplayRef.current = gsap.timeline({ repeat: -1 })
      .call(() => {
        setCurrent((prev) => (prev + 1) % total);
      }, null, "+=4"); // change every 4s

    return () => autoplayRef.current.kill();
  }, [total]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
    resetAutoplay();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
    resetAutoplay();
  };

  // Restart autoplay after manual navigation
  const resetAutoplay = () => {
    if (autoplayRef.current) {
      autoplayRef.current.kill();
    }
    autoplayRef.current = gsap.timeline({ repeat: -1 })
      .call(() => {
        setCurrent((prev) => (prev + 1) % total);
      }, null, "+=4");
  };

  return (
    <div className="char-container">
      <div className="random-glow"></div>
      <div className="char-slider" ref={sliderRef}>
        {slideData.map((slide, i) => (
          <div
            key={i}
            className={`char-slide ${i === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h3 className="slide-title">{slide.title}</h3>
              <p className="slide-description">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className="char-arrow left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="char-arrow right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Char;
