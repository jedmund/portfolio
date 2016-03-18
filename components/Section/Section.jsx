import React, { Component, PropTypes } from 'react';
import Image from '../Image'
import './Section.styl';

class Section extends Component {

  static propTypes = {
    header: PropTypes.string.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.object,
    underlined: PropTypes.bool
  };

  render() {
    const { className, header, id, image, children, underlined } = this.props;

    if (image) {
      const normal = image["1x"]
      const retina = image["2x"]

      var imageElement = <Image src={normal} retina={retina} />
    }

    return (
      <section className={className} id={ id ? id : ""}>
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
