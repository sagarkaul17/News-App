import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
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
            <News key="general" pageSize={9} category="general"/>
          </Route>
          <Route key="business" exact path="/business">
            <News pageSize={9} category="business"/>
          </Route>
          <Route key="entertainment" exact path="/entertainment">
            <News pageSize={9} category="entertainment"/>
          </Route>
          <Route key="health" exact path="/health">
            <News pageSize={9} category="health"/>
          </Route>
          <Route key="science" exact path="/science">
            <News pageSize={9} category="science"/>
          </Route>
          <Route key="sports" exact path="/sports">
            <News pageSize={9} category="sports"/>
          </Route>
          <Route key="technology" exact path="/technology">
            <News pageSize={9} category="technology"/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

