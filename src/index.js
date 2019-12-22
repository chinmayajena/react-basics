import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const Users = () => <h3>I am User!</h3>;
const Contact = () => <h3>I am contact!</h3>

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
