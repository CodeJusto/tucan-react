import React from 'react';
import Component from 'react';
import $, { ajax } from 'jquery';

export default class NotificationModal extends React.Component {

  emailHandler = (e) => {
    this.setState({email: e.target.value })
    console.log(this.state)
  }

  emailSubmit = (e) => {
    e.preventDefault();
    var email = this.state.email;
    if (!email) {
      return;
    }
    ajax({
      url: "http://localhost:4000/carts/" + this.props.cart_id + "/invite",
      dataType: "json",
      type: 'POST',
      data: {id: this.props.user_id,
             email: email},
      success: data => {
        console.log(data)
      }
    });

  }
  render() {
    return (
      <div id="notification-modal" className="modal">
        <div className="modal-header center-align">
          <h4>Invite your friends!</h4>
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat"><i className="material-icons">clear</i></a>
        </div>
        <div className="modal-content">
          <p>Enter the email of the person you want to invite to this cart. <strong>Emails will be sent right away.</strong></p>
          <form onSubmit={this.emailSubmit}>
            <input className="emailField" type="text" onChange={this.emailHandler}/>
            <input type="Submit" />
          </form>
        </div>
      </div>
    )
  }
}