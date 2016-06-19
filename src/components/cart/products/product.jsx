import React from 'react';
import Component from 'react';
import $ from 'jquery';

export default class Product extends React.Component {
  render() {
        const numeral = require('numeral');
    return (
        <div id={this.props.key}>
          <h2><a href={this.props.product.url}>{this.props.product.display_name}</a></h2>
          <img src={this.props.product.image} />
          <p>Price: {numeral(this.props.product.price).divide(10).format('$0,0[.]00')}</p>
          <p>Quantity: {this.props.product.quantity}</p>

        </div>
    )
  }

}