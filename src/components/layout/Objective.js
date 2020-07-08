import React from 'react';

import { 
  colClasses,
  ObjectiveSection,
  rowClasses,
  SectionTitle
} from '../../Styles';

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