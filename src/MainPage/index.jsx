import React, { Component } from 'react';
import CallToAction from '../Common/CallToAction';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Skills from './Skills';
import Projects from './Projects';

class MainPage extends Component {
  render() {
    return (
      <div className="page mainPage">
        <CallToAction email="evanlihou@evanlihou.com"/>
        <div className="pageContent">
          <AboutMe />
          <hr />
          <Projects />
          <hr />
          <Resume />
          <hr />
          <Skills />
        </div>
      </div>
    );
  }
}

export default MainPage;
