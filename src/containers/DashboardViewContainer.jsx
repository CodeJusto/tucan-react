import React, { Component } from 'react';

import Dashboard from '../components/dashboard/dashboard.jsx';


var DashboardViewContainer = React.createClass({
  render: function() {
    console.log(this.props.location.query.token)
    return (
      <Dashboard url='http://localhost:4000/api/carts/' user_id={this.props.location.query.token} interval={5000} />
    )
  }
});

module.exports = DashboardViewContainer;