import React, { Component } from 'react';
import CallToAction from './Common/CallToAction';
import AboutMe from './MainPage/AboutMe';
import Resume from './MainPage/Resume';
import Skills from './MainPage/Skills';
import Projects from './MainPage/Projects';

class MainPage extends Component {
  render() {
    return (
      <div className="mainPage">
        <CallToAction email="evanlihou@evanlihou.com"/>
        <AboutMe />
        <hr />
        <Projects />
        <hr />
        <Resume />
        <hr />
        <Skills />
      </div>
    );
  }
}

export default MainPage;
