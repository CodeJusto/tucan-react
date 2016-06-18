import React, { Component } from 'react';
import ProductBox from './components/products/productbox.jsx'
import ProgressBox from './components/progress/progressbox.jsx'
import $, { ajax } from 'jquery';

// (function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})({jQuery: $});



export default class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = { data: { products: [] }, otherData: {contributors: []} };
  }

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
      success: data => this.setState({data: data.cart, otherData: data}),
      error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
    });
  }


  
  render() {
    if(!this.state) {
      return <div><h1>Loading....</h1></div>
    }

    return (
      <div className="cart">
        <ProductBox data={this.state.data.products} />
        <ProgressBox data={this.state.data} otherData={this.state.otherData} />
      </div>
      )
  }
}