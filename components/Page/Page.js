import React, { PropTypes } from 'react';
import './Page.styl';
import Header from '../Header';

function Page({ children }) {
  return (
    <div className="page">
      <Header />
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;
