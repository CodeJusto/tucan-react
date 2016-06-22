import React from 'react'
import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'

var ExecutionEnvironment = require('exenv');

var Layout = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    page: React.PropTypes.string
  },
  
  render() {
    return (
      <div>
        <div className={this.props.children.props.page}>
          <Navbar />
          {this.props.children}
        </div>
        <Footer />
        <div className="lean-overlay" id="materialize-lean-overlay"></div>
      </div>
    );
  },
  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      document.title = this.props.children.props.title;
    }
  }
});

module.exports = Layout;