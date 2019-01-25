import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

ReactDOM.render(
    <Router>
    <Route 
        path="/" 
        render={props => 
        <App {...props} />} 
    />
</Router>, 
  document.getElementById('root'),
);
