import styled from 'styled-components';

// Import images
import cover from './images/forest-cover.jpg';

export const colClasses = "mx-2 col-lg-6 col-md-8 col-sm-10";


// Common Styles
export const rowClasses = "row justify-content-center";

export const Title = styled.div`
  padding-top: 12.5vh;
  text-align: center;
  font-family: "EB Garamond";
`

//Contact.js
export const contactColClasses = "col-md-5 col-sm-8";

export const ContactBG = styled.div`
  background-color: #EEE;
  height: 100vh;
  overflow: auto;
`

// Home.js
export const Credit = styled.p`
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
export const CTA = styled.div`
  margin-top: 10vh;

  a {
    color: white;
    text-decoration: underline;
  }

  animation: fadein 6.5s;
`
  
export const HomeBG = styled.div`
  background-image: url(${cover});
  background-size: cover;
  background-position: center;
  height: 100vh;
`

export const HomeTitle = styled.div`
  color: white;
  padding-top: 30vh;
  text-align: center;
  font-family: "EB Garamond";
  text-shadow: 2px 2px 4px #000;
`

export const JobTitle = styled.h1`
  font-size: 2rem;

  animation: fadein 3s;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`
  
export const MyName = styled.h1`
  animation: fadein 4s;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`

export const Tagline = styled.div`
  text-shadow: 1px 1px 2px #000000;

  animation: fadein 5s;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`


// Projects.js
export const ProjectsBG = styled.div`
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

export const ProjectsBGLt = styled.div`
  background-color: #FFF;
  padding-top: 8vh;
  padding-bottom: 8vh;

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