import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import videoSrc from '../../assets/hero-banner-video.mp4';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideInUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const scrollBounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const HeroSectionContainer = styled.div`
  height: calc(100vh - var(--header-height));
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 0; /* Ajustado para tocar o fim da seção */
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  animation: ${scrollBounce} 2s infinite;
`;

const ScrollText = styled.p`
  color: #fff;
  margin-bottom: 10px;
  font-size: var(--font-size-p);
`;

const ScrollArrow = styled.span`
  display: block;
  font-size: 16px;
  color: #fff;
  animation: ${scrollBounce} 2s infinite;
`;

const HeroTitle = styled(Typography)`
  font-size: 2.5rem !important;
  margin-bottom: 0.5rem !important;
  animation: ${slideInDown} 1s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const HeroSubtitle = styled.p`
  font-size: 1rem !important;
  max-width: 80%;
  margin: 0 auto 1.5rem auto;
  animation: ${slideInUp} 1s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const HeroCtaButton = styled(Button)`
  background-color: transparent !important;
  color: #fff !important;
  padding: 0.75rem 1.5rem !important;
  text-decoration: none !important;
  border: 2px solid var(--accent-color) !important;
  border-radius: 50px !important;
  transition: background-color 0.3s ease, transform 0.3s ease !important;
  font-size: var(--font-size-p) !important;
  margin-top: 0.25rem !important;
  &:hover {
    background-color: var(--accent-color) !important;
    transform: scale(1.05) !important;
  }
`;

const HeroSection = () => (
  <HeroSectionContainer>
    <VideoBackground autoPlay loop muted>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </VideoBackground>
    <VideoOverlay />
    <Container className="full-width">
      <HeroTitle variant="h1" component="h1">
        GuardTech: Your Digital Security Firm
      </HeroTitle>
      <HeroSubtitle>
        We partner with your company to enhance security capabilities and propel organizations forward. Delivering excellence in boardroom strategy through to execution.
      </HeroSubtitle>
      <HeroCtaButton component={Link} to="/services" variant="contained">
        Discover Our Services
      </HeroCtaButton>
    </Container>
    <ScrollIndicator>
      <ScrollText>SCROLL</ScrollText>
      <ScrollArrow>&#x25BC;</ScrollArrow>
    </ScrollIndicator>
  </HeroSectionContainer>
);

export default HeroSection;
