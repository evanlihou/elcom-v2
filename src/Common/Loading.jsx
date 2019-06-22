import React, { Component } from 'react';
import './Loading.sass'
import ReactLoading from 'react-loading';

class Loading extends Component {
  render() {
    return (
      <ReactLoading color={null} type="cubes" className="loadingIndicator"/>
    )
  }
}

export default Loading;