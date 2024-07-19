import React from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import CapabilitiesSection from './CapabilitiesSection';
import TrainingsSection from './TrainingsSection';
import BlogSection from './BlogSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <CapabilitiesSection />
      <TrainingsSection />
      <BlogSection />
    </div>
  );
};

export default Home;
