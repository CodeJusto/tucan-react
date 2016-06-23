import React, { Component } from 'react';
import $ from 'jquery';

export default class PaymentButton extends Component {
  render() {
    if (this.props.status === 2) {
      return (
        <a href="#" id="pay-button" className="btn-rect btn-primary waves-effect waves-light modal-btn" data-modal="payment-modal">Contribute Now</a>
      )
    } else if (this.props.status === 1) {
      return (
      <p className="flow-text">This cart is pending. Add a product to kick things off.</p>
      )
    } else if (this.props.status === 4) {
      return (
        <p className="flow-text">You did it! We'll email you a shipping receipt soon.</p>
      )
    } else if (this.props.status === 3) {
      return (
        <p className="flow-text">This cart has been cancelled.</p>
      )
    }
  }
}