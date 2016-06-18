import React, { Component } from 'react';

export default class ProgressBox extends Component {
  render() {
    // const progressDetails = this.props.otherData
    // const totalCost = {this.props.data.total}
    // const remainingBalance = this.props.data.remainingBalance
    // const contributors = this.props.data.paid_contributors

    return (
      <div>
        <h3>Progress</h3>
        <p>Total cost: {this.props.totalCost}</p>
        <p>Remaining balance: ${this.props.remainingBalance}</p>
        <p>Contributors: {this.props.contributors}</p>
        <p>Progress: {this.props.progress}% of ${this.props.totalCost} goal</p>
      </div>
      )
  }
}