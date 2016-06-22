import React, { Component } from 'react';
import $, { ajax } from 'jquery';
import ProductBox from './products/productbox.jsx'
import ProgressBox from './progress/progressbox.jsx'
import ProgressBar from './progress/progress.jsx';
import ContributorsBox from './contributors/contributorsbox.jsx'
import PaymentsBox from './payments/paymentsbox.jsx'
import PaymentForm from './paymentform.jsx'
import AddProductForm from './addproductform.jsx'
import NotificationModal from './modals/notificationmodal.jsx'
// import SocialBar from './social/
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';


// import Navbar from '../navbar/navbar.jsx'
// import Register from '../register.jsx'



export default class Cart extends Component {

  componentDidMount() {
    this.loadCartFromServer()
    this._timer = setInterval(() => this.loadCartFromServer(), this.props.interval);

  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  componentDidUpdate() {
    $('ul.tabs').tabs();
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

    const {
      FacebookShareButton
    } = ShareButtons;

    const shareUrl = 'http://github.com';
    const title = 'GitHub';
    if(!this.state) {
      return <div><h1>Loading....</h1></div>
    }


    return (
      <div className="container">
        <div className="row" id="cart-top">
          <div className="col s12 m8">
            <div className="cart-header">
              <h2>{cart.state.data.cart.name}</h2>
              <div className="chip">{cart.state.data.cart.status.text}</div>
            </div>
              <ProgressBox 
                created_at={cart.state.data.cart.created_at}
                expiry={cart.state.data.cart.expiry}
                contributors={cart.state.data.contributors.length}
                remainingBalance={cart.state.data.remaining_balance}
                totalCost={cart.state.data.cart.total}
                totalPayment={cart.state.data.cart.total_payment}
                progress={cart.state.data.cart.progress} />
                <PaymentForm />
          </div>

          <div className="col s12 m4">
            <div className="cart-options">
              <a href="#" className="btn-rect btn-primary waves-effect waves-light modal-btn" data-modal="payment-modal">Contribute Now</a>

              <a className="btn-rect btn-secondary" data-confirm="Are you sure?" data-title="WARNING!" rel="nofollow" data-method="delete" href="<%= cart_path(@cart) %>">
                Cancel
              </a>
            </div>


            <ul id="cart-options">
              <li>
                <FacebookShareButton url={shareUrl} title={title} className="Facebook-share-button">
                  <a href="#  ">
                    <i className="fa fa-facebook"></i>  Share
                  </a>
                </FacebookShareButton>
              </li>
              <li>
                <a href="#notification-modal" className="modal-btn" data-modal="notification-modal">
                  <i className="material-icons">notifications</i>
                   Email Invite
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
        <NotificationModal />
        <PaymentForm cart_id={cart.props.cart_id} user_id={cart.props.user_id} />
        <AddProductForm cart_id={this.props.cart_id} />


      </div>
    ) 
  }
}