import React, { Component } from 'react';
import './Skills.sass';

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h3>My Skills</h3>
        <ul>
          <li>C# (.NET Core and .NET Framework)</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>ASP.NET MVC</li>
          <li>SharePoint</li>
          <li>Technical Support</li>
          <li>Linux Server Management</li>
          <li>Windows Server Management</li>
          {/* <li>PHP</li> */} {/* Never again.... */}
          <li>HTML</li>
          <li>CSS</li>
          <li>Sass</li>
          <li>Node.js</li>
          <li>React</li>
        </ul>
      </div>
    );
  }
}

export default Skills;
