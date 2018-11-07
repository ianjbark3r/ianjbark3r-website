import React from 'react';
import cardImg from '../card-placeholder.png';
import PropTypes from 'prop-types';

export default class Project extends React.Component {
  render() {
    const { img, title, description, skills, url } = this.props.project;
    const skillsLis = skills.map(skill => {
      return (
        <li className="list-group-item">{skill}</li>
      )
    });

    return (
      <div className="card text-center shadow-lg">
        <img className="card-img-top" src={img} alt="project thumbnail" />
        <div className="card-body">
          <h5 className="card-title"><a href={url}>{title}</a></h5>
          <p className="card-text">{description}</p>
          <p className="card-text"></p>
        </div>
        <ul className="list-group list-group-flush">{skillsLis}</ul>
      </div>
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
