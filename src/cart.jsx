import React, { Component } from 'react';
import ProductBox from './components/products/productbox.jsx'
import ProgressBox from './components/progress/progressbox.jsx'
import ContributorsBox from './components/contributors/contributorsbox.jsx'
import PaymentsBox from './components/payments/paymentsbox.jsx'
import Navbar from './components/navbar/navbar.jsx'
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
        this.setState({data: data})
      },
      error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
    });
  }


  
  render() {
    if(!this.state) {
      return <div><h1>Loading....</h1></div>
    }

    return (
      <div className="Page">
        <div className="navbar">
          <Navbar />  
        </div>
        <div className="cart">
          <ProductBox products={this.state.data.cart.products} />
          <ProgressBox 
            contributors={this.state.data.contributors.length}
            remainingBalance={this.state.data.remaining_balance}
            totalCost={this.state.data.cart.total}
            progress={this.state.data.cart.progress} />
          <ContributorsBox contributors={this.state.data.contributors} organizer={this.state.data.organizer} /> 
          <PaymentsBox payments={this.state.data.cart.payments} />
        </div>
      </div>
      )
  }
}