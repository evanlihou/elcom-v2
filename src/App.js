import React, { Component } from 'react';
import './App.css';
import CallToAction from './CallToAction';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Skills from './Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CallToAction />
        <AboutMe />
        <hr />
        <Resume />
        <hr />
        <Skills />
      </div>
    );
  }
}

export default App;
