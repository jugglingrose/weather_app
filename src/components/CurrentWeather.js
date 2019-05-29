import React from 'react';

class CurrentWeather extends React.Component {
  constructor() {
    super();

    this.state={
      cur_weather: {},
      isLoaded: false,
    }
  }

  componentDidMount(){
    console.log('componentDidMount called');
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&&APPID=27aae5ebfd2aaddddcff5171637b34f3')
      .then( res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          cur_weather: json,
        })
      });
  }

  renderCode(code) {
    console.log('render code called');
    if(code >= 200 & code < 300){
      return('thunderstorm');
    }
    if(code >= 300 & code < 400) {
      return('drizzle');
    }
    if(code >= 500 && code < 600 ) {
      return('rain');
    }
    if(code === 800) {
      return('clear');
    }
    if(code > 800 && code < 900) {
      return('cloudy');
    }
  }

  render(){
    var { isLoaded, cur_weather } = this.state;
    var code = cur_weather.cod;

    if(isLoaded === false){
      return <div>Weather is Loading...</div>
    }

    else{
      return(
        <div>
          <div>City</div>
          <div>Current Time</div>
          <div>
            <h2>{Math.round(cur_weather.main.temp)}</h2>
            <h3>{this.renderCode(code)}</h3>
            <h4>High {Math.round(cur_weather.main.temp_max)} / Low {Math.round(cur_weather.main.temp_min)} </h4>
          </div>
        </div>
      )
    }  
  }
}; 

export default CurrentWeather;