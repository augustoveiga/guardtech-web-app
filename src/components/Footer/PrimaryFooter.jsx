import React from 'react';
import './PrimaryFooter.css';
import { Email, Phone, ArrowForward } from '@mui/icons-material';

const PrimaryFooter = () => {
  return (
    <footer className="primary-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section contact-follow">
            <h4>Contact Us & Follow Us</h4>
            <p><Email /> guardtech.cyber@gmail.com</p>
            <p><Phone /> +49 160 8429777</p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" aria-label="Instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" aria-label="LinkedIn"></i>
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
              <li><a href="/blog">Blog</a></li>
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
                  aria-label="Newsletter Signup"
                />
                <button type="submit" className="newsletter-button" aria-label="Submit Newsletter Signup">
                  <ArrowForward />
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
