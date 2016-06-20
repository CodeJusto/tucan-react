import React, { Component } from 'react';
import $, { ajax } from 'jquery';

var AddCartForm = React.createClass({

  getInitialState: function() {
    return {
      name: '',
      expiry: '',
    };
  },

  handleNameChange: function(e) {
    this.setState({name: e.target.value})
  },

  handleExpiryChange: function(e) {
    this.setState({expiry: e.target.value})
  },

  handleSubmit: function(e) {
    e.preventDefault();
    $.ajax({
          type: 'POST',
          dataType: 'json',
          url: 'http://localhost:4000/api/carts/',
          data: { name: this.state.name, expiry: this.state.expiry }
    });
  },

  render() {

    return (
      <div className="addCart">
      <h2>Add a cart</h2>
        <form id="addCart" onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Display name" onChange={this.handleNameChange} />
          <input type="date" name="expiry" placeholder="Expiry date" onChange={this.handleExpiryChange} />
          <input type="submit" value="Add cart" />
        </form>
      </div>
    )
  }
});
module.exports = AddCartForm;