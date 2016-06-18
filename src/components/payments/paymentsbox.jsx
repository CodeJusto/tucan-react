import React, { Component } from 'react';
import Payments from './payments.jsx'
import $ from 'jquery';

export default class PaymentsBox extends Component {
  render() {
    const totalPayments = this.props.payments.map(payment => <Payments key={payment.id} amount={payment.amount} payee={payment.user.name} date={payment.created_at}/>)
    return (
      <div>
        <h2 className="Payments">Payments</h2>
        {totalPayments}        
      </div>
    )
  }
}
