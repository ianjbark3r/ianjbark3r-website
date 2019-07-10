import React from 'react';
import styled from 'styled-components';
import bootstrapLogo from '../bootstrap-logo.png';
import reactLogo from '../react-logo.png';
import nodeLogo from '../node-logo.png';
import reduxLogo from '../redux-logo.png'
import jestLogo from '../jest-logo.png';
import pyLogo from '../python-logo.png'
import educationbg from '../education-bg.jpg';
import skillsbg from '../skills-bg.jpg';

import DarkNavigation from '../components/layout/DarkNavigation';

export default class Skills extends React.Component {
  render() {
    const imgClasses = "m-4 w-auto d-inline-block";
    const imgContainerClasses = "d-sm-flex flex-row justify-content-center align-items-center";
    const contentContainerClasses = "container-fluid col-lg-6 col-md-8 col-sm-12"

    const PageTitle = styled.div`
      font-family: "EB Garamond";
      padding-top: 12.5vh;
      text-align: center;
    `

    const SectionTitle = styled.div`
      padding-top: 6vh;
      padding-bottom: 3vh;
      text-align: center;
    `

    const ObjectiveSection = styled.div`
      padding-bottom: 3rem;
      font-family: "EB Garamond";
      p {
        font-size: 1.5rem;
      }
    `

    const EducationSection = styled.div`
      background-image: url(${educationbg});
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      color: white;
      font-family: "EB Garamond";
      padding-bottom: 3rem;
      p {
        font-size: 1.5rem;
      }
      text-shadow: 2px 2px 4px #000000;
    `

    const SkillsSummary = styled.div`
      background-color: #EEEEEE;
      font-family: "EB Garamond";
      padding-bottom: 3rem;
      p {
        font-size: 1.5rem;
      }
    `

    const LanguagesAndFrameworksSection = styled.div`
      background-image: url(${skillsbg});
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      font-family: "EB Garamond";
      padding-bottom: 3rem;
      p {
        font-size: 1.5rem;
      }
      text-shadow: 2px 2px 4px #000000;
    `

    const ExperienceSection = styled.div`
      background-color: #EEEEEE;
      font-family: "EB Garamond";
      padding-bottom: 3rem;
      text-align: center;
      p {
        font-size: 1.5rem;
      }
    `

    return (
      <>
        <DarkNavigation/>
        <div>
          <PageTitle>
            <h1 className="display-3">Résumé</h1>
          </PageTitle>
          <div className="container">
            <hr />
          </div>
          <ObjectiveSection className="container-fluid">
            <div className={contentContainerClasses}>
              <SectionTitle>
                <h1 className="display-4">Objective</h1>
              </SectionTitle>
              <p>Driven, analytical, Engineering graduate seeking to utilize a passion for web development and a cultivated skillset at a unique and innovative company. Experience building web applications using HTML, CSS, and the React JavaScript framework. Hard-working, organized, and efficient professional interested in a new and rewarding challenge.</p>
            </div>
          </ObjectiveSection>
          <EducationSection className="container-fluid">
            <div className={contentContainerClasses}>
              <SectionTitle>
                <h1 className="display-4">Education</h1>
              </SectionTitle>
              <h2><strong>B.S. in Chemical Engineering (2011)</strong></h2>
              <h3>Iowa State University</h3>
              <p>Published highly-technical computerized research as an undergraduate student (<i>“Mechanism of Xylobiose Hydrolysis by GH43 β-Xylosidase”, J. Phys. Chem. B</i>)</p>
            </div>
          </EducationSection>
          <SkillsSummary className="container-fluid">
            <div className={contentContainerClasses}>
              <SectionTitle>
                <h1 className="display-4">Skills Summary</h1>
              </SectionTitle>
              <h2><strong>HTML</strong></h2>
              <p>2+ years experience writing semantic HTML to build modern websites, including use of HTML5 elements. Knowledge of HTML SEO best practices and accessibility attributes for disabled users.</p>
              <h2><strong>CSS</strong></h2>
              <p>2+ years experience building rich, responsive web experiences in CSS, including use of CSS3 attributes and CSS preprocessor Sass. Utilized CSS framework Bootstrap to style my professional website and my superhero info app, WhoIsThatSuperhero.</p>
              <h2><strong>JavaScript</strong></h2>
              <p>Advanced knowledge of the React JavaScript framework, including complex application state management in Redux. Firm grasp of application architecture, including presentational components, functional components, state, and props.</p>
              <h2><strong>Back-End</strong></h2>
              <p>Familiarity with back-end web frameworks Node.js and Flask. Currently building a RESTful API service using MongoDB for my project, The Habit Journey. Experience with packet management in NPM and Yarn.</p>
            </div>
          </SkillsSummary>
          <LanguagesAndFrameworksSection className="container-fluid">
            <SectionTitle>
              <h1 className="display-4" style={{ color: "white" }}><span style={{ display:"inline-block" }}>Languages/</span></h1>
              <h1 className="display-4" style={{ color: "white" }}><span style={{ display:"inline-block" }}>Frameworks</span></h1>
            </SectionTitle>
            <div className="container" style={{ paddingBottom: "5vh" }}>
              <div className={imgContainerClasses}>
                <div className={imgClasses}>
                  <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={reactLogo} alt="ReactJS" /></a>
                </div>
                <div className={imgClasses}>
                  <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={nodeLogo} alt="NodeJS" /></a>
                </div>
                <div className={imgClasses}>
                  <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={pyLogo} alt="Python" /></a>
                </div>
                <div className={imgClasses}>
                  <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={bootstrapLogo} alt="Bootstrap 4" /></a>
                </div>
                <div className={imgClasses}>
                  <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={reduxLogo} alt="Redux" /></a>
                </div>
                <div className={imgClasses}>
                  <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={jestLogo} alt="Jest" /></a>
                </div>
              </div>
            </div>
          </LanguagesAndFrameworksSection>
          <ExperienceSection className="container-fluid">
            <SectionTitle>
              <h1 className="display-4">Experience</h1>
            </SectionTitle>
            <div className={contentContainerClasses}>
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
        </div>
      </>      
    )
  }
};
