import React from 'react';

import CTA from '../components/layout/CTA';
import Project from '../components/Project';
import ProjectsTitle from '../components/layout/ProjectsTitle'
import { projects } from '../components/layout/ProjectsList';

import { ProjectsBG, ProjectsBGLt } from '../Styles';

export default class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <ProjectsTitle />
        {projects.map((project, index) => {
          if (index === 0) {
            return (
              <ProjectsBG 
                className="row justify-content-center"
                key={`wrapper-${project.id}`}
              >
                <Project
                  index={index}
                  project={project} 
                  key={project.id} 
                />
              </ProjectsBG>
            )
          } else if (index % 2 === 0) {
            return (
              <ProjectsBG
                className="row justify-content-center"
                key={`wrapper-${project.id}`}
              >
                <Project
                  index={index}
                  project={project} 
                  key={project.id} 
                />
              </ProjectsBG>
            )
          } else {
            return (
              <ProjectsBGLt 
                className="row justify-content-center"
                key={`wrapper-${project.id}`}
              >
                <Project
                  index={index}
                  project={project} 
                  key={project.id} 
                />
              </ProjectsBGLt>
            )
          }
        })}
        <CTA />
      </div>
    )
  }
};
