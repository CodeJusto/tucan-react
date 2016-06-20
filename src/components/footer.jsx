import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l4 s12">
              <h5 className="white-text">Logo goes here</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
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
          <a className="grey-text text-lighten-4 right" href="#!">Social Media Links</a>
          </div>
        </div>
      </footer>
    )
  }
}