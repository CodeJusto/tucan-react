import React, { Component } from 'react';
import Cart from './cart.jsx'

export default class Cartlist extends Component {
  render() {
    const myCarts = this.props.user_carts.carts.map(cart => <Cart cart={cart} />)
    return (
      <ul className="col s12 cart-list">
        {myCarts}
      </ul>
    )
  }
}