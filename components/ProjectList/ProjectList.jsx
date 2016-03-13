import React, { Component, PropTypes } from 'react';

class ProjectList extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <nav>
        <ul>
          {children}
        </ul>
      </nav>
    );
  }
}

export default ProjectList;
