import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cartbox from './carts/cartbox.jsx'
import AddCart from './carts/addcart.jsx'
import $, { ajax } from 'jquery';
import { Link } from 'react-router';

require('expose?$!expose?jQuery!jquery'); //Required by Materialize
require('../../lib/js-cookie.js');

export default class Dashboard extends Component {
  componentWillMount() {

    var greetings = [
        "Hello"
      , "Ciao"
      , "Welcome"
      , "Howdy"
      , "Greetings"
      , "Salut"
      , "Hallo"
      , "Hola"
      , "Hey"
      , "Ahoy"
    ];

    var greeting_id = Math.floor(Math.random() * greetings.length);
    this.greeting = greetings[greeting_id];

    $(window).scroll(function(){
      // current position
      var cur_pos = $(this).scrollTop();

      // scroll trigger menu
      var showOn = $('.user-greeting').outerHeight() - $('nav').outerHeight() - 2;
      if (cur_pos > showOn && !$("nav").hasClass('is-visible')) {
          $("nav").addClass('is-visible');
      } else {
        if (cur_pos < showOn && $("nav").hasClass('is-visible')) {
          $("nav").removeClass('is-visible');
        }
      }
    });

  }

  componentDidMount() {
    this.initialLoad = true;
    this.loadCartsFromServer();
    this._timer = setInterval(() => this.loadCartsFromServer(), this.props.interval);
      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 5, // Creates a dropdown of 15 years to control year
        container: 'body'  
      });
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  componentDidUpdate()
  {
    if(this.initialLoad)
    {
      Materialize.showStaggeredList('.cart-list');
      this.initialLoad = false;
    } else {
      $('.cart-list > li').css('opacity', 1);
    }
  }

  loadCartsFromServer() {
      // console.log(this.props)

    ajax({
      url: (this.props.url),
      dataType: 'json',
      data: {id: this.props.user_id},
      cache: false,
      success: data => {
        // console.log('Success', this.initialLoad);
        this.setState({data: data});
        
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
            <h1>{this.greeting}, {this.state.data.user.name}!</h1>
          </div>
        </div>

        <div className="container">
          <Cartbox carts={this.state.data} />
        </div>
        <div>
          <a href="#" className="btn-floating btn-large waves-effect waves-light pink modal-btn" id="new-cart-btn" data-modal="add-cart-modal"><i className="material-icons">add</i></a>  
          <AddCart user_id={this.props.user_id} />
        </div> 
      </div>  
    )
  }
}