/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Section from '../components/Section';

export default class extends Component {

  render() {
    return (
      <div>
        <Section className="design" header="I make creative tools"><div /></Section>
        <Section className="writing" header="I write about design and culture"><div /></Section>
        <Section className="about" header="I work as a product designer"><div /></Section>
      </div>
    );
  }

}
