import React, { Component } from 'react';
import $ from 'jquery';

export default class User extends Component {

  render() {
    return (
      <div className="user">
        <p><strong>{this.props.userCheck}</strong></p>
        <a href="http://localhost:4000/signout">Sign out?</a>
      </div>
      )
  }
}