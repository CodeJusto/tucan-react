import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout.jsx'
import Cart from '../components/cart/cart.jsx';
import cookie from 'react-cookie';

var CartViewContainer = React.createClass({
  getDefaultProps() {
    return {
      title: 'Cart'
    };
  },
  render() {
    const cart = this
    const cart_id = this.props.params.id
    const user_id = this.props.location.query.token
    const url = "http://localhost:4000/api/carts/" + cart_id
    var token = cookie.load('token');
    return (
            <Cart url={url} interval={5000} cart_id={cart_id} user_id={token} />
    ) 
  }
});
module.exports = CartViewContainer;



