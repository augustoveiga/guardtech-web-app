import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

jest.setTimeout(20000); // Aumentar o timeout para 20 segundos

// Testes básicos de renderização e navegação
test('renders header link', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});

test('renders services link', () => {
  render(<App />);
  const servicesLinkElements = screen.getAllByText(/services/i);
  expect(servicesLinkElements.length).toBeGreaterThan(0);
});

test('renders about us link in the header', () => {
  render(<App />);
  const aboutUsLinkElements = screen.getAllByText(/about us/i);
  expect(aboutUsLinkElements.length).toBeGreaterThan(0);
});

test('renders contact us link', () => {
  render(<App />);
  const contactUsLinkElements = screen.getAllByText(/contact us/i);
  expect(contactUsLinkElements.length).toBeGreaterThan(0);
});

test('renders blog link', () => {
  render(<App />);
  const blogLinkElements = screen.getAllByText(/blog/i);
  expect(blogLinkElements.length).toBeGreaterThan(0);
});

test('navigates to home page', () => {
  render(<App />);
  const homeHeading = screen.getByRole('heading', { name: /guardtech: your digital security firm/i });
  expect(homeHeading).toBeInTheDocument();
});

test('navigates to about us page', () => {
  render(<App />);
  fireEvent.click(screen.getAllByText(/about us/i)[0]);
  const aboutUsHeading = screen.getByRole('heading', { name: /about us/i });
  expect(aboutUsHeading).toBeInTheDocument();
});

test('navigates to contact us page', () => {
  render(<App />);
  fireEvent.click(screen.getAllByText(/contact us/i)[0]);
  const contactUsHeading = screen.getAllByRole('heading', { name: /contact us/i }).find(heading => heading.tagName === 'H1');
  expect(contactUsHeading).toBeInTheDocument();
});


test('renders contact us form', () => {
  render(<App />);
  fireEvent.click(screen.getAllByText(/contact us/i)[0]); // Clicar no link Contact Us para garantir que estamos na página certa
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageTextarea = screen.getByLabelText(/message/i);
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageTextarea).toBeInTheDocument();
});

// Testes de eventos e interações do usuário
test('can submit contact us form', () => {
  render(<App />);
  fireEvent.click(screen.getAllByText(/contact us/i)[0]); // Clicar no link Contact Us para garantir que estamos na página certa
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageTextarea = screen.getByLabelText(/message/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
  fireEvent.change(messageTextarea, { target: { value: 'This is a test message.' } });
  fireEvent.click(submitButton);

  expect(nameInput.value).toBe('John Doe');
  expect(emailInput.value).toBe('john.doe@example.com');
  expect(messageTextarea.value).toBe('This is a test message.');
});
