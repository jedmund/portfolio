/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import './Header.styl';
import Link from '../Link';

function Header() {
  return (
    <header>
      <a href="/" onClick={Link.handleClick}>
        <span className="picture">@jedmund</span>
      </a>
    </header>
  );
}

export default Header;
