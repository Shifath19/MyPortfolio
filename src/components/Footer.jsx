import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: #E0F7FA;
`;

const IconLink = styled.a`
  margin: 0 10px;
  color: #333;
  font-size: 24px;
`;

const Footer = () => (
  <FooterContainer>
    <IconLink href="https://github.com/Shifath19" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i>
    </IconLink>
    
  </FooterContainer>
);

export default Footer;
