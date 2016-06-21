import React, { Component } from 'react';
import $, { ajax } from 'jquery';

export default class InvitaionsBox extends Component {
  emailHandler = (e) => {
    this.setState({email: e.target.value});
    console.log(this.state)
    console.log(this.props.cart_id)
  }

  emailSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state)
      ajax({
        url: "http://localhost:4000/carts/" + this.props.cart_id + "/invite", 
        type: 'POST',
        dataType: 'json',
        data: {id: this.props.user_id,
               email: this.state.email,
               cart_id: this.props.cart_id},
        cache: false
      }).done((response) => {
        console.log(response.message)
        $('.emailField').val("");
      });
  }
  

  render() {
    return (
      <div className="InvitationsBox">
        <div className="modal-content">
          <h4>Invite your friends!</h4>
          <form onSubmit={this.emailSubmit}>
            <input className="emailField" type="text" onChange={this.emailHandler}/>
            <input type="Submit" />
          </form>
        </div>
      </div>
      )
  }


}