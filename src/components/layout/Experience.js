import React from 'react';
import styled from 'styled-components';

import { colClasses } from '../../Styles';
import { rowClasses } from '../../Styles';

const ExperienceSection = styled.div `
    background-color: #FFF;
    padding-bottom: 3rem;
    text-align: center;

    h2, h3 {
      font-family: "EB Garamond";
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.2rem;
    }
  `
const SectionTitle = styled.div `
  font-family: "EB Garamond";
    padding-top: 8vh;
    padding-bottom: 4vh;
    text-align: center;
  `

const Experience = () => {
  return (
    <ExperienceSection className={rowClasses}>
      <div className={colClasses}>
        <SectionTitle>
          <h1 className="display-4">Experience</h1>
        </SectionTitle>
        <div>
          <h2><strong>Web Developer</strong></h2>
          <h3>Freelance</h3>
          <p>November 2018-Present</p>
          <br />
        </div>
        <div>
          <h2><strong>Social Media Producer</strong></h2>
          <h3>KXAN News</h3>
          <p>August 2017–October 2018</p>
          <br />
        </div>
      </div>
    </ExperienceSection>
  )
}

export default Experience;