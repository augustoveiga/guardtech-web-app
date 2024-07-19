import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        <div className="service-item">
          <h2>Service 1</h2>
          <p>Description of Service 1</p>
        </div>
        <div className="service-item">
          <h2>Service 2</h2>
          <p>Description of Service 2</p>
        </div>
        <div className="service-item">
          <h2>Service 3</h2>
          <p>Description of Service 3</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
