import React from 'react';
import './PageHeader.sass';

export default function PageHeader(props) {
  return (
    <div className="PageHeader">
      <div className="content">
        <h2>Evan Lihou</h2>
        {props.title && <h3>{props.title}</h3>}
      </div>
    </div>
  );
}