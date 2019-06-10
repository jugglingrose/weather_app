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
    this.fetchCurrentWeather = this.fetchCurrentWeather.bind(this);
    this.handleErrors = this.handleErrors.bind(this);

    this.state={
      weatherDescription: '',
      weatherIcon: '',
      backgroundImg: 'index',
      city: '',
      isLoaded: false,
      cur_weather: '',
      error: null,
    }
  }

  handleErrors(res) {
    console.log('handle errors called');
    if(!res.ok){
      //this.setState({error: res.statusText})
      alert("please enter a valid city name");
    }
    return res;
  }

  fetchCurrentWeather(url) {
    console.log('fetch weather called');
    console.log(url);
    fetch(url)
      .then( this.handleErrors )
      .then( res => res.json())
      .then(json => {
        this.renderCode(json.weather[0].id);
        this.setState({
          isLoaded: true,
          cur_weather: json,
          weatherDescription: json.weather[0].description,
        })   
      })
      .catch(error => console.log(error));
  }

  handleSearchInput(event) {
    this.setState({
      city: event.target.value,
    })
  }

  handleSearchSubmit(event) {
    const {city} = this.state;
    console.log('handle search submit');
    event.preventDefault();
    var currentWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&&APPID=27aae5ebfd2aaddddcff5171637b34f3';
    this.fetchCurrentWeather(currentWeatherUrl);
  }

  renderCode(code) {
    console.log('render code called inside App.js');
    console.log(code);
    if(code >= 200 & code < 300){
      console.log("code 200s");
    }
    if(code >= 300 && code < 600 ) {
      this.setState({
        backgroundImg: 'rain_bg',
        weatherIcon: 'rain_cloud',
      })
    }
    if(code === 800) {
      console.log("inside 800");
      this.setState({
        backgroundImg: 'clear_sky_bg',
        weatherIcon: 'rainbow',
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

    var bg = require(`./images/${this.state.backgroundImg}.png`);

    return (
      <div>

      
      <div className="backgroundImg" style = {{ backgroundImage: "url( " + bg + " )" }}>
      <BrowserRouter>
        <Search handleSearchInput={this.handleSearchInput} handleSearchSubmit={this.handleSearchSubmit} city={this.state.city} />
        <Switch>
          <Route exact path="/" render={ (props) => (<CurrentWeather {...props} city={this.state.city} isLoaded={this.state.isLoaded} 
          cur_weather={this.state.cur_weather} renderCode={this.renderCode} weatherDescription={this.state.weatherDescription} 
          weatherIcon={this.state.weatherIcon} backgroundImg={this.state.backgroundImg} error={this.state.error} /> )} />
        </Switch>
  
      </BrowserRouter>
      </div>
      </div>
    );
  }
}

export default App;


