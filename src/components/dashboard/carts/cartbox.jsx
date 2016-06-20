import React, { Component } from 'react';
import Cartlist from './cartlist.jsx'
import AddCart from './addcart.jsx'


export default class Cartbox extends Component {
  render() {
    return (
      <div>
      <h3>This is the cart box</h3>
      <Cartlist user_carts={this.props.carts} />
      <AddCart user_id={this.props.user_id} />
      </div>
    )
  }
}