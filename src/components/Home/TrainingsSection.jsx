import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';

const swing = keyframes`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }
  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }
  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }
  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }
  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;

const Section = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #fff;
  width: 100%;
`;

const SectionTitle = styled(Typography)`
  font-size: var(--font-size-h2);
  margin-bottom: 1rem;
  text-align: left;
`;

const SectionSubtitle = styled(Typography)`
  font-size: 1.25rem;
  margin-bottom: 3rem !important;
  text-align: left;
  color: var(--text-secondary);
`;

const AccordionContainer = styled.div`
  width: 100%;
`;

const CustomAccordion = styled(Accordion)`
  background-color: #fff !important;
  border-radius: 8px !important;
  margin-bottom: 1rem !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
  &:before {
    display: none;
  }
`;

const CustomAccordionSummary = styled(AccordionSummary)`
  background-color: #f7f7f7 !important;
  border-radius: 8px !important;
  padding: 0 1rem !important;
  display: flex;
  align-items: center;
  &.Mui-expanded {
    background-color: #f7f7f7 !important;
  }
  &:hover {
    background-color: #e0e0e0 !important;
  }
`;

const CustomExpandMoreIcon = styled(ExpandMoreIcon)`
  color: var(--accent-color) !important;
`;

const CustomAccordionDetails = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem !important;
  border-top: 1px solid #e0e0e0 !important;
`;

const SectionCtaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--link-main) !important;
  padding: 0.5rem 0 !important;
  text-decoration: none !important;
  transition: color 0.3s ease !important;
  font-size: 1rem;
  margin-top: 1rem !important;
  &:hover {
    color: var(--link-hover) !important;
    svg {
      color: var(--link-hover) !important;
      animation: ${swing} 1s ease forwards;
    }
  }
`;

const BookIcon = styled(SchoolIcon)`
  color: var(--link-main) !important;
  transition: color 0.3s ease-in-out;
  margin-left: 0.5rem;
`;

const TrainingsSection = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const trainings = [
        {
            title: "Secure Coding Training Platform",
            description: "GuardTech's Security Gym Platform is designed for developers to train and learn security issues in various programming languages, providing hands-on experience with real-world vulnerabilities. Focus on secure coding concepts at your own speed, edit code in real-time in an IDE-like environment, and execute on the fly to see if your fix solves the vulnerability!"
        },
        {
            title: "Employee Security Training Program",
            description: "Comprehensive enterprise security training designed for new hires and annual refreshers for all employees. This program ensures up-to-date knowledge of best practices and industry standards, fostering a security-aware culture across the organization."
        },
        {
            title: "Capture the Flag: Hacking Challenges Platform",
            description: "Engage in a diverse range of hacking challenges designed to exploit various vulnerabilities. Track your progress on a dynamic scoreboard—finding it is just one of the many exciting challenges! Ideal for engineers to raise security awareness and train offensive security skills."
        },
        {
            title: "Security Champion Program",
            description: "A training program for developers to adopt secure coding practices and integrate security into every stage of the development lifecycle. Enhances security awareness and skills, bridging the gap between development and security teams."
        }
    ];

    return (
        <Section>
            <Container>
                <SectionTitle variant="h2" component="h2">
                    Our Security Training Program
                </SectionTitle>
                <SectionSubtitle>
                    Bespoke training programs, uniquely adapted for each client.
                </SectionSubtitle>
                <AccordionContainer>
                    {trainings.map((training, index) => (
                        <CustomAccordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                            <CustomAccordionSummary expandIcon={<CustomExpandMoreIcon />} aria-controls={`panel${index}bh-content`} id={`panel${index}bh-header`}>
                                <Typography variant="h5">{training.title}</Typography>
                            </CustomAccordionSummary>
                            <CustomAccordionDetails>
                                <Typography variant="body1">
                                    {training.description}
                                </Typography>
                                <SectionCtaButton to="/contact" style={{ alignSelf: 'center' }}>
                                    <span>Learn More</span>
                                    <BookIcon />
                                </SectionCtaButton>
                            </CustomAccordionDetails>
                        </CustomAccordion>
                    ))}
                </AccordionContainer>
            </Container>
        </Section>
    );
};

export default TrainingsSection;
