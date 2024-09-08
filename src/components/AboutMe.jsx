import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const AboutContainer = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background: #E0F7FA;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 20px;
  }
`;

const ProfileImage = styled(motion.img)`
  border-radius: 50%;
  width: 400px;
  height: 400px;
  object-fit: cover;
  margin-right: 100px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

const AboutContent = styled(motion.div)`
  max-width: 600px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: black;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechItem = styled(motion.span)`
  background-color: #e6f3ff;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  color: #333333;
  padding: 8px 10px;
  border-radius: 10px;
  font-size: 16px;
  display: inline-block;
`;

const techStackItems = [
  "React", "JSP", "Spring framework", "Spring Boot", "JavaScript", "TailwindCSS", "Framer Motion", "Git",
  "Docker","Hibernate","REST API", "JDBC", "MY SQL", "MongoDB", "ShadCN", "React Scroll", "Figma", "GSAP", "ScrollTrigger"
];

const AboutMe = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    threshold: 0.1,
  });

  return (
    <AboutContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="about"
    >
      <ProfileImage
        src="/profile.png"
        alt="Profile"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <AboutContent
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Title>About Me</Title>
        <Subtitle style={{color:"#38BDF7"}}>Hi, I'm Shifath</Subtitle>
        <Description>
          I'm a Full Stack Developer, from Hyderabad. I focus on building modern and dynamic web-apps that enhance lead generation and user experience. I'm passionate about clean code and innovative design, always striving to create seamless digital experiences that make a real impact.
        </Description>
        <Subtitle style={{color:"#38BDF7"}}>Tech Stack</Subtitle>
        <TechStack ref={ref}>
          {techStackItems.map((item, index) => (
            <TechItem
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { 
                opacity: 1, 
                y: [0, -10, 0],
                transition: {
                  opacity: { duration: 0.5, delay: index * 0.05 },
                  y: { 
                    repeat: Infinity, 
                    duration: 2, 
                    ease: "easeInOut",
                    delay: index * 0.05 
                  }
                }
              } : {}}
            >
              {item}
            </TechItem>
          ))}
        </TechStack>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutMe;
