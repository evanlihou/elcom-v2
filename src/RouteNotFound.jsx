import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CallToAction from './Common/CallToAction';

const pageContentStyles = {
  marginTop: 50,
  textAlign: 'center'
}

class MainPage extends Component {
  render() {
    return (
      <div className="routeNotFoundPage">
        <CallToAction />
        <div style={pageContentStyles}>
        <h1>Error</h1>
        <p>The page you tried to access could not be found. Try <Link to="/">going home</Link>, or maybe you'd rather <a href="https://www.decisionproblem.com/paperclips/index2.html">take over the world with paperclips</a>.</p>
        </div>
      </div>
    );
  }
}

export default MainPage;
