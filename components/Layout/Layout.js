/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import './Layout.styl';
import Navigation from '../Navigation';
import Test from '../Test';

function Layout({ children }) {
  return (
    <div className="Layout">
      <Navigation />
      <Test />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
