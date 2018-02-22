import React, { Component } from 'react';
import './Strengths.css';

class Strengths extends Component {
  render() {
    return (
      <div className="strengths">
        <h3>My Strengths</h3>
        <ul>
          <li>
            <h4>Analytical</h4>
            <h5>Gallup&#8217;s Definition</h5>
            <p>People who are especially talented in the Analytical theme search for reasons and causes. They have the ability to think about all the factors that might affect a situation.</p>
          </li>
          <li>
            <h4>Harmony</h4>
            <h5>Gallup&#8217;s Definition</h5>
            <p>People who are especially talented in the Harmony theme look for consensus. They don’t enjoy conflict; rather, they seek areas of agreement.</p>
          </li>
          <li>
            <h4>Input</h4>
            <h5>Gallup&#8217;s Definition</h5>
            <p>People who are especially talented in the Input theme have a craving to know more. Often they like to collect and archive all kinds of information.</p>
          </li>
          <li>
            <h4>Discipline</h4>
            <h5>Gallup&#8217;s Definition</h5>
            <p>People who are especially talented in the Discipline theme enjoy routine and structure. Their world is best described by the order they create.</p>
          </li>
          <li>
            <h4>Deliberative</h4>
            <h5>Gallup&#8217;s Definition</h5>
            <p>People who are especially talented in the Deliberative theme are best described by the serious care they take in making decisions or choices. They anticipate the obstacles.</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Strengths;
