import React, { Component } from 'react';
// import Typewriter from 'typewriter-effect';
import './CallToAction.sass';

class Social extends Component {
  render() {
    return (
      <a href={this.props.link}><i className={"fab fa-"+this.props.icon} />{this.props.text}</a>
    )
  }
}

class Socials extends Component {
  render() {
    return (
      <section className="social">
        {this.props.socials.map((social, i) => 
          <Social key={i} {...social} />
        )}
      </section>
    )
  }
}

class CallToAction extends Component {
  render() {

    return (
      <div className="call-to-action">
        <div className="cta-content">
          <h1 className="noPrint">Hey there!</h1>
          <h2><span className="noPrint">I'm </span>Evan Lihou</h2>
          {/* <h3 className="noPrint">I do <Typewriter
            options={{
              strings: [
                "custom web solutions",
                ".NET development",
                "freelancing"
              ],
              autoStart: true,
              loop: true,
              delay: 25
            }}
          /></h3> */}
          <a href={"mailto:" + this.props.email} className="contact">Get in touch</a>
          <span className="contact-text">{this.props.email}</span>
          <Socials socials={[
            {
                "icon": "linkedin",
                "link": "https://www.linkedin.com/in/evan-lihou",
                "text": "Evan Lihou"
            },
            {
                "icon": "github",
                "link": "https://github.com/evanlihou",
                "text": "@evanlihou"
            },
            {
                "icon": "twitter",
                "link": "https://twitter.com/evanlihou",
                "text": "@evanlihou"
            }
          ]}/>
        </div>
      </div>
    );
  }
}

export default CallToAction;
