import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Menu.sass';
import ThemeSwitch from './ThemeSwitch';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="links">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/now">Now</Link>
          <span>/</span>
          <Link to="/blog">Blog</Link>
          {/* Coming soon.... */}
          {/* <span>/</span>
          <Link to="/stats">Statistics</Link> */}
        </div>
        <ThemeSwitch />
      </div>
    )
  }
};

export default Menu;
