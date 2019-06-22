import React, { Component } from 'react';
import './AboutMe.sass';

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me">
        <h3>About me</h3>
        <p>
        I’m an all-around nerd and Computer Science major based in East Lansing, MI and going to MSU. I’m currently tutoring in CSE 101 but if you need help in other CSE classes don’t hesitate to get in touch, I might be able to help you!
        </p>
      </div>
    );
  }
}

export default AboutMe;
