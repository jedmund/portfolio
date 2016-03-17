import React, { Component, PropTypes } from 'react';
import './Image.styl';

class Image extends Component {

  static propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    retina: PropTypes.string.isRequired
  };

  render() {
    const { alt, src, retina, className } = this.props;

    var classList = ["image"]
    if (className) {
      classList.push(className)
    }
    var classes = classList.join(" ")


    var srcSet = src + " 1x, " + retina + " 2x"

    return (
      <img className={classes} alt={alt} src={src} srcSet={srcSet} />
    );
  }
}

export default Image;
