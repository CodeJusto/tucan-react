import React, { Component } from 'react';
import $ from 'jquery';

export default class Contributors extends Component {
  render() {
    return (
      <div className="chip">
        <img src="http://placehold.it/150?text=%20" />
        <span>{this.props.username}</span>
      </div>
    )
  }
}