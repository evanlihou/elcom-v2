import React, { Component } from 'react';
import ReactLoading from 'react-loading';

class Loading extends Component {
  render() {
    return (
      <ReactLoading type="cubes" color="#000000" style={loadingStyle} />
    )
  }
}

const loadingStyle = {
  margin: '0 auto',
  width: '50px'
}

export default Loading;