import React, { Component } from 'react';
import $ from 'jquery';
import ContributorImage from './contributorimage.jsx'

export default class Contributors extends Component {
  render() {
    return (
      <div className="chip">
        <ContributorImage image={this.props.image} />
        <span>{this.props.username}</span>
      </div>
    )
  }
}