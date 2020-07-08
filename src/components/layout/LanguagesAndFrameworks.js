import React from 'react';

import bootstrapLogo from '../../images/bootstrap-logo.png';
import jestLogo from '../../images/jest-logo.png';
import nodeLogo from '../../images/node-logo.png';
import pyLogo from '../../images/python-logo.png';
import reactLogo from '../../images/react-logo.png';
import reduxLogo from '../../images/redux-logo.png';

import { 
  imgClasses,
  imgContainerClasses,
  langColClasses,
  LaFSection, 
  rowClasses, 
  SectionTitle 
} from '../../Styles';

const LanguagesAndFrameworks = () => {
  return (
    <LaFSection className={rowClasses}>
      <div className={langColClasses}>     
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
    </LaFSection>
  )
}

export default LanguagesAndFrameworks;