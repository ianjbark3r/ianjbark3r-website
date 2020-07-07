import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
        <Background className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-9 text-center">
              <Title>
                <h1 className="display-3">My Projects</h1>
              </Title>
              <hr />
            </div>
          </div>
          {projects.map((project, index) => {
            if (index === 0) {
              return (
                <div 
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
                </div>
              )
            } else if (index % 2 === 0) {
              return (
                <div 
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
                </div>
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
          <div className="row justify-content-center">
            <div 
              style={{ 
                paddingTop:"10vh", 
                paddingBottom:"12vh" 
              }} 
              className="col-lg-4 col-md-6 col-sm-8 col-9"
            >
              <h1 
                style={{ fontSize:"2.0rem" }} 
                className="lead text-center"
              >
                <span style={{ display:"block" }}>
                  Like what you see?
                </span> 
                <span style={{ display:"block" }}>
                  <Link to="/contact">
                    Let's talk.
                  </Link>
                </span>
              </h1>
              <hr/>
              <h1 
                style={{ fontSize:"2.0rem" }} 
                className="lead text-center"
              >
                <span style={{ display:"inline-block" }}>
                  Need more info?
                </span> 
                <span style={{ display:"inline-block" }}>
                  <Link to="/resume">
                    Check out my résumé.
                  </Link>
                </span>
              </h1>
            </div>
          </div>
        </Background>
      </>
    )
  }
};
