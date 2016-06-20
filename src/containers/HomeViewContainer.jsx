import React, { Component } from 'react';
import Register from '../components/register.jsx'


var HomeViewContainer = React.createClass({
  render: function() {
    return (
      <div>
      <h1>Toucan</h1>
      <h2>Split the cost of items online</h2>
      <Register />
      </div>
    );
  }
});
module.exports = HomeViewContainer;