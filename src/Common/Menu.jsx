import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Link to="/">Home</Link>
        {/* <a href="/tutoring">Tutoring</a> */}
        <Link to="/now">Now</Link>
        <a href="https://blog.evanlihou.com/">Blog</a>
      </div>
    )
  }
};

export default Menu;
