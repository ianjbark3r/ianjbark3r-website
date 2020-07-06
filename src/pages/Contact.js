import React from 'react';
import ContactForm from '../components/ContactForm.js';
import styled from 'styled-components';

import Navigation from '../components/layout/Navigation';

export default class Contact extends React.Component {
  render() {
    const rowClasses = "row justify-content-center"
    const colClasses = "col-md-5 col-sm-8"

    const Background = styled.div`
      background-color: #EEE;
      height: 100vh;
      overflow: auto;
    `

    const Title = styled.div`
      padding-top: 12.5vh;
      text-align: center;
      font-family: "EB Garamond";
    `

    return (
      <>
        <Navigation />
        <Background className="container-fluid">
          <div className={rowClasses}>
            <div className={colClasses}>
              <Title>
                <h1 className="display-3">Contact</h1>
              </Title>
            </div>
          </div>
          <div className={rowClasses}>
            <div className={colClasses}>
              <hr className="mb-4" />
            </div>            
          </div>
          <div className={rowClasses}>
            <div className={colClasses}>    
              <ContactForm />
            </div>            
          </div>          
        </Background>
      </>
    )
  }
};
