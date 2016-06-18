import React, { Component } from 'react';
import Product from './product.jsx'
import $ from 'jquery';

export default class ProductBox extends Component {
  render() {
    const productBundle = this.props.products.map(product => <Product key={product.id} product={product} />);
    return (
      <div className="product"> 
        <h3>Products</h3>
        {productBundle}
      </div>
    )
  }
}