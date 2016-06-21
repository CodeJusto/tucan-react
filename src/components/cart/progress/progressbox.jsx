// this file is no longer needed, delete after
import React, { Component } from 'react';
import $, { ajax } from 'jquery';
import ProgressBar from './progress.jsx';


export default class ProgressBox extends Component {
  render() {
    const moment = require('moment');
    const now = moment().format("MMM Do, YYYY");
    const numeral = require('numeral');

    return (
      <div className="cart-meta">
        <div className="cart-submeta">
          <h4>{(parseFloat(this.props.contributors) + 1)}</h4>
          <span>contributers</span>
        </div>

        <div className="cart-submeta">
          <h4>{moment(this.props.expiry).endOf('minute').fromNow(true)}</h4>
          <span>remaining</span>
        </div>

        <div className="cart-submeta">
          <h4>{numeral(this.props.totalPayment).divide(100).format('$0,0.00')}</h4>
          <span>collected</span>
        </div>

        <ProgressBar progress={this.props.progress} />
        <div><span>{this.props.progress}% of {numeral(this.props.totalCost).divide(100).format('$0,0.00')} goal</span></div>
      </div>
    )
  }
}