import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

export default class Project extends React.Component {
  render() {
    const { img, title, description, skills, url } = this.props.project;

    return (
      <Card className="text-center shadow-lg">
        <CardImg top src={img} alt="project thumbnail" />
        <CardBody>
          <CardTitle><a href={url}>{title}</a></CardTitle>
          <CardText style={{ paddingBottom: "1vh" }}>{description}</CardText>
          <CardText style = {{ paddingBottom: "1vh" }}>
            {skills.map(skill => {
              return (
                <p><strong>{skill}</strong></p>
              )
            })}
          </CardText>
          <Button>Stuff</Button>
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
