import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #E0F7FA;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0.5rem;
  }
`;

const Logo = styled.div`
  position: absolute;
  left: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #0066cc;

  @media (max-width: 768px) {
    position: static;
    margin-bottom: 1rem;
  }
`;

const NavItems = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 0.5rem;
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const NavItem = styled(motion.a)`
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 102, 204, 0.1);
  }

  &.active {
    background-color: #38BFEF;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`;

// Add this new style to enable smooth scrolling
const GlobalStyle = styled.div`
  scroll-behavior: smooth;
`;

const navItems = ['About', 'Work', 'Projects', 'Contact'];

export default function Header() {
  const [active, setActive] = React.useState('About');

  const handleNavClick = (item) => {
    setActive(item);
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <GlobalStyle>
      <NavContainer>
        <Logo>SA</Logo>
        <NavItems>
          {navItems.map((item) => (
            <NavItem
              key={item}
              className={active === item ? 'active' : ''}
              onClick={() => handleNavClick(item)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item}
            </NavItem>
          ))}
        </NavItems>
      </NavContainer>
    </GlobalStyle>
  );
}