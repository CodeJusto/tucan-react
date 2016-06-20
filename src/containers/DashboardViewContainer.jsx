import React, { Component } from 'react';

import Dashboard from '../components/dashboard/dashboard.jsx';


var DashboardViewContainer = React.createClass({
  render: function() {
    return (
      <Dashboard url='http://localhost:4000/api/carts/' interval={5000} />
    )
  }
});

module.exports = DashboardViewContainer;