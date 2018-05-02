import React, { Component } from 'react';
import './Rates.css';

class Rates extends Component {
  render() {
    return (
      <div className="rates">
        <h3>How much?</h3>
        <p>
        My base rate is $15 an hour for anywhere on the MSU campus. Want to negotiate a different rate? <a href="mailto:tutoring@evanlihou.com">Get in touch with me</a> and I’ll do my best to accomodate. Additionally, if none of the available times listed below work for you, let me know and we can try to schedule for another time.
        </p>
      </div>
    );
  }
}

export default Rates;
