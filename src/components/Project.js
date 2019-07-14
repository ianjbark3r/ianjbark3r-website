import React from 'react';
import PropTypes from 'prop-types';
import { 
  Card, 
  CardImg, 
  CardBody,
  CardTitle 
} from 'reactstrap';

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

    return (
      <Card key={`Card${id}`} className="shadow-sm mb-4">
        <a key={`PhotoLink${id}`} href={url}>
          <CardImg 
            top
            key={`CardImg${id}`} 
            src={img} 
            alt="project thumbnail" 
          />
        </a>
        <CardBody key={`CardBody${id}`}>
          <CardTitle key={`CardTitle${id}`} style={{ textAlign:"center" }}>
            <strong key={`CardTitleBold${id}`}>
              <a 
                key={`CardTitleLink${id}`} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {title}
              </a>
            </strong>                      
          </CardTitle>
          <p className="mt-2 text-center">
            <strong>
              <a
                key={`RepoLink${id}`} 
                href={repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                (View repo)
              </a>
            </strong>
          </p>
          <div key={`CardDescription${id}`}>
            <strong>Concept</strong>
            <p>
              {concept}
            </p>
            <strong>Challenges</strong>
            <p>
              {challenges}
            </p>
            <strong>Solutions</strong>
            <p>
              {solutions}
            </p>
          </div>
          <strong> Technologies</strong>
          <ul style={{ paddingTop:".5em" }} key={`TechList${id}`}>
            {tech.map(tech => {
              return (
                <li key={`Tech${id}${tech}`}>
                  {tech}
                </li>
              )
            })}
          </ul>
        </CardBody>
      </Card>
    )
  }
}

Card.propTypes = {
  className: PropTypes.string
};

CardImg.propTypes = {
  className: PropTypes.string,
  top: PropTypes.bool
};
