import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Learn more about our mission, vision, and the team behind GuardTech.</p>
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>Our mission is to provide top-notch cybersecurity solutions to protect your business.</p>
      </div>
      <div className="vision-section">
        <h2>Our Vision</h2>
        <p>We envision a world where businesses can operate securely without fear of cyber threats.</p>
      </div>
      <div className="team-section">
        <h2>Our Team</h2>
        <p>Meet the experts behind GuardTech.</p>
        <div className="team-cards">
          <div className="team-card">
            <img src="/path/to/team-member.jpg" alt="Team Member" />
            <h3>Team Member Name</h3>
            <p>Role</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
