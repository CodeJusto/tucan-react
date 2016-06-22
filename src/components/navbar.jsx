import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

export default class Navbar extends Component {

  componentDidMount() {
    $(".button-collapse").sideNav({
        menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );
  }
  
  render() {
   
    return (
      <nav>
        <div>
          <a href="" className="logo">
          </a>
        </div>
        <ul className="right hide-on-med-and-down">
          <li><Link to="/dashboard">My Carts</Link></li>
          <li><a href="#!">Settings</a></li>
          <li><a href="#!">Sign out</a></li>
        </ul>
        <ul id="slide-out" className="side-nav">
          <li><Link to="/dashboard">My Carts</Link></li>
          <li><a href="#!">Settings</a></li>
          <li><a href="#!">Sign out</a></li>
        </ul>
        <a href="#" data-activates="slide-out" id="nav-menu-btn" className="button-collapse right"><i className="material-icons">menu</i></a>
      </nav>
    )
  }
}