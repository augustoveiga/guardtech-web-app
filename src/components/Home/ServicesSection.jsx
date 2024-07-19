import React from 'react';
import styled from 'styled-components';
import { Typography, Container, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import serviceImage from '../../assets/home-our-services.png';

const Section = styled.div`
  padding: 4rem 0;
  text-align: center;
  background-color: ${({ bg }) => bg || 'white'};
  width: 100%;
`;

const SectionTitle = styled(Typography)`
  font-size: var(--font-size-h2);
  margin-bottom: 1rem;
  text-align: left;
`;

const ServiceText = styled.div`
  text-align: left;
  margin-bottom: 2rem;
  font-size: var(--font-size-h3);
`;

const ServiceImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServiceImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const SectionCtaButton = styled(Button)`
  background-color: transparent !important;
  color: #000 !important;
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

const ServicesSection = () => (
  <Section bg="white">
    <Container>
      <SectionTitle variant="h2" component="h2">
        Our Services
      </SectionTitle>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <ServiceText>
            <Typography variant="h4" component="h4" gutterBottom>
              WE PROTECT YOU AND YOUR BUSINESS
            </Typography>
            <Typography variant="body1" component="p" paragraph>
              We understand that personal or organizational data must be adequately protected to avoid inconveniences such as unwanted contacts ou purchases, image damage, lawsuits for misuse of information, and financial losses for the institution.
            </Typography>
            <Typography variant="body1" component="p" paragraph>
              In the market, there is a significant number of companies still vulnerable to data capture ou movement by malicious individuals ou organizations. Through our portfolio, we have a team capable of identifying and proposing agile solutions through technological and management interventions to eliminate ou minimizar potential inconveniences caused by the lack of data protection.
            </Typography>
            <SectionCtaButton component={Link} to="/contact">Contact Us</SectionCtaButton>
          </ServiceText>
        </Grid>
        <Grid item xs={12} md={6}>
          <ServiceImageContainer>
            <ServiceImage src={serviceImage} alt="Our Services" />
          </ServiceImageContainer>
        </Grid>
      </Grid>
    </Container>
  </Section>
);

export default ServicesSection;
