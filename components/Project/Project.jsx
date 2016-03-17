import React, { Component, PropTypes } from 'react'
import Button from '../Button'
import Link from '../Link'
import './Project.styl'

class Project extends Component {

  static propTypes = {
    about: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    index: PropTypes.number
  };

  render() {
    return this.renderProject()
  }

  renderProject() {
    const { name, about, index } = this.props;
    const classes = this.assignClasses(index)
    const url = this.makeLink()

    return (
      <li className={classes}>
        <a href={url} onClick={Link.handleClick}>
          <div className="overlay"></div>
          <div className="placeholder"></div>
        </a>
        <header className="name-line">
          <div className="info">
            <a href={url} onClick={Link.handleClick}>
              <h3>{name}</h3>
            </a>
          </div>
          <div className="action col-1-4">
            <a href={url} onClick={Link.handleClick}>
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

  makeLink() {
    const prefix = "made"

    return ["", prefix, this.makeSlug()].join("/")
  }

  makeSlug() {
    return this.props.name.replace(/ /g, "-").toLowerCase()
  }
}

export default Project;
