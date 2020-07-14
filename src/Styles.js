import styled from 'styled-components';

// Import images
import cover from './images/forest-cover.jpg';
import educationbg from './images/education-bg.jpg';
import skillsbg from './images/skills-bg.jpg';



// Common Styles
export const rowClasses = "row justify-content-center";

export const colClasses = "mx-2 col-lg-6 col-md-8 col-sm-10";

export const SectionTitle = styled.div`
  font-family: "EB Garamond";
  padding-top: 8vh;
  padding-bottom: 4vh;
  text-align: center;
`

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

export const Message = styled.div`
  text-align: center;
`


// CTA.js
export const CTAdiv = styled.div`
  background-color: #EEE;
  padding-top: 10vh;
  padding-bottom: 12vh;

  h1, h2, h3, h4 {
    font-family: 'EB Garamond', serif;
    font-size 2rem;
  }
  
  button {
    font-family: sans-serif
  }

  li {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
  }


  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
  }

  span {
    display: block;
  }
`


// Education.js
export const EducationSection = styled.div`
  background-attachment: fixed;
  background-image: url(${educationbg});
  background-position: center;
  background-size: cover;
  color: white;
  padding-bottom: 3rem;

  h2, h3 {
    font-family: "EB Garamond";
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
  }
`


// Experience.js
export const ExperienceSection = styled.div`
  background-color: #FFF;
  padding-bottom: 3rem;
  text-align: center;

  h2, h3 {
    font-family: "EB Garamond";
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
  }
`


// Home.js
export const Credit = styled.p`
  margin-top: 3vh; 
  margin-bottom: 5vh;

  a {
    color: white;
  }

  animation: name 8s 1;
  animation-delay: 4.5s;
  animation-fill-mode: both;

  @keyframes name {
    0%{
      opacity: 0;
    }
    30%{
      opacity: 1
    }
  }
  `
export const CTA = styled.div`
  margin-top: 10vh;

  a { 
    color: white;
    text-decoration: underline;
  }

  animation: name 6s 1;
  animation-delay: 4s;
  animation-fill-mode: both;

  @keyframes name {
    0%{
      opacity: 0;
    }
    30%{
      opacity: 1
    }
  }
`
  
export const HeroBG = styled.div`
  background-image: url(${cover});
  background-size: cover;
  background-position: center;
  height: 110vh;
`

export const HeroTitle = styled.div`
  color: white;
  padding-top: 25vh;
  text-align: center;
  font-family: "EB Garamond";
  text-shadow: 2px 2px 4px #000;
`

export const JobTitle = styled.h1`
  font-size: 2rem;

  animation: title 3.5s 1;
  animation-delay: 0.5s;
  animation-fill-mode: both;

  @keyframes title  {
    0%{
      opacity: 0;
    }
    30%{
      opacity: 1;
    }
  }
`
  
export const MyName = styled.h1`
  animation: name 4.5s 1;
  animation-delay: 1.5s;
  animation-fill-mode: both;

  @keyframes name {
    0%{
      opacity: 0;
    }
    30%{
      opacity: 1
    }
  }
`

export const Tagline = styled.div`
  text-shadow: 1px 1px 2px #000000;

  animation: name 6.5s 1;
  animation-delay: 2.5s;
  animation-fill-mode: both;

  @keyframes name {
    0%{
      opacity: 0;
    }
    60%{
      opacity: 1
    }
  }
`
 

// LanguagesAndFrameworks.js
export const imgClasses = "m-3 w-auto d-inline-block img-fluid";

export const imgContainerClasses = "d-sm-flex flex-row justify-content-center align-items-center";

export const langColClasses = "mx-4 col-md-12 col-sm-10";

export const LaFSection = styled.div`
  background-attachment: fixed;
  background-image: url(${skillsbg});
  background-size: cover;
  background-position: center;
  padding-bottom: 6vh;

  h1 {
    color: white;
  }

  img {
    filter: drop-shadow(4px 4px 4px #000);
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
  }

  span {
    display: inline-block;
  }
`


// Objective.js
export const ObjectiveSection = styled.div`
  background-color: #FFF;
  font-family: "EB Garamond";
  padding-bottom: 3rem;
  
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
  }
`


// Projects.js
const projPadTop = "12vh";
const titleMargBot = "-6vh";

export const ProjectsBG = styled.div`
  background-color: #EEE;
  padding-top: ${projPadTop};
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

export const ProjectsBGLt = styled.div`
  background-color: #FFF;
  padding-top: 12vh;
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

export const ProjectsTitleBG = styled.div`
  background-color: #EEE;
  margin-bottom: ${titleMargBot};
  padding-top: 5vh;

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


// ProjectImages.js
export const ProjImages = styled.div`
  img {
    height: auto;
    width: 100%;
  }
`


// ResumeTitle.js
export const ResTitle = styled.div`
  background-color: #FFF;
  font-family: "EB Garamond";
  padding-top: 12.5vh;
  text-align: center;
`


// Skills.js 
export const SkillsSummary = styled.div`
  background-color: #FFF;
  padding-bottom: 3rem;

  h2, h3 {
    font-family: "EB Garamond";
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
  }
`