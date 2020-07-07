import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div `
    background-color: #EEE;

    h1, h2, h3, h4 {
      font-family: 'EB Garamond', serif;
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.2rem;
    }

    li {
      font-family: 'Roboto', sans-serif;
      font-size: 1.2rem;
    }

    button {
      font-family: sans-serif
    }
  `

const CTA = (props) => {
  return (
    <Background className="row justify-content-center">
      <div 
      style={{ 
          paddingTop:"10vh", 
          paddingBottom:"12vh" 
      }} 
      className="col-lg-4 col-md-6 col-sm-8 col-9"
      >
      <h1 
          style={{ fontSize:"2.0rem" }} 
          className="lead text-center"
      >
        <span style={{ display:"block" }}>
          Like what you see?
        </span> 
        <span style={{ display:"block" }}>
          <Link to="/contact">
              Let's talk.
          </Link>
        </span>
      </h1>
      <hr/>
      <h1 
          style={{ fontSize:"2.0rem" }} 
          className="lead text-center"
      >
        <span style={{ display:"block" }}>
          Need more info?
        </span> 
        <span style={{ display:"block" }}>
          <Link to="/resume">
              Check out my résumé.
          </Link>
        </span>
      </h1>
      </div>
    </Background>
  )
}

export default CTA