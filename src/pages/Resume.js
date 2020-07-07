import React from 'react';

import Education from '../components/layout/Education';
import Experience from '../components/layout/Experience';
import LanguagesAndFrameworks from '../components/layout/LanguagesAndFrameworks';
import Objective from '../components/layout/Objective';
import ResumeTitle from '../components/layout/ResumeTitle';
import Skills from '../components/layout/Skills';

import Navigation from '../components/layout/Navigation';

export default class Resume extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Navigation/>
        <ResumeTitle />
        <Objective />
        <LanguagesAndFrameworks />
        <Skills />
        <Education />
        <Experience />
      </div>    
    )
  }
};
