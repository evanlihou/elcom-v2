import React, { Component } from 'react';

class ResumeSection extends Component {
  render() {
    return (
      <div className="resume-section">
        <div className="resume-section-content">
          {this.props.current && <span className="tag">Current Position</span>}
          <h4>{this.props.title}</h4>
          {this.props.location && <span className="location">{this.props.location}</span>}
          {this.props.location && this.props.time && <span>{' '}&mdash;{' '}</span>}
          {this.props.time && <span className="time">{this.props.time}</span>}
          <ul>{this.props.children}</ul>
        </div>
      </div>
    );
  }
}

export default ResumeSection;
