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

// (function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})({jQuery: $});



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