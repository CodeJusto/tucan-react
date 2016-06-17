import React from 'react';
import Component from 'react';
import $ from 'jquery';

export default class Cart extends React.Component {
  // getInitialState() {
  //   return {data: []};
  // }
  componentWillMount() {
    this.state = {data: []}
    this.loadCartFromServer()
    setInterval(this.loadCartFromServer, this.props.interval);
  }

  loadCartFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    })
  }


  
  render() {
    console.log(this.state.data)
    return (
      <div className="cart">
        "Hello!"
      </div>
      )
  }
}