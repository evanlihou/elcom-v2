import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import Tutoring from './Tutoring';
import RouteNotFound from './RouteNotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/tutoring" component={Tutoring} />
          <Route exact path="*" component={RouteNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
