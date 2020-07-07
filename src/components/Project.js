import React from 'react';

import ProjectImages from './layout/ProjectImages';
import ProjectDescription from './layout/ProjectDescription';

export default class Project extends React.Component {
  render() {
    return (
      <>
        {(this.props.index % 2 === 0) && (
          <ProjectImages project={this.props} />
        )}
        <ProjectDescription project={this.props} />
        {(this.props.index % 2 !== 0) && (
          <ProjectImages project={this.props} />
        )}
      </>
    )
  }
}
