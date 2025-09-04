import React from 'react';
import '../components/navbar.css';

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="dc-navbar">
      <div className="logo">DESTINY</div>
      <ul className="nav-links">
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('trending')}>Trending</li>
        <li onClick={() => scrollToSection('connect')}>Connect</li>
        <li onClick={() => scrollToSection('video')}>Video</li>
      </ul>
      <div className="nav-icons">
        <i className="search-icon">🔍</i>
        <i className="user-icon">👤</i>
      </div>
    </nav>
  );
}
