import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import VideoShowcase from './components/VideoShowcase.jsx';
import GSAP3DSlider from './components/GSAP3DSlider.jsx';
import MovieCredits from './components/MovieCredits.jsx';
import TrendingCharacters from './components/trending.jsx';
import Char from './components/char.jsx';
import Footer from './components/footer.jsx';
import VideoIntro from './components/VideoIntro.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showWebsite, setShowWebsite] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => {
      setShowWebsite(true);
    }, 100);
  };

  return (
    <div className="App">
      {showIntro ? (
        <VideoIntro onComplete={handleIntroComplete} />
      ) : (
        <div className={`website-container ${showWebsite ? 'animate-in' : ''}`}>
          <Navbar />
          <Hero />
          <div id="about">
            <ImageSlider />
          </div>
          <VideoShowcase />
          <GSAP3DSlider />
          <div id="video">
            <MovieCredits />
          </div>
          <div id="connect">
            <Char />
          </div>
          <div id="trending">
            <TrendingCharacters />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
