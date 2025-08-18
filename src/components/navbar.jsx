import React from 'react';
import '../components/navbar.css';

export default function Navbar() {
  return (
    <nav className="dc-navbar">
      <div className="logo">DESTINY</div>
      <ul className="nav-links">
        <li>Comics</li>
        <li>Movies</li>
        <li>TV</li>
        <li>Games</li>
        <li>Shop</li>
      </ul>
      <div className="nav-icons">
        <i className="search-icon">🔍</i>
        <i className="user-icon">👤</i>
      </div>
    </nav>
  );
}
