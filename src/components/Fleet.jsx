import React from 'react';
import { Truck, Navigation, Wrench, UserCheck } from 'lucide-react';

export default function Fleet() {
  const fleetItems = [
    {
      title: 'Modern Trucks',
      description: 'Our modern tractor units are equipped with fuel-efficient engines, aerodynamic designs, and advanced safety features.',
      icon: Truck
    },
    {
      title: 'GPS Tracking',
      description: 'Real-time satellite tracking and digital logging allow complete visibility into freight location and estimated time of arrival.',
      icon: Navigation
    },
    {
      title: 'Regular Maintenance',
      description: 'Rigorous preventive maintenance programs and daily safety inspections ensure maximum uptime and highway reliability.',
      icon: Wrench
    },
    {
      title: 'Professional Drivers',
      description: 'Fully licensed CDL holders with extensive safety records, continuous compliance training, and commitment to service.',
      icon: UserCheck
    }
  ];

  return (
    <section id="fleet" className="section fleet-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Our Fleet & Infrastructure</span>
          <h2 className="section-title">Built For Dependability</h2>
          <p className="section-description">
            We invest in premium equipment and advanced technologies to keep your supply chain dependable and stress-free.
          </p>
        </div>

        <div className="fleet-grid">
          {fleetItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div className="fleet-card" key={idx}>
                <div className="fleet-icon-wrapper">
                  <IconComponent size={28} className="fleet-icon" />
                </div>
                <h3 className="fleet-title">{item.title}</h3>
                <p className="fleet-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
