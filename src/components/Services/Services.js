import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <div className="container">
        <h1>Our Services</h1>
        <p>We offer a wide range of security services to meet your needs:</p>
        <ul className="services-list">
          <li className="service-item">
            <h2>Service 1</h2>
            <p>Description of Service 1...</p>
          </li>
          <li className="service-item">
            <h2>Service 2</h2>
            <p>Description of Service 2...</p>
          </li>
          <li className="service-item">
            <h2>Service 3</h2>
            <p>Description of Service 3...</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
