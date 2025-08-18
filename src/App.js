import React from 'react';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import VideoShowcase from './components/VideoShowcase.jsx';
import GSAP3DSlider from './components/GSAP3DSlider.jsx';
import TrendingCharacters from './components/trending.jsx';
import CharacterUniverse from './components/char.jsx';
import Footer from './components/footer.jsx'; //
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ImageSlider />
      <VideoShowcase />
      <GSAP3DSlider />
      <TrendingCharacters />
      <CharacterUniverse />
      <Footer />
      {/* Rest of your page */}
    </div>
  );
}

export default App;
