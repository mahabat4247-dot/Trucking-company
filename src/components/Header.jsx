import React, { useState } from 'react';
import { Truck, Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#home" className="logo" onClick={(e) => scrollToSection(e, 'home')}>
          <Truck className="logo-icon" size={32} />
          <span className="logo-text">RoadLine <span className="logo-highlight">Trucking</span></span>
        </a>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
          <a href="#services" className="nav-link" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
          <a href="#about" className="nav-link" onClick={(e) => scrollToSection(e, 'about')}>About</a>
          <a href="#fleet" className="nav-link" onClick={(e) => scrollToSection(e, 'fleet')}>Fleet</a>
          <a href="#contact" className="nav-link" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
          <div className="mobile-cta">
            <a href="#quote" className="btn btn-primary" onClick={(e) => scrollToSection(e, 'quote')}>Get a Quote</a>
          </div>
        </nav>

        <div className="header-actions">
          <a href="tel:7735550100" className="phone-link">
            <Phone size={18} />
            <span>(773) 555-0100</span>
          </a>
          <a href="#quote" className="btn btn-primary desktop-cta" onClick={(e) => scrollToSection(e, 'quote')}>
            Get a Quote
          </a>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
