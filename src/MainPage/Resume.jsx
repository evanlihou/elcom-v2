import React, { Component } from 'react';
import './Resume.sass';
import ResumeSection from './ResumeSection';

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <h3>Curriculum Vitae</h3>
        <ResumeSection
          title="Software Engineer"
          location="Amrock"
          time="July 2021 to Present"
          current
        >
          Since starting my time at Amrock, I've been working on both new and
          legacy applications to support internal teams specializing in
          the management of third-party partners. These new applications include
          microservices written in Angular (TypeScript) and .NET Core and the legacy
          applications written in .NET Framework including WPF Windows applications,
          ASP.NET code-behind websites, and command line tools.
        </ResumeSection>
        <ResumeSection
          title="Student Info Tech"
          location="Facility for Rare Isotope Beams"
          time="May 2018 to June 2021"
        >
          My position at the FRIB began in SharePoint development maintaining
          and creating various simple to moderately complex solutions for
          business units, then evolved to spending most of my time working on
          their ASP.NET MVC application for more advanced solutions.
        </ResumeSection>
        <ResumeSection
          title="Broad Scholar"
          location="MSU Broad College of Business"
          time="September 2017 to May 2018"
        >
          I had the pleasure of working with
          {/* Note: React needs the {' '} to add space around links */}
          {' '}<a href="https://broad.msu.edu/facultystaff/zhanglu/">
            Dr. Lu Zhang
          </a>{' '}
          from Michigan State University's School of Hospitality Business.
          During my time in this position, I assisted in research, including
          categorizing and collating academic papers as well as scraping data
          from online sources to collect information for multiple papers and
          manuscripts.
        </ResumeSection>
        <ResumeSection
          title="Tech Freelancing"
          time="Summer 2017"
        >
          My time freelancing has brought me together with several companies to
          do diverse jobs across the tech field. I’ve worked with great
          companies like Peak Systems for a large thin client deployment and
          The Consumer Insight to support a major internet provider’s brand and
          rapport with their resellers.
        </ResumeSection>
      </div>
    );
  }
}

export default Resume;
