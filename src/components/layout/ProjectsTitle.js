import React from 'react';
import { ProjectsBG, Title } from '../../Styles';

const ProjectsTitle = () => {
  return (
    <ProjectsBG className="row justify-content-center">
      <div className="col-sm-9 text-center">
        <Title>
          <h1 className="display-3">My Projects</h1>
        </Title>
        <hr />
      </div>
    </ProjectsBG>
  )
};

export default ProjectsTitle;