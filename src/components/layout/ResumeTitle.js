import React from 'react';

import { colClasses,
  ResTitle,
  rowClasses
} from '../../Styles';

const ResumeTitle = () => {
  return (
    <ResTitle className={rowClasses}>
      <div className={colClasses}>
        <h1 className="display-3">Résumé</h1>
        <hr />
      </div>
    </ResTitle>
  )
};

export default ResumeTitle;