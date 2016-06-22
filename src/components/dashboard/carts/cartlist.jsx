import React, { Component } from 'react';
import Cart from './cart.jsx'

export default class Cartlist extends Component {
  render() {
    if (this.props.user_carts.carts.length > 0) {
      const myCarts = this.props.user_carts.carts.map(cart => <Cart key={cart.id} cart={cart} />)
      return (
        <ul className="col s12 cart-list">
          {myCarts}
        </ul>
      )
    } else {
      return (
        <div className="cart-options">
          <p><strong>You haven't created any carts yet!</strong></p>
          <a href="#" className="btn-rect btn-primary waves-effect waves-light modal-btn" data-modal="payment-modal">Get Started</a>
        </div>
      )
    }
  }
}