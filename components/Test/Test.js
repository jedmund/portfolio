/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Test.styl';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Test extends Component {

  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    state: PropTypes.object,
    onClick: PropTypes.func,
  };

  static handleClick = event => {};

  render() {
    const { to, children, ...props } = this.props;
    return <div className="test" {...props}>Hello</div>;
  }

}

export default Test;
