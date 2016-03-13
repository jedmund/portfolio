import React, { Component, PropTypes } from 'react';
import Button from '../Button';
import './OmnibusProject.styl';

class OmnibusProject extends Component {

  static propTypes = {
    about: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    i: PropTypes.number.isRequired
  };

  render() {
    return this.renderOmnibus()
  }

  renderOmnibus() {
    const { name, about, projects, i } = this.props;

    return (
      <li className="omnibus project col-full">
        <div className="col-1-2 left after">
          <div className="overlay"></div>
          <div className="placeholder"></div>
        </div>
        <div className="col-1-2">
          <header className="name-line">
            <div className="info">
              <a href="#" target="_blank">
                <h3>{name}</h3>
              </a>
            </div>
            <div className="action">
              <a href="#" target="_blank">
              </a>
            </div>
          </header>
          <p>{about}</p>
          <nav>
            <ul>
              { this.renderProjects() }
            </ul>
          </nav>
        </div>
      </li>
    );
  }

  renderProjects() {
    return this.props.projects.map((p, i) => 
      <li>
        <a href="#">
          <span>{p.name}</span>
          <Button className="grey" title="See Project" />
        </a>
      </li>)
  }
}

export default OmnibusProject;
