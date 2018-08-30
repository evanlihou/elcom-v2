import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <a href="/">Home</a>
        <span>/</span>
        {/* <a href="/tutoring">Tutoring</a>
        <span>/</span> */}
        <a href="https://blog.evanlihou.com/">Blog</a>
      </div>
    )
  }
};

export default Menu;
