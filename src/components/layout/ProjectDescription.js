import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const getConfigurableProps = () => ({
  dynamicHeight: true,
  showStatus: false,
  showThumbs: false
})

const ProjectDescription = (props) => {
  const {
    id,
    img1,
    img2,
    img3,
    title,
    concept,
    challenges,
    solutions,
    repoUrl,
    tech,
    url
  } = props.project.project;

  return (
    <>
      <div className="d-lg-none d-block col-sm-8">
        <Carousel {...getConfigurableProps()}>
          <a key={`mobile-link-${id}`} href={url}>
            <img
              className="shadow mb-4 img-fluid"
              key={`mobile-img1-${id}`}
              src={img1}
              alt="project thumbnail"
            />
          </a>
          <a key={`mobile-link-${id}`} href={url}>
            <img
              className="shadow mb-4 img-fluid"
              key={`mobile-img2-${id}`}
              src={img2}
              alt="project thumbnail"
            />
          </a>
          <a key={`mobile-link-${id}`} href={url}>
            <img
              className="shadow mb-4 img-fluid"
              key={`mobile-img3-${id}`}
              src={img3}
              alt="project thumbnail"
            />
          </a>
        </Carousel>
      </div>
      <div className="col-lg-4 col-sm-8 mx-4 mt-4">
        <strong key={`title-${id}`}>
          <a 
            key={`title-link-${id}`} 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <h1 className="pb-2 text-center display-4">
              <strong>
                {title}
              </strong>
            </h1>
          </a>
        </strong>
        <p className="mt-2 text-center">
          <strong>
            <a
              key={`repo-link-${id}`} 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary btn-sm shadow-sm my-3">
                view repo
              </button>
            </a>
          </strong>
        </p>
        <hr className="mb-4" />
        <div key={`description-${id}`}>
          <h2>
            <strong>
              Concept
            </strong>
          </h2>
          <p>
            {concept}
          </p>
          <h2>
            <strong>
              Challenges
            </strong>
          </h2>
          <p>
            {challenges}
          </p>
          <h2>
            <strong>
              Solutions
            </strong>
          </h2>
          <p>
            {solutions}
          </p>
          <h2> 
            <strong>
              Technologies
            </strong>
          </h2>
          <ul style={{ paddingTop:".5em" }} key={`TechList${id}`}>
            {tech.map(tech => {
              return (
                <li key={`${id}-${tech}`}>
                  {tech}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProjectDescription;