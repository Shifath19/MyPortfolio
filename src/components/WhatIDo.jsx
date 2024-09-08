import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WhatIDoContainer = styled.section`
  padding: 60px 20px;
  background: #E0F7FA;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 40px;
  color: #3a3a3a;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  color: ${props => props.color || '#000'};
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: #3a3a3a;
`;

const Description = styled.p`
  font-size: 16px;
  color: #6c757d;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05 }
};

const WhatIDo = () => (
  <WhatIDoContainer id="work">
    <Title>What I Do</Title>
    <CardsContainer>
      <Card
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Icon color="#6f42c1"><i className="fas fa-code"></i></Icon>
        <CardTitle>Frontend Development</CardTitle>
        <Description>Crafting sleek, responsive, and modern web applications</Description>
      </Card>
      <Card
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Icon color="#28a745"><i className="fas fa-database"></i></Icon>
        <CardTitle>Backend Development</CardTitle>
        <Description>Building scalable and efficient backend systems for seamless integration</Description>
      </Card>
      <Card
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Icon color="#6f42c1"><i className="fas fa-cloud"></i></Icon>
        <CardTitle>API Integration</CardTitle>
        <Description>Implementing robust APIs to enhance dynamic functionalities</Description>
      </Card>
      <Card
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Icon color="#ffc107"><i className="fas fa-paint-brush"></i></Icon>
        <CardTitle>Design To Code</CardTitle>
        <Description>Transforming Figma designs into pixel-perfect React components</Description>
      </Card>
    </CardsContainer>
  </WhatIDoContainer>
);

export default WhatIDo;
