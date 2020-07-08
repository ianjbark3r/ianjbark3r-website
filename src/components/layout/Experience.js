import React from 'react';

import { 
  colClasses, 
  ExperienceSection, 
  rowClasses, 
  SectionTitle 
} from '../../Styles';

const Experience = () => {
  return (
    <ExperienceSection className={rowClasses}>
      <div className={colClasses}>
        <SectionTitle>
          <h1 className="display-4">Experience</h1>
        </SectionTitle>
        <div>
          <h2><strong>Web Developer</strong></h2>
          <h3>Freelance</h3>
          <p>November 2018-Present</p>
          <br />
        </div>
        <div>
          <h2><strong>Social Media Producer</strong></h2>
          <h3>KXAN News</h3>
          <p>August 2017–October 2018</p>
          <br />
        </div>
      </div>
    </ExperienceSection>
  )
}

export default Experience;