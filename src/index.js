import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './cart.jsx';
import $ from 'jquery';
require('moment');
require('./styles/main.less')



ReactDOM.render(<Cart url="http://localhost:4000/api/carts/1" interval={5000} />, document.getElementById('root'))
