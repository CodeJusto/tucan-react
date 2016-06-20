import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Cart extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    console.log("props")
  }
  render() {
    const moment = require('moment');
    const now = moment().format("MMM Do, YYYY");
    const numeral = require('numeral');
    const url = ("/cart/" + this.props.cart.id)
    return (
      <div> 
      <h5><Link to={url}>Hello</Link></h5>
      <p>{numeral(this.props.cart.progress).divide(100).format('0%')}</p>
      <p>{moment(this.props.cart.expiry).endOf('minute').fromNow()}</p>
      </div>
    )
  }
}