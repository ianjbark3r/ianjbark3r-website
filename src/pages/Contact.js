import React from 'react';
import ContactForm from '../components/ContactForm.js';
import styled from 'styled-components';

class Contact extends React.Component {
  render() {
    const Background = styled.div`
      background-color: #DDDDDD;
      height: 100vh;
      overflow: hidden;
    `

    const Title = styled.div`
      padding-top: 15vh;
      text-align: center;
      font-family: "EB Garamond";
    `

    return (
      <Background className="container-fluid">
        <Title>
          <h1 className="display-3">Contact</h1>
          <ContactForm />
        </Title>
      </Background>
    )
  }
};

export default Contact;
