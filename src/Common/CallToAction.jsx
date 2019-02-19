import React, { Component } from 'react';
import './CallToAction.css';
import Menu from './Menu'

class CallToAction extends Component {
  render() {
    return (
      <div className="call-to-action">
        <Menu />
        <div className="cta-content">
          <h1 className="noPrint">Hey there!</h1>
          <h2><span className="noPrint">I'm </span>Evan Lihou</h2>
          <a href={"mailto:" + this.props.email} className="contact">Get in touch</a>
          <span className="contact-text">{this.props.email}</span>
          <section className="social">
            {this.props.showAllSocials &&
              <a href="//www.twitter.com/evanlihou"><i className="fa fa-twitter"></i>@evanlihou</a>
            }
            {this.props.showAllSocials &&
              <a href="//snapchat.com/add/evanlihou"><i className="fa fa-snapchat"></i>@evanlihou</a>
            }
            <a href="//www.linkedin.com/in/evan-lihou-993a26147/"><i className="fa fa-linkedin"></i>Evan Lihou</a>
            <a href="//github.com/evanlihou"><i className="fa fa-github"></i>@evanlihou</a>
          </section>
        </div>
      </div>
    );
  }
}

export default CallToAction;
