import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background-color: #E0F7FA;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ContactForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  width: 100%;
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
background: rgb(32,28,108);
background: linear-gradient(207deg, rgba(32,28,108,0.8979924733565301) 0%, rgba(50,50,184,1) 0%, rgba(0,212,255,1) 100%); 
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.3rem;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const Message = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-weight: bold;
`;

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm('service_uuvvs26', 'template_sjcmnxo', form.current, 'CkH8Mv0LR6RcFILhd')
      .then((result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <ContactSection id="contact">
      <h2 style={{
        textAlign: "center",
        fontSize: "2.7rem",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "2rem",
        '@media (max-width: 768px)': {
          fontSize: "2rem",
          marginBottom: "1.5rem"
        }
      }}>
        Get In Touch
      </h2>
      <p style={{
        textAlign: "center",
        fontSize: "1.2rem",
        color: "#555",
        marginBottom: "2rem",
      }}>
        Please contact me directly at <a href="mailto:shifathali01@gmail.com" style={{ color: "#3366cc", textDecoration: "none" }}>shifathali01@gmail.com</a> or
      </p>
      <ContactForm ref={form} onSubmit={sendEmail}>
        <InputGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="user_name" placeholder='Enter your name' required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="user_email" placeholder='Enter your email' required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" name="message" placeholder='Enter your message' required />
        </InputGroup>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
      {status && <Message>{status}</Message>}
    </ContactSection>
  );
}

export default Contact;