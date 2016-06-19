import React, { Component } from 'react';
import $ from 'jquery';

export default class Contributors extends Component {
  render() {
    return (
        <div id={this.props.key}>
          {this.props.username}: Contributor
        </div>
      )
  }
}