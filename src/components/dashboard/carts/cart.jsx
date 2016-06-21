import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    const moment = require('moment');
    const now = moment().format("MMM Do, YYYY");
    const numeral = require('numeral');
    return (
      <div> 
      <h5>{this.props.cart.name}</h5>
      <p>{numeral(this.props.cart.progress).divide(100).format('0%')}</p>
      <p>{moment(this.props.cart.expiry).endOf('minute').fromNow()}</p>
      <button>View cart</button>
      </div>
    )
  }
}