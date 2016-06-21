import React from 'react';
import Component from 'react';

export default class ProductOps extends React.Component {
  render() {
    if (this.props.organizer) {
      return (
        <p className="product-ops"><a href="#">Edit</a> | <a href="#">Delete</a></p>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}