import React, { Component } from 'react';
import $ from 'jquery';

export default class CancelButton extends Component {
  render() {
    if (this.props.user_id == this.props.organizer_id && (this.props.cart_status === 1 || this.props.cart_status === 2)) {
      return (
        <a className="btn-rect btn-secondary" href="#">
          Cancel
        </a>
      )
    } else {
      return (
        <span></span>
      )
    }
    
  }
}