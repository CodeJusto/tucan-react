import React, { Component } from 'react';
import $ from 'jquery';

export default class CancelButton extends Component {
  render() {
    if (this.props.user_id == this.props.organizer_id) {
      return (
        <a className="btn-rect btn-secondary" href="#">
          Cancel
        </a>
      )
    } else {
      return (
        <div></div>
      )
    }
    
  }
}