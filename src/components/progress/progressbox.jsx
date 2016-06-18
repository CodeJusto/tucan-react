import React, { Component } from 'react';

export default class ProgressBox extends Component {
  render() {
    // const progressDetails = this.props.otherData
    // const totalCost = {this.props.data.total}
    // const remainingBalance = this.props.data.remainingBalance
    // const contributors = this.props.data.paid_contributors
    console.log(this.props.otherData.contributors)
    return (
      <div>
        <p>Total cost: {this.props.data.total}</p>
        <p>Remaining balance: {this.props.otherData.remaining_balance}</p>
        <p>Contributors: {this.props.otherData.contributors.length}</p>
        <p>Progress: {this.props.data.progress}%</p>
      </div>
      )
  }
}