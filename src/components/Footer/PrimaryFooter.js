import React from 'react';
import './PrimaryFooter.css';
import logo from '../../assets/logo.svg'; // ou '../../assets/logo.png'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PrimaryFooter = () => {
  return (
    <footer className="primary-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section logo-section">
            <img src={logo} alt="GuardTech Logo" className="footer-logo" />
          </div>
          <div className="footer-section contact-follow">
            <h4>Contact Us & Follow Us</h4>
            <p><EmailIcon /> contact@guardtech.com</p>
            <p><PhoneIcon /> +1 234 567 890</p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="footer-section site-map">
            <h4>Site Map</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/trainings">Trainings</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section newsletter">
            <h4>Newsletter</h4>
            <form className="newsletter-form">
              <div className="newsletter-input-container">
                <input 
                  type="email" 
                  placeholder="Sign up for our newsletter" 
                  className="newsletter-input" 
                />
                <button type="submit" className="newsletter-button">
                  <ArrowForwardIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PrimaryFooter;
