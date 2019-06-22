import React, { Component } from 'react';
import './PageHeader.sass';

class PageHeader extends Component {
  render() {
    return (
      <div className="PageHeader">
        <div className="content">
          <h2>Evan Lihou</h2>
          {this.props.title && <h3>{this.props.title}</h3>}
        </div>
      </div>
    )
  }
}

export default PageHeader