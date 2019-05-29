import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Search from './components/Search';
import Nav from './components/Nav';
import CurrentWeather from './components/CurrentWeather';

function App() {
  return (
    <BrowserRouter>
      <Search />
      <Nav />
      <Switch>
        <Route exact path="/" component={CurrentWeather} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
