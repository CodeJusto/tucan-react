import React, { Component } from 'react';
import $, { ajax } from 'jquery';

var AddCartForm = React.createClass({

  getInitialState: function() {
    return {
      name: '',
      expiry: '',
      street_address: '',
      street_address2: '',
      country: '',
      city: '',
      province: '',
      zip_code: ''
    };
  },

  handleNameChange: function(e) {
    this.setState({name: e.target.value})
  },

  handleExpiryChange: function(e) {
    this.setState({expiry: e.target.value})
  },
  
  handleStreetAddressChange: function(e) {
    this.setState({street_address: e.target.value})
  },

  handleStreetAddress2Change: function(e) {
    this.setState({street_address2: e.target.value})
  },

  handleCountryChange: function(e) {
    this.setState({country: e.target.value})
  },

  handleCityChange: function(e) {
    this.setState({city: e.target.value})
  },

  handleCountryChange: function(e) {
    this.setState({country: e.target.value})
  },

  handleProvinceChange: function(e) {
    this.setState({province: e.target.value})
  },
  
  handleZipChange: function(e) {
    this.setState({zip_code: e.target.value})
  },

  handleSubmit: function(e) {
    e.preventDefault();
    $.ajax({
          type: 'POST',
          dataType: 'json',
          url: 'http://localhost:4000/api/carts',
          data: JSON.stringify({ 
                  id: this.props.user_id,
                  name: this.state.name, 
                  expiry: this.state.expiry, 
                  street_address: this.state.street_address, 
                  street_address2: this.state.street_address2, 
                  city: this.state.city, 
                  country: this.state.country,  
                  province: this.state.province,
                  zip_code: this.state.zip_code
                }),
          contentType: "application/json"
    });
    // Add some code that will reset the values of the form
  },

  render() {

    return (
      <div className="addCart">
      <h2>Add a cart</h2>
        <form id="addCart" onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Display name" onChange={this.handleNameChange} />
          <input type="date" name="expiry" placeholder="Expiry date" onChange={this.handleExpiryChange} />
          <input type="text" name="street_address" placeholder="Street address" onChange={this.handleStreetAddressChange} />
          <input type="text" name="street_address2" placeholder="Street address 2" onChange={this.handleStreetAddress2Change} />
          <input type="text" name="city" placeholder="City" onChange={this.handleCityChange} />
          <input type="text" name="country" placeholder="Country" onChange={this.handleCountryChange} />
          <input type="text" name="province" placeholder="Province" onChange={this.handleProvinceChange} />
          <input type="text" name="zip_code" placeholder="Zip code" onChange={this.handleZipChange} />
          <input type="submit" value="Add cart" />
        </form>
      </div>
    )
  }
});
module.exports = AddCartForm;