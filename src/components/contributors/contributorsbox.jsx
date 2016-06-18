import React, { Component } from 'react';
import Contributors from './contributors.jsx';
import $ from 'jquery';

export default class ContributorsBox extends Component {
  render() {
    const contributorBundle = this.props.contributors.map(contributor => <Contributors key={contributor.id} username={contributor.name} />);
    const organizer = this.props.organizer[0].name
    return (
      <div>
      <div>{organizer}: Organizer</div>
      {contributorBundle}
      </div>
      )
  }
}
