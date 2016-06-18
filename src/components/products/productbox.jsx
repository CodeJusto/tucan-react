import React, { Component } from 'react';
import Product from './product.jsx'
import $ from 'jquery';

export default class ProductBox extends Component {
  render() {
    const productBundle = this.props.data.map(product => <Product key={product.id} product={product} />);
    return (
      <div className="product"> 
        {productBundle}
      </div>
    )
  }
}