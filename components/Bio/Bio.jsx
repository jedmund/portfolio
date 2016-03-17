import React, { Component, PropTypes } from 'react';
import './Bio.styl';

class Bio extends Component {

  static propTypes = {
  };

  render() {
    return (
      <div className="cv">
        <p className="col-1-2 left after"><em>Justin Edmund</em> is an independent product designer living in San Francisco.</p>
        <p className="col-1-2 left after">He primarily designs and develops tools that help people realize their creativity and pursue their passions. At the moment, he is building an app called <a href="#">Maitsu.</a></p>
        <p className="col-1-2">Previously, he was the first designer hired at <a href="https://www.pinterest.com/" target="_blank">Pinterest</a>. In his four year tenure, he worked on projects in nearly every corner of the company.</p>
        <p className="col-1-2">Born and raised in New York City, he graduated from <a href="http://design.cmu.edu/" target="_blank">Carnegie Mellon University</a> with a BA in Communication Design in 2011.</p>
      </div>
    );
  }
}

export default Bio;
