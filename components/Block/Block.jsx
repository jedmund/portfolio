import React, { Component, PropTypes } from 'react';
import './Block.styl';

class Block extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div className="block">
        {children}
      </div>
    );
  }
}

export default Block;
