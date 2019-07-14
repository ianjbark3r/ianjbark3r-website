import React from 'react';
import styled from 'styled-components';
import { CardColumns } from 'reactstrap';
import Project from '../components/Project';
import background from '../projects-bg.jpg';
import websiteThumb from '../personal-website-thumb.png';
import heroThumb from '../whoisthatsuperhero-thumb.png';
import habitThumb from '../thehabitjourney-thumb.png';

import DarkNavigation from '../components/layout/DarkNavigation';

export default class Projects extends React.Component {
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
        id: "003",
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
        id: "002",
        img: heroThumb,
        title: "WhoIsThatSuperhero",
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
        id: "001",
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

    return (
      <>
        <DarkNavigation/>
        <Background className="container-fluid">
          <Title>
            <h1 className="display-3">Projects</h1>
          </Title>
          <CardColumns key="cardColumns">
            {projects.map(project => {
              return (
                <Project key={project.id} project={project} />
              )
            })}
          </CardColumns>
        </Background>
      </>      
    )
  }
};
