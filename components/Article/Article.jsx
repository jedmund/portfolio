import React, { Component, PropTypes } from 'react';
import './Article.styl';

class Article extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired
  };

  render() {
    const { title, summary, date, readTime } = this.props;

    return (
      <li className="article col-3-4">
        <h3>
          <a href="#" target="_blank">
            {title}
          </a>
        </h3>
        <p className="pub-info">
          <date>{date}</date>
          <span>{readTime}</span>
        </p>
        <p className="summary">{summary}</p>
      </li>
    );
  }
}

export default Article;
