import React, { Component } from 'react';
// import Nav from './components/nav';
// import Contact from './components/contact';
import $ from 'jquery';


// getcontacts is actually calling a getcontacts FUNCTION inside fake_api.js that is setting the contacts
// variable to a hash of all the contacts. Both contacts and filteredcontacts are initially set to all
// contacts.
export default class App extends Component {

  // loadCommentsFromServer() {
  //   // AJAX
  //     $.ajax({
  //       url: this.props.url,
  //       dataType: 'json',
  //       cache: false,
  //       success: function(contacts) {
  //         this.setState({contacts: contacts})
  //       }.bind(this),
  //       error: function(xhr, status, err) {
  //         console.error(this.props.url, status, err.toString());
  //       }.bind(this)
  //     })
  // }

  // componentWillMount() {
  //   this.loadCommentsFromServer()    
  // }



  // Once it has received the right contact object (hash?), it will render each contact within contactComponents.
  // Note that we are connecting to the Contact child. 
  render() {
    // if(!this.state) {
    //   return <div><h1>Loading....</h1></div>
    // }
    
    // var contactComponents = this.state.contacts.carts.map(function(contact) {
    //   return <Contact key={contact.id}
    //                   name={contact.progress} />
    // })
    return (
      // 
    );
  }
}
