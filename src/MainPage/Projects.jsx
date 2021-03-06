import React, { Component } from 'react';
import './Projects.sass';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      modal: false
    }
  }

  render() {
    return (
      <div className="projects">
        <h3>My Projects</h3>
        <ul>
          <ProjectEntry name="FIRST at Michigan State Website" href="https://github.com/famnms/website-october" img="/fms-site.png">
            A website running on October CMS which is still a work in progress.
            This project will include systems for member management, attendance
            tracking, event calendars, and RSVPs.
          </ProjectEntry>
          <ProjectEntry name={"FIRST Alumni Collegiate Competition Ri3D Scoreboard"} href="https://github.com/firstatmsu/facc-scoreboard-svr" img="/scoreboard.png">
            A realtime scoreboard made especially for a Robot in 3 Days
            competition held by <i>FIRST</i> alumni for college students. Runs a
            Hapi.js server and presented with the help of React and Socket.io
            for instant updates.
          </ProjectEntry>
          <ProjectEntry name="EvanLihou.com" href="https://github.com/evanlihou/elcom-v2" img="/site.png">
            This site is my first foray into React and JavaScript. It's
            been a very long and hard project learning something new but
            enjoyable nonetheless. In production, this runs on a Linode VPS with
            Nginx.
          </ProjectEntry>
          <ProjectEntry name="ICS" href="https://github.com/evanlihou/ics" img="/ics.png">
            <i>ICS</i> is a proprietary inventory system I designed and made
            for my high school over a few months. Its basic features include
            asset management, inventory checkin and checkout, ahead-of-time
            checkout requests, and user management. This project's
            backend is powered by the Fat Free PHP Framework and the frontend
            is powered by Semantic UI.
          </ProjectEntry>
        </ul>
        <p>If you want a demo of one of the projects above, don't hesitate to ask by clicking above!</p>
      </div>
    );
  }
}

class ProjectEntry extends Component {
  render() {
    return (
      <a href={this.props.href}>
        <li>
          {this.props.img &&
            <img src={this.props.img} alt={"Screenshot of " + this.props.name} />
          }
          <h4>{this.props.name}</h4>
          <p>{this.props.children}</p>
        </li>
      </a>
    )
  }
}

export default Projects;
