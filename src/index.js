import React from 'react';
import ReactDOM from 'react-dom';

// styles
import 'bootstrap/dist/css/bootstrap.css' // añadimos bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css' // añadimos bootstrap icons
//! Our styles should go after bootstrap to override them when needed
import './index.css';

import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
