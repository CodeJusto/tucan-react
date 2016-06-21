import React, { Component } from 'react';
import $ from 'jquery';

export default class Payments extends Component {
  render() {
    return (
      <div className="payment-entry row" id={this.props.key}>
        <div className="col s2 avatar">
          <img src="http://placehold.it/150?text=%20" className="circle" />
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