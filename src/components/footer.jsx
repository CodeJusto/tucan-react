import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l4 s12">
              <Link to="/dashboard" className="logo">
                <img src="http://i.imgur.com/pk4uMob.png" /><h1>Tucan</h1>
              </Link>
            </div>
            <div className="col l3 offset-l2 s12">
              <h5 className="white-text">About Tucan</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">How it works</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">About</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Contact</a></li>
              </ul>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Help</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Terms of Use</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Privacy Policy</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2016 Tucan, Inc. All Rights Reserved
          </div>
        </div>
      </footer>
    )
  }
}