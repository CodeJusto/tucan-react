import React, { Component } from 'react';

export default class ProgressBox extends Component {
  render() {
    const moment = require('moment');
    const now = moment().format("MMM Do, YYYY");
    const numeral = require('numeral');

    return (
      <div>
        <h3>Progress</h3>
        <p><b>Target:</b> {numeral(this.props.totalCost).divide(100).format('$0,0.00')}</p>
        <p><b>Balance remaining:</b> {numeral(this.props.remainingBalance).divide(100).format('$0,0.00')}</p>
        <p><b>Total contributors:</b> {(parseFloat(this.props.contributors) + 1)}</p>
        <p><b>Progress:</b> {numeral(this.props.progress).divide(100).format('0%')}</p>
        <p><b>Expires:</b> {moment(this.props.expiry).endOf('minute').fromNow()}</p>
        <p><b>Payments received:</b> {numeral(this.props.totalPayment).divide(100).format('$0,0.00')}</p>
      </div>
      )
  }
}