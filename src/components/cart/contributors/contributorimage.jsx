import React, { Component } from 'react';
import $ from 'jquery';

export default class ContributorImage extends Component {
  render() {
    var img = this.props.image == null ? "http://placehold.it/150?text=%20" : this.props.image
    return (
      <img src={img} />
    )
  }
}