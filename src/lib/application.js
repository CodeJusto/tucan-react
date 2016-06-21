// var $ = window.jQuery = require('jquery');
// require('./materialize.min.js');

window.fbAsyncInit = function() {
  FB.init({
    appId      : '603654559803426',
    xfbml      : true,
    version    : 'v2.6'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

$(function(){

  // $('.modal-trigger').leanModal();
  $('.modal-btn').click(function(e){
    e.preventDefault();
    console.log('click');
    var id = "#" + $(this).data('modal');
    $(id).addClass('open').fadeIn();
    $('#materialize-lean-overlay').addClass('open').fadeIn();
  });

  $('.modal-close').click(function(e){
    e.preventDefault();
    $(this).parents('.modal').fadeOut(600, function(){$(this).removeClass('open')});
    $('#materialize-lean-overlay').fadeOut(800, function(){$(this).removeClass('open')});
  });

  $(document).on('keyup', function(e) {
    if (e.keyCode === 27) {   // ESC key
      $('.modal.open').fadeOut(600, function(){$(this).removeClass('open')});
      $('#materialize-lean-overlay').fadeOut(800, function(){$(this).removeClass('open')});
    }
  });


  $(".button-collapse").sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 5 // Creates a dropdown of 15 years to control year
  });

});

