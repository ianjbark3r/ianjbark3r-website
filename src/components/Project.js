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
    const { img, title, description, skills, url } = this.props.project;

    return (
      <Card className="shadow-lg">
        <a href={url}><CardImg top src={img} alt="project thumbnail" /></a>
        <CardBody>
          <CardTitle style={{ textAlign:"center" }}>
            <h4>
              <strong>
                <a href={url}>{title}</a>
              </strong>
            </h4>                        
          </CardTitle>
          <CardText style={{ paddingBottom: "1vh" }}>{description}</CardText>
          <CardText>
            <ul>
              {skills.map(skill => {
                return (
                  <li><strong>{skill}</strong></li>
                )
              })}
            </ul>            
          </CardText>
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
