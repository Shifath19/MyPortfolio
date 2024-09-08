import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.section`
  padding: 70px 10px;
  background: #E0F7FA;
  text-align: center;
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

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: #3a3a3a;
`;

const Description = styled.p`
  font-size: 16px;
  color: #6c757d;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  background: ${props => props.primary ? '#007bff' : '#6c757d'};
  border: none;
  cursor: pointer;
  transition: background 0.3s;

 
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05 }
};

const projects = [
  {
    title: "Gify Clone",
    description: "A Gify clone built using React and Giphy API.",
    image: "/gify.png",
    liveLink: "https://shifathgifyclone.netlify.app/",
    githubLink: "https://github.com/Shifath19/Gify"
  },
  {
    title: "Polling App",
    description: "A twitter based polling app built using spring boot and react. Users can create polls and vote on them.",
    image: "/polling.png",
    githubLink: "https://github.com/Shifath19/PollingApp"
  },
  {
    title: "Events Calender",
    description: "A events calender built using html,css,javascript , lets you add events to a calender and view them",
    image: "/eventscalender.png",
    liveLink: "https://eventscalender.netlify.app/",
    githubLink: "https://github.com/Shifath19/Events-Calender"
  },
  {
    title: "Blog Java",
    description: "A blog website built uisng Java EE, JSP, JDBC. Users can write blogs and edit them",
    image: "/blog.png",
    githubLink: "https://github.com/Shifath19/Blog-Java"
  }
  
];

const MyProjects = () => (
  <ProjectsContainer id="projects">
    <Title>My Projects</Title>
    <CardsContainer>
      {projects.map((project, index) => (
        <Card
          key={project.title}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <ProjectImage src={project.image} alt={project.title} />
          <CardTitle>{project.title}</CardTitle>
          <Description>{project.description}</Description>
          <ButtonContainer>
            {project.liveLink && (
              <Button primary href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{color:"white", background: "linear-gradient(106.5deg, rgba(255, 215, 185, 0.91) 23%, rgba(223, 159, 247, 0.8) 93%)"}}>Live Link</Button>
            )}
            <Button href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{color:"grey",background:"white",border:"1px solid grey"}}>GitHub Repo</Button>
          </ButtonContainer>
        </Card>
      ))}
    </CardsContainer>
  </ProjectsContainer>
);

export default MyProjects;
