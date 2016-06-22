import React, { Component } from 'react';
import $ from 'jquery';
import ContributorImage from '../contributors/contributorimage.jsx'

export default class Payments extends Component {
  render() {
    return (
      <div className="payment-entry row" id={this.props.key}>
        <div className="col s2 avatar">
          <ContributorImage image={this.props.image} />
        </div>
        <div className="col s10 payment-detail">
          <div className="payee">{this.props.payee}</div>
          <span title="">{this.props.amount}</span>
        </div>
      </div>
    )
  }
}


// this.props.date