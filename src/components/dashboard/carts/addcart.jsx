import React, { Component } from 'react';
import $, { ajax } from 'jquery';


var AddCart = React.createClass({

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
      <div id="add-cart-modal" className="modal">
        <div className="modal-header center-align">
          <h4>Add a cart</h4>
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat"><i className="material-icons">clear</i></a>
        </div>
        <div className="modal-content">
          <div className="row">
            <form className="col s12" id="addCart" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <input type="text" name="cart_name" placeholder="Cart name" onChange={this.handleChange}/>
                  <label htmlFor="email">Cart name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input type="date" name="expiry" placeholder="End date" onChange={this.handleChange} />
                  <label htmlFor="expiry">End date</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input type="text" name="street_address" placeholder="Street address" onChange={this.handleChange} />
                  <label htmlFor="street_address">Street Address</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input type="text" name="street_address2" placeholder="Street address 2 (optional)" onChange={this.handleChange} />
                  <label htmlFor="street_address2">Street Address 2 (optional)</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input type="text" name="city" placeholder="City" onChange={this.handleChange} />
                  <label htmlFor="city">City</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input type="text" name="country" placeholder="Country" onChange={this.handleChange} />
                  <label htmlFor="country">Country</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input type="text" name="province" placeholder="Province" onChange={this.handleChange} />
                  <label htmlFor="province">Country</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                <input type="text" name="zip_code" placeholder="Zip code" onChange={this.handleChange} />
                  <label htmlFor="zip_code">Zip/Postcode</label>
                </div>
              </div>
              <div className="row">
                <div className="col s12 right-align">
                  <button className="btn waves-effect waves-light" type="submit" name="action">Add cart
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    )
  }
});
module.exports = AddCart;