import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cartbox from './carts/cartbox.jsx'
import $, { ajax } from 'jquery';
import { Link } from 'react-router'


export default class Dashboard extends Component {
  componentDidMount() {
    this.loadCartsFromServer()
    setInterval(() => this.loadCartsFromServer(), this.props.interval);
  }

  loadCartsFromServer() {
      console.log(this.props)
    ajax({
      url: (this.props.url + "?user_id=" + this.props.user_id),
      dataType: 'json',
      cache: false,
      success: data => {
        this.setState({data: data});
        console.log(data);
      },
      error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
    });
  }

  render() {

    if(!this.state) {
      return <div><h1>Loading....</h1></div>
    }

    return (
      <div>
        <h1>Dashboard</h1>
        <Link to="/">Return Home</Link>
        <Cartbox 
          carts={this.state.data} user_id={this.props.user_id}
        />
      </div>
    )
  }
}