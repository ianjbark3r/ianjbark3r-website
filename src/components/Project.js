import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

export default class Project extends React.Component {
  render() {
    const { img, title, description, skills, url } = this.props.project;

    return (
      <Card className="text-center shadow-lg">
        <a href={url}><CardImg top src={img} alt="project thumbnail" /></a>
        <CardBody>
          <CardTitle><a href={url}>{title}</a></CardTitle>
          <CardText style={{ paddingBottom: "1vh" }}>{description}</CardText>
          <CardText>
            {skills.map(skill => {
              return (
                <p><strong>{skill}</strong></p>
              )
            })}
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
