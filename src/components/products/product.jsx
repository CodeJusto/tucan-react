import React from 'react';
import Component from 'react';
import $ from 'jquery';

export default class Product extends React.Component {
  render() {
    return (
        <div id={this.props.key}>
          <h2><a href={this.props.product.url}>{this.props.product.display_name}</a></h2>
          <img src={this.props.product.image} />
          <p>Price: ${this.props.product.price}</p>
          <p>Quantity: {this.props.product.quantity}</p>

        </div>
    )
  }

}