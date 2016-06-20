import React, { Component } from 'react';
import Cart from './cart.jsx'

export default class Cartlist extends Component {
  render() {
    const myCarts = this.props.user_carts.carts.map(cart => <Cart key={cart.id} cart={cart} />)
    return (
      <div> 
      <h4>This is the cart list</h4>
      {myCarts}
      </div>
    )
  }
}