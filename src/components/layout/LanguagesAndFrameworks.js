import React from 'react';
import styled from 'styled-components';

import bootstrapLogo from '../../images/bootstrap-logo.png';
import jestLogo from '../../images/jest-logo.png';
import nodeLogo from '../../images/node-logo.png';
import pyLogo from '../../images/python-logo.png';
import reactLogo from '../../images/react-logo.png';
import reduxLogo from '../../images/redux-logo.png';
import skillsbg from '../../images/skills-bg.jpg';

const imgClasses = "m-3 w-auto d-inline-block img-fluid";
const imgContainerClasses = "d-sm-flex flex-row justify-content-center align-items-center";
const languagesColClasses = "mx-4 col-md-12 col-sm-10";
const rowClasses = "row justify-content-center";

const LanguagesAndFrameworksSection = styled.div `
    background-attachment: fixed;
    background-image: url(${skillsbg});
    background-size: cover;
    background-position: center;
    padding-bottom: 3rem;

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

const LanguagesAndFrameworks = () => {
  return (
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
  )
}

export default LanguagesAndFrameworks;