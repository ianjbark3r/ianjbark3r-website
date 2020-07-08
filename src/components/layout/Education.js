import React from 'react';
import styled from 'styled-components';

import educationbg from '../../images/education-bg.jpg';

import { colClasses, rowClasses } from '../../Styles';

const EducationSection = styled.div `
    background-attachment: fixed;
    background-image: url(${educationbg});
    background-position: center;
    background-size: cover;
    color: white;
    padding-bottom: 3rem;

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

const Education = () => {
  return (
    <EducationSection className={rowClasses}>
      <div className={colClasses}>
        <SectionTitle>
          <h1 className="display-4">Education</h1>
        </SectionTitle>
        <h2><strong>B.S. in Chemical Engineering (2011)</strong></h2>
        <h3>Iowa State University</h3>
        <p>Published highly-technical computerized research as an undergraduate student (<i>“Mechanism of Xylobiose Hydrolysis by GH43 β-Xylosidase”, J. Phys. Chem. B</i>)</p>
      </div>
    </EducationSection>
  )
}

export default Education;