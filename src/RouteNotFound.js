import React, { Component } from 'react';
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
        <p>The route you tried to access could not be found</p>
        </div>
      </div>
    );
  }
}

export default MainPage;
