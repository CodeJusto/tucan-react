import React from 'react';
import Component from 'react';

export default class FacebookModal extends React.Component {
  render() {
    return (
      <iframe src="http://www.facebook.com/dialog/send?app_id=603654559803426&amp;link=http://www.nytimes.com/interactive/2015/04/15/travel/europe-favorite-streets.html
  &amp;redirect_uri=https://www.domain.com/"></iframe>
    )
  }
}