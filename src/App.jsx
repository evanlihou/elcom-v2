import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Menu from './Common/Menu'
import MainPage from './MainPage/';
// Tutoring removed from site as I do not currently tutor
// import Tutoring from './Tutoring/';
import PostsList from './Blog/PostsList/';
import Socials from './Socials/'
import RouteNotFound from './RouteNotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path="/" component={MainPage} />
          {/* <Route path="/tutoring" component={Tutoring} /> */}
          <Route path="/socials" component={Socials} />
          <Route exact path="*" component={RouteNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
