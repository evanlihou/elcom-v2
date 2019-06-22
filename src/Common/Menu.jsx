import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Menu.sass';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Link to="/">Home</Link>
        {/* <a href="/tutoring">Tutoring</a> */}
        <Link to="/now">Now</Link>
        <Link to="/blog">Blog</Link>
      </div>
    )
  }
};

export default Menu;
