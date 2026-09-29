import React from 'react';
import { Award, Truck, Map, CheckCircle2 } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '10+', icon: Award },
    { label: 'Trucks', value: '50+', icon: Truck },
    { label: 'States Covered', value: '48', icon: Map },
    { label: 'On-Time Delivery', value: '99%', icon: CheckCircle2 }
  ];

  return (
    <section id="about" className="section about-section bg-light">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-subtitle">About RoadLine Trucking</span>
            <h2 className="section-title">Moving America Forward</h2>
            <p className="about-text">
              RoadLine Trucking provides safe, reliable, and efficient transportation services throughout the United States.
              Headquartered in Chicago, IL, our strategic central position enables us to manage logistical operations seamlessly from coast to coast.
            </p>
            <p className="about-text">
              Founded on core values of integrity, safety, and operational excellence, our modern fleet and experienced logistics personnel ensure your freight arrives safely, securely, and on time every single run.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-bullet">✓</span>
                <span>Advanced fleet telemetry & real-time route optimization</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-bullet">✓</span>
                <span>Highly trained, certified professional drivers</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-bullet">✓</span>
                <span>Proactive maintenance program for maximum reliability</span>
              </div>
            </div>
          </div>

          <div className="stats-container">
            <div className="stats-grid">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div key={idx} className="stat-card">
                    <IconComponent className="stat-icon" size={36} />
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
