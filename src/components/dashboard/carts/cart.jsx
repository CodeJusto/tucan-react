import React, { Component } from 'react';



export default class Cart extends Component {
  render() {
    const moment = require('moment');
    const now = moment().format("MMM Do, YYYY");
    const numeral = require('numeral');
    var divStyle = {
      // width: {numeral(props.cart.progress).divide(100).format('0%')}
      width: "70%"
    };
    return (

      <li className="col s12">
        <div className="cart-card row">
          <div className="cart-image col s12 m3">
            <a href="#">
              <img src="http://placehold.it/500/ffffff/eeeeee" />
            </a>
          </div>
          <div className="cart-content col s12 m9">
            <h3 className="cart-name">{this.props.cart.name}</h3>
            <div className="cart-organizer">{this.props.cart.organizer.name}</div>
            <div className="cart-total">formatted price</div>
            <div className="progress">
              <div className="determinate" style={divStyle} ></div>
            </div>
            <div className="cart-due">{moment(this.props.cart.expiry).endOf('minute').fromNow()}</div>
            <div className="view-btn right">
              <a href="#">View cart</a>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

            // <ProgressBar progress={this.props.cart.progress} />
