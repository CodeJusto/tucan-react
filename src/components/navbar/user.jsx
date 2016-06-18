import React, { Component } from 'react';
import $ from 'jquery';

export default class User extends Component {

  render() {
    function getCookie(name) {
      var re = new RegExp(name + "=([^;]+)");
      var value = re.exec(document.cookie);
      return (value != null) ? unescape(value[1]) : null;
    }
    return (
      <div class="user">
        <p>You are signed in as <strong>{getCookie('user_name')}</strong></p>
        <a href="http://localhost:4000/signout">Sign out?</a>
      </div>
      )
  }
}