import React, { Component } from 'react';
import CallToAction from '../Common/CallToAction';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Skills from './Skills';
import Projects from './Projects';

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "evanlihou."+this.getRandomString(5)+"@evanlihou.com"
    }
  }
  
  render() {
    return (
      <div className="page mainPage">
        <CallToAction email={this.state.email}/>
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
    
  getRandomString(length) {
    var randomChars = '0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }
}

export default MainPage;
