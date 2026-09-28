import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    deliveryLocation: '',
    freightType: 'FTL',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.pickupLocation.trim()) newErrors.pickupLocation = 'Pickup location is required';
    if (!formData.deliveryLocation.trim()) newErrors.deliveryLocation = 'Delivery location is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      pickupLocation: '',
      deliveryLocation: '',
      freightType: 'FTL',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="quote" className="section quote-section bg-light">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Get Started</span>
          <h2 className="section-title">Request a Freight Quote</h2>
          <p className="section-description">
            Fill out the form below and our 24/7 dispatch team will get back to you with a competitive rate.
          </p>
        </div>

        <div className="quote-form-container">
          {isSubmitted ? (
            <div className="quote-success-message">
              <CheckCircle size={60} className="success-icon" />
              <h3>Quote Request Received!</h3>
              <p>
                Thank you, <strong>{formData.name}</strong>. Our team is calculating your route details and will contact you shortly at <strong>{formData.email}</strong>.
              </p>
              <button className="btn btn-primary" onClick={handleReset}>
                Request Another Quote
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="quote-form" noValidate>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={errors.name ? 'input-error' : ''}
                  />
                  {errors.name && <span className="error-text"><AlertCircle size={14} /> {errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && <span className="error-text"><AlertCircle size={14} /> {errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    className={errors.phone ? 'input-error' : ''}
                  />
                  {errors.phone && <span className="error-text"><AlertCircle size={14} /> {errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="freightType">Freight Type</label>
                  <select
                    id="freightType"
                    name="freightType"
                    value={formData.freightType}
                    onChange={handleChange}
                  >
                    <option value="FTL">Full Truckload (FTL)</option>
                    <option value="LTL">Less Than Truckload (LTL)</option>
                    <option value="Expedited">Expedited Freight</option>
                    <option value="Dedicated">Dedicated Transportation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="pickupLocation">Pickup Location (City, State / ZIP) *</label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="Chicago, IL 60601"
                    className={errors.pickupLocation ? 'input-error' : ''}
                  />
                  {errors.pickupLocation && <span className="error-text"><AlertCircle size={14} /> {errors.pickupLocation}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="deliveryLocation">Delivery Location (City, State / ZIP) *</label>
                  <input
                    type="text"
                    id="deliveryLocation"
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleChange}
                    placeholder="Dallas, TX 75201"
                    className={errors.deliveryLocation ? 'input-error' : ''}
                  />
                  {errors.deliveryLocation && <span className="error-text"><AlertCircle size={14} /> {errors.deliveryLocation}</span>}
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Freight Details & Additional Notes</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Weight, dimensions, special handling instructions..."
                ></textarea>
              </div>

              <div className="form-actions text-center">
                <button type="submit" className="btn btn-primary btn-lg">
                  Request Quote <Send size={18} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
