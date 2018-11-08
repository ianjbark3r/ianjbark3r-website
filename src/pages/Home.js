import React from 'react';
import GreetingDate from '../components/GreetingDate';
import GreetingActivity from '../components/GreetingActivity';
import cover from '../forest-cover.jpg';
import styled from 'styled-components';

class Home extends React.Component {
  render() {
    const Background = styled.div`
      background-image: url(${cover});
      background-size: cover;
      background-position: center;
      height: 100vh;
      overflow: hidden;
    `

    const Title = styled.div`
      color: white;
      padding-top: 30vh;
      text-align: center;
      font-family: "EB Garamond";
    `

    return (
      <Background className="container-fluid">
        <Title>
          <GreetingDate />
          <h1 className="display-3">Ian J Barker</h1>
          <GreetingActivity />
          <p style={{ paddingTop: "30vh" }}><a href='https://unsplash.com/photos/LPKk3wtkC-g' style={{ color: 'white' }}>Photo by Evgeni Evgeniev on Unsplash</a></p>
        </Title>
      </Background>
    )
  }
};

export default Home;
