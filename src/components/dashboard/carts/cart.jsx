import React, { Component } from 'react';
import ProgressBar from '../../cart/progress/progress.jsx';
import CartImage from './cartimage.jsx';

export default class Cart extends Component {
  render() {
    const moment = require('moment');
    const now = moment().format("MMM Do, YYYY");
    const numeral = require('numeral');
    return (
      <li className="col s12">
        <div className="cart-card row">
          <CartImage image={this.props.cart.thumb_img} />
          <div className="cart-content col s12 m9">
            <h3 className="cart-name">{this.props.cart.name}</h3>
            <div className="cart-organizer">{this.props.cart.organizer.name}</div>
            <div className="cart-total">{numeral(this.props.cart.total).divide(100).format('$0,0.00')}</div>
            <ProgressBar progress={this.props.cart.progress} />
            <div className="cart-due">{moment(this.props.cart.expiry).endOf('minute').fromNow(true)} to go</div>
            <div className="view-btn right">
              <a href="#">View cart</a>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

