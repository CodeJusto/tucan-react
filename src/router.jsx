import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'
import HomeViewContainer from './containers/HomeViewContainer.jsx'
import CartViewContainer from './containers/CartViewContainer.jsx'
import DashboardViewContainer from './containers/DashboardViewContainer.jsx'


ReactDOM.render(( 
  <Router history={hashHistory}>
    <Route path="/" component={HomeViewContainer} />
    <Route path="/cart" component={CartViewContainer} />
    <Route path="/dashboard" component={DashboardViewContainer} />
  </Router>
), document.getElementById('root'))