import React, { Component, PropTypes } from 'react';
import './MentionCard.styl';

class MentionCard extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    source: PropTypes.string,
    sourceUrl: PropTypes.string.isRequired,
    sourceType: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  };

  render() {
    const { title, source, sourceUrl, sourceType, date } = this.props;

    return (
      <li className="mention card col-1-2">
        <a href={sourceUrl} target="_blank">
          <h4>
            <cite dangerouslySetInnerHTML={{__html: title}} />
          </h4>

          <footer>
            { source ? <span className="source">{source}</span> : ""}
            <span className="source source-type">{sourceType}</span>
            <time>{date}</time>
          </footer>
        </a>
      </li>
    );
  }
}

export default MentionCard;
