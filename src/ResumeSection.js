import React, { Component } from 'react';

class ResumeSection extends Component {
  render() {
    return (
      <div className="resume-section">
        <div className="resume-section-content">
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default ResumeSection;
