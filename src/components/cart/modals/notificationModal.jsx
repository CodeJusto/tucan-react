import React from 'react';
import Component from 'react';
import $, { ajax } from 'jquery';
import validator from 'validator';

export default class NotificationModal extends React.Component {

  emailHandler = (e) => {
    this.setState({email: e.target.value })
    console.log(this.state)
  }

  emailSubmit = (e) => {
    e.preventDefault();
    var email = this.state.email;
    console.log("Email!")
    if (!email) {
      console.log("No email")
      return;
    }
    if (validator.isEmail(email) == false) {
      Materialize.toast("Please enter a valid email.", 4000, 'materialize-red')
    } 
    ajax({
      url: "http://localhost:4000/api/carts/" + this.props.cart_id + "/users/invite",
      dataType: "json",
      type: 'POST',
      data: {id: this.props.user_id,
             cart_id: this.props.cart_id,
             email: email},
      success: data => {
        console.log(data)
      $('.emailField').val('')
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
            <div className="input-field">
              <input className="emailField" name="email" type="text" onChange={this.emailHandler}/>
              <label htmlFor="email">Email</label>
            </div>

            <div className="center-align">
              <input type="submit" className="btn waves-effect waves-light" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}