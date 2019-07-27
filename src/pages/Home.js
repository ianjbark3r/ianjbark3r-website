import React from 'react';
import GreetingDate from '../components/GreetingDate';
import GreetingActivity from '../components/GreetingActivity';
import cover from '../images/forest-cover.jpg';
import styled from 'styled-components';

import Navigation from '../components/layout/Navigation';

export default class Home extends React.Component {
  render() {
    const Background = styled.div`
      background-image: url(${cover});
      background-size: cover;
      background-position: center;
      height: 100vh;
      overflow: scroll;
    `

    const Title = styled.div`
      color: white;
      padding-top: 22vh;
      text-align: center;
      font-family: "EB Garamond";
      text-shadow: 2px 2px 4px #000;
    `

    const Date = styled.div`
      animation: fadein 2s;

      @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
    `

    const JobTitle = styled.h1`
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

    const Activity = styled.div`
      animation: fadein 5s;

      @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
    `

    const Credit = styled.p`
      animation: fadein 7s;

      @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
    `

    return (
      <>
      <Navigation />
        <Background className="container-fluid">
          <Title>
            <Date>
              <GreetingDate />
            </Date>
            <JobTitle className="display-5 mb-0">Web Developer</JobTitle>
            <Name className="display-1 mb-2">Ian J Barker</Name>
            <Activity>
              <GreetingActivity />
            </Activity>
            <Credit style={{ marginTop: "30vh", marginBottom: "5vh" }}>
              <a 
                href='https://unsplash.com/photos/LPKk3wtkC-g' 
                style={{ color: 'white' }}
              >
                (Photo by Evgeni Evgeniev on Unsplash)
              </a>
            </Credit>
          </Title>
        </Background>
      </>
    )
  }
};
