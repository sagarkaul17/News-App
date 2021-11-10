import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <News pageSize={9}/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

