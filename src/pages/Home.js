import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import cover from '../images/forest-cover.jpg';
import styled from 'styled-components';

import Navigation from '../components/layout/Navigation';
import Projects from './Projects';
import Footer from '../components/layout/Footer';

export default class Home extends React.Component {
  render() {
    const Activity = styled.div`
      text-shadow: 1px 1px 2px #000000;

      animation: fadein 5s;

      @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
    `

    const Background = styled.div`
      background-image: url(${cover});
      background-size: cover;
      background-position: center;
      height: 100vh;
    `
    const Credit = styled.p`
      margin-top: 3vh; 
      margin-bottom: 5vh;

      a {
        color: white;
      }

      animation: fadein 7s;

      @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
    `
    const CTA = styled.div`
      margin-top: 10vh;

      a {
        color: white;
        text-decoration: underline;
      }

      animation: fadein 6.5s;
    `

    const JobTitle = styled.h1`
      font-size: 2rem;
    
      animation: fadein 3s;

      @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
    `

    const Name = styled.h1`
      animation: fadein 4s;

      @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
    `

    const Title = styled.div`
      color: white;
      padding-top: 30vh;
      text-align: center;
      font-family: "EB Garamond";
      text-shadow: 2px 2px 4px #000;
    `


    return (
      <div className="container-fluid">
        <div className="row">
          <Navigation />
        </div>
        <div className="row">
          <Background className="col">
            <Title>
              <JobTitle className="mb-0">Full-Stack Developer</JobTitle>
              <Name className="display-2 mb-2">Ian J Barker</Name>
              <Activity>
                <h3>
                  <span className="d-block">builds beautiful,</span>
                  <span className="d-block">functional things.</span>
                </h3>
              </Activity>
              <CTA>
                <AnchorLink href="#projects">
                  <h3>
                    See for yourself
                  </h3>
                </AnchorLink>
              </CTA>
              <Credit>
                <a href='https://unsplash.com/photos/LPKk3wtkC-g'>
                  (Photo by Evgeni Evgeniev on Unsplash)
                </a>
              </Credit>
            </Title>
          </Background>
        </div>
        <Projects />
        <Footer />
      </div>
    )
  }
};
