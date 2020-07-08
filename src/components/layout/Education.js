import React from 'react';

import { 
  EducationSection, 
  colClasses, 
  rowClasses, 
  SectionTitle 
} from '../../Styles';

const Education = () => {
  return (
    <EducationSection className={rowClasses}>
      <div className={colClasses}>
        <SectionTitle>
          <h1 className="display-4">Education</h1>
        </SectionTitle>
        <h2><strong>B.S. in Chemical Engineering (2011)</strong></h2>
        <h3>Iowa State University</h3>
        <p>Published highly-technical computerized research as an undergraduate student (<i>“Mechanism of Xylobiose Hydrolysis by GH43 β-Xylosidase”, J. Phys. Chem. B</i>)</p>
      </div>
    </EducationSection>
  )
}

export default Education;