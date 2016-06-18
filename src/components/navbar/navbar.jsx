import React, { Component } from 'react';
import User from './user.jsx'
import $ from 'jquery';

export default class Navbar extends Component {

  // Original JavaScript code by Chirp Internet: www.chirp.com.au
  // Please acknowledge use of this code by including this header.

  
  render() {

    return (
      <div className="navbar">
       <User />
      </div>
      )
  }
}