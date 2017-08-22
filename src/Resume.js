import React, { Component } from 'react';
import './Resume.css';
import ResumeSection from './ResumeSection';

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <h3>Resume</h3>
        <ResumeSection title="IT Freelancing" description="The last summer has been spent doing various things for various companies. It's been interesting." subtext="For more detailed information, click the + icon to the right" />
      </div>
    );
  }
}

export default Resume;
