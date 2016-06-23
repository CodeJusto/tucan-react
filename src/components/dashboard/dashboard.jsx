import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cartbox from './carts/cartbox.jsx'
import AddCart from './carts/addcart.jsx'
import $, { ajax } from 'jquery';
import { Link } from 'react-router';

require('expose?$!expose?jQuery!jquery'); //Required by Materialize
require('../../lib/js-cookie.js');

export default class Dashboard extends Component {

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
      $('.modal-btn').click(function(e){
      e.preventDefault();
      console.log('click');
      var id = "#" + $(this).data('modal');
      $(id).addClass('open').fadeIn();
      $('#materialize-lean-overlay').addClass('open').fadeIn();
    });

    $('.modal-close').click(function(e){
      e.preventDefault();
      $('.modal').fadeOut(600, function(){$(this).removeClass('open')});
      $('#materialize-lean-overlay').fadeOut(800, function(){$(this).removeClass('open')});
    });
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
            <h1>Ahoy, {this.state.data.user.name}!</h1>

          </div>
        </div>

        <div className="container">
          <Cartbox carts={this.state.data} />
        </div>
        <div>
          <a href="#" className="btn tooltipped modal-btn btn-floating btn-large waves-effect waves-light pink" id="new-cart-btn" data-tooltip="Add a cart" data-position="top" data-modal="add-cart-modal"><i className="material-icons">add</i></a>  
          <AddCart user_id={this.props.user_id} />
        </div> 
      </div>  
    )
  }
}