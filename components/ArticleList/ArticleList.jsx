import React, { Component, PropTypes } from 'react';

class ArticleList extends Component {

  render() {
    const { children } = this.props;

    return (
      <nav>
        <ul>
          {children}
        </ul>
      </nav>
    );
  }
}

export default ArticleList;
