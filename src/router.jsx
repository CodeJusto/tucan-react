import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import HomeViewContainer from './containers/HomeViewContainer.jsx'
import CartViewContainer from './containers/CartViewContainer.jsx'
import DashboardViewContainer from './containers/DashboardViewContainer.jsx'
import Layout from './containers/Layout.jsx'

ReactDOM.render((
  <Layout>
  <Router history={browserHistory}>
    <Route path="/" >
      <Route path="cart/:id" component={CartViewContainer} />
      <Route path="/dashboard" component={DashboardViewContainer} />
    </Route>
  </Router>
  </Layout>
), document.getElementById('root'))