import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LandingPagesContainer = styled.section`
  padding: 40px 20px;
  background: #E0F7FA;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 60px;
  color: #3a3a3a;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

const PagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PageCard = styled(motion.div)`
  background: #f8f9fa;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const PageGif = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const PageInfo = styled.div`
  padding: 20px;
`;

const PageTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #3a3a3a;
`;

const PageDescription = styled.p`
  font-size: 16px;
  color: #6c757d;
  margin-bottom: 15px;
`;

// const ViewButton = styled.a`
//   display: inline-block;
//   padding: 10px 20px;
//   background: #007bff;
//   color: white;
//   text-decoration: none;
//   border-radius: 5px;
//   transition: background 0.3s;

//   &:hover {
//     background: #0056b3;
//   }
// `;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: ${props => props.primary ? '#007bff' : 'transparent'};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;

  
`;

const landingPages = [
  {
    title: "Lazarev Landing Page",
    description: "A modern and responsive landing page for Lazarev.",
    gif: "/lazarevGif.gif",
    link: "https://lazarev-shifath.netlify.app/",
    source: "https://github.com/Shifath19/LazarevLanding"
  },
  {
    title: "Two Good Co Landing Page",
    description: "Sleek landing page for Two Good Co.",
    gif: "/toogoogco.gif",
    link: "https://shifathtwogoodco.netlify.app/",
    source: "https://github.com/Shifath19/TwoGoodCoLanding"
  },
  {
    title: "SidCup Golf Landing Page",
    description: "Vibrant and engaging landing page for a Family Golf League.",
    gif: "/golf.gif",
    link: "https://golfshifath.netlify.app/",
    source: "https://github.com/Shifath19/Golf-website"
  }
];

const LandingPages = () => (
  <LandingPagesContainer id="landing-pages">
    <Title>Landing Pages I've Built</Title>
    <PagesGrid>
      {landingPages.map((page, index) => (
        <PageCard
          key={page.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <PageGif src={page.gif} alt={page.title} />
          <PageInfo>
            <PageTitle>{page.title}</PageTitle>
            <PageDescription>{page.description}</PageDescription>
            <ButtonContainer>
              <Button primary href={page.link} target="_blank" rel="noopener noreferrer" style={{
                background: 'linear-gradient(207deg, rgba(32,28,108,0.8979924733565301) 0%, rgba(50,50,184,1) 0%, rgba(0,212,255,1) 100%)'
              }}>
                View Page
              </Button>
              <Button href={page.source} target="_blank" rel="noopener noreferrer" style={{color:"#0284C7",border:"1px solid #0284C7"}}>
                Source Code
              </Button>
            </ButtonContainer>
          </PageInfo>
        </PageCard>
      ))}
    </PagesGrid>
  </LandingPagesContainer>
);

export default LandingPages;
