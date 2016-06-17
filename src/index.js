import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require('./styles/main.less')


ReactDOM.render(<App url="http://localhost:4000/api/carts?id=7" />, document.getElementById('root'))
