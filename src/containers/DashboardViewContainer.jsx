import React, { Component } from 'react';
import Layout from './Layout.jsx'
import Dashboard from '../components/dashboard/dashboard.jsx';
import cookie from 'react-cookie';

var DashboardViewContainer = React.createClass({
  getDefaultProps() {
    return {
      title: 'Dashboard'
    };
  },
  render: function() {
    if (this.props.location.query.token) {
      cookie.save('token', this.props.location.query.token);
    }
    var token = cookie.load('token');
    var url = "http://localhost:4000/api/carts/token/" + token
    return (
        <Dashboard url={url} user_id={token} interval={5000} />
    )
  }
});

module.exports = DashboardViewContainer;