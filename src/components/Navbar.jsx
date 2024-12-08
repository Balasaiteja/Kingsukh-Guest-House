import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className="nav">
        <div className="nav-items">
          <a href="#" style={{ textDecoration: "none" }}>
            <h1 style={{ color: "white", fontWeight: "400", fontSize: "20px" }}>
              Kingsukh Guest House
            </h1>
          </a>

          {/* Hamburger Button */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          </div>

          {/* Navigation Menu */}
          <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#rooms" onClick={closeMenu}>Rooms</a>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
          <a href="https://www.whatsapp.com" className="button">Book Now</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
