import React, { Component } from 'react';
import './Classes.css';

class Classes extends Component {
  render() {
    return (
      <div className="classes">
        <h3>Classes I Tutor In</h3>
        <ul>
          <li><h5>CSE 101</h5></li>
          <li><h5>CSE 231</h5></li>
        </ul>
        <ul>
          <li>Some other 100 and 200 level CSE classes (get in touch!)</li>
        </ul>
      </div>
    );
  }
}

export default Classes;
