import React, { Component } from 'react';


export default class UserCart extends Component {

  render() {

    return (
      <div id={this.props.key}>
        <p><strong>{this.props.cartName}</strong></p>
      </div>
      )
  }
}