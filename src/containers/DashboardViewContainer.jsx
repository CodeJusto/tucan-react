import React, { Component } from 'react';
import Layout from './Layout.jsx'
import Dashboard from '../components/dashboard/dashboard.jsx';

var DashboardViewContainer = React.createClass({
  getDefaultProps() {
    return {
      title: 'Dashboard'
    };
  },
  render: function() {
    console.log(this.props.location.query.token)
    return (
        <Dashboard url='http://localhost:4000/api/carts/' user_id={this.props.location.query.token} interval={5000} />
    )
  }
});

module.exports = DashboardViewContainer;