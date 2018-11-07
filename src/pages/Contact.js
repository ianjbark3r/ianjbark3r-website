import React from 'react';
import ContactForm from '../components/ContactForm.js';
import styled from 'styled-components';

class Contact extends React.Component {
  render() {
    const Background = styled.div`
      background-color: #DDDDDD;
      height: 100vh;
      overflow: auto;
    `

    const Title = styled.div`
      padding-top: 12.5vh;
      padding-bottom: 5vh;
      text-align: center;
      font-family: "EB Garamond";
    `

    return (
      <Background className="container-fluid">
        <Title>
          <h1 className="display-3">Contact</h1>
        </Title>
        <ContactForm />
      </Background>
    )
  }
};

export default Contact;
