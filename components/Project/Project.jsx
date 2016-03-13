import React, { Component, PropTypes } from 'react';
import Button from '../Button';
import './Project.styl';

class Project extends Component {

  static propTypes = {
    about: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    i: PropTypes.number.isRequired
  };

  render() {
    return this.renderProject()
  }

  renderProject() {
    const { name, about, i } = this.props;
    const classes = this.assignClasses(i)

    return (
      <li className={classes}>
        <a href="#">
          <div className="overlay"></div>
          <div className="placeholder"></div>
        </a>
        <header className="name-line">
          <div className="info">
            <a href="#" target="_blank">
              <h3>{name}</h3>
            </a>
          </div>
          <div className="action col-1-4">
            <a href="#" target="_blank">
              <Button className="grey" title="See project" />
            </a>
          </div>
        </header>
        <p>{about}</p>
      </li>
    );
  }

  assignClasses(i) {
    var classes = []
    classes.push("project col-1-2")

    if (i % 2 == 0) {
       classes.push("left")
       classes.push("after")
    }

    return classes.join(" ")
  }
}

export default Project;
