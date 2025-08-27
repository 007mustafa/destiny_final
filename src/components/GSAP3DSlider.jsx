import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import './GSAP3DSlider.css';

const images = [
  "/images/bg1.jpg",  
  "/images/bg2.jpg",
  "/images/bg3.jpg",
  "/images/bg4.jpg",
  "/images/dc.jpg",
];

const Char = () => {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const total = images.length;
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
        {images.map((img, i) => (
          <div
            key={i}
            className={`char-slide ${i === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
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
