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
      return ((value != null) ? "You are now signed in as " + unescape(value[1]) : "You do not have access to this page").replace('+', ' ')
      
    }

    var checkMyDashboard = function dashboardMode() {
      console.log(this.props.dashboard)
      this.props.dashboard(true)
    }

    var tempThis = this
   
    return (
      <div className="navbar">
       <User userCheck={cookie()}/>
       <span onClick={checkMyDashboard.bind(this)}>View all carts</span>
      </div>
      )
  }
}