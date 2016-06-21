import React from 'react';
import Component from 'react';

export default class NotificationModal extends React.Component {
  render() {
    return (
      <div id="notification-modal" className="modal">
        <div className="modal-header center-align">
          <h4>Notification Settings</h4>
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat"><i className="material-icons">clear</i></a>
        </div>
        
        <div className="modal-content">
          <div className="row">
            <form>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="text" className="validate" />
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="col s12 right-align">
                  <button className="btn waves-effect waves-light" type="submit" name="action">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}