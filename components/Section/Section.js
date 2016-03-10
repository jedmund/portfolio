import React, { Component, PropTypes } from 'react';
import './Section.styl';

class Section extends Component {

  static propTypes = {
    header: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
  };

  render() {
    const { className, header, children } = this.props;
    return (
      <section className={className}>
        <header>
          <h2>{header}</h2>
        </header>
        {children}
      </section>
    );
  }
}

export default Section;
