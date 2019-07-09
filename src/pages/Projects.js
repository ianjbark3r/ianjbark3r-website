import React from 'react';
import styled from 'styled-components';
import { Container, CardColumns } from 'reactstrap';
import Project from '../components/Project';
import background from '../projects-bg.jpg';
import websiteThumb from '../personal-website-thumb.png';
import heroThumb from '../whoisthatsuperhero-thumb.png';
import habitThumb from '../thehabitjourney-thumb.png';
import underDev from '../under-development.png';

export default class Projects extends React.Component {
  render() {
    const Background = styled.div`
      background-image: url(${background});
      background-size: cover;
      background-position: left;
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
        img: habitThumb,
        title: "The Habit Journey",
        description: 'Lifestyle tool designed to help users build healthy habits (based on the book "Atomic Habits" by James Clear). Application layer connects to an Express.js API and MongoDB storage.',
        skills: [
          "React",
          "Express.js",
          "MongoDB"
        ],
        url: "https://the-habit-journey.web.app/"
      },
      {
        img: heroThumb,
        title: "WhoIsThatSuperhero",
        description: "React app that uses the Marvel API to help casual movie fans make sense of The Most Ambitious Crossover Event in History. Application state managed with Redux, API calls using Fetch.",
        skills: [
          "Marvel API",
          "React",
          "Redux"
        ],
        url: "https://whoisthatsuperhero.firebaseapp.com/"
      },
      {
        img: websiteThumb,
        title: "Professional Website",
        description: "Single-page app built with Bootstrap styles and a little elbow grease. Performant code, fully responsive layout, custom CSS with Styled-Components, and serverless JavaScript contact form.",
        skills: [
          "React",
          "Bootstrap",
          "Styled-Components"
        ],
        url: "https://ianjbaker.com"
      }
    ]

    return (
      <Background className="container-fluid">
        <Title>
          <h1 className="display-3">Projects</h1>
        </Title>
        <Container style={{ paddingBottom: "5vh" }}>
          <CardColumns>
            {projects.map(project => {
              return (
                <Project project={project} />
              )
            })}
          </CardColumns>
        </Container>
      </Background>
    )
  }
};
