import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { MyNavbar } from "./Navbar";

import './App.css';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Users = () => (
	<div className='App'>
		<h3>I am User!</h3>
	</div>
);
const Contact = () => (
	<div className='App'>
		<h3>I am contact!</h3>
	</div>
);

const routing = (
	<>
		<Router>
			<MyNavbar />
			<div>
				<Route path='/' exact component={App} />
				<Route path='/users' component={Users} />
				<Route path='/contact' component={Contact} />
			</div>
		</Router>
	</>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
