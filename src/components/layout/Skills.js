import React from 'react';
import styled from 'styled-components';

import { colClasses, rowClasses } from '../../Styles';

const SectionTitle = styled.div `
    font-family: "EB Garamond";
    padding-top: 8vh;
    padding-bottom: 4vh;
    text-align: center;
  `

const SkillsSummary = styled.div `
    background-color: #FFF;
    padding-bottom: 3rem;

    h2, h3 {
      font-family: "EB Garamond";
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.2rem;
    }
  `

const Skills = () => {
  return (
    <SkillsSummary className={rowClasses}>
      <div className={colClasses}>
        <SectionTitle>
          <h1 className="display-4">Skills Summary</h1>
        </SectionTitle>
        <h2>
          <strong>
            HTML
          </strong>
        </h2>
        <p>
          2+ years experience writing semantic HTML to build modern websites, including use of HTML5 elements. Knowledge of HTML SEO best practices and accessibility attributes for disabled users.
        </p>
        <h2>
          <strong>
            CSS
          </strong>
        </h2>
        <p>
          2+ years experience building rich, responsive web experiences in CSS, including use of CSS3 attributes and CSS preprocessor Sass. Utilized CSS framework Bootstrap to style my professional website and my superhero info app, WhoIsThatSuperhero.
        </p>
        <h2>
          <strong>
            JavaScript
          </strong>
        </h2>
        <p>
          Advanced knowledge of the React JavaScript framework, including complex application state management in Redux. Firm grasp of application architecture, including presentational components, functional components, state, and props.
        </p>
        <h2>
          <strong>
            Back-End
          </strong>
        </h2>
        <p>
          Familiarity with back-end web frameworks Node.js and Flask. Built a RESTful API service using MongoDB for my project, The Habit Journey. Experience with package management in NPM and Yarn.
        </p>
      </div>
    </SkillsSummary>
  )
};

export default Skills;