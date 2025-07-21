import React, { useState, useEffect } from 'react';
import '../components/hero.css';

const images = [
  '/images/superma.jpg',
  '/images/superman2.jpg',
  '/images/Superman.jpg',
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
        <input type="text" placeholder="Search Characters" className="hero-search" />
      </div>
    </header>
  );
}
