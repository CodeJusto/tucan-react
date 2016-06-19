import React, { Component } from 'react';
import $ from 'jquery';

var PaymentForm = React.createClass({

  getInitialState: function() {
    return {
      stripeLoading: false,
      stripeLoadingError: false,
      submitDisabled: false,
      paymentError: null,
      paymentComplete: false,
      token: null,
      amount: ''
    };
  },

  onScriptLoaded: function() {
    if (!PaymentForm.getStripeToken) {

      Stripe.setPublishableKey('pk_test_rIDldYd9SG9Y5UiV8zvAATfH');

      this.setState({ stripeLoading: false, stripeLoadingError: false });
    }
  },

  onScriptError: function() {
    this.setState({ stripeLoading: false, stripeLoadingError: true });
  },

  handleAmountChange: function(e) {
    this.setState({amount: parseFloat(e.target.value) || 0 })
  },

  handleSubmit: function(e) {
    let self = this;
    e.preventDefault();
    this.setState({ submitDisabled: true, paymentError: null });

    Stripe.createToken(e.target, (status, response) => {
      if (response.error) {
        self.setState({ paymentError: response.error.message, submitDisabled: false });
      }
      else {
        self.setState({ paymentComplete: true, submitDisabled: false, token: response.id });
        $.ajax({
          type: 'POST',
          url: 'http://localhost:4000/api/charges',
          data: { amount: this.state.amount, stripeToken: response.id, cart_id: this.props.cart_id, user_id: this.props.user_id }
        });
      }
    });
  },

  render: function() {
    if (this.state.stripeLoading) {
      return <div>Loading</div>;
    }
    else if (this.state.stripeLoadingError) {
      return <div>Error</div>;
    }
    else if (this.state.paymentComplete) {
      return <div>Payment Complete!</div>;
    }
    else {
      return (
        <form onSubmit={this.handleSubmit} >
        <h2>Make a payment</h2>
          <span>{ this.state.paymentError }</span><br />
          <input type='number' step="any" placeholder='amount' value={this.state.amount} onChange={this.handleAmountChange} /><br />
          <input type='text' data-stripe='number' placeholder='credit card number' /><br />
          <input type='text' data-stripe='exp-month' placeholder='expiration month' /><br />
          <input type='text' data-stripe='exp-year' placeholder='expiration year' /><br />
          <input type='text' data-stripe='cvc' placeholder='cvc' /><br />
          <input disabled={this.state.submitDisabled} type='submit' value='Purchase' />
        </form>
      );
    }
  }
});

module.exports = PaymentForm;