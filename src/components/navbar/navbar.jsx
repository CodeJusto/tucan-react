import React, { Component } from 'react';
import User from './user.jsx'
import $ from 'jquery';

export default class Navbar extends Component {

  // Original JavaScript code by Chirp Internet: www.chirp.com.au
  // Please acknowledge use of this code by including this header.

  // var login() {
  //   if (getCookie('username') == nil)
  // }
  
  render() {

      var cookie = function getCookie() {
      var re = new RegExp('user_name' + "=([^;]+)");
      var value = re.exec(document.cookie);
      var reg = new RegExp('user_id=(\\d{1,})');
      // var id = reg.exec(document.cookie)[1];
      var id = document.cookie;
      return ((value != null) ? ("You are now signed in as " + unescape(value[1])).replace('+', ' ') + ', id: ' + id : false)
    }
   
    return (
      <div className="navbar">
       <User userCheck={cookie()}/>
      </div>
      )
  }
}