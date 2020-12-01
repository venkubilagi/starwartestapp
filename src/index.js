import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Redirect
} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './Login';
import AppGuard from './AppGuard';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Router>
    	<div>
         <Route path = "/login" component = {Login} />
         <Route path = "/home" component = {AppGuard(App)} />
         <Route exact path = "/" component = {Login} />
       	</div>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
