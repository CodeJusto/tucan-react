import React from 'react'
import Footer from '../components/footer.jsx'
var ExecutionEnvironment = require('exenv');

var Layout = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  render() {
    return (
      <div>
        <div className="">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  },
  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      document.title = this.props.title;
    }
  }
});

module.exports = Layout;