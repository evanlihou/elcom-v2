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
          <li>Led the engineering efforts for the auto-assignment of notaries for remote closings, one of the first microservices in the company to be built in Amazon Web Services</li>
          <li>Improved and maintained the Partner Management service, which was at the forefront of technology modernization initiatives</li>
          <li>Implemented feature flagging, retry/backoff, and hardened the security of multiple applications</li>
          <li>Created SQL scripts to streamline troubleshooting process for data synchronization between modern and legacy systems</li>
          <li>Maintained and supported both legacy and new applications as well as B2B integrations</li>
        </ResumeSection>
        <ResumeSection
          title="Student Info Tech"
          location="Facility for Rare Isotope Beams"
          time="May 2018 to June 2021"
        >
          <li>Led requirements gathering and development of upgrades to anonymous employee concern submission system in .NET Core</li>
          <li>Improved and extended automated build and deployment processes for .NET Core and .NET Framework web applications in TeamCity and Octopus Deploy</li>
          <li>Developed account tracking system, which includes access requests, lifecycle management, and auditing capabilities using SharePoint and automated PowerShell jobs </li>
          <li>Maintained and supported existing business systems applications in PHP, .NET Core, and .NET Framework using agile methodology</li>
        </ResumeSection>
        <ResumeSection
          title="Broad Scholar"
          location="MSU Broad College of Business"
          time="September 2017 to May 2018"
        >
          <li>Worked with {' '}<a href="https://broad.msu.edu/facultystaff/zhanglu/">Dr. Lu Zhang</a>{' '}from Michigan State University's School of Hospitality Business</li>
          <li>Assisted in research for multiple papers and manuscripts</li>
          <li>Categorized and collated academic papers</li>
          <li>Utilized web scraping to collect data</li>
        </ResumeSection>
        <ResumeSection
          title="Tech Freelancing"
          time="2017 to 2018"
        >
          <li>Worked with various companies as an independent contractor</li>
          <li>Performed point-of-sale maintenance</li>
          <li>Designed an e-commerce site for a local apparel company</li>
        </ResumeSection>
      </div>
    );
  }
}

export default Resume;
