import React from 'react';
import styled from 'styled-components';
import htmlLogo from '../html-logo.png';
import cssLogo from '../css-logo.png';
import reactLogo from '../react-logo.png';
import nodeLogo from '../node-logo.png';
import jestLogo from '../jest-logo.png';
import educationbg from '../education-bg.jpg';
import skillsbg from '../skills-bg.jpg';

class Skills extends React.Component {
  render() {
    const imgClasses = "m-4 w-auto d-inline-block";
    const imgContainerClasses = "d-sm-flex flex-row justify-content-center";
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
    `

    const ExperienceSection = styled.div`
      background-color: #EEEEEE;
      font-family: "EB Garamond";
      padding-bottom: 3rem;
      p {
        font-size: 1.5rem;
      }
    `

    const SkillsSection = styled.div`
      background-image: url(${skillsbg});
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      font-family: "EB Garamond";
      padding-bottom: 3rem;
      p {
        font-size: 1.5rem;
      }
    `

    const RolesSection = styled.div`
      background-color: #EEEEEE;
      font-family: "EB Garamond";
      padding-bottom: 3rem;
      text-align: center;
      p {
        font-size: 1.5rem;
      }
    `

    return (
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
            <p>Hard-working developer with an Engineer’s eye for efficient, creative solutions. Looking to use my coding skills to enhance the efficacy, performance, and functionality of front-end solutions for a creative, driven, and innovative organization.</p>
          </div>
        </ObjectiveSection>
        <EducationSection className="container-fluid">
          <div className={contentContainerClasses}>
            <SectionTitle>
              <h1 className="display-4">Education</h1>
            </SectionTitle>
            <h2><strong>B.S. in Chemical Engineering (2011)</strong></h2>
            <h3>Iowa State University</h3>
            <p>Published highly-technical computerized research as an undergraduate student (“Mechanism of Xylobiose Hydrolysis by GH43 β-Xylosidase”, J. Phys. Chem. B)</p>
          </div>
        </EducationSection>
        <ExperienceSection className="container-fluid">
          <div className={contentContainerClasses}>
            <SectionTitle>
              <h1 className="display-4">Experience</h1>
            </SectionTitle>
            <h2><strong>Iowa State University Dept. of Chemical Engineering</strong></h2>
            <h3>Researcher</h3>
            <p>Jan 2009–May 2010</p>
            <p>Used university supercomputer to model quantum mechanical interaction of substrate chemical in a catalyst enzyme. Worked exclusively in terminal environment for the duration of research assignment. One of a small percentage of undergraduate students to have research published.</p>
          </div>
        </ExperienceSection>
        <SkillsSection className="container-fluid">
          <SectionTitle>
            <h1 className="display-4" style={{ color: "white" }}>Skills</h1>
          </SectionTitle>
          <div className="container" style={{ paddingBottom: "5vh" }}>
            <div className={imgContainerClasses}>
              <div className={imgClasses}>
                <a href="https://www.w3schools.com/html/html5_intro.asp" target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={htmlLogo} alt="HTML5" /></a>
              </div>
              <div className={imgClasses}>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={cssLogo} alt="CSS3" /></a>
              </div>
              <div className={imgClasses}>
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={reactLogo} alt="ReactJS" /></a>
              </div>
              <div className={imgClasses}>
                <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={jestLogo} alt="Jest" /></a>
              </div>
              <div className={imgClasses}>
                <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={nodeLogo} alt="NodeJS" /></a>
              </div>
            </div>
          </div>
        </SkillsSection>
        <RolesSection className="container-fluid">
          <SectionTitle>
            <h1 className="display-4">Additional Roles</h1>
          </SectionTitle>
          <div className={contentContainerClasses}>
            <div>
              <h2>KXAN News</h2>
              <h3>Social Media Producer</h3>
              <p>August 2017–October 2018</p>
              <br />
            </div>
            <div>
              <h2>Dot Esports</h2>
              <h3>Video Editor/Freelance Writer</h3>
              <p>September 2014–July 2017</p>
              <br />
            </div>
            <div>
              <h2>Singlegrain</h2>
              <h3>Content Writer</h3>
              <p>March 2014 – September 2014</p>
              <br />
            </div>
            <div>
              <h2>Copart</h2>
              <h3>Asset Collection Clerk</h3>
              <p>October 2013 – March 2014</p>
              <br />
            </div>
            <div>
              <h2>WebFilings</h2>
              <h3>Customer Service Specialist</h3>
              <p>July 2012 – September 2013</p>
              <br />
            </div>
            <div>
              <h2>Kemin</h2>
              <h3>Lab Technician</h3>
              <p>May 2012 – June 2012</p>
              <br />
            </div>
          </div>
        </RolesSection>
      </div>
    )
  }
};

export default Skills;
