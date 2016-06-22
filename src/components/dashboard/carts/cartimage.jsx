import React, { Component } from 'react';
import { Link } from 'react-router'

export default class CartImage extends Component {
  render() {

    if (this.props.image.length > 0) {
      return (
        <div className="cart-image col s12 m3">
          <Link to={this.props.url}>
            <img src={this.props.image[0]} />
          </Link>
        </div>
      )
    } else {
      return (
        <div className="cart-image col s12 m3">
          <a href="#">
          </a>
          <Link to={this.props.url}>
            <img src="/src/images/toucan.png" />
          </Link>
        </div>
      )
    }
    
  }
}