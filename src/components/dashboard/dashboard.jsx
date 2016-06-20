import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cartbox from './carts/cartbox.jsx'
import $, { ajax } from 'jquery';


export default class Dashboard extends Component {

  componentDidMount() {
    this.loadCartsFromServer()
    setInterval(() => this.loadCartsFromServer(), this.props.interval);
  }

  loadCartsFromServer() {
    ajax({
      url: this.props.url,
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
        <div className="row user-greeting">
          <div className="col s12 center-align toucan-bg">
            <h1>Ahoy, Username!</h1>
          </div>
        </div>

        <div className="container">
          <Cartbox carts={this.state.data} />
        </div>   
      </div>   
    )
  }
}