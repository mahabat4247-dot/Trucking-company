import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact RoadLine Trucking</h2>
          <p className="section-description">
            Our dispatch and customer support team is available around the clock to support your transportation needs.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <MapPin size={28} />
            </div>
            <h3>Headquarters</h3>
            <p>RoadLine Trucking</p>
            <p>Chicago, IL</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <Phone size={28} />
            </div>
            <h3>Phone</h3>
            <p><a href="tel:7735550100">(773) 555-0100</a></p>
            <p className="text-muted">Direct Line</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <Mail size={28} />
            </div>
            <h3>Email</h3>
            <p><a href="mailto:dispatch@roadlinetrucking.com">dispatch@roadlinetrucking.com</a></p>
            <p className="text-muted">Inquiries & Quotes</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <Clock size={28} />
            </div>
            <h3>Hours</h3>
            <p><strong>24/7 Dispatch</strong></p>
            <p className="text-muted">Always active</p>
          </div>
        </div>
      </div>
    </section>
  );
}
