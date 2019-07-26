import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Project from '../components/Project';

import grannyFabThumb from '../images/granny-fab-thumb.png';
import heroThumb from '../images/whoisthatsuperhero-thumb.png';
import habitThumb from '../images/thehabitjourney-thumb.png';
import websiteThumb from '../images/personal-website-thumb.png';

import DarkNavigation from '../components/layout/DarkNavigation';

export default class Projects extends React.Component {
  render() {
    const projects = [
      {
        id: "03",
        img: habitThumb,
        title: "The Habit Journey",
        concept: "Companion app to James Clear's habit-building book 'Atomic Habits'",
        challenges: 'Building my first API, re-building said API due to tech constraints, auth, and account data storage.',
        solutions: 'After building an initial web app, I discovered that deploying my server file through Firebase Functions prohibited initiating a MongoDB database. In response, I migrated the web app code to Cloud Firestore, which helped reinforce my knowledge of NoSQL databases. Auth handled using Firebase Authentication, while user data is modeled with scalability and future features in mind.',
        repoUrl: 'https://github.com/ianjbark3r/the-habit-journey',
        tech: [
          "AJAX",
          "Bootstrap 4",
          "Express.js/Node.js",
          "Firebase Auth",
          "MongoDB/Firestore",
          "React",
          "Redux"
        ],
        url: "https://the-habit-journey.web.app/"
      },
      {
        id: "04",
        img: grannyFabThumb,
        title: "Granny Fab",
        concept: "Visually captivating brochure website for prominent local Austin artisan.",
        challenges: 'UNDER DEVELOPMENT',
        solutions: 'TBD',
        repoUrl: '',
        tech: [
          "Bootstrap 4",
          "CSS3",
          "HTML5",
          "Sass"
        ],
        url: ""
      },
      {
        id: "02",
        img: heroThumb,
        title: "Who Is That Superhero?",
        concept: "Single-page application that helps casual Marvel fans explore the superheroes of The Avengers.",
        challenges: 'Learning Redux, asynchronous state management, understanding the "functional component vs container component" paradigm.',
        solutions: 'After initial trepidation at the amount of boilerplate required by Redux, I quickly became comfortable with its overall flow and structure. This knowledge lead to the discovery of a common design pattern for async data handling that solved several AJAX-related race conditions',
        repoUrl: 'https://github.com/ianjbark3r/whoisthatsuperhero',
        tech: [
          "AJAX",
          "Firebase",
          "Marvel Comics API",
          "React",
          "Redux"
        ],
        url: "https://whoisthatsuperhero.firebaseapp.com/"
      },
      {
        id: "01",
        img: websiteThumb,
        title: "Professional Website",
        concept: "Portfolio and contact portal for my free-lance web development work.",
        challenges: 'Learning a new front-end framework, styling a JavaScript application.',
        solutions: 'After an initial learning curve–and some heavy reading of documentation–I was able to build a baseline competency with React, leveraging my previous HTML experience. Additionally, Styled-Components helped make the transition from CSS to CSS in JS much easier.',
        repoUrl: 'https://github.com/ianjbark3r/ianjbark3r-website',
        tech: [
          "NPM",
          "React",
          "React Router",
          "Styled-Components",
          "Webpack"
        ],
        url: "https://ianjbaker.com"
      }
    ]

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
        <DarkNavigation/>
        <Background className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-9 text-center">
              <Title>
                <h1 className="display-3">Projects</h1>
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
                <LightBackground className="row justify-content-center">
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
                <span style={{ display:"inline-block" }}>
                  Like what you see?
                </span> 
                <span style={{ display:"inline-block" }}>
                  <Link to="/contact">
                    Let's talk.
                  </Link>
                </span>
              </h1>
              <hr/>
            </div>
          </div>
        </Background>
      </>
    )
  }
};
