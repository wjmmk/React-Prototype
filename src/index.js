import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import Home from './Components/home/Home';
import Us from './Components/us/Us';
import Services from './Components/services/Services';
import Contact from './Components/contact/Contact';



ReactDOM.render(
  <Router>
	    <div>
	    	<Switch>
 
		        {/* Páginas */}
		        <Route exact path='/' component={Home} />
		        <Route path='/nosotros' component={Us} />
		        <Route path='/servicios' component={Services} /> 
		        <Route path='/contacto' component={Contact} /> 
 
	      	</Switch>
	    </div>
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();