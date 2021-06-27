import React, { Component } from 'react';
import './AboutMe.sass';

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me">
        <h3>About me</h3>
        <p>
          Recent college graduate and all-around nerd based near Detroit, MI.
          Below you’ll find some of the things I’ve done recently, as well as
          a breakdown of what I can do. If you want to get in touch with me
          professionally, or just say hey, don’t hesitate to do so using the button
          above.
        </p>
      </div>
    );
  }
}

export default AboutMe;
