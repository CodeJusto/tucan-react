import React, { Component } from 'react';
import $ from 'jquery';

export default class ContributorImage extends Component {
  render() {
    var img = this.props.image == null ? "http://i.imgur.com/I40xFZ2.png" : this.props.image
    return (
      <img src={img} />
    )
  }
}