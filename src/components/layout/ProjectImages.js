import React from 'react';

const ProjectImages = (props) => {
  const {
    id,
    img1,
    img2,
    img3,
    url
  } = props.project.project;

  return (
    <div className="d-md-block d-none col-md-4">
      {img1 && (
        <a key={`link-${id}-01`} href={url}>
          <img
            style={{
              height:"auto",
              width:"100%"
            }}
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
            style={{
              height:"auto",
              width:"100%"
            }}
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
            style={{
              height:"auto",
              width:"100%"
            }}
            className="shadow mb-4 mt-2"
            key={`img-${id}-03`} 
            src={img3} 
            alt="project thumbnail" 
          />
        </a>
      )}
    </div>
  )
}

export default ProjectImages