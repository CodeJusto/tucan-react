import React, { Component } from 'react';
import $, { ajax } from 'jquery';

import ProductBox from './products/productbox.jsx'
import ProgressBox from './progress/progressbox.jsx'
import ContributorsBox from './contributors/contributorsbox.jsx'
import PaymentsBox from './payments/paymentsbox.jsx'
import PaymentForm from './paymentform.jsx'
import AddProductForm from './addproductform.jsx'
import Navbar from '../navbar/navbar.jsx'
import Register from '../register.jsx'



export default class Cart extends Component {

  componentDidMount() {
    this.loadCartFromServer()
    setInterval(() => this.loadCartFromServer(), this.props.interval);
  }

  loadCartFromServer() {
    console.log("cart")
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

    if(!this.state) {
      return <div><h1>Loading....</h1></div>
    }
    return (
      <div className="Page">
        <div className="navbar">
          <Navbar />  
        </div>
        <div className="cart">
          <ProductBox products={cart.state.data.cart.products} />
          <ProgressBox 
            created_at={cart.state.data.cart.created_at}
            expiry={cart.state.data.cart.expiry}
            contributors={cart.state.data.contributors.length}
            remainingBalance={cart.state.data.remaining_balance}
            totalCost={cart.state.data.cart.total}
            totalPayment={cart.state.data.cart.total_payment}
            progress={cart.state.data.cart.progress} />
          <ContributorsBox contributors={cart.state.data.contributors} organizer={cart.state.data.organizer} /> 
          <PaymentsBox payments={cart.state.data.cart.payments} />
          <PaymentForm user_id={cart.state.data.current_user.id} cart_id={cart.state.data.cart.id} min_pay={cart.state.data.custom_minimum_payment} />
          <AddProductForm cart_id={cart.state.data.cart.id} />
        </div>
      </div>
    ) 
  }
}