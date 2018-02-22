import React, { Component } from 'react';
import './CallToAction.css';

class CallToAction extends Component {
  render() {
    return (
      <div className="call-to-action">
        <div className="cta-content">
          <h1>Hey there!</h1>
          <h2>I&#8217;m Evan Lihou</h2>
          <a href="mailto:evanlihou@evanlihou.com" className="contact">Get in touch</a>
          <section className="social">
            <a href="//www.linkedin.com/in/evan-lihou-993a26147/"><i className="fa fa-linkedin"></i>Evan Lihou</a>
            <a href="//facebook.com/profile.php?id=100015321851626"><i className="fa fa-facebook"></i>Evan Lihou</a>
            <a href="//github.com/evanlihou"><i className="fa fa-github"></i>@evanlihou</a>
          </section>
        </div>
      </div>
    );
  }
}

export default CallToAction;
