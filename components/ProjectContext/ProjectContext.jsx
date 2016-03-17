import React, { Component, PropTypes } from 'react';
import './ProjectContext.styl';

class ProjectContext extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    sections: PropTypes.array,
    url: PropTypes.string
  };

  render() {
    const { name, sections, url } = this.props;

    return (
      <nav>
        <div className="inner">
          <h4 className="project-name">{name}</h4>
          <div className="project-picker">Insert Picker component</div>
          <h4 className="project-link">
            <a href={url} target="_blank">Visit site</a>
          </h4>
        </div>
      </nav>
    );
  }
}

export default ProjectContext;
