import React, { Component } from 'react';
import ProductBox from './components/products/productbox.jsx'
import ProgressBox from './components/progress/progressbox.jsx'
import ContributorsBox from './components/contributors/contributorsbox.jsx'
import PaymentsBox from './components/payments/paymentsbox.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Register from './components/register.jsx'
import UserCart from './components/index/usercart.jsx'
import $, { ajax } from 'jquery';

// (function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})({jQuery: $});



export default class Cart extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { data: { products: [] }, otherData: {contributors: []} };
  // }

  pageDeterminator() {
    if (this.state === null) {
      console.log('waiting')
    } else if (this.state.dashboard === true) {
      console.log("State is dashboard")
        this.loadUserInfo()   
    } else {
      console.log("State is cart")
        this.loadCartFromServer()
    }
  }

  componentDidMount() {
    this.loadCartFromServer() 
    this.loadUserInfo()
     setInterval(() => this.pageDeterminator(), this.props.interval);
    // $(window).on('resize', () => console.log('Raw resize'))
    // $(window).on('resize', $.debounce(100, () => console.log('Debounced resize')))
  }

  // componentWillUnmount() {
  //   if(this._timer) {
  //     clearInterval(this._timer);
  //   }
  // }

  loadUserInfo() {
    ajax({
      url: "http://localhost:4000/api/carts",
      dataType: 'json',
      cache: false,
      success: data => {
        console.log(data)
        this.setState({userData: data})
      },
      error: (xhr, status, err) => console.log(this.props.url, status, err.toString())
    });
  }

  loadCartFromServer() {
    ajax({
      url: this.props.cartUrl,
      dataType: 'json',
      cache: false,
      success: data => {
        this.setState({data: data})
      },
      error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
    });
  }
  
  render() {
    const cart = this;
    if(!this.state) {
      return <div><h1>Loading....</h1></div>
    } //if statemnent closed

    var cookie = function getCookie() {
      var re = new RegExp('user_name' + "=([^;]+)");
      var value = re.exec(document.cookie);
      return ((value != null) ? ("You are now signed in as " + unescape(value[1])).replace('+', ' ') : false)
      
    } //cookie closed

    var addDashboard = function addDashboard() {
      console.log("In the parent!")
      cart.setState({dashboard: true})
      // unmount cart
      // mount dashboard
      console.log(cart.state)
    } // addDashboard

    var removeDashboard = function removeDashboard() {
      console.log("Removing dashboard")
      // unmount dashboard
      // mount cart
      cart.setState({dashboard: false})
    } //remove dashboard

    function cartList(cart) {
      console.log(cart.state)
      const cartData = cart.state.userData.user.carts.map(cart => <UserCart key={cart.id} cartName={cart.name}/> )
      return (
          <div>{cartData}</div>
      )
    } // cartlist closed

    function loginCheck(cart) {
      if (cookie()) {
        if (cart.state.dashboard === true) {
          return(
            <div className="dashboard">
              <h1>"I am a dashboard!"</h1>
              <div className="CartList">
                {cartList(cart)}
              </div>
              <span onClick={removeDashboard}>Return to last cart</span>
            </div>
            ) 
        } else {
          return (
            <div className="Page">
              <div className="navbar">
                <Navbar dashboard={addDashboard.bind(this)}/>  
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
              </div>
            </div>
          ) 
        }; // inner else statement
      } else {
        return (
          <Register />
          )
      } // else statement
    } //logincheck closed 

    return (
      <div>
        {loginCheck(cart)}
      </div>
      ) 
      } //render closed
} // class closed

