import React from 'react';
import Component from 'react';
import Product from './product.jsx'
import $ from 'jquery';

export default class ProductBox extends React.Component {
  render() {
    var productBundle = this.props.data.map(function(product) {
      return <Product key={product.id} product={product} />
    });
    return (
      <div className="product"> 
        {productBundle}
      </div>
      )
  }
}