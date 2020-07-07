import React from 'react';
import styled from 'styled-components';

import CTA from '../components/layout/CTA';
import Project from '../components/Project';
import { projects } from '../components/layout/ProjectsList';

export default class Projects extends React.Component {
  render() {
    const Background = styled.div`
      background-color: #EEE;

      h1, h2, h3, h4 {
        font-family: 'EB Garamond', serif;
      }

      p {
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
      }

      li {
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
      }

      button {
        font-family: sans-serif
      }
    `

    const LightBackground = styled.div`
      background-color: #FFF;
      padding-top: 8vh;
      padding-bottom: 8vh;

      h1, h2, h3, h4 {
        font-family: 'EB Garamond', serif;
      }

      p {
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
      }
      li {
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
      }
      button {
        font-family: sans-serif
      }
    `

    const Title = styled.div`
      padding-top: 12.5vh;
      text-align: center;
      font-family: 'Roboto', sans-serif;
    `

    return (
      <>
        <Background className="row justify-content-center">
          <div className="col-sm-9 text-center">
            <Title>
              <h1 className="display-3">My Projects</h1>
            </Title>
            <hr />
          </div>
        </Background>
        {projects.map((project, index) => {
          if (index === 0) {
            return (
              <Background 
                style={{ 
                  paddingTop:"3vh", 
                  paddingBottom:"8vh" 
                }} 
                className="row justify-content-center"
                key={`ProjectWrapper${project.id}`}
              >
                <Project
                  index={index}
                  project={project} 
                  key={project.id} 
                />
              </Background>
            )
          } else if (index % 2 === 0) {
            return (
              <Background 
                style={{ 
                  paddingTop:"8vh", 
                  paddingBottom:"8vh" 
                }} 
                className="row justify-content-center"
                key={`ProjectWrapper${project.id}`}
              >
                <Project
                  index={index}
                  project={project} 
                  key={project.id} 
                />
              </Background>
            )
          } else {
            return (
              <LightBackground 
                className="row justify-content-center"
                key={`ProjectWrapper${project.id}`}
              >
                <Project
                  index={index}
                  project={project} 
                  key={project.id} 
                />
              </LightBackground>
            )
          }
        })}
        <CTA />
      </>
    )
  }
};
