import React, { Component } from 'react';
import Product from './product.jsx'
import $ from 'jquery';

export default class ProductBox extends Component {
  render() {
    const productBundle = this.props.products.map(product => <Product key={product.id} product={product} />);
    if (this.props.products.length > 0) {
      return (
        <div id="products">
          <ul id="product-list" className="collection">
            {productBundle}
          </ul>
          <a href="#" className="modal-btn" data-modal="product-modal"><i className="material-icons">add_circle</i> Add product</a>
          </div>
      )
    } else {
      return (
        <div className="cart-options">
          <p>You haven't added any products yet.</p>
          <a href="#" className="btn-rect btn-primary waves-effect waves-light modal-btn" data-modal="add-product-modal">Add product</a>
        </div>

      )
    }
  }
}