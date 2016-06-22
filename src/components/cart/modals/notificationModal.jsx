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
            <input className="emailField" type="text" onChange={this.emailHandler}/>
            <input type="Submit" />
          </form>
        </div>
      </div>
    )
  }
}