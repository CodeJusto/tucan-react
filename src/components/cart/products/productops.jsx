import React from 'react';
import Component from 'react';
import $, { ajax } from 'jquery';
export default class ProductOps extends React.Component {
  
  deleteProduct(e) {
    e.preventDefault()
    ajax({
      type: 'POST',
      url: "http://localhost:4000/api/carts/" + this.props.cart_id + "/products",
      data: {product: this.props.product.id},
      dataType: 'json',
      cache: false,
      success: data => {
        console.log(data)
      }
    })
  }
  render() {
    return (
      <div></div>
    )
  }
}

//       <p className="product-ops"><a href="#" onClick={this.deleteProduct.bind(this)} >Delete</a></p>