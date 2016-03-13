import React, { Component, PropTypes } from 'react';
import './Button.styl';

class Button extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string
  };

  render() {
    const { title, className } = this.props;

    return (
      <button className={className}>{title}</button>
    );
  }
}

export default Button;
