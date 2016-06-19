import React, { Component } from 'react';
import $ from 'jquery';

export default class Payments extends Component {
  render() {
    return (
      <div id={this.props.key}>
        <p><b>{this.props.payee}</b> paid ${this.props.amount} {this.props.date}</p>
      </div>

      )
  }
}
