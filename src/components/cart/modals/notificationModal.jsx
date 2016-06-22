import React from 'react';
import Component from 'react';

export default class NotificationModal extends React.Component {
  render() {
    return (
      <div id="notification-modal" className="modal">
        <div className="modal-header center-align">
          <h4>Invite your friends!</h4>
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat"><i className="material-icons">clear</i></a>
        </div>
        <div className="modal-content">

          <form onSubmit={this.emailSubmit}>
            <div className="input-field">
              <input className="emailField" name="email" type="text" onChange={this.emailHandler}/>
              <label htmlFor="email">Email</label>
            </div>
            <input type="Submit" className="btn waves-effect waves-light" />
          </form>
        </div>
      </div>
    )
  }
}