import React from 'react';
import { Headset, Compass, Shield, Award, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: '24/7 Dispatch',
      description: 'Round-the-clock support ensuring continuous communication and immediate response to urgent needs.',
      icon: Headset
    },
    {
      title: 'Real-Time Tracking',
      description: 'Live status updates and exact location tracking for transparency and complete peace of mind.',
      icon: Compass
    },
    {
      title: 'Experienced Drivers',
      description: 'Vetted logistics professionals with clean driving records and extensive interstate experience.',
      icon: Award
    },
    {
      title: 'Safety First',
      description: 'Industry-leading safety protocols, strict DOT compliance, and continuous driver safety training.',
      icon: Shield
    },
    {
      title: 'Reliable Delivery',
      description: 'Consistent 99% on-time performance rate trusted by top manufacturers and distributors nationwide.',
      icon: Clock
    }
  ];

  return (
    <section className="section why-choose-us bg-dark text-white">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle text-highlight">The RoadLine Advantage</span>
          <h2 className="section-title text-white">Why Choose Us</h2>
          <p className="section-description text-gray">
            Delivering excellence in every mile. Here is why top companies choose RoadLine Trucking for their supply chain.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon;
            return (
              <div className="why-card" key={idx}>
                <div className="why-icon-box">
                  <IconComponent size={28} />
                </div>
                <h3 className="why-title">{reason.title}</h3>
                <p className="why-description">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
