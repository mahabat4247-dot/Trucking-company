import React from 'react';
import { ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <ShieldCheck size={16} />
            <span>Trusted Coast-to-Coast Freight Partner</span>
          </div>
          <h1 className="hero-title">
            Reliable Freight. <br />
            <span className="text-highlight">Delivered On Time.</span>
          </h1>
          <p className="hero-subtitle">
            Professional trucking and logistics solutions across the United States.
            We keep supply chains moving with safety, precision, and efficiency.
          </p>
          <div className="hero-buttons">
            <a href="#quote" className="btn btn-primary btn-lg" onClick={(e) => scrollToSection(e, 'quote')}>
              Get a Quote <ArrowRight size={20} />
            </a>
            <a href="#services" className="btn btn-secondary btn-lg" onClick={(e) => scrollToSection(e, 'services')}>
              Our Services
            </a>
          </div>

          <div className="hero-features">
            <div className="hero-feature-item">
              <Clock className="feature-icon" size={20} />
              <span>24/7 Dispatch Support</span>
            </div>
            <div className="hero-feature-item">
              <MapPin className="feature-icon" size={20} />
              <span>48 States Coverage</span>
            </div>
            <div className="hero-feature-item">
              <ShieldCheck className="feature-icon" size={20} />
              <span>Fully Insured & Bonded</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
