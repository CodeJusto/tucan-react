import React, { Component } from 'react';
import $, { ajax } from 'jquery';
import EmailInvitations from './emailinvitations.jsx'

export default class InvitaionsBox extends Component {
  render() {
    return (
      <EmailInvitations cart_id={this.props.cart_id} user_id={this.props.user_id} />
      )
  }
}