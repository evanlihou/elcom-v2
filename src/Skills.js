import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h3>My Skills</h3>
        <ul>
          <li><h5>Linux Server Management</h5></li>
          <li><h5>Windows Server Management</h5></li>
          <li><h5>PHP</h5></li>
          <li><h5>JavaScript</h5></li>
          <li><h5>HTML</h5></li>
          <li><h5>CSS</h5></li>
          <li><h5>Sass</h5></li>
          <li><h5>Node.js</h5></li>
          <li><h5>React</h5></li>
          <li><h5>Video and Audio Production</h5></li>
          <li><h5>Adobe Creative Suite</h5></li>
        </ul>
      </div>
    );
  }
}

export default Skills;
