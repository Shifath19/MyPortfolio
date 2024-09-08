import React from 'react';
import styled from 'styled-components';
import { ReactTyped } from "react-typed";

const MainContainer = styled.main`
  text-align: center;
  padding: 70px 20px;
  background: #E0F7FA;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const Title = styled.h1`
  font-size: 6rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #36C7CC;
  margin-bottom: 40px;
  height: 30px; // Add fixed height to prevent layout shift

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 12px 24px;
  margin: 10px;
  font-size: 1.4rem;
  border-radius: 5px;
  text-decoration: none;
  color: #0284C7;
  border-radius: ${props => props.circular ? '50%' : '20px'};
  background: ${props => props.primary ? '#0284C7' : 'transparent'};
  border: ${props => props.primary ? 'none' : '2px solid #0284C7'};
  width: ${props => props.circular ? '60px' : 'auto'};
  height: ${props => props.circular ? '60px' : 'auto'};
  line-height: ${props => props.circular ? '60px' : 'normal'};
  padding: ${props => props.circular ? '0' : '12px 24px'};

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: ${props => props.circular ? '0' : '10px 20px'};
    width: ${props => props.circular ? '50px' : 'auto'};
    height: ${props => props.circular ? '50px' : 'auto'};
    line-height: ${props => props.circular ? '50px' : 'normal'};
  }
`;

const MainSection = () => {
  return (
    <MainContainer>
      <Title>Shifath Ali</Title>
      <Subtitle>
        <ReactTyped
          strings={[
            "Frontend Dev",
            "Backend Dev",
            "UI/UX Design",
            "Full Stack Dev"
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
          backDelay={1000}
          cursorChar="|"
        />
      </Subtitle>
      <Description>Implementing AI Automation with Full Stack Stuff</Description>
      <Button primary href="#work" style={{color:"white", background: "linear-gradient(106.5deg, rgba(255, 215, 185, 0.91) 23%, rgba(223, 159, 247, 0.8) 93%)"}}>View My Work</Button>
      <Button href="#contact">Get in Touch</Button>
      <Button 
        href="https://drive.google.com/drive/folders/1JoeH9KmaVksn0t8AeF-zctPCdutnN3JV?usp=sharing" 
        circular 
        target="_blank" 
        rel="noopener noreferrer"
      >
        CV
      </Button>
    </MainContainer>
  );
};

export default MainSection;
