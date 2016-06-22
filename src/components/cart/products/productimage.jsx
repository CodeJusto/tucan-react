import React from 'react';
import Component from 'react';

export default class ProductImage extends React.Component {
  render() {
    if (this.props.product.image) {
      return (
        <a target="_blank" href={this.props.product.url}>
          <img src={this.props.product.image} alt="" className="circle" />
        </a>
      )
    } else {
      return (
        <a target="_blank" href={this.props.product.url}>
          <i className="material-icons circle green">insert_chart</i>
        </a>
      )
    }
  }
}