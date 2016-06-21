import React, { Component } from 'react';
import Contributors from './contributors.jsx';
import $ from 'jquery';

export default class ContributorsBox extends Component {
  render() {
    const contributorBundle = this.props.contributors.map(contributor => <Contributors key={contributor.id} username={contributor.name} />);
    const organizer = this.props.organizer
    return (
      <div id="contributors" className="col s12">
        <div className="chip">
          <img src="http://placehold.it/150?text=%20" />
          <span>{organizer.name}</span>
        </div>
        {contributorBundle}
        <a href="#invite-modal" className="modal-trigger">Invites your friends</a>
      </div>
    )
  }
}
