import React, { Component } from 'react';

export default class CartImage extends Component {
  render() {
    // const numeral = require('numeral');
    // var divStyle = {
    //   width: numeral(this.props.progress).divide(100).format('0%')
    // };

    if (this.props.image.length > 0) {
      return (
        <div className="cart-image col s12 m3">
          <a href="#">
            <img src={this.props.image[0]} />
          </a>
        </div>
      )
    } else {
      return (
        <div className="cart-image col s12 m3">
          <a href="#">
            <img src="http://placehold.it/500/ffffff/eeeeee" />
          </a>
        </div>
      )
    }
    
  }
}