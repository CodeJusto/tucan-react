import React, { Component } from 'react';
import Cartlist from './cartlist.jsx'
import AddCart from './addcart.jsx'


export default class Cartbox extends Component {
  render() {
    return (
      <div className="row">
        <Cartlist user_carts={this.props.carts} />
      </div>
    )
  }
}



      // <div>
      // <AddCart />
      // </div>