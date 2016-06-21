import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
require('moment');
require('./styles/application.scss');
require('expose?$!expose?jQuery!jquery');
require("./lib/materialize.min.js")
require('./lib/application.js')
import './router.jsx'