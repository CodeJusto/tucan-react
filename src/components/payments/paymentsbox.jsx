import React, { Component } from 'react';
import Payments from './payments.jsx'
import $ from 'jquery';



export default class PaymentsBox extends Component {

  render() {
    var moment = require('moment');
    var now = moment().format("MMM Do, YYYY");
    const totalPayments = this.props.payments.map(payment => <Payments key={payment.id} amount={payment.amount} payee={payment.user.name} date={moment(payment.created_at).startOf("day").fromNow()}/>)

    return (
      <div>
        <h2 className="Payments">Payments</h2>
        {totalPayments}        
      </div>
    )
  }
}
