import React, { Component } from 'react';
import './Resume.css';
import ResumeSection from './ResumeSection';

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <h3>Resume</h3>
        <ResumeSection title="Tech Freelancing" description="Summer of 2017 brought me to do one of the most interesting things I’ve done so far, and it’s brought me together with several companies to do things across the tech field. I’ve worked with great companies like Peak Systems (link) for a large thin client deployment and The Consumer Insight (link) to support a major internet provider’s brand and rapport with their resellers." />
        <ResumeSection title="Kohl’s Department Stores" description="I began as a cashier, which included responsibilities such as keeping track of current promotions, handling money, ensuring all items are paid for before a customer leaves, and offering applications for customers for a credit card which gives them access to more sales. The later months of this was working in the Men’s department, where responsibilities included assisting customers, cleaning the floor, recovering returned and tried-on items to the sales floor, and fulfilling online orders." />
        <ResumeSection title="Television Studio Engineer" description="I’ve spent many hours with my high school’s television production crew helping to troubleshoot broken equipment and remodel the studio to make use of new equipment. Additionally, I was responsible for designing and programming an inventory management system to streamline the department’s equipment sign-in/sign-out process. This was my unofficial second job while I was in high school, but one that I will never forget." />
      </div>
    );
  }
}

export default Resume;
