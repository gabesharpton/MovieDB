/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import MoviesList from './MoviesList'
import MovieDetail from './MovieDetail'
require('dotenv').config()


const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
      <Link to="/" >
        <h1>| MovieDB |</h1>
        
      </Link>


      </header>
           <Switch>
             <Route exact path="/" component={MoviesList} />
             <Route path="/:id" component={MovieDetail} />
           </Switch>
          
    </div>
    </Router>

)


export default App;


