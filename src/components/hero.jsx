import React, { useState, useEffect } from 'react';
import '../components/hero.css';
/*
const images = [
  '/images/img1.jpeg',
  '/images/img2.jpeg',
  '/images/BANNER.png',
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);
  console.log("Current image index:", currentImage, "Image:", images[currentImage]);

  return (
    <header
      className="dc-hero fade"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="overlay" />
      <div className="hero-content">
  <h1>Characters</h1>

  <div className="hero-search-container">
    <input
      type="text"
      placeholder="Search for your hero..."
      className="hero-search"
    />
    <span className="search-icon">🔍</span>
  </div>
</div>

    </header>
  );
}*/


const Hero = () => {
  return (
    <section className="hero-section">
      <img src="/images/bg4.jpg" alt="Hero" className="hero-image" />
      <div className="hero-content">
        <h1>DESTINY NOCTURNE</h1>
        <p>Unleash the darkness within</p>
        <button>Enter the Realm</button>
      </div>
    </section>
  );
};

export default Hero;

