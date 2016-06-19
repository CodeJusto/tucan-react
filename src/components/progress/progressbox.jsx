import React, { Component } from 'react';

export default class ProgressBox extends Component {
  render() {
    const moment = require('moment');
    const now = moment().format("MMM Do, YYYY");
    const numeral = require('numeral');
    // const progressDetails = this.props.otherData
    // const totalCost = {this.props.data.total}
    // const remainingBalance = this.props.data.remainingBalance
    // const contributors = this.props.data.paid_contributors

    return (
      <div>
        <h3>Progress</h3>
        <p>Target: {numeral(this.props.totalCost).format('$0,0.00')}</p>
        <p>Balance remaining: {numeral(this.props.remainingBalance).format('$0,0.00')}</p>
        <p>Total contributors: {(parseFloat(this.props.contributors) + 1)}</p>
        <p>Progress: {numeral(this.props.progress).format('0%')}</p>
        <p>Expires: {moment(this.props.expiry).endOf('minute').fromNow()}</p>
        <p>Payments received: {numeral(this.props.totalPayment).divide(100).format('$0,0.00')}</p>
      </div>
      )
  }
}