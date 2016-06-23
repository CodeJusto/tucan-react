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
          dataType: 'json',
          url: 'http://localhost:4000/api/carts/' + this.props.cart_id + '/products',
          data: { display_name: this.state.display_name, url: this.state.url, quantity: this.state.quantity, id: this.props.user_id }
    }).done((response) => {
      console.log(response);
      $('.productField').val('')
      $('.modal').fadeOut(600, function(){$(this).removeClass('open')});
      $('#materialize-lean-overlay').fadeOut(800, function(){$(this).removeClass('open')});
    })
  },

  render() {
    return (
     <div id="add-product-modal" className="modal">
          <div className="modal-header center-align">
            <h4>Add a product</h4>
            <a href="#" className="modal-action modal-close waves-effect waves-green btn-flat"><i className="material-icons">clear</i></a>
          </div>
          <div className="modal-content">
            <div className="row">
              <form className="col s12" id="addProduct" onSubmit={this.handleSubmit}>
                <div className="row">
                    <input type="text" name="display_name" className="productField" onChange={this.handleNameChange} />
                  <div className="input-field col s8"> 
                    <input type="text" name="display_name" onChange={this.handleNameChange} />

                    <label htmlFor="display_name">Product name</label>
                  </div>
                  <div className="input-field col s4"> 
                    <input type="number" min="1" name="quantity" defaultValue="1" onChange={this.handleQuantityChange} />
                    <label htmlFor="quantity">Quantity</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12"> 
                    <input type="text" name="url" className="productField" onChange={this.handleUrlChange} />
                    <label htmlFor="url">URL</label>
                  </div>
                </div>
                
                <div className="row">
                  <div className="input-field col s12"> 
                    <input type="number" min="1" name="quantity" className="productField" onChange={this.handleQuantityChange} />
                    <label htmlFor="quantity">Quantity</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 offset-s4"> 
                    <input type="submit" className="waves-effect waves-green btn-primary btn-flat" value="Add product" />
                  </div>
                </div>
              </form>
            </div>
          </div>
      </div>
      )
  }
});

module.exports = AddProductForm;