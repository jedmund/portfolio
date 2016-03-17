import React, { Component, PropTypes } from 'react';
import Image from '../Image'
import './Section.styl';

class Section extends Component {

  static propTypes = {
    header: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    image: PropTypes.object,
    underlined: PropTypes.boolean
  };

  render() {
    const { className, header, image, children, underlined } = this.props;

    if (image) {
      const normal = image["1x"]
      const retina = image["2x"]

      var imageElement = <Image src={normal} retina={retina} />
      console.log(imageElement)
    }

    return (
      <section className={className}>
        <header>
          <h2 className={ underlined ? "underlined" : "" }>{header}</h2>
          {imageElement}
        </header>
        {children}
      </section>
    );
  }
}

export default Section;
