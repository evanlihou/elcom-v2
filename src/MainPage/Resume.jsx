import React, { Component } from 'react';
import './Resume.css';
import ResumeSection from './ResumeSection';

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <h3>Curriculum Vitae</h3>
        <ResumeSection title="Student Info Tech" location="Facility for Rare Isotope Beams" current>
          
        </ResumeSection>
        <ResumeSection title="Broad Scholar" location="MSU Broad College of Business">
          I had the pleasure of working with
          <a href="https://broad.msu.edu/facultystaff/zhanglu/">
            Dr. Lu Zhang
          </a>
          from Michigan State University's School of Hospitality Business.
          During my time in this position, I assisted in research, including
          categorizing and collating academic papers as well as scraping data
          from online sources to collect information for multiple papers and
          manuscripts.
        </ResumeSection>
        <ResumeSection title="Tech Freelancing">
          Summer of 2017 brought me to do one of the most interesting things
          I’ve done so far, and it’s brought me together with several companies
          to do things across the tech field. I’ve worked with great companies
          like Peak Systems for a large thin client deployment and The Consumer
          Insight to support a major internet provider’s brand and rapport with
          their resellers.
        </ResumeSection>
      </div>
    );
  }
}

export default Resume;
