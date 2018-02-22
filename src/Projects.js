import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      modal: false
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  //Needs a better way to do this
    openModal() {
      this.setState({modal: true});
    }

    afterOpenModal() {
      // references are now sync'd and can be accessed.

    }

    closeModal() {
      this.setState({
        modal: false
      });
    };

  render() {
    return (
      <div className="projects">
        <h3>My Projects</h3>
        <ul>
          <a href="mailto:evanlihou@evanlihou.com?subject=Project%20Demo%20Request:%20ICS">
            <li>
              <img src="/ics.png" alt="Screenshot of ICS" />
              <h4>ICS</h4>
              <p><i>ICS</i> is a proprietary inventory system I designed and made for my high school over a few months. Its basic features include asset management, inventory checkin and checkout, ahead-of-time checkout requests, and user management. This project&#8217;s backend is powered by the Fat Free PHP Framework and the frontend is powered by Semantic UI.</p>
            </li>
          </a>
          <a href="mailto:evanlihou@evanlihou.com?subject=Project%20Demo%20Request:%20Website">
            <li>
              <img src="/site.png" alt="Screenshot of this website" />
              <h4>This site</h4>
              <p>This site is my first foray into React and JavaScript. It&#8217;s been a very long and hard project learning something new but enjoyable nonetheless. In production, this runs on a Linode VPS with Nginx.</p>
            </li>
          </a>
        </ul>
        <p>If you want a demo of one of the projects above, don&#8217;t hesitate to ask by clicking above!</p>
      </div>
    );
  }
}

export default Projects;
