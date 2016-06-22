import React, { Component } from 'react';
import $, { ajax } from 'jquery';

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
        ajax({
          type: "POST",
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
        <div id="payment-modal" className="modal">
          <div className="modal-header center-align">
            <h4>Make a payment</h4>
            <span>{ this.state.paymentError }</span><br />
            <a href="#" className="modal-action modal-close waves-effect waves-green btn-flat"><i className="material-icons">clear</i></a>
          </div>
          <div className="modal-content">
            <div className="row">
              <form onSubmit={this.handleSubmit} className="col s12" id="addCart">
                <div className="row">
                  <div className="input-field col s12">
                    <input type='number' step="any" placeholder='amount' value={this.state.amount} onChange={this.handleAmountChange} /><br />
                    <label htmlFor="email">Payment amount</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input type='text' data-stripe='number' placeholder='credit card number' /><br />
                    <label htmlFor="email">Credit card number</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input type='text' data-stripe='exp-month' placeholder='expiration month' /><br />
                    <label htmlFor="email">MM</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input type='text' data-stripe='exp-year' placeholder='expiration year' /><br />
                    <label htmlFor="email">YY</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input type='text' data-stripe='cvc' placeholder='cvc' /><br />
                    <label htmlFor="email">CVC</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input type='submit' value='Complete payment' />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>  
      );
    }
  }
});

module.exports = PaymentForm;