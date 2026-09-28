import React from 'react';
import { Truck, Package, Zap, ShieldAlert } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'ftl',
      title: 'Full Truckload (FTL)',
      description: 'Dedicated capacity for full loads across the continental US with direct door-to-door delivery.',
      icon: Truck,
      features: ['Dedicated trailer space', 'Direct non-stop transit', 'Customized handling']
    },
    {
      id: 'ltl',
      title: 'Less Than Truckload (LTL)',
      description: 'Cost-effective freight solutions for smaller shipments that don’t require a full trailer.',
      icon: Package,
      features: ['Shared freight savings', 'Flexible scheduling', 'Consolidated shipping']
    },
    {
      id: 'expedited',
      title: 'Expedited Freight',
      description: 'Time-critical shipment solutions with priority handling and team drivers for ultra-fast delivery.',
      icon: Zap,
      features: ['24/7 priority routing', 'Dual team drivers', 'Guaranteed delivery windows']
    },
    {
      id: 'dedicated',
      title: 'Dedicated Transportation',
      description: 'Customized fleet solutions tailored to your ongoing supply chain requirements and operational schedule.',
      icon: ShieldAlert,
      features: ['Exclusive fleet access', 'Contracted reliable routes', 'Brand customized equipment']
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Our Capabilities</span>
          <h2 className="section-title">Comprehensive Freight Services</h2>
          <p className="section-description">
            Whether you need a single load moved or a dedicated transportation strategy, RoadLine Trucking provides seamless logistics solutions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div className="service-card" key={service.id}>
                <div className="service-icon-wrapper">
                  <IconComponent size={32} className="service-icon" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
