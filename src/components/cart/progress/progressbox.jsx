// this file is no longer needed, delete after
import React, { Component } from 'react';
import $, { ajax } from 'jquery';
import ProgressBar from './progress.jsx';


export default class ProgressBox extends Component {
  render() {
    const moment = require('moment');
    const now = moment().format("MMM Do, YYYY");
    const numeral = require('numeral');
    var expiry = moment(this.props.expiry).endOf('s').fromNow(true).replace(/an?\s{1}/, "1")
    expiry = expiry.replace(/(few seconds?)|(minutes?)|(hours?)|(days?)|(months?)|(years?)/, "")

    return (
      <div className="cart-meta">
        <div className="cart-submeta">
          <h4>{(parseFloat(this.props.contributors) + 1)}</h4>
          <span>contributors</span>
        </div>

        <div className="cart-submeta">
          <h4>{expiry}</h4>
          <span>{moment(this.props.expiry).endOf('s').fromNow(true).replace(/an?\s{1}|[0-9]{1,}\s{1}/g, "")} remaining</span>
        </div>

        <div className="cart-submeta">
          <h4>{numeral(this.props.totalPayment).divide(100).format('$0,0')}</h4>
          <span>collected</span>
        </div>

        <ProgressBar progress={this.props.progress} />
        <div><p className="flow-text">{this.props.progress}% of {numeral(this.props.totalCost).divide(100).format('$0,0.00')} goal</p></div>
      </div>
    )
  }
}