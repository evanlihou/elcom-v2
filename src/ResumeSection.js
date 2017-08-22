import React, { Component } from 'react';

class ResumeSection extends Component {
  render() {
    return (
      <div className="resume-section">
        <div className="resume-section-content">
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
          <aside>{this.props.subtext}</aside>
        </div>
        <a><i className="fa fa-plus fa-2x"></i></a>
      </div>
    );
  }
}

export default ResumeSection;
