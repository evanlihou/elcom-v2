import React, { Component } from 'react';
import './App.css';
import CallToAction from './CallToAction';
import AboutMe from './AboutMe';
import Resume from './Resume';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CallToAction />
        <AboutMe />
        <hr />
        <Resume />
      </div>
    );
  }
}

export default App;
