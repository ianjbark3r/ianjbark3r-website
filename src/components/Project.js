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
          <div className="d-md-block d-none col-md-4">
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
            <div key={`ProjectDescription${id}`}>
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
                    <li key={`Tech${id}${tech}`}>
                      {tech}
                    </li>
                  )
                })}
              </ul>
            </div>
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
            <div key={`ProjectDescription${id}`}>
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
                    <li key={`Tech${id}${tech}`}>
                      {tech}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="d-md-block d-none col-md-4">
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
