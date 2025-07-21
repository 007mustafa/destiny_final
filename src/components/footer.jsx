import React from 'react';
import './footer.css'; // Make sure this CSS file exists

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <h2 className="footer-logo">ComicVerse</h2>
        <p className="footer-text">Explore the multiverse of heroes & villains.</p>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Trending</a>
          <a href="#">Universe</a>
          <a href="#">Contact</a>
        </div>
        <p className="footer-bottom">© {new Date().getFullYear()} ComicVerse. All rights reserved.</p>
      </div>
    </footer>
  );
}
