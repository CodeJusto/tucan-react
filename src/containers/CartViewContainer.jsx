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

    var token = cookie.load('token');
    const cart_id = this.props.params.id;
    const url = "http://localhost:4000/api/carts/" + cart_id + "/" + token;
    return (
      <Cart url={url} interval={5000} cart_id={cart_id} user_id={token}/>
    )
  }
});
module.exports = CartViewContainer;



