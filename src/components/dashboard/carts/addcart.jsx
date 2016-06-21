import React, { Component } from 'react';
import $, { ajax } from 'jquery';
import Input from '../../input.jsx';

var AddCartForm = React.createClass({

  getInitialState: function() {
    return {
      cart_name: '',
      expiry: '',
      street_address: '',
      street_address2: '',
      country: '',
      city: '',
      province: '',
      zip_code: ''
    };
  },

  handleChange: function(e) {
    let state = {};
    state[e.target.name] = e.target.value;
    this.setState(state)
  },

  handleSubmit: function(e) {
    e.preventDefault();
    $.ajax({
          type: 'POST',
          dataType: 'json',
          url: 'http://localhost:4000/api/carts/',
          data: { 
                  cart_name: this.state.cart_name, 
                  expiry: this.state.expiry, 
                  street_address: this.state.street_address, 
                  street_address2: this.state.street_address2, 
                  city: this.state.city, 
                  country: this.state.country,  
                  province: this.state.province,
                  zip_code: this.state.zip_code
                }
    });
  },

  render() {

    return (
      <div className="addCart">
      <h2>Add a cart</h2>
        <form id="addCart" onSubmit={this.handleSubmit}>
          <input type="text" name="cart_name" placeholder="Cart name" onChange={this.handleChange}/>
          <input type="date" name="expiry" placeholder="Expiry date" onChange={this.handleChange} />
          <input type="text" name="street_address" placeholder="Street address" onChange={this.handleChange} />
          <input type="text" name="street_address2" placeholder="Street address 2" onChange={this.handleChange} />
          <input type="text" name="city" placeholder="City" onChange={this.handleChange} />
          <input type="text" name="country" placeholder="Country" onChange={this.handleChange} />
          <input type="text" name="province" placeholder="Province" onChange={this.handleChange} />
          <input type="text" name="zip_code" placeholder="Zip code" onChange={this.handleChange} />
          <input type="submit" value="Add cart" />
        </form>
      </div>
    )
  }
});
module.exports = AddCartForm;