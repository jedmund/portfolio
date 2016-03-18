import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Scroll, { Link, Element, Events } from 'react-scroll';

import './ProjectContext.styl';

class ProjectContext extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    sections: PropTypes.array,
    url: PropTypes.string
  };

  constructor() {
    super()

    this.state = {}

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    this.setState({
      scrollPos: window.document.body.scrollTop,
      visible: false
    })

    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { name, sections, url } = this.props;

    return (
      <nav className={ this.state.visible ? "visible" : ""}>
        <div className="inner">
          <h4 className="project-name">{name}</h4>
          <div className="project-picker">{this.state.scrollPos}</div>
          <h4 className="project-link">
            <a href={url} target="_blank">Visit site</a>
          </h4>
        </div>
      </nav>
    );
  }

  handleScroll(e) {
    var position = window.document.body.scrollTop
    
    var trigger = this.props.sections[0].replace(/ /g, "-").toLowerCase()
    // var triggerPos = Get the position of the first section, somehow

    if (position > 680) {
      this.setState({visible: true})
    } else {
      this.setState({visible: false})
    }

    this.setState({scrollPos: position})
  }
}

export default ProjectContext;
