/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import ProjectList from '../components/ProjectList';
import Project from '../components/Project';
import Section from '../components/Section';

const projects = [
  {
    "name": "Maitsu",
    "about": "Develop your hobbies and find new ones with Maitsu. Set your goals and make something new every week!"
  }, {
    "name": "Foundation",
    "about": "Share your story with Foundation, a platform for creators to document, collaborate and publish their work to the world."
  }, {
    "name": "Pinterest",
    "about": "Pinterest is a place to discover and save creative ideas that inspire you."
  }
];

export default class extends Component {
  render() {
    return (
      <div>
        <Section className="design" header="I make creative tools">
          <ProjectList>
            { this.renderProjects() }
          </ProjectList>
        </Section>
        <Section className="writing" header="I write about design and culture">
        </Section>
        <Section className="about" header="I work as a product designer">
          <about />
        </Section>
      </div>
    );
  }

  renderProjects() {
    return projects.map((project, i) => 
      <Project i={i} name={project.name} about={project.about} />)
  }
}
