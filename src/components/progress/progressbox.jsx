import React, { Component } from 'react';

export default class ProgressBox extends Component {
  render() {
    var moment = require('moment');
    var now = moment().format("MMM Do, YYYY");
    var numeral = require('numeral');
    // const progressDetails = this.props.otherData
    // const totalCost = {this.props.data.total}
    // const remainingBalance = this.props.data.remainingBalance
    // const contributors = this.props.data.paid_contributors

    return (
      <div>
        <h3>Progress</h3>
        <p>Target: {numeral(this.props.totalCost).format('$0,0.00')}</p>
        <p>Balance remaining: {numeral(this.props.remainingBalance).format('$0,0.00')}</p>
        <p>Total contributors: {this.props.contributors}</p>
        <p>Progress: {numeral(this.props.progress).format('0%')} of {numeral(this.props.totalCost).format('$0,0.00')} goal</p>
      </div>
      )
  }
}