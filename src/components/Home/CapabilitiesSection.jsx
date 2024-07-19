import React from "react";
import styled, { keyframes } from "styled-components";
import { Typography, Container, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const arrowMove = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(5px);
  }
`;

const Section = styled.div`
  padding: 4rem 0;
  text-align: center;
  background-color: ${({ bg }) => bg || "white"};
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

const CapabilityContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.1rem;
  flex-wrap: nowrap;
`;

const Card = styled.div`
  background: #fff;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 350px;
  height: 350px;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 0;
`;

const CapabilityTitle = styled(Typography)`
  font-size: 1.25rem;
  font-weight: bold;
  min-height: 2.5rem;
  margin-bottom: 1rem !important;
`;

const CapabilityDescription = styled(Typography)`
  font-size: 1rem;
  line-height: 1.5;
  min-height: 4rem;
  margin-bottom: 1.5rem;
`;

const SectionCtaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #000 !important;
  padding: 0.5rem 0 !important;
  text-decoration: none !important;
  transition: color 0.3s ease, transform 0.3s ease !important;
  font-size: 1rem;
  margin-top: auto;
  margin-bottom: 0.2rem;
  &:hover {
    color: #000 !important;
  }
`;

const ArrowIcon = styled(ArrowForwardIcon)`
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
  color: #000 !important;
  ${SectionCtaButton}:hover & {
    animation: ${arrowMove} 0.3s forwards;
    color: var(--accent-color) !important;
  }
`;

const CapabilitiesSection = () => (
  <Section bg="var(--background-main)">
    <Container>
      <SectionTitle variant="h2" component="h2">
        Our Core Capabilities
      </SectionTitle>
      <SectionSubtitle>
        Our unique service offering is underpinned by innovation.
      </SectionSubtitle>
      <CapabilityContainer>
        <Card>
          <CardContent>
            <div>
              <CapabilityTitle variant="h5" component="h3">
                Offensive Security OIII
              </CapabilityTitle>
              <CapabilityDescription variant="body1">
                Identify and fix vulnerabilities through advanced penetration
                testing and red teaming. Protect your infrastructure by
                discovering weaknesses before attackers do.
              </CapabilityDescription>
            </div>
            <div style={{ flexGrow: 1 }}></div>
            <Divider style={{ margin: "1rem 0" }} />
            <SectionCtaButton to="/contact">
              <span>Find out more</span>
              <ArrowIcon />
            </SectionCtaButton>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div>
              <CapabilityTitle variant="h5" component="h3">
                App Security Testing
              </CapabilityTitle>
              <CapabilityDescription variant="body1">
                Assess and enhance the security of your applications. Implement
                advanced techniques to ensure your applications are resilient
                against cyber threats.
              </CapabilityDescription>
            </div>
            <div style={{ flexGrow: 1 }}></div>
            <Divider style={{ margin: "1rem 0" }} />
            <SectionCtaButton to="/contact">
              <span>Find out more</span>
              <ArrowIcon />
            </SectionCtaButton>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div>
              <CapabilityTitle variant="h5" component="h3">
                Security Education
              </CapabilityTitle>
              <CapabilityDescription variant="body1">
                Educate your team on the latest security best practices. We
                offer up-to-date training to enhance awareness and skills in
                cybersecurity.
              </CapabilityDescription>
            </div>
            <div style={{ flexGrow: 1 }}></div>
            <Divider style={{ margin: "1rem 0" }} />
            <SectionCtaButton to="/contact">
              <span>Find out more</span>
              <ArrowIcon />
            </SectionCtaButton>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div>
              <CapabilityTitle variant="h5" component="h3">
                Risk Management
              </CapabilityTitle>
              <CapabilityDescription variant="body1">
                Proactively identify, assess, and mitigate risks to safeguard
                your business. Our experts help create effective risk management
                strategies.
              </CapabilityDescription>
            </div>
            <div style={{ flexGrow: 1 }}></div>
            <Divider style={{ margin: "1rem 0" }} />
            <SectionCtaButton to="/contact">
              <span>Find out more</span>
              <ArrowIcon />
            </SectionCtaButton>
          </CardContent>
        </Card>
      </CapabilityContainer>
    </Container>
  </Section>
);

export default CapabilitiesSection;
