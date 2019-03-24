import React, { Component } from 'react';
import CallToAction from '../Common/CallToAction'
import AboutMe from './AboutMe'
import WhyMe from './WhyMe'
import Classes from './Classes'
import Rates from './Rates'
import Calendar from './Calendar'

class Tutoring extends Component {
  render() {
    return (
      <div className="mainPage">
        <CallToAction showAllSocials email="tutoring@evanlihou.com"/>
        <div className="pageContent">
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
      </div>
    );
  }
}

export default Tutoring;
