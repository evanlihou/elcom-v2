import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Common/Variables.sass'
import './App.sass';
import Menu from './Common/Menu'
import MainPage from './MainPage/';
import NowPage from './Blog/NowPage';
import PostsList from './Blog/PostsList/';
import Socials from './Socials/'
import RouteNotFound from './RouteNotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          {/* <Route path="/tutoring" component={Tutoring} /> */}
          <Route path="/now" element={<NowPage />} />
          <Route path="/blog" element={<PostsList />} />
          <Route path="/socials" element={<Socials />} />
          <Route exact path="*" element={<RouteNotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
