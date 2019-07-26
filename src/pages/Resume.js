import React from 'react';
import styled from 'styled-components';

import bootstrapLogo from '../images/bootstrap-logo.png';
import educationbg from '../images/education-bg.jpg';
import jestLogo from '../images/jest-logo.png';
import nodeLogo from '../images/node-logo.png';
import pyLogo from '../images/python-logo.png'
import reactLogo from '../images/react-logo.png';
import reduxLogo from '../images/redux-logo.png'
import skillsbg from '../images/skills-bg.jpg';

import DarkNavigation from '../components/layout/DarkNavigation';

export default class Skills extends React.Component {
  render() {
    const imgClasses = "m-3 w-auto d-inline-block img-fluid";
    const imgContainerClasses = "d-sm-flex flex-row justify-content-center align-items-center";
    const colClasses = "mx-2 col-lg-6 col-md-8 col-sm-10"
    const languagesColClasses = "mx-4 col-md-12 col-sm-10"
    const rowClasses = "row justify-content-center"

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
      background-color: #FFF;
      font-family: "EB Garamond";
      padding-bottom: 3rem;
      p {
        font-size: 1.5rem;
      }
    `

    const EducationSection = styled.div`
      background-attachment: fixed;
      background-image: url(${educationbg});
      background-position: center;
      background-size: cover;
      color: white;
      font-family: "EB Garamond";
      padding-bottom: 3rem;
      text-shadow: 2px 2px 4px #000000;
      p {
        font-size: 1.5rem;
      }
    `

    const SkillsSummary = styled.div`
      background-color: #FFF;
      font-family: "EB Garamond";
      padding-bottom: 3rem;
      p {
        font-size: 1.5rem;
      }
    `

    const LanguagesAndFrameworksSection = styled.div`
      background-attachment: fixed;
      background-image: url(${skillsbg});
      background-size: cover;
      background-position: center;
      font-family: "EB Garamond";
      padding-bottom: 3rem;
      p {
        font-size: 1.5rem;
      }
      text-shadow: 2px 2px 4px #000000;
    `

    const ExperienceSection = styled.div`
      background-color: #FFF;
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
        <div className="container-fluid">
          <div style={{ backgroundColor:"#FFF" }} className={rowClasses}>
            <div className={colClasses}>
              <PageTitle>
                <h1 className="display-3">Résumé</h1>
              </PageTitle>
              <div>
                <hr />
              </div>
            </div>
          </div>
          <ObjectiveSection className={rowClasses}>
              <div className={colClasses}>      
                <SectionTitle>
                  <h1 className="display-4">Objective</h1>
                </SectionTitle>
                <p>Driven, analytical, Engineering graduate seeking to utilize a passion for web development and a cultivated skillset at a unique and innovative company. Experience building web applications using HTML, CSS, and the React JavaScript framework. Hard-working, organized, and efficient professional interested in a new and rewarding challenge.</p>
              </div>
            </ObjectiveSection> 
          <LanguagesAndFrameworksSection className={rowClasses}>
            <div className={languagesColClasses}>     
              <SectionTitle>
                <h1 className="display-4" style={{ color: "white" }}><span style={{ display:"inline-block" }}>Languages / Frameworks</span></h1>
              </SectionTitle>
              <div style={{ paddingBottom: "5vh" }}>
                <div className={imgContainerClasses}>
                  <div className={imgClasses}>
                    <a 
                      href="https://reactjs.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ 
                          filter: "drop-shadow(4px 4px 4px #000)"
                        }}
                        className="img-fluid" 
                        src={reactLogo} 
                        alt="ReactJS" 
                      />
                    </a>
                  </div>
                <div className={imgClasses}>
                  <a 
                    href="https://redux.js.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ 
                        filter: "drop-shadow(4px 4px 4px #000)"
                      }} 
                      className="img-fluid" 
                      src={reduxLogo} 
                      alt="Redux" 
                    />
                  </a>
                </div>
                <div className={imgClasses}>
                  <a 
                    href="https://nodejs.org/en/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ 
                        filter: "drop-shadow(4px 4px 4px #000)"
                      }}
                      className="img-fluid" 
                      src={nodeLogo} 
                      alt="NodeJS" /></a>
                </div>
                <div className={imgClasses}>
                  <a 
                    href="https://www.python.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ 
                        filter: "drop-shadow(4px 4px 4px #000)"
                      }}
                      className="img-fluid" 
                      src={pyLogo} 
                      alt="Python" 
                    />
                  </a>
                </div>
                <div className={imgClasses}>
                  <a 
                    href="https://getbootstrap.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ 
                        filter: "drop-shadow(4px 4px 4px #000)"
                      }}
                      className="img-fluid" 
                      src={bootstrapLogo} 
                      alt="Bootstrap 4" 
                    />
                  </a>
                </div>
                <div className={imgClasses}>
                  <a 
                    href="https://jestjs.io/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ 
                        filter: "drop-shadow(4px 4px 4px #000)"
                      }} 
                      className="img-fluid" 
                      src={jestLogo} 
                      alt="Jest" 
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          </LanguagesAndFrameworksSection>
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
        </div>
      </>    
    )
  }
};
