import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Search from './components/Search';
import Nav from './components/Nav';
import CurrentWeather from './components/CurrentWeather';

class App extends React.Component {
  constructor() {
    super();
    this.renderCode = this.renderCode.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);

    this.state={
      weatherDescription: '',
      weatherIcon: '',
      city: '',
    }
  }

  handleSearchInput(event) {
    console.log('handleSearch called inside App.js');
    console.log(event.target.value);
    this.setState({
      city: event.target.value,
    })
  }

  handleSearchSubmit(event) {
    console.log('handle search submit');
    event.preventDefault();
  }

  renderCode(code) {
    console.log('render code called inside App.js');
    if(code >= 200 & code < 300){
      console.log("code 200s");
      this.setState({
        weatherDescription: 'thunderstorm',
        weatherIcon: '11d',
      })
    }
    if(code >= 300 & code < 400) {
      this.setState({
        weatherDescription: 'drizzle',
        weatherIcon: '10d',
      })
    }
    if(code >= 500 && code < 600 ) {
      this.setState({
        weatherDescription: 'rain',
        weatherIcon: '10d',
      })
    }
    if(code === 800) {
      this.setState({
        weatherDescription: 'clear',
        weatherIcon: '01d',
      })
    }
    if(code > 800 && code < 900) {
      this.setState({
        weatherDescription: 'cloudy',
        weatherIcon: '03d',
      })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Search handleSearchInput={this.handleSearchInput} handleSearchSubmit={this.handleSearchSubmit} city={this.state.city} />
        <Nav />
        <Switch>
        <Route exact path="/" render={ (props) => (<CurrentWeather {...props} renderCode={this.renderCode} weatherDescription={this.state.weatherDescription} weatherIcon={this.state.weatherIcon} /> )} />
        </Switch>
  
      </BrowserRouter>
    );
  }
}

export default App;
