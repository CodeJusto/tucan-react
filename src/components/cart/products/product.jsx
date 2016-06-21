import React from 'react';
import Component from 'react';
import $ from 'jquery';
import ProductOps from './productops.jsx'
import ProductImage from './productimage.jsx'

export default class Product extends React.Component {
  render() {
        const numeral = require('numeral');
    return (
      <li className="collection-item avatar product-item" id={this.props.key}>

        <ProductImage product={this.props.product} />

        <h5>{this.props.product.display_name}</h5>
        <p>{numeral(this.props.product.price).divide(100).format('$0,0[.]00')} x {this.props.product.quantity}</p>

        <ProductOps product={this.props.product} />
        <a href={this.props.product.url} target="_blank" className="secondary-content"><i className="material-icons">open_in_new</i></a>

      </li>
    )
  }

}