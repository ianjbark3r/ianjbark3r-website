import React from 'react';
import Project from '../components/Project';
import background from '../projects-bg.jpg';
import websiteThumb from '../personal-website-thumb.png';
import cardImg from '../card-placeholder.png';
import styled from 'styled-components';
import { Container, CardDeck } from 'reactstrap';

class Projects extends React.Component {
  render() {
    const Background = styled.div`
      background-image: url(${background});
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      overflow: auto;
      height: 100vh;
      padding-bottom: 10vh;
    `

    const Title = styled.div`
      padding-top: 12.5vh;
      padding-bottom: 5vh;
      text-align: center;
      font-family: "EB Garamond";
    `

    const projects = [
      {
        img: websiteThumb,
        title: "Personal Website",
        description: "My very first ReactJS application, built with Bootstrap styles and a little elbow grease. Dynamic contents and fully responsive layout.",
        skills: [
          "ReactJS",
          "Bootstrap",
          "Styled-Components"
        ]
      },
      {
        img: cardImg,
        title: "Austin Civic Dashboard",
        description: "Utilizes Austin open data to create a comprehensive look at statistics related to civil issues based on location.",
        skills: [
          "ReactJS",
          "RESTful Web Services"
        ]
      },
      {
        img: cardImg,
        title: "Untitled 3rd Project",
        description: "[TOP SECRET]",
        skills: [
          "NodeJS",
          "ReactJS",
          "RESTful Web Services"
        ]
      }
    ]

    return (
      <Background className="container-fluid">
        <Title>
          <h1 className="display-3">Projects</h1>
        </Title>
        <Container style={{ paddingBottom: "5vh" }}>
          <CardDeck>
            {projects.map(project => {
              return (
                <Project project={project} />
              )
            })}
          </CardDeck>
        </Container>
      </Background>
    )
  }
};

export default Projects;
