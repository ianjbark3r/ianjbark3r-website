import React from 'react';
import styled from 'styled-components';

const colClasses = "mx-2 col-lg-6 col-md-8 col-sm-10"
const rowClasses = "row justify-content-center";

const ObjectiveSection = styled.div `
    background-color: #FFF;
    font-family: "EB Garamond";
    padding-bottom: 3rem;
    
    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.2rem;
    }
  `

const SectionTitle = styled.div `
    font-family: "EB Garamond";
    padding-top: 8vh;
    padding-bottom: 4vh;
    text-align: center;
  `

const Objective = () => {
  return (
    <ObjectiveSection className={rowClasses}>
      <div className={colClasses}>      
        <SectionTitle style={{ paddingTop:"2vh" }}>
            <h1 className="display-4">Objective</h1>
        </SectionTitle>
        <p>Driven, analytical, Engineering graduate seeking to utilize a passion for web development and a cultivated skillset at a unique and innovative company. Experience building web applications using HTML, CSS, and the React JavaScript framework. Hard-working, organized, and efficient professional interested in a new and rewarding challenge.</p>
      </div>
    </ObjectiveSection> 
  )
}

export default Objective;