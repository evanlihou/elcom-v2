import React, { Component } from 'react';
import CallToAction from './Common/CallToAction'
import AboutMe from './Tutoring/AboutMe'
import WhyMe from './Tutoring/WhyMe'
import Classes from './Tutoring/Classes'
import Rates from './Tutoring/Rates'
import Calendar from './Tutoring/Calendar'

class Tutoring extends Component {
  render() {
    return (
      <div className="mainPage">
        <CallToAction showAllSocials email="tutoring@evanlihou.com"/>
        <AboutMe />
        <hr />
        <WhyMe />
        <hr />
        <Classes />
        <hr />
        <Rates />
        <hr />
        <Calendar />
      </div>
    );
  }
}

export default Tutoring;
