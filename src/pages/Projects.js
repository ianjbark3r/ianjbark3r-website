import React, { Component } from 'react';

import CTA from '../components/layout/CTA';
import Project from '../components/Project';
import ProjectsTitle from '../components/layout/ProjectsTitle'
import { projects } from '../components/layout/ProjectsList';

import { 
  ProjectsBG, 
  ProjectsBGLt, 
  rowClasses 
} from '../Styles';

export default class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <ProjectsTitle />
        {projects.map((project, index) => {
          if (index % 2 === 0) {
            return (
              <ProjectsBG
                className={rowClasses}
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
                className={rowClasses}
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
