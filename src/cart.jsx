import React, { Component } from 'react';
import ProductBox from './components/products/productbox.jsx'
import ProgressBox from './components/progress/progressbox.jsx'
import ContributorsBox from './components/contributors/contributorsbox.jsx'
import PaymentsBox from './components/payments/paymentsbox.jsx'
import AddProductForm from './components/addproductform.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Register from './components/register.jsx'
import PaymentForm from './components/paymentform.jsx'

import $, { ajax } from 'jquery';

// (function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})({jQuery: $});



export default class Cart extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { data: { products: [] }, otherData: {contributors: []} };
  // }

  componentDidMount() {
    this.loadCartFromServer()
    setInterval(() => this.loadCartFromServer(), this.props.interval);

    // $(window).on('resize', () => console.log('Raw resize'))
    // $(window).on('resize', $.debounce(100, () => console.log('Debounced resize')))
  }

  // componentWillUnmount() {
  //   if(this._timer) {
  //     clearInterval(this._timer);
  //   }
  // }

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
    if(!this.state) {
      return <div><h1>Loading....</h1></div>
    }

    var cookie = function getCookie() {
      var re = new RegExp('user_name' + "=([^;]+)");
      var value = re.exec(document.cookie);
      return ((value != null) ? ("You are now signed in as " + unescape(value[1])).replace('+', ' ') : false)

    }

    function loginCheck(cart) {
      if (cookie()) {
      return (
        <div className="Page">
          <div className="navbar">
            <Navbar />  
          </div>
          <div className="cart">
            <ProductBox products={cart.state.data.cart.products} />
            <ProgressBox 
              contributors={cart.state.data.contributors.length}
              remainingBalance={cart.state.data.remaining_balance}
              totalCost={cart.state.data.cart.total}
              progress={cart.state.data.cart.progress} />
            <ContributorsBox contributors={cart.state.data.contributors} organizer={cart.state.data.organizer} /> 
            <PaymentsBox payments={cart.state.data.cart.payments} />
            <PaymentForm user_id={cart.state.data.current_user.id} cart_id={cart.state.data.cart.id} min_pay={cart.state.data.custom_minimum_payment} />
            <AddProductForm cart_id={cart.state.data.cart.id} />
          </div>
        </div>
      ) 
      } else {
        return (
          <Register />
          )
      }


    } 
        const cart = this

    return (
      <div>
        {loginCheck(cart)}
      </div>
      )
  
  }
}