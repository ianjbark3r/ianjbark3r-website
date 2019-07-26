import React from 'react';

export default class Project extends React.Component {
  render() {
    const { 
      id, 
      img, 
      title,
      concept,
      challenges,
      solutions, 
      repoUrl, 
      tech, 
      url 
    } = this.props.project;

    if (this.props.index % 2 === 0) {
      return (
        <>
          <div className="d-md-none d-block col-sm-8">
            <a key={`SmallPhotoLink${id}`} href={url}>
              <img
                style={{
                  height:"auto",
                  width:"100%"
                }}
                className="shadow mb-4 mt-2"
                key={`CardImg${id}`} 
                src={img} 
                alt="project thumbnail" 
              />
            </a>
          </div>
          <div className="d-md-block d-none col-md-5">
            <a key={`LargePhotoLink${id}`} href={url}>
              <img
                style={{
                  height:"auto",
                  width:"100%"
                }}
                className="shadow mb-4 mt-2"
                key={`CardImg${id}`} 
                src={img} 
                alt="project thumbnail" 
              />
            </a>
          </div>
          <div className="col-md-4 col-sm-8">
            <strong key={`CardTitleBold${id}`}>
              <a 
                key={`CardTitleLink${id}`} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <h1 className="pb-2 text-center">
                  {title}
                </h1>
              </a>
            </strong>
            <p className="mt-2 text-center">
              <strong>
                <a
                  key={`RepoLink${id}`} 
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
            <div key={`CardDescription${id}`}>
              <h4>Concept</h4>
              <p>
                {concept}
              </p>
              <h4>Challenges</h4>
              <p>
                {challenges}
              </p>
              <h4>Solutions</h4>
              <p>
                {solutions}
              </p>
            </div>
            <h4> Technologies</h4>
            <ul style={{ paddingTop:".5em" }} key={`TechList${id}`}>
              {tech.map(tech => {
                return (
                  <li key={`Tech${id}${tech}`}>
                    {tech}
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="d-md-none d-block col-sm-8">
            <a key={`SmallPhotoLink${id}`} href={url}>
              <img
                style={{
                  height:"auto",
                  width:"100%"
                }}
                className="shadow mb-4 mt-2"
                key={`CardImg${id}`} 
                src={img} 
                alt="project thumbnail" 
              />
            </a>
          </div>
          <div className="col-md-4 col-sm-8">
            <strong key={`CardTitleBold${id}`}>
              <a 
                key={`CardTitleLink${id}`} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <h1 className="pb-2 text-center">
                  {title}
                </h1>
              </a>
            </strong>
            <p className="mt-2 text-center">
              <strong>
                <a
                  key={`RepoLink${id}`} 
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
            <div key={`CardDescription${id}`}>
              <h4>Concept</h4>
              <p>
                {concept}
              </p>
              <h4>Challenges</h4>
              <p>
                {challenges}
              </p>
              <h4>Solutions</h4>
              <p>
                {solutions}
              </p>
            </div>
            <h4> Technologies</h4>
            <ul style={{ paddingTop:".5em" }} key={`TechList${id}`}>
              {tech.map(tech => {
                return (
                  <li key={`Tech${id}${tech}`}>
                    {tech}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="d-md-block d-none col-md-5">
            <a key={`LargePhotoLink${id}`} href={url}>
              <img
                style={{
                  height:"auto",
                  width:"100%"
                }}
                className="shadow mb-4 mt-2"
                key={`CardImg${id}`} 
                src={img} 
                alt="project thumbnail" 
              />
            </a>
          </div>
        </>
      )
    }
  }
}
