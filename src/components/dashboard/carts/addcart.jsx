import React, { Component } from 'react';
import $, { ajax } from 'jquery';


var AddCart = React.createClass({

  getInitialState: function() {
    return {
      name: '',
      expiry: ''
    };
  },

  handleChange: function(e) {
    let state = {};
    state[e.target.name] = e.target.value;
    this.setState(state)
  },

  handleSubmit: function(e) {
    console.log("new cart")
    e.preventDefault();
    $.ajax({
          type: 'POST',
          dataType: 'json',
          url: 'http://localhost:4000/api/carts',
          data: JSON.stringify({
                  user_id: this.props.user_id,
                  name: this.state.name, 
                  expiry: this.state.expiry, 
                  street_address: this.state.street_address, 
                  street_address2: this.state.street_address2, 
                  city: this.state.city, 
                  country: this.state.country,  
                  province: this.state.province,
                  zip_code: this.state.zip_code
                }),
          contentType: "application/json",
          success: data => {
              $('.modal').fadeOut(600, function(){$(this).removeClass('open')});
              $('#materialize-lean-overlay').fadeOut(800, function(){$(this).removeClass('open')});
          }
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
                <div className="input-field col s6">
                  <input type="text" name="name" onChange={this.handleChange}/>
                  <label htmlFor="name">Cart name</label>
                </div>
                <div className="input-field col s6">
                  <input type="date" placeholder="End date  " />
                </div>
              </div>
              <div className="row">
                <div className="col s12 center-align">
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