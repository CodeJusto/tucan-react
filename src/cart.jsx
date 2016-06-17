import React, { Component } from 'react';
// import Component from 'react';
import ProductBox from './components/products/productbox.jsx'
import $ from 'jquery';


export default class Cart extends React.Component {

  constructor(props) {
    super(props)
    this.state = {data: {products: []}}
  }

  componentDidMount() {
    this.loadCartFromServer()
    setInterval(() => this.loadCartFromServer(), this.props.interval);
  }

  loadCartFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: data => this.setState({data: data.cart}),
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
        "Hello!"
      </div>
      )
  }
}