import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout.jsx'
import Cart from '../components/cart/cart.jsx';


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
    var cookie = function getCookie() {
      var re = new RegExp('user_name' + "=([^;]+)");
      var value = re.exec(document.cookie);
      return ((value != null) ? ("You are now signed in as " + unescape(value[1])).replace('+', ' ') : false)
    }
    
    const params = this.props;
    function loginCheck(cart) {
      if (true) {
        return (
            <Cart url={url} interval={5000} cart_id={cart_id} user_id={user_id}/>
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



