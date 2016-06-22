import React, { Component } from 'react';
import Contributors from './contributors.jsx';
import ContributorImage from './contributorimage.jsx'

import $ from 'jquery';

export default class ContributorsBox extends Component {
  render() {
    const contributorBundle = this.props.contributors.map(contributor => <Contributors key={contributor.id} username={contributor.name} image={contributor.image} />);
    const organizer = this.props.organizer
    return (
      <div id="contributors" className="col s12">
        <div className="chip">
          <ContributorImage image={organizer.image} />
          <span>{organizer.name}</span>
        </div>
        {contributorBundle}
      </div>
    )
  }
}
