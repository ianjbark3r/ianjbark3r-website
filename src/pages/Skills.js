import React from 'react';
import styled from 'styled-components';
import htmlLogo from '../html-logo.png';
import cssLogo from '../css-logo.png';
import reactLogo from '../react-logo.png';
import nodeLogo from '../node-logo.png';
import jestLogo from '../jest-logo.png';
import background from '../skills-bg.jpg';

class Skills extends React.Component {
  render() {
    const imgClasses = "m-4 w-auto d-inline-block";
    const imgContainerClasses = "d-md-flex flex-row justify-content-center";

    const Background = styled.div`
      background-image: url(${background});
      background-size: cover;
      background-position: center;
      height: 100vh;
      overflow: auto;
    `

    const Title = styled.div`
      color: white;
      padding-top: 20vh;
      padding-bottom: 10vh;
      text-align: center;
      font-family: "EB Garamond";
    `

    return (
      <Background className="container-fluid">
        <Title>
          <h1 className="display-3">Skills</h1>
        </Title>
        <div className="container" style={{ paddingBottom: "10vh" }}>
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
      </Background>
    )
  }
};

export default Skills;
