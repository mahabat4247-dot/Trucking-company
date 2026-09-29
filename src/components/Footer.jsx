import React from 'react';
import { Truck } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo" onClick={(e) => scrollToSection(e, 'home')}>
              <Truck className="logo-icon text-highlight" size={28} />
              <span className="logo-text text-white">RoadLine <span className="logo-highlight">Trucking</span></span>
            </a>
            <p className="footer-description">
              Professional trucking and logistics solutions across the United States. Delivering excellence and reliability on every route.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Us</a></li>
              <li><a href="#fleet" onClick={(e) => scrollToSection(e, 'fleet')}>Fleet</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Full Truckload (FTL)</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Less Than Truckload (LTL)</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Expedited Freight</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Dedicated Transportation</a></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-heading">Contact Info</h4>
            <address className="footer-address">
              <p>RoadLine Trucking</p>
              <p>Chicago, IL</p>
              <p>Phone: <a href="tel:7735550100">(773) 555-0100</a></p>
              <p>Email: <a href="mailto:dispatch@roadlinetrucking.com">dispatch@roadlinetrucking.com</a></p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {CURRENT_YEAR} RoadLine Trucking. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
