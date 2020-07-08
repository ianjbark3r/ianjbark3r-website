import React from 'react';

import { ProjImages } from '../../Styles';

const ProjectImages = (props) => {
  const {
    id,
    img1,
    img2,
    img3,
    url
  } = props.project.project;

  return (
    <ProjImages className="d-lg-block d-none col-lg-4">
      {img1 && (
        <a key={`link-${id}-01`} href={url}>
          <img
            className="shadow mb-4 mt-2"
            key={`img-${id}-01`} 
            src={img1} 
            alt="project thumbnail" 
          />
        </a>
      )}
      {img2 && (
        <a key={`link-${id}-02`} href={url}>
          <img
            className="shadow mb-4 mt-2"
            key={`img-${id}-02`} 
            src={img2} 
            alt="project thumbnail" 
          />
        </a>
      )}
      {img3 && (
        <a key={`link-${id}-03`} href={url}>
          <img
            className="shadow mb-4 mt-2"
            key={`img-${id}-03`} 
            src={img3} 
            alt="project thumbnail" 
          />
        </a>
      )}
    </ProjImages>
  )
}

export default ProjectImages