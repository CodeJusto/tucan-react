import React, { Component } from 'react';
import $ from 'jquery';

export default class Payments extends Component {
  render() {
    return (
      <div id={this.props.key}>
        <p>{this.props.payee} has paid ${this.props.amount} on {this.props.date}</p>
      </div>

      )
  }
}
