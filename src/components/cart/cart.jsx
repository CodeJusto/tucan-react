import React, { Component } from 'react';
import $, { ajax } from 'jquery';

import ProductBox from './products/productbox.jsx'
import ProgressBox from './progress/progressbox.jsx'
import ProgressBar from './progress/progress.jsx';
import ContributorsBox from './contributors/contributorsbox.jsx'
import PaymentsBox from './payments/paymentsbox.jsx'
import PaymentForm from './paymentform.jsx'
import AddProductForm from './addproductform.jsx'
// import Navbar from '../navbar/navbar.jsx'
// import Register from '../register.jsx'



export default class Cart extends Component {

  componentDidMount() {
    this.loadCartFromServer()
    setInterval(() => this.loadCartFromServer(), this.props.interval);
  }

  loadCartFromServer() {
    ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: data => {
        // debugger
        this.setState({data: data});
      },
      error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
    });
  }
  
  render() {
    const cart = this
    const moment = require('moment');
    const numeral = require('numeral');


    if(!this.state) {
      return <div><h1>Loading....</h1></div>
    }
    return (
      <div className="container">
        <div className="row" id="cart-top">
          <div className="col s12 m8">
            <div className="cart-header">
              <h2>{cart.state.data.cart.name}</h2>
              <div className="chip">status</div>
            </div>
            
              <ProgressBox 
                created_at={cart.state.data.cart.created_at}
                expiry={cart.state.data.cart.expiry}
                contributors={cart.state.data.contributors.length}
                remainingBalance={cart.state.data.remaining_balance}
                totalCost={cart.state.data.cart.total}
                totalPayment={cart.state.data.cart.total_payment}
                progress={cart.state.data.cart.progress} />
          </div>

          <div className="col s12 m4">
            <div className="cart-options">
              <a href="#payment-modal" className="btn-rect btn-primary waves-effect waves-light  modal-trigger">Contribute Now</a>
              <a className="btn-rect btn-secondary" data-confirm="Are you sure?" data-title="WARNING!" rel="nofollow" data-method="delete" href="<%= cart_path(@cart) %>">
                Cancel
              </a>
            </div>


            <ul id="cart-options">
              <li>
                <a href="#invite-modal" className=" modal-trigger">
                  <i className="material-icons">group_add</i>
                  Share
                </a>
              </li>
              <li>
                <a href="#notification-modal" className=" modal-trigger">
                  <i className="material-icons">notifications</i>
                  Notifications
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row"  id="cart-bottom">
          <div className="col s12 m8">
            <ul className="tabs">
              <li className="tab col s3"><a className="active" href="#products">Products</a></li>
              <li className="tab col s3"><a href="#payments">Payments</a></li>
            </ul>

            <ProductBox products={cart.state.data.cart.products} />
            <PaymentsBox payments={cart.state.data.cart.payments} />
          </div>

          <div className="col s12 m4 center-align" id="contribution">
            <div><span className="tab-label">Contributors</span></div>
            
            <ContributorsBox contributors={cart.state.data.contributors} organizer={cart.state.data.organizer} />
          </div>
        </div>
      </div>
    ) 
  }
}