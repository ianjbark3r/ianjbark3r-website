import React from 'react';
import styled from 'styled-components';

import { colClasses } from '../../Styles';
import { rowClasses } from '../../Styles';

const PageTitle = styled.div `
    font-family: "EB Garamond";
    padding-top: 12.5vh;
    text-align: center;
  `

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