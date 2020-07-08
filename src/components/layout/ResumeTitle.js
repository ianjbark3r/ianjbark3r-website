import React from 'react';

import { colClasses,
  PageTitle,
  rowClasses
} from '../../Styles';

const ResumeTitle = () => {
  return (
    <div style={{ backgroundColor:"#FFF" }} className={rowClasses}>
      <div className={colClasses}>
        <PageTitle>
          <h1 className="display-3">Résumé</h1>
        </PageTitle>
        <div>
          <hr />
        </div>
      </div>
    </div>
  )
};

export default ResumeTitle;