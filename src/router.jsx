import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import HomeViewContainer from './containers/HomeViewContainer.jsx'
import CartViewContainer from './containers/CartViewContainer.jsx'
import DashboardViewContainer from './containers/DashboardViewContainer.jsx'


ReactDOM.render(( 
  <Router history={browserHistory}>
    <Route path="/" component={HomeViewContainer} />
    <Route path="/cart" component={CartViewContainer} />
    <Route path="/cart/1" component={CartViewContainer} />
    <Route path="/dashboard" component={DashboardViewContainer} />
  </Router>
), document.getElementById('root'))