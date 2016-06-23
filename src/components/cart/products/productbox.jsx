import React, { Component } from 'react';
import Product from './product.jsx'
import $ from 'jquery';

export default class ProductBox extends Component {
  render() {
    const productBundle = this.props.products.map(product => <Product cart_id={this.props.cart_id} user_id={this.props.user_id} key={product.id} product={product} organizer_id={this.props.organizer_id}/>);
    if (this.props.products.length > 0 && this.props.status === 2) {
      return (
        <div id="products">
          <ul id="product-list" className="collection">
            {productBundle}
          </ul>
          <a href="#" className="modal-btn" data-modal="add-product-modal"><i className="material-icons">add_circle</i> Add another product</a>
        </div>
      )
    } else if (this.props.products.length > 0 && this.props.payments.length > 0) {
      return (
        <div id="products">
          <ul id="product-list" className="collection">
            {productBundle}
          </ul>
        </div>
      )
    }
    else {
      return (
        <div id="products" className="cart-options">
          <p className="flow-text">Nothing to see here</p>
          <a href="#" className="btn-rect btn-primary waves-effect waves-light modal-btn" data-modal="add-product-modal">Add a product</a>
        </div>

      )
    }
  }
}