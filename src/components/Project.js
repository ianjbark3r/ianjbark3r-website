import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

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

Project.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.object,
  url: PropTypes.string,
}

Card.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  className: PropTypes.string
};

CardBody.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardImg.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
  top: PropTypes.bool,
  bottom: PropTypes.bool
};

CardText.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardTitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
