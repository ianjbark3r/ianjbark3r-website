import React from 'react';
import PropTypes from 'prop-types';
import { 
  Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle 
} from 'reactstrap';

export default class Project extends React.Component {
  render() {
    const { id, img, title, description, skills, url } = this.props.project;

    return (
      <Card key={`Card${id}`} className="shadow-lg mb-4">
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
              <a key={`CardTitleLink${id}`} href={url}>{title}</a>
            </strong>                      
          </CardTitle>
          <CardText key={`CardDescription${id}`} style={{ paddingBottom: "1vh" }}>
            {description}
          </CardText>
          <ul key={`SkillsList${id}`}>
            {skills.map(skill => {
              return (
                <li key={`Skill${id}${skill}`}>
                  <strong key={`SkillBold${id}${skill}`}>
                    {skill}
                  </strong>
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
