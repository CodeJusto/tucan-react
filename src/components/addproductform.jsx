import React, { Component } from 'react';
import $ from 'jquery';

var AddProductForm = React.createClass({

  getInitialState: function() {
    return {
      display_name: '',
      url: '',
      quantity: 0
    };
  },

  handleNameChange: function(e) {
    this.setState({display_name: e.target.value})
  },

  handleUrlChange: function(e) {
    this.setState({url: e.target.value})
  },

  handleQuantityChange: function(e) {
    this.setState({quantity: e.target.value})
  },

  handleSubmit: function(e) {
    e.preventDefault();
    $.ajax({
          type: 'POST',
          url: 'http://localhost:4000/api/carts/' + this.props.cart_id + '/products',
          data: { display_name: this.state.display_name, url: this.state.url, cart_id: this.props.cart_id, quantity: this.state.quantity }
    });
  },

  render() {
    return (
      <div className="addProduct">
      <h2>Add a product</h2>
        <form id="addProduct" onSubmit={this.handleSubmit}>
          <input type="text" name="display_name" placeholder="Display name" onChange={this.handleNameChange} />
          <input type="text" name="url" placeholder="Product URL" onChange={this.handleUrlChange} />
          <input type="number" name="quantity" placeholder="Quantity" onChange={this.handleQuantityChange} />
          <input type="hidden" value={this.props.cart_id} />
          <input type="submit" value="Add product" />

          </form>
      </div>
      )
  }
});

module.exports = AddProductForm;