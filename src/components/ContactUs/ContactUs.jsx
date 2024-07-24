import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-main); /* Ensure global font is used */
`;

const Header = styled.div`
  margin-bottom: 3rem;
  text-align: left;
  width: 100%;
  max-width: 800px;
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-main); /* Ensure global font is used */
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #666;
  font-family: var(--font-main); /* Ensure global font is used */
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 800px;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: var(--font-main); /* Ensure global font is used */
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    border-color: var(--accent-color);
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  &:focus {
    border-color: var(--accent-color);
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    border-color: var(--accent-color);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: var(--accent-color);
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  &:hover {
    background-color: var(--link-hover);
  }
`;

const ContactUs = () => {
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Form submitted successfully!");
    // Add form submission logic here
  };

  return (
    <ContactContainer>
      <Header>
        <SectionTitle>Contact Us</SectionTitle>
        <Description>
          We'd love to hear from you! Fill out the form below to inquire about our services and we'll get back to you promptly.
        </Description>
      </Header>
      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" placeholder="Your Name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" placeholder="your.email@example.com" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Phone</Label>
          <Input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="service">Service</Label>
          <Select id="service" name="service" required>
            <option value="">Choose one...</option>
            <option value="web_design">Web Design</option>
            <option value="seo">SEO</option>
            <option value="digital_marketing">Digital Marketing</option>
            <option value="content_creation">Content Creation</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            required
            defaultValue="I am interested in learning more about your services and how they can benefit my business. Please contact me at your earliest convenience."
          ></TextArea>
        </FormGroup>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactUs;
