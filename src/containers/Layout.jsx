import React from 'react'
import Navbar from '../components/navbar/navbar.jsx'
import Footer from '../components/footer.jsx'
import FacebookLogin, { responseFacebook } from 'react-facebook-login';

var ExecutionEnvironment = require('exenv');

var Layout = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  
  render() {
    return (
      <div>
        <div className="">
          <a href="http://localhost:4000/auth/facebook">Log in through Facebook</a>
          <Navbar />
                 <FacebookLogin
            appId="587441061429202"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook} />
        <a href="http://localhost:4000/auth/facebook">Log in through Facebook</a>
          {this.props.children}
        </div>
        <Footer />
        <div className="lean-overlay" id="materialize-lean-overlay"></div>
      </div>
    );
  },
  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      document.title = "Tucan";
    }
  }
});

module.exports = Layout;