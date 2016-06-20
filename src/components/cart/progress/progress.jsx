import React, { Component } from 'react';

export default class ProgressBar extends Component {
  render() {
    const numeral = require('numeral');
    var divStyle = {
      width: numeral(this.props.progress).divide(100).format('0%')
    };
    return (
      <div className="progress">
        <div className="determinate" style={divStyle} ></div>
      </div>
    )
  }
}