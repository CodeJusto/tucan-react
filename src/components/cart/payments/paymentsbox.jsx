import React, { Component } from 'react';
import Payments from './payments.jsx'
import $ from 'jquery';



export default class PaymentsBox extends Component {

  render() {
    var moment = require('moment');
    var now = moment().format("MMM Do, YYYY");
    var numeral = require('numeral');
    const allPayments = this.props.payments.map(payment => <Payments key={payment.id} amount={numeral(payment.amount).divide(100).format('$0,0.00')} payee={payment.user.name} date={moment(payment.created_at).startOf("second").fromNow()} image={payment.user.image} />)
    if (this.props.payments.length > 0) {
      return (
        <div id="payments" className="col s12">
          {allPayments}  
        </div>
      )
    } else if (this.props.payments.length === 0 && this.props.status === 2) {
      return (
        <div id="payments" className="col s12">
          <div className="cart-options">
            <p className="flow-text">Nobody has contributed yet</p>
            <a href="#" className="btn-rect btn-primary waves-effect waves-light modal-btn" data-modal="payment-modal">Contribute</a>
          </div>
        </div>
      )
    } else if (this.props.status === 1) {
      return (
        <div id="payments" className="col s12">
          <div className="cart-options">
            <p className="flow-text">Nothing to see here</p>
            <a href="#" className="btn-rect btn-primary waves-effect waves-light modal-btn" data-modal="add-product-modal">Add a product</a>
          </div>
        </div>
      )
    }
  }
}
