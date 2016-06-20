import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cart from '../components/cart/cart.jsx';


var CartViewContainer = React.createClass({

  render() {
    const cart = this
    var cookie = function getCookie() {
      var re = new RegExp('user_name' + "=([^;]+)");
      var value = re.exec(document.cookie);
      return ((value != null) ? ("You are now signed in as " + unescape(value[1])).replace('+', ' ') : false)
    }
    function loginCheck(cart) {
      if (cookie()) {
        return (
          <Cart url="http://localhost:4000/api/carts/1" interval={5000} />  
        ) 
      } else {
        return (
          <h2>FUCKED</h2>
        )
      }
    } 
    return (
      <div>
        {loginCheck(cart)}
      </div>
    )
  }
});
module.exports = CartViewContainer;



