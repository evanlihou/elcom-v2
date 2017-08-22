import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me">
        <h3>About me</h3>
        <p>
          I&#8217;m just your local East Lansing student and developer. You may know me from things such as 'procraastinating on my assignments because I was coding instead' or 'taking a nap when I have better things to do'.
        </p>
        <p>If you want to check out some of the things I&#8217;ve done, just click one of the buttons below for sections of my resume!</p>
      </div>
    );
  }
}

export default AboutMe;
