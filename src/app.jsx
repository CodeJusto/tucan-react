import React, { Component } from 'react';
import Cart from './cart.jsx'
// import Dashboard from './dashboard.jsx'

export default class App extends Component {
  render() {
    const pageDisplay = function display() {
      debugger
      if (this.state.mode === "cart") {
        console.log("CART")
      } else if  (this.state.mode === "dashboard") {
        console.log("DASH")
      } else {
        console.log(this.state.mode)
      }
    }
    return (  
      <div>
        {pageDisplay(this)}
      </div>
      )
  }
}